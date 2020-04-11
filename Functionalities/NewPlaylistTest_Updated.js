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

    it('Try create new playlist then cancel', async function() {

        //Try cancel button
        await driver.findElement(By.linkText(Selectors.NewPlaylistLinkText)).click(); 
        await driver.sleep(3000);

        const element = document.querySelector("#blur");

        element.classList.contains("active");

        //await driver.findElement(By.id(Selectors.NewPlaylistPopUpID.));

        await driver.findElement(By.xpath(Selectors.CancelCreateNewPlaylistXpath)).click(); 
        await driver.sleep(3000);

        //Try x button
        await driver.findElement(By.linkText(Selectors.NewPlaylistLinkText)).click(); 
        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.ExitCreateNewPlaylistXpath)).click(); 
        await driver.sleep(3000);

    });


    it('Try create new playlist with existing name', async function() {
        await driver.findElement(By.linkText(Selectors.NewPlaylistLinkText)).click(); 
        await driver.sleep(3000);

        //Enter playlist name
        await driver.findElement(By.id(Selectors.InputNewPlaylistNameID)).sendKeys('Pop');
        await driver.sleep(3000);


        await driver.findElement(By.xpath(Selectors.CreateNewPlaylistXpath)).click(); 
        
        await driver.sleep(3000);

    });


    it('Try create new playlist with no name', async function() {
        await driver.findElement(By.linkText(Selectors.NewPlaylistLinkText)).click(); 
        await driver.sleep(3000);

        //Click create
        await driver.findElement(By.xpath(Selectors.CreateNewPlaylistXpath)).click(); 
        
        await driver.sleep(3000);



    });

});