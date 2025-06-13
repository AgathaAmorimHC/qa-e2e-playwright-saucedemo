const { test, expect } = require('@playwright/test');
const users = require('../../fixtures/users.json');

test('Usuário consegue fazer logout com sucesso', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', users.validUser.username);
  await page.fill('#password', users.validUser.password);
  await page.click('#login-button');

  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

  await expect(page.locator('#login-button')).toBeVisible();
});
