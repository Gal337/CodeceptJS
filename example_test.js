Feature('example');

Scenario('Should load example.com website',  ({ I }) => {
  I.amOnPage("http://zero.webappsecurity.com/");
  I.see("Zero Bank");
});
