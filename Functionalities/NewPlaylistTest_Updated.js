"use strict";
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');   
const driver = new Builder().forBrowser('chrome').build();
var Selectors=require("../AppSelectors");
var TestPerson=require("../TestCasesInfo");


describe('Login on Spotify website to use webplayer', function() {

    this.timeout('1500000000');

    before(async function(){

        console.log("Open Spotify website")
        driver.get('http://52.14.190.202:3000/')

        await driver.findElement(By.linkText(Selectors.SignInbuttonLinkText)).click()
        
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("http://52.14.190.202:3000/logIn")});

        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.LoginTestEmailAddress);
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.LoginTestPassword);
        await driver.findElement(By.id(Selectors.LoginID)).click();

        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("http://52.14.190.202:3000/account/overview/")});

        await driver.findElement(By.xpath(Selectors.GoToWebPlayerHeaderXpath)).click();
        
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("http://52.14.190.202:3000/webplayer" )});

    });

    beforeEach(async function(){
        await driver.navigate().refresh();
        await driver.findElement(By.linkText(Selectors.NewPlaylistLinkText)).click(); 
        await driver.sleep(3000);
    });





    it('Try create new playlist then delete it', async function() {
        await driver.findElement(By.id(Selectors.InputNewPlaylistNameID)).sendKeys('Rock');
        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.CreateNewPlaylistXpath)).click(); 
        await driver.sleep(3000); 
    });

});