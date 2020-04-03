const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser("chrome").build();
var Selectors=require("../AppSelectorsRealSpot");
var title;
//var Msgs=require("../AppErrorMsgsRealSpot");
describe('PremiumPageTest', function(){
    this.timeout('1500000000');
    var Checkstring;
    it('should go to spotify.com and get its title',async function() {
        await driver.get("https://www.spotify.com/eg-en/");
        title = await driver.getTitle();
        await driver.sleep(5000);
        expect(title).to.equal('Music for everyone - Spotify');//testing that i reached the req page
    })
    it('should press on Premium button and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.Premiumbutton)).click();
        await driver.sleep(5000);
        title = await driver.getTitle();
        expect(title).to.equal('Spotify');//testing that i reached the req page
    }) 
    it('should press on Get Premium button which is at the blue background and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.GetPremiumbutton)).click();
        await driver.sleep(5000);
        title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');//testing that i reached the req page
    }) 
 ///it should login successfully and get to the next page
 ///it should login unsuccessfully with unknown account then signing up to follow up

 /////////back to premium page to continue testing///////
     it('should go to Premium page and get its title',async function() {
        await driver.get("https://www.spotify.com/eg-en/premium/?checkout=false");
        title = await driver.getTitle();
        await driver.sleep(5000);
        expect(title).to.equal('Spotify');//testing that i reached the req page
    })
 ////////////////////////////////////////////////////////
    //it('should press on Get Premium button which is at the end of the page and get the new page title',async function() {
        //await driver.findElement(By.xpath(Selectors.GetPremiumbuttonAtTheEndOfThePage)).click();
        //await driver.sleep(5000);
        //title = await driver.getTitle();
        //expect(title).to.equal('Login - Spotify');//testing that i reached the req page
  //}) 
///it should login successfully and get to the next page
 ///it should login unsuccessfully with unknown account then signing up to follow up
 after(async () => await driver.quit());
});
