Feature('example');

Scenario('Should load zero.webappsecurity.com website',  ({ I }) => {
  I.amOnPage("http://zero.webappsecurity.com/");
  I.see("Zero Bank");
  I.dontSee("Example");
  I.seeElement("div");
  I.dontSee("h1");
});
