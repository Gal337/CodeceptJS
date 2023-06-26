Feature('Zero Bank App - E2E Tests');

Before(({ I }) => {
  console.log("Before Hook");
  I.amOnPage("http://zero.webappsecurity.com/");
});

After(({ I }) => {
  console.log("After Hook");
});

Scenario('Login Test - Negative',  ({ I }) => {
  
  I.click("#signin_button");
  I.seeElement("#login_form");
  I.fillField("#user_login", "invalid username");
  I.fillField("#user_password", "invalid password");
  I.click(".btn-primary");
  I.seeElement(".alert-error");
});
