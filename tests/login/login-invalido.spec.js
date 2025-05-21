import { test, expect } from '@playwright/test';

test.describe('Testes negativos de login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('Login com senha incorreta', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('senha_errada');
    await page.getByRole('button', { name: 'Login' }).click();

    const mensagemErro = page.locator('[data-test="error"]');
    await expect(mensagemErro).toBeVisible();
    await expect(mensagemErro).toContainText('Username and password do not match');
  });
});
