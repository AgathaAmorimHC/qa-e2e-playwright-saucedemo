import { test, expect } from '@playwright/test';

test('Teste com falha proposital no título', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Automação Perfeita/); // título errado
});
