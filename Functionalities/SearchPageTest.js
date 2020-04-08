"use strict";

const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser("chrome").build();
var Selectors=require("../AppSelectors");
//var Msgs=require("../AppErrorMsgs");
describe('SearchPageTest', function(){
    this.timeout('1500000000');
    var Checkstring;
    it('should go to spotify.com and get its title',async function() {
        await driver.get("http://52.14.190.202:3000/");
        const titleSpotHome = await (await driver).getCurrentUrl();
        await driver.sleep(5000);
        expect(titleSpotHome).to.equal('http://52.14.190.202:3000/');//testing that i reached the req page
        Checkstring=await driver.findElement(By.xpath(Selectors.SignUpbutton)).getText();
        expect(Checkstring).to.equal('Sign up');
    })
    it('should press on WebPlayer button and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.WebPlayerbutton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getCurrentUrl();
        expect(titleSpotReg).to.equal('http://52.14.190.202:3000/webplayer');//testing that i reached the req page
        Checkstring=await driver.findElement(By.xpath(Selectors.Searchbutton)).getText();
        expect(Checkstring).to.equal('Search');
    }) 
    it('should press on Search button and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.Searchbutton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getCurrentUrl();
        expect(titleSpotReg).to.equal('http://52.14.190.202:3000/webplayer/search/');//testing that i reached the req page
        Checkstring=await driver.findElement(By.xpath(Selectors.YourTopGenreElementSearchPage)).getText();
        expect(Checkstring).to.equal('Your top genres');
    })
    ///// some special chars search forever such as (  )  + _ * takes too much time ///including spaces
    /////all searches takes alot of time
    ///// some special chars such as % no results found and at other time results are found but the results don't contain % 
   //// infinity input such as &"netvkghvkdfuvhjdfhbvkdjbashbkhsjdcbkhsdbchsdcbhdcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbjjjjjjjjjjjjjjjjjjjjjjjjjjjjjsssssssssssssssssssssskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzoooooooooooooooooooooooooooooooooooooooooooooooookaaaaaaaaaaaaaaaaaaaa
   ///see the video i recorded when i putted the above input (flashing of the images)  

    
    after(async () => await driver.quit());
});   