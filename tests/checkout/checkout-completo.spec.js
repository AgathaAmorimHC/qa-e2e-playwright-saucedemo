const { test, expect } = require('@playwright/test');
const users = require('../../fixtures/users.json');

test('Usuário consegue finalizar uma compra completa', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', users.validUser.username);
  await page.fill('#password', users.validUser.password);
  await page.click('#login-button');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');
  await page.click('[data-test="checkout"]');

  await page.fill('[data-test="firstName"]', 'Agatha');
  await page.fill('[data-test="lastName"]', 'QA');
  await page.fill('[data-test="postalCode"]', '12345');
  await page.click('[data-test="continue"]');

  await expect(page.locator('.summary_info')).toBeVisible();
  await page.click('[data-test="finish"]');

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
