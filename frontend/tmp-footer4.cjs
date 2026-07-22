const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  await page.goto('http://localhost:5179/', { waitUntil: 'networkidle' }).catch(async () => {
    await page.goto('http://localhost:5178/', { waitUntil: 'networkidle' });
  });
  const footer = await page.$('footer');
  await footer.screenshot({ path: 'C:\\Users\\daako\\AppData\\Local\\Temp\\claude\\c--Dev-RescueNet360-Public\\5385047c-54e2-4d6f-9440-173f05906f8b\\scratchpad\\shot-footer4.png' });
  const rescueColor = await page.$eval('footer a span span', (el) => getComputedStyle(el).color);
  console.log('Rescue span color:', rescueColor);
  await browser.close();
})();
