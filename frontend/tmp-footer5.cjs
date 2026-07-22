const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  await page.goto('http://localhost:5180/', { waitUntil: 'networkidle' });
  const footer = await page.$('footer');
  await footer.screenshot({ path: 'C:\\Users\\daako\\AppData\\Local\\Temp\\claude\\c--Dev-RescueNet360-Public\\5385047c-54e2-4d6f-9440-173f05906f8b\\scratchpad\\shot-footer5.png' });
  const bg = await footer.evaluate((el) => getComputedStyle(el).backgroundColor);
  const wordmark = await page.$eval('footer a span', (el) => getComputedStyle(el).color);
  console.log('footer bg:', bg, '| wordmark base color:', wordmark);
  await browser.close();
})();
