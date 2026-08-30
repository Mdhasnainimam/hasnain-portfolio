import fs from 'fs';
import https from 'https';
import http from 'http';
import path from 'path';

const targetUrl = 'https://universalwelfaretrust.com/';
const screenshotApi = `https://api.microlink.io/?url=${encodeURIComponent(targetUrl)}&screenshot=true&embed=screenshot.url`;

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const request = (url.startsWith('https') ? https : http).get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Status code ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          const stats = fs.statSync(dest);
          resolve(stats.size);
        });
      });
    });
    request.on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  const dest1 = path.join(process.cwd(), 'src', 'assets', 'universalwelfare.jpg');
  const dest2 = path.join(process.cwd(), 'public', 'assets', 'universalwelfare.jpg');
  
  if (!fs.existsSync(path.join(process.cwd(), 'public', 'assets'))) {
    fs.mkdirSync(path.join(process.cwd(), 'public', 'assets'), { recursive: true });
  }

  console.log('Downloading real screenshot for https://universalwelfaretrust.com/...');
  try {
    const size = await downloadFile(screenshotApi, dest1);
    fs.copyFileSync(dest1, dest2);
    console.log(`Successfully downloaded universalwelfare.jpg (${size} bytes)`);
  } catch (err) {
    console.error('Failed to download screenshot:', err.message);
  }
}

run();
