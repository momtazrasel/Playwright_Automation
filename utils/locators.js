// utils/locators.js

module.exports = {
    //Locators using xpath
    SignUpLocators: {
      login: "//a[normalize-space()='Login']",
      userEmailInput: "(//input[@placeholder='Enter your email'])[1]",
      firstNameInput: "(//input[@placeholder='First Name'])[1]",
      lastNameInput: "(//input[@placeholder='Last Name'])[1]",
      companyNameInput: "(//input[@placeholder='Company Name'])[1]",
      storeURLInput: "(//input[@placeholder='Store URL (store.com)'])[1]",
      getStartedButton: "(//button[@type='submit'])[1]",
      loginButton: "//button[normalize-space()='Login']",
      passwordInput: "(//input[@placeholder='New Password'])[1]",
      nextButton: "//button[@type='submit']",
      shopifyStoreInput: "//input[@placeholder='store.myshopify.com']",
      connectButton: "(//div[@class='flex flex-col gap-1 w-[350px]']//button)[1]",
      accountAtertText: "(//p[normalize-space()='An account with this email already exists'])[1]", 
      skipButton: "(//div[@class='flex flex-col gap-1 w-[350px]']//button)[2]", 



      textAssertion: "//p[normalize-space()='An account with this email already exists']",
      forbidden: "(//h1[normalize-space()='403 Forbidden'])[1]",

      //Sign In 
      signInLink: "(//div[normalize-space()='Sign in'])[1]",
      email: "(//input[@placeholder='Email or Phone'])[1]",
      password: "(//input[@placeholder='Password'])[1]",
      signInBtn: "(//button[@class='sc-bYMpWt bNQzOD'])[1]",

    

    },
  };