import fs from 'fs';
import https from 'https';
import http from 'http';
import path from 'path';

const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.ueeindia.hasnain';
const screenshotApi = `https://api.microlink.io/?url=${encodeURIComponent(playStoreUrl)}&screenshot=true&embed=screenshot.url`;

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
  const dest = path.join(process.cwd(), 'src', 'assets', 'app1.jpg');
  console.log('Downloading real Play Store app screenshot...');
  try {
    const size = await downloadFile(screenshotApi, dest);
    console.log(`Successfully downloaded Play Store screenshot (${size} bytes)`);
  } catch (err) {
    console.error('Failed to download Play Store screenshot:', err.message);
  }
}

run();
