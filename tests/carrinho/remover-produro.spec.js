const { test, expect } = require('@playwright/test');
const users = require('../../fixtures/users.json');

test('Usuário consegue remover um produto do carrinho', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', users.validUser.username);
  await page.fill('#password', users.validUser.password);
  await page.click('#login-button');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');

  // Remover produto
  await page.click('[data-test="remove-sauce-labs-backpack"]');

  // Verificar que o carrinho está vazio
  const item = await page.locator('.cart_item');
  await expect(item).toHaveCount(0);
});
