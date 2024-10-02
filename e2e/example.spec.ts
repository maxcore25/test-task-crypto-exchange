import { test, expect } from '@playwright/test';

test.describe('Crypto Exchange', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('should have metadata', async ({ page }) => {
    await expect(page).toHaveTitle(/Test Task - Crypto Exchange/);
  });

  test('should have heading and form', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Crypto Exchange' })
    ).toBeVisible();

    await expect(page.getByRole('form')).toBeVisible();

    const inputs = await page.$$('input');
    expect(inputs.length).toBe(3);

    await expect(
      page.getByRole('button', { name: 'Exchange'.toUpperCase() })
    ).toBeVisible();
  });
});
