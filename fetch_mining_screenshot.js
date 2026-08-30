import fs from 'fs';
import https from 'https';
import http from 'http';
import path from 'path';

// Screenshot rendering service URLs for https://mining.skoriyatech.com/
const targetUrl = 'https://mining.skoriyatech.com/';
const providers = [
  `https://api.microlink.io/?url=${encodeURIComponent(targetUrl)}&screenshot=true&embed=screenshot.url`,
  `https://mini.s-shot.ru/1280x800/JPEG/1280/Z100/?${targetUrl}`,
  `https://image.thum.io/get/width/1280/crop/800/noanimate/auth/74026-portfolio/${targetUrl}`,
  `https://html2canvas.hertzen.com/`
];

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
          if (stats.size > 20000) {
            resolve(stats.size);
          } else {
            reject(new Error(`Downloaded file too small: ${stats.size} bytes`));
          }
        });
      });
    });
    request.on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function tryFetch() {
  const dest = path.join(process.cwd(), 'src', 'assets', 'mining_real.jpg');
  for (let i = 0; i < providers.length; i++) {
    console.log(`Trying provider ${i + 1}: ${providers[i]}`);
    try {
      const size = await downloadFile(providers[i], dest);
      console.log(`SUCCESS with provider ${i + 1}! File size: ${size} bytes`);
      return;
    } catch (err) {
      console.log(`Provider ${i + 1} failed: ${err.message}`);
    }
  }
}

tryFetch();
