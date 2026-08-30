import fs from 'fs';
import https from 'https';
import http from 'http';
import path from 'path';

// Method 1: Using free Screenshot API (e.g. thum.io, screenshotone, api.screenshotmachine.com, or urlbox / html2canvas)
// Or Method 2: Fetching actual images from the site DOM / OG tags.

const sites = [
  { key: 'ueeindia', url: 'https://ueeindia.com/' },
  { key: 'mining', url: 'https://mining.skoriyatech.com/' },
  { key: 'skoriyatech', url: 'https://skoriyatech.com/' },
  { key: 'starstravels', url: 'https://stars-toursandtravels.com/' },
  { key: 'mythritravels', url: 'https://mythritoursandtravels.com/' }
];

async function captureScreenshots() {
  console.log('Fetching live site screenshots...');
  for (const site of sites) {
    // Screenshot API endpoint
    const screenshotUrl = `https://image.thum.io/get/width/1200/crop/800/noanimate/${site.url}`;
    const targetPath = path.join(process.cwd(), 'src', 'assets', `${site.key}_real.jpg`);

    console.log(`Downloading real screenshot for ${site.url}...`);
    try {
      await downloadFile(screenshotUrl, targetPath);
      console.log(`Successfully saved ${site.key}_real.jpg`);
    } catch (err) {
      console.error(`Failed for ${site.key}:`, err.message);
    }
  }
}

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
        file.close(resolve);
      });
    });
    request.on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

captureScreenshots();
