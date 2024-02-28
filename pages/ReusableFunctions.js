const { expect } = require("@playwright/test");

class ReusableFunctions {

    async reusableFill(page, selector,text) {
      const element = await page.$(selector);
      await element.click();
      await element.fill(text);
    }
  
    async assertText(page, selector, expectedText) {
      const actualText = await page.$eval(selector, (element) => element.textContent);
      expect(actualText).toBe(expectedText); // Use your preferred assertion library and assertion method
    }
  }
  
  module.exports = ReusableFunctions
  