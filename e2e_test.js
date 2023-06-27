const LoginPage = require("./pages/LoginPage");

Feature('Zero Bank App - E2E Tests');

Before(({ I }) => {
  console.log("Before Hook");
  I.amOnPage("http://zero.webappsecurity.com/");
});

After(({ I }) => {
  console.log("After Hook");
});

Scenario('Login Test - Negative',  ({ I, LoginPage }) => {
  
  I.click("#signin_button");
  I.seeElement("#login_form");
  LoginPage.submitLogin("invalid username", "invalid password");
  LoginPage.assertLoginFormIsVisibile();
  I.seeElement(".alert-error");
});
