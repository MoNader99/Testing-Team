const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser(require("../Driver").Driver).build();
var Selectors=require("../AppSelectors");
var title;
//var Msgs=require("../AppErrorMsgsRealSpot");
describe('PremiumPageTest', function(){
    this.timeout('1500000000');
    var Checkstring;
    it('should go to spotify.com and get its title',async function() {
        await driver.get("http://52.14.190.202:3000/");
        title= await driver.getCurrentUrl();
        await driver.sleep(5000);
        expect(title).to.equal('http://52.14.190.202:3000/');//testing that i reached the req page
    })
    it('should press on Premium button and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.Premiumbutton)).click();
        await driver.sleep(5000);
        title = await driver.getCurrentUrl();
        expect(title).to.equal('http://52.14.190.202:3000/premium');//testing that i reached the req page
    }) 




    it('should press on Get Premium button which is at the blue background and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.GetPremiumbutton)).click();
        await driver.sleep(5000);
        title = await driver.getCurrentUrl();
        expect(title).to.equal('http://52.14.190.202:3000/signup');//testing that i reached the req page
    }) 
 ///it should login successfully and get to the next page????????????????
 ///it should login unsuccessfully with unknown account then signing up to follow up????????????
 ///it should Signup successfully and get to the next page?????????????
 ///it should Signup unsuccessfully with unknown account ?????????

 
 ////////////////////////////////////////////////////////
    it('should press on Get Premium button which is at the end of the page and get the new page title',async function() {
        await driver.get("http://52.14.190.202:3000/premium");//back to premium page to continue testing///////
        await driver.findElement(By.xpath(Selectors.GetPremiumbuttonAtTheEndOfThePage)).click();
        await driver.sleep(5000);
        title = await driver.getCurrentUrl();
        expect(title).to.equal('http://52.14.190.202:3000/signup');//testing that i reached the req page
  }) 
///it should login successfully and get to the next page
 ///it should login unsuccessfully with unknown account then signing up to follow up
 ///it should Signup successfully and get to the next page
 ///it should Signup unsuccessfully with unknown account 
 after(async () => await driver.quit());
});
