import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Go to discover page
  await page.goto('/discover');
});

test.describe('Discover', () => {
  test('should allow me to search', async ({ page }) => {
    // use search bar
    await page.getByPlaceholder("Search here").click();
    // search for a podcast
    await page.getByPlaceholder("Search here").fill('.NET');
    await page.getByPlaceholder("Search here").press('Enter');
    // assert no results page isn't shown
    expect(page.locator('.main')).not.toContain('no results');
  });
});