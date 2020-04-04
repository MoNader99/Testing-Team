"use strict";
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');   
const driver = new Builder().forBrowser('firefox').build();
var Selectors=require("../AppSelectors");
var TestPerson=require("../TestCasesInfo");


describe('Login on Spotify website', function() {

    this.timeout('1500000000');

    beforeEach(async function(){
        //Open login page on Spotify website
        await driver.get('http://ec2-13-59-26-117.us-east-2.compute.amazonaws.com:3000/')

        await driver.findElement(By.linkText(Selectors.SignInbuttonLinkText)).click()
        
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("http://ec2-13-59-26-117.us-east-2.compute.amazonaws.com:3000/logIn")}); 
    });


    it('Try log in with missing email and password field', async function() {
    
        await driver.findElement(By.id(Selectors.LoginID)).click();
    
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("http://ec2-13-59-26-117.us-east-2.compute.amazonaws.com:3000/logIn")});

        var Checkstring = await driver.findElement(By.xpath(Selectors.NoEmailOrUsernameEnteredXpath)).getText(); 
        console.log(Checkstring);
        expect(Checkstring).to.equal('Please enter your Spotify username or email address.');   

        Checkstring = await driver.findElement(By.xpath(Selectors.NoPasswordEnteredXpath)).getText(); 
        console.log(Checkstring);
        expect(Checkstring).to.equal('Please enter your password.');     
    });


    it('Try log in with missing email field', async function() {
        
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        
        await driver.findElement(By.id(Selectors.LoginID)).click();

        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("http://ec2-13-59-26-117.us-east-2.compute.amazonaws.com:3000/logIn")});

        var Checkstring = await driver.findElement(By.xpath(Selectors.NoEmailOrUsernameEnteredXpath)).getText(); 
        console.log(Checkstring);
        expect(Checkstring).to.equal('Please enter your Spotify username or email address.');   

        Checkstring = await driver.findElement(By.xpath(Selectors.NoPasswordEnteredXpath)).getText(); 
        console.log(Checkstring);
        expect(Checkstring).to.equal('');  
    });  

    
    it('Try log in with missing password field', async function() {

        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.EditProfileTestEmailAddress);
        
        await driver.findElement(By.id(Selectors.LoginID)).click();
    
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("http://ec2-13-59-26-117.us-east-2.compute.amazonaws.com:3000/logIn")});

        var Checkstring = await driver.findElement(By.xpath(Selectors.NoEmailOrUsernameEnteredXpath)).getText(); 
        console.log(Checkstring);
        expect(Checkstring).to.equal('');   

        Checkstring = await driver.findElement(By.xpath(Selectors.NoPasswordEnteredXpath)).getText(); 
        console.log(Checkstring);
        expect(Checkstring).to.equal('Please enter your password.'); 
    });
    

    it('Try log in with wrong email', async function() {
    
        await driver.findElement(By.id(Selectors.EmailID)).sendKeys('MaramHosni');
        
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        
        await driver.findElement(By.id(Selectors.LoginID)).click();
    
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("http://ec2-13-59-26-117.us-east-2.compute.amazonaws.com:3000/logIn")});

        //Error Message
    });


    it('Try log in with wrong password', async function() {
    
        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.EditProfileTestEmailAddress);
        
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys('MaramHosni');
        
        await driver.findElement(By.id(Selectors.LoginID)).click();
    
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("http://ec2-13-59-26-117.us-east-2.compute.amazonaws.com:3000/logIn")});


         //Error Message

    });


    it('Try log in with matching records then log out', async function() {

        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.EditProfileTestEmailAddress);
        
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        
        var Checkstring = await driver.findElement(By.xpath(Selectors.NoEmailOrUsernameEnteredXpath)).getText(); 
        console.log(Checkstring);
        expect(Checkstring).to.equal('');   

        Checkstring = await driver.findElement(By.xpath(Selectors.NoPasswordEnteredXpath)).getText(); 
        console.log(Checkstring);
        expect(Checkstring).to.equal('');  

        await driver.findElement(By.id(Selectors.LoginID)).click();

        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("http://ec2-13-59-26-117.us-east-2.compute.amazonaws.com:3000/account/overview/")});




        await driver.findElement(By.xpath(Selectors.ProfileXpath)).click();
        await driver.findElement(By.xpath(Selectors.LogoutFromProfileXpath)).click(); 
    });
    

    after(async function() {
        await driver.quit();
    });
    //after(async () => driver.quit());
});