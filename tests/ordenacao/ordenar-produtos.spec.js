const { test, expect } = require('@playwright/test');
const users = require('../../fixtures/users.json');

test('Usuário pode ordenar produtos do menor para o maior preço', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', users.validUser.username);
  await page.fill('#password', users.validUser.password);
  await page.click('#login-button');

  await page.selectOption('[data-test="product_sort_container"]', 'lohi');

  const firstItem = await page.locator('.inventory_item_price').first();
  const price = await firstItem.textContent();

  expect(price).toBe('$7.99');
});
