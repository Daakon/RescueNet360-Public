import { test, expect } from '@playwright/test';

test.describe('Pilot Access Application E2E Flow', () => {
  test('should navigate to pilot application form and submit successfully', async ({ page }) => {
    // Intercept and mock API submission
    await page.route('**/public/waitlist', async (route) => {
      const request = route.request();
      if (request.method() === 'POST') {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ message: 'Successfully subscribed', email: 'sarah@hopeshelter.org' }),
        });
      } else {
        await route.continue();
      }
    });

    // Visit Shelters & Rescues page
    await page.goto('/shelters-rescues');

    // Check heading
    await expect(page.locator('h1')).toContainText('The Connected System Built for Animal Shelters and Rescues');

    // Click navigation pill or scroll to form
    const applySection = page.locator('#apply');
    await expect(applySection).toBeVisible();

    // Fill out form fields
    await page.fill('input[id="orgName"]', 'Hope Municipal Animal Shelter');
    await page.fill('input[id="contactName"]', 'Director Sarah Connor');
    await page.fill('input[id="email"]', 'sarah@hopeshelter.org');
    await page.selectOption('select[id="orgType"]', 'shelter');
    await page.fill('textarea[id="challenge"]', 'Managing intake data across disparate spreadsheets and tracking foster pets.');

    // Submit form
    const submitBtn = page.locator('button[type="submit"]', { hasText: 'Apply to Be a Pilot Partner' });
    await submitBtn.click();

    // Verify success confirmation state
    await expect(page.locator('text=Application Received!')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=Thank you for applying to be a Founding Pilot Partner.')).toBeVisible();
  });
});
