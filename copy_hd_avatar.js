import fs from 'fs';
import path from 'path';

const source = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\79f14480-002f-420e-9cce-72b5afe8a53c\\avatar_hd_1788110847701.jpg';
const dest = path.join(process.cwd(), 'src', 'assets', 'avatar.jpg');

fs.copyFileSync(source, dest);
console.log('Successfully copied crystal clear HD avatar to src/assets/avatar.jpg!');
