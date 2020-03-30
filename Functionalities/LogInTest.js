"use strict";
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');   
const driver = new Builder().forBrowser('firefox').build();
var Selectors=require("../AppSelectorsRealSpot");
var TestPerson=require("../TestCasesInfo");


describe('Login on Spotify website', function() {

    this.timeout('1500000000');

    beforeEach(async function(){

        console.log("Open Spotify website")
        await driver.get('https://www.spotify.com/eg-en/')

        var title = await driver.getTitle();
        expect(title).to.equal('Music for everyone - Spotify');
        
        await driver.findElement(By.xpath(Selectors.SignInbuttonXbath)).click()
        
        await driver.sleep(3000);

        title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');                
    });


    it('Try log in with wrong email', async function() {
    
        await driver.findElement(By.id(Selectors.EmailID)).sendKeys('MaramHosni');
        
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        
        await driver.findElement(By.css(Selectors.RememberMeCss)).click();

        await driver.findElement(By.id(Selectors.LoginID)).click();
    
        await driver.sleep(3000);
        var title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');

        var Checkstring = await driver.findElement(By.xpath(Selectors.IncorrentUsernameOrPasswordXpath)).getText(); 
        //console.log(Checkstring);
        expect(Checkstring).to.equal('Incorrect username or password.');
    });


    it('Try log in with wrong password', async function() {
    
        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.EditProfileTestEmailAddress);
        
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys('MaramHosni');
        
        await driver.findElement(By.css(Selectors.RememberMeCss)).click();

        await driver.findElement(By.id(Selectors.LoginID)).click();
    
        await driver.sleep(3000);
        var title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');

        var Checkstring = await driver.findElement(By.xpath(Selectors.IncorrentUsernameOrPasswordXpath)).getText(); 
        //console.log(Checkstring);
        expect(Checkstring).to.equal('Incorrect username or password.');
    });


    it('Try log in with missing email field', async function() {
        
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        
        await driver.findElement(By.css(Selectors.RememberMeCss)).click();

        await driver.findElement(By.id(Selectors.LoginID)).click();

        await driver.sleep(3000);
        var title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');

        var Checkstring = await driver.findElement(By.xpath(Selectors.NoEmailOrUsernameEnteredXpath)).getText(); 
        //console.log(Checkstring);
        expect(Checkstring).to.equal('Please enter your Spotify username or email address.');
    });  


    
    it('Try log in with missing password field', async function() {

        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.EditProfileTestEmailAddress);
        
        await driver.findElement(By.css(Selectors.RememberMeCss)).click();

        await driver.findElement(By.id(Selectors.LoginID)).click();
    
        await driver.sleep(3000);
        var title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');

        var Checkstring = await driver.findElement(By.xpath(Selectors.NoPasswordEnteredXpath)).getText(); 
        //console.log(Checkstring);
        expect(Checkstring).to.equal('Please enter your password.'); 
    });
    

    it('Try log in with missing email and password field', async function() {
    
        await driver.findElement(By.css(Selectors.RememberMeCss)).click();

        await driver.findElement(By.id(Selectors.LoginID)).click();
    
        await driver.sleep(3000);
        var title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');

        var Checkstring = await driver.findElement(By.xpath(Selectors.NoEmailOrUsernameEnteredXpath)).getText(); 
        //console.log(Checkstring);
        expect(Checkstring).to.equal('Please enter your Spotify username or email address.');

        Checkstring = await driver.findElement(By.xpath(Selectors.NoPasswordEnteredXpath)).getText(); 
        //console.log(Checkstring);
        expect(Checkstring).to.equal('Please enter your password.'); 
    });


    it('Try log in with matching records then log out', async function() {

        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.EditProfileTestEmailAddress);
        
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        
        await driver.findElement(By.css(Selectors.RememberMeCss)).click();

        await driver.findElement(By.id(Selectors.LoginID)).click();

        await driver.sleep(5000);

        var title = await driver.getTitle();
        expect(title).to.equal('Account overview - Spotify');

        await driver.findElement(By.css(Selectors.ProfileTitleCss)).click();
        await driver.findElement(By.linkText(Selectors.LogoutLinkText)).click(); 
    });
    

    after(async function() {
        await driver.quit();
    });
    //after(async () => driver.quit());
});