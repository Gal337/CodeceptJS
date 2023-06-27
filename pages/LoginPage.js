const { I } = inject();

module.exports = {
//First set locators
loginForm: "#login_form",
username: "#user_login",
password: "#user_password",
submitButton: ".btn-primary",
//Then create methods
submitLogin(username,password) {
  I.fillField(this.username, username);
  I.fillField(this.password, password);
  I.click(this.submitButton);
},
  
assertLoginFormIsVisibile() {
  I.seeElement(this.loginForm);
}
}
