"use strict";

const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser("chrome").build();
var Selectors=require("../AppSelectors");
//var Msgs=require("../AppErrorMsgs");
describe('SearchPageTest', function(){
    this.timeout('1500000000');
    var Checkstring;
    var Checkstring2;
    var Checkstring3;
    var found;
    it('should go to spotify and get its title',async function() {
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
    ///testing the search stability
    it('should press on Search bar and enter a letter',async function() {
        await driver.findElement(By.xpath(Selectors.SearchBar)).sendKeys("n");
        await driver.sleep(5000);
        Checkstring=await driver.findElement(By.xpath(Selectors.TopResultsText)).getText();//checking that it shows results
        expect(Checkstring).to.equal('Top result');
    })
    it('should check that the results still the same if we click anywhere on the border',async function() {
        await driver.sleep(3000);
        Checkstring=await driver.findElement(By.xpath(Selectors.TopSearchResultAfterSearching)).getText();
        await driver.findElement(By.xpath(Selectors.BorderSearchPage)).click();
        await driver.sleep(3000);
        Checkstring2=await driver.findElement(By.xpath(Selectors.TopSearchResultAfterSearching)).getText();
        expect(Checkstring2).to.equal(Checkstring);
    })
    it('should check that the results still the same if we click on the search bar',async function() {
        await driver.findElement(By.xpath(Selectors.SearchBar)).click();
        await driver.sleep(3000);
        Checkstring3=await driver.findElement(By.xpath(Selectors.TopSearchResultAfterSearching)).getText();
        expect(Checkstring3).to.equal(Checkstring);
    })
    // some results of the letter searched for doesn't contain the letter
    it('should test if the results contains the char that i searched for',async function() {
        await driver.sleep(2000);
        await driver.findElement(By.xpath(Selectors.SearchBar)).sendKeys('\b');///clear() is not working here !!!!
        await driver.sleep(2000);
        await driver.findElement(By.xpath(Selectors.SearchBar)).sendKeys("c");
        await driver.sleep(3000);
        found=0;
        Checkstring=await driver.findElement(By.xpath(Selectors.TopSearchResultAfterSearching)).getText();
        if (Checkstring.indexOf('c') > -1){
         found=1;   
        }
        expect(found).to.equal("1");
    })
    //$ # ^ &  el space shows same results not including the char searched on //+  and the space shows results
    it('should test if it searches for special chars and if the results contain this special char',async function() {
        await driver.sleep(3000);
        await driver.findElement(By.xpath(Selectors.SearchBar)).sendKeys('\b');///clear() is not working here !!!!
        await driver.sleep(2000);
        await driver.findElement(By.xpath(Selectors.SearchBar)).sendKeys("#");
        await driver.sleep(3000);
        found=0;
        Checkstring=await driver.findElement(By.xpath(Selectors.TopSearchResultAfterSearching)).getText();
        if (Checkstring.indexOf('#') > -1){
         found=1;   
        }
        expect(found).to.equal("1");
    })
    
    ///// some special chars search forever such as (  ) * takes forever time
    it('should test that for any input it does not search forever',async function() {
        await driver.findElement(By.xpath(Selectors.SearchBar)).sendKeys('\b');
        await driver.findElement(By.xpath(Selectors.SearchBar)).sendKeys("(");
        await driver.sleep(5000);
        Checkstring=await driver.findElement(By.xpath(Selectors.TopResultsText)).getText();//checking that it shows results
        expect(Checkstring).to.equal('Top result');
    })
    //searching on more than one letter
    it('should test searching on more than one letter',async function() {
        await driver.sleep(3000);
        await driver.findElement(By.xpath(Selectors.SearchBar)).sendKeys('\b');///clear() is not working here !!!!
        await driver.sleep(2000);
        await driver.findElement(By.xpath(Selectors.SearchBar)).sendKeys("Can");
        await driver.sleep(3000);
        found=0;
        Checkstring=await driver.findElement(By.xpath(Selectors.TopSearchResultAfterSearching)).getText();
        if (Checkstring.indexOf('Can') > -1){
         found=1;   
        }
        expect(found).to.equal(1);
    })
   //// any infinity input shows results
   it('should test that for any infinity input it shows No results found',async function() {
        await driver.findElement(By.xpath(Selectors.SearchBar)).sendKeys('\b');
        await driver.findElement(By.xpath(Selectors.SearchBar)).sendKeys("&netvkghvkdfuvhjdfhbvkdjbashbkhsjdcbkhsdbchsdcbhdcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbjjjjjjjjjjjjjjjjjjjjjjjjjjjjjsssssssssssssssssssssskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzoooooooooooooooooooooooooooooooooooooooooooooooookaaaaaaaaaaaaaaaaaaaa");
        await driver.sleep(5000);
        Checkstring=await driver.findElement(By.xpath(Selectors.NoResultFoundText)).getText();//checking that it shows results
        expect(Checkstring).to.equal('No results found for "&netvkghvkdfuvhjdfhbvkdjbashbkhsjdcbkhsdbchsdcbhdcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbjjjjjjjjjjjjjjjjjjjjjjjjjjjjjsssssssssssssssssssssskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzoooooooooooooooooooooooooooooooooooooooooooooooookaaaaaaaaaaaaaaaaaaaa"');
    })


    
    after(async () => await driver.quit());
});   