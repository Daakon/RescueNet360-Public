const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // count

  let offset = 6 + count * 16;
  const entries = [];
  
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 0); // width
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(item.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    entries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)]);
}

async function run() {
  const svgPath = path.join(__dirname, '../public/images/icons/shield-logo.svg');
  const publicDir = path.join(__dirname, '../public');

  // Copy SVG to shield-favicon.svg as well
  fs.copyFileSync(svgPath, path.join(publicDir, 'favicon.svg'));
  fs.copyFileSync(svgPath, path.join(publicDir, 'shield-favicon.svg'));
  console.log('Updated public/favicon.svg and shield-favicon.svg');

  // 16x16, 32x32, 48x48 PNG buffers for favicon.ico
  const sizes = [16, 32, 48];
  const pngBuffers = [];
  for (const size of sizes) {
    const buf = await sharp(svgPath)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push({ size, buffer: buf });
  }

  const icoBuf = await createIco(pngBuffers);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuf);
  fs.writeFileSync(path.join(publicDir, 'shield-favicon.ico'), icoBuf);
  console.log('Updated public/favicon.ico and shield-favicon.ico');

  // favicon-32x32.png
  const fav32 = await sharp(svgPath)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), fav32);
  fs.writeFileSync(path.join(publicDir, 'shield-favicon-32x32.png'), fav32);
  console.log('Updated public/favicon-32x32.png and shield-favicon-32x32.png');

  // apple-touch-icon.png
  const appleTouch = await sharp(svgPath)
    .resize(140, 140, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .extend({
      top: 20, bottom: 20, left: 20, right: 20,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouch);
  fs.writeFileSync(path.join(publicDir, 'shield-apple-touch-icon.png'), appleTouch);
  console.log('Updated public/apple-touch-icon.png and shield-apple-touch-icon.png');

  // pwa-192x192.png
  const pwa192 = await sharp(svgPath)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), pwa192);
  console.log('Updated public/pwa-192x192.png');

  // pwa-512x512.png
  const pwa512 = await sharp(svgPath)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), pwa512);
  console.log('Updated public/pwa-512x512.png');
}

run().catch(console.error);
