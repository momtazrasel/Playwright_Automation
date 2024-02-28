const { test, expect } = require('@playwright/test');
const { SignUpPage } = require('../pages/SignUpPage');

test.describe('Log In page', () => {
    test.beforeEach(async ({ page }) => {
        const signUpPage = new SignUpPage(page);
        await signUpPage.goto();
      });

    test('Successfully Create an Account', async ({ page }) => {
        const signUpPage = new SignUpPage(page);
        await signUpPage.signUp();
    });
    
    test('Verify Sopify Account ', async ({ page }) => {
        const signUpPage = new SignUpPage(page);
        await signUpPage.sofipyAccountVerification();
    });

});
