"use strict";
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');   
const driver = new Builder().forBrowser('firefox').build();

describe('Login on Spotify website', function() {

    beforeEach(async function(){

        console.log("Open Spotify website")
        await driver.get('https://www.spotify.com/eg-en/')

        var title = await driver.getTitle();
        expect(title).to.equal('Music for everyone - Spotify');
        
        await driver.findElement(By.xpath("//a[@href='https://www.spotify.com/eg-en/account/overview/']")).click()
        
        await driver.sleep(3000);

        title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');                
    });


    it('Try log in with wrong email', async function() {
    
        await driver.findElement(By.id(require("../AppSelectors").EmailID)).sendKeys('maram311999@hotmail');
        
        await driver.findElement(By.id(require("../AppSelectors").PasswordID)).sendKeys('MaramHosni31');
        
        await driver.findElement(By.css(require("../AppSelectors").RememberMeCss)).click();

        await driver.findElement(By.id(require("../AppSelectors").LoginID)).click();
    
        await driver.sleep(3000);
        var title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');

        var Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").IncorrentUsernameOrPasswordXpath)).getText(); 
        //console.log(Checkstring);
        expect(Checkstring).to.equal('Incorrect username or password.');
    });


    it('Try log in with wrong password', async function() {
    
        await driver.findElement(By.id(require("../AppSelectors").EmailID)).sendKeys('maram311999@hotmail.com');
        
        await driver.findElement(By.id(require("../AppSelectors").PasswordID)).sendKeys('MaramHosni');
        
        await driver.findElement(By.css(require("../AppSelectors").RememberMeCss)).click();

        await driver.findElement(By.id(require("../AppSelectors").LoginID)).click();
    
        await driver.sleep(3000);
        var title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');

        var Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").IncorrentUsernameOrPasswordXpath)).getText(); 
        //console.log(Checkstring);
        expect(Checkstring).to.equal('Incorrect username or password.');
    });


    it('Try log in with missing email field', async function() {
        
        await driver.findElement(By.id(require("../AppSelectors").PasswordID)).sendKeys('MaramHosni31');
        
        await driver.findElement(By.css(require("../AppSelectors").RememberMeCss)).click();

        await driver.findElement(By.id(require("../AppSelectors").LoginID)).click();

        await driver.sleep(3000);
        var title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');

        var Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").NoEmailOrUsernameEnteredXpath)).getText(); 
        //console.log(Checkstring);
        expect(Checkstring).to.equal('Please enter your Spotify username or email address.');
    });  


    
    it('Try log in with missing password field', async function() {

        await driver.findElement(By.id(require("../AppSelectors").EmailID)).sendKeys('maram311999@hotmail.com');
        
        await driver.findElement(By.css(require("../AppSelectors").RememberMeCss)).click();

        await driver.findElement(By.id(require("../AppSelectors").LoginID)).click();
    
        await driver.sleep(3000);
        var title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');

        var Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").NoPasswordEnteredXpath)).getText(); 
        //console.log(Checkstring);
        expect(Checkstring).to.equal('Please enter your password.'); 
    });
    

    it('Try log in with missing email and password field', async function() {
    
        await driver.findElement(By.css(require("../AppSelectors").RememberMeCss)).click();

        await driver.findElement(By.id(require("../AppSelectors").LoginID)).click();
    
        await driver.sleep(3000);
        var title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');

        var Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").NoEmailOrUsernameEnteredXpath)).getText(); 
        //console.log(Checkstring);
        expect(Checkstring).to.equal('Please enter your Spotify username or email address.');

        Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").NoPasswordEnteredXpath)).getText(); 
        //console.log(Checkstring);
        expect(Checkstring).to.equal('Please enter your password.'); 
    });


    it('Try log in with matching records then log out', async function() {

        await driver.findElement(By.id(require("../AppSelectors").EmailID)).sendKeys('maram311999@hotmail.com');
        
        await driver.findElement(By.id(require("../AppSelectors").PasswordID)).sendKeys('MaramHosni31');
        
        await driver.findElement(By.css(require("../AppSelectors").RememberMeCss)).click();

        await driver.findElement(By.id(require("../AppSelectors").LoginID)).click();

        await driver.sleep(3000);
        var title = await driver.getTitle();
        expect(title).to.equal('Account overview - Spotify');

        await driver.findElement(By.css(require("../AppSelectors").ProfileTitleCss)).click();
        await driver.findElement(By.linkText(require("../AppSelectors").LogoutLinkText)).click(); 
    });
    







    after(async function() {
        await driver.quit();
    });
    //after(async () => driver.quit());
});