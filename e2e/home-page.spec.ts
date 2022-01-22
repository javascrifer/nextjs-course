import { test, expect } from '@playwright/test';

test('Home page', async ({ page }) => {
  await page.goto('/');
  expect(await page.locator('h1').innerText()).toBe('Home page');
});
