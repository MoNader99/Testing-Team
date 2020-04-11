"use strict";
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');   
const driver = new Builder().forBrowser(require("../Driver").Driver).build();
var Selectors=require("../AppSelectorsRealSpot");
var TestPerson=require("../TestCasesInfo");


describe('Login on Spotify website to use webplayer', function() {

    this.timeout('1500000000');

    before(async function(){

        console.log("Open Spotify website")
        await driver.get('https://www.spotify.com/eg-en/')

        var title = await driver.getTitle();
        expect(title).to.equal('Music for everyone - Spotify');
        
        await driver.findElement(By.xpath(Selectors.SignInbuttonXbath)).click()
        
        await driver.sleep(3000);

        title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');     
        
        
        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.EditProfileTestEmailAddress);
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        await driver.findElement(By.css(Selectors.RememberMeCss)).click();
        await driver.findElement(By.id(Selectors.LoginID)).click();

        await driver.sleep(3000);

        title = await driver.getTitle();
        expect(title).to.equal('Account overview - Spotify');

        await driver.findElement(By.xpath(Selectors.GoToWebPlayerXpath)).click();
        
        await driver.sleep(3000);

        title = await driver.getTitle();
        expect(title).to.equal('Spotify – Home');

    });


    it('Try create new playlist then cancel', async function() {
        await driver.findElement(By.css(Selectors.CreateNewPlaylistCss)).click(); 
        await driver.sleep(3000);

        // title = await driver.getTitle();
        //expect(title).to.equal('Spotify – New Playlist');

        await driver.findElement(By.xpath(Selectors.CancelCreateNewPlaylistXpath)).click(); 
        

        
        //await driver.sleep(3000);
        //title = await driver.getTitle();
        //expect(title).to.equal('Spotify – Home');

        //await driver.findElement(By.xpath(Selectors.GetAvatarXpath)).click(); 
        //await driver.findElement(By.xpath(Selectors.LogoutFromWebPlayerXpath)).click(); 
    });

    it('Try create new playlist with name', async function() {
        await driver.findElement(By.css(Selectors.CreateNewPlaylistCss)).click(); 
        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.InputNewPlaylistNameXpath)).sendKeys('Pop');

        await driver.sleep(1000);


        await driver.findElement(By.xpath(Selectors.ConfirmCreateNewPlaylistXpath)).click(); 
        
        await driver.sleep(3000);

        //var title = await driver.getTitle();
        //expect(title).to.equal('Spotify – Pop');

        //await driver.findElement(By.xpath(Selectors.GetAvatarXpath)).click(); 
        //await driver.findElement(By.xpath(Selectors.LogoutFromWebPlayerXpath)).click();
    });


    it('Try create new playlist with no name', async function() {

        await driver.findElement(By.xpath(Selectors.GoToHomePageXpath)).click(); 
        await driver.findElement(By.css(Selectors.CreateNewPlaylistCss)).click(); 
        await driver.sleep(3000);


        await driver.findElement(By.xpath(Selectors.ConfirmCreateNewPlaylistXpath)).click(); 
        
        await driver.sleep(3000);

        var title = await driver.getTitle();
        expect(title).to.equal('Spotify – New Playlist');
    });



 
    
    after(async function(){

        await driver.findElement(By.xpath(Selectors.GoToAvatarXpath)).click(); 
        await driver.findElement(By.xpath(Selectors.LogOutFromWebPlayetXpath)).click(); 

    });
    
});