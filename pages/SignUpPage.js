// SignUpPage.js
const { expect } = require('@playwright/test');
const locators = require('../utils/locators');
const testUserconfig = require('../utils/testuserConfig');
const reusableMethod = require('../pages/ReusableFunctions');

exports.SignUpPage = class SignUpPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.userEmailInputField = page.locator(locators.SignUpLocators.userEmailInput);
        this.userFirstNameInputField = page.locator(locators.SignUpLocators.firstNameInput);
        this.userLastNameInputField = page.locator(locators.SignUpLocators.lastNameInput);
        this.userCompanyNameInputField = page.locator(locators.SignUpLocators.companyNameInput);
        this.userStoreURLInputField = page.locator(locators.SignUpLocators.storeURLInput);
        this.passwordInputField = page.locator(locators.SignUpLocators.passwordInput);
        this.signUpButton = page.locator(locators.SignUpLocators.getStartedButton);
        this.nextButton = page.locator(locators.SignUpLocators.nextButton);
        this.storeSopifyField = page.locator(locators.SignUpLocators.shopifyStoreInput);
        this.connectBtn = page.locator(locators.SignUpLocators.connectButton);
        this.skipButton = page.locator(locators.SignUpLocators.skipButton);
        this.alertText = page.locator(locators.SignUpLocators.accountAtertText);
        this.forbiddenText = page.locator(locators.SignUpLocators.forbidden);

        this.duplicateAccoutn = page.locator(locators.SignUpLocators.textAssertion)

        this.userId = testUserconfig.userId;
        this.firstName = testUserconfig.firstName;
        this.lastName = testUserconfig.lastName;
        this.companyName = testUserconfig.companyName;
        this.storeUrl = testUserconfig.storeURL;
        this.password = testUserconfig.password;
        
    }

    async goto() {
        await this.page.goto('/account/signup/info');
    }

    async signUp() {
        await this.userEmailInputField.fill(this.userId);
        await this.userFirstNameInputField.fill(this.firstName);
        await this.userLastNameInputField.fill(this.lastName);
        await this.userCompanyNameInputField.fill(this.companyName);
        await this.userStoreURLInputField.fill(this.storeUrl);
        await this.signUpButton.click();
        await expect(this.duplicateAccoutn).toHaveText('An account with this email already exists')
        const errorMessageElement = await this.page.$("//p[normalize-space()='An account with this email already exists']");
        if (errorMessageElement) {
            
            const errorMessage = await errorMessageElement.textContent();
            if (errorMessage.includes('already exists')) {
              console.log('An account with this email already exists. Taking alternative steps...');
              
            } else {
              
              console.log('Error:', errorMessage);
            }
          } else {
            // No error message, continue with the next steps
            await this.passwordInputField.fill(this.password);
            await this.nextButton.click();
            await this.skipButton.click();
          }   

    }

    async shofipyAccountVerification(){
        await this.userEmailInputField.fill(this.userId);
        await this.userFirstNameInputField.fill(this.firstName);
        await this.userLastNameInputField.fill(this.lastName);
        await this.userCompanyNameInputField.fill(this.companyName);
        await this.userStoreURLInputField.fill(this.storeUrl);
        await this.signUpButton.click();
        const errorMessageElement = await this.page.$("//p[normalize-space()='An account with this email already exists']");
        if (errorMessageElement) {
            
            const errorMessage = await errorMessageElement.textContent();
            if (errorMessage.includes('already exists')) {
              console.log('An account with this email already exists. Taking alternative steps...');
              
            } else {
              
              console.log('Error:', errorMessage);
            }
          } else {
            // No error message, continue with the next steps
            await this.passwordInputField.fill(this.password);
            await this.nextButton.click();
            await this.storeSopifyField.fill(this.storeUrl);
            await this.connectBtn.click();
            await this.forbiddenText.click();
            await expect(this.forbiddenText).toHaveText('403 Forbidden')
            
          }
    }

};
