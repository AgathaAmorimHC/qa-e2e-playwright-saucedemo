import { test, expect } from '@playwright/test';

test.describe('Carrinho de compras', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
  });

  test('Adicionar produto ao carrinho', async ({ page }) => {
    // Clica no botão "Add to cart" do primeiro item
    await page.getByRole('button', { name: 'Add to cart' }).first().click();

    // Vai para o carrinho
    await page.locator('.shopping_cart_link').click();

    // Verifica se o produto foi adicionado
    const item = page.locator('.cart_item');
    await expect(item).toBeVisible();
  });
});
