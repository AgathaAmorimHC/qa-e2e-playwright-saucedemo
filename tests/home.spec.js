import { test, expect } from '@playwright/test';

test('Verifica se o site do Playwright tem o título correto', async ({ page }) => {
  // Acessa o site do Playwright
  await page.goto('https://playwright.dev/');

  // Verifica se o título da página contém a palavra "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});
