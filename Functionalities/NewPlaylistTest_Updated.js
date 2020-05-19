"use strict";
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');   
const driver = new Builder().forBrowser(require("../Driver").Driver).build();
var Selectors=require("../AppSelectors");
var TestPerson=require("../TestCasesInfo");


describe('Login on Spotify website to use webplayer', function() {

    this.timeout('1500000000');

    before(async function(){

        console.log("Open Spotify website")
        driver.get('http://52.14.190.202:3000/')

        /*await driver.findElement(By.linkText(Selectors.SignInbuttonLinkText)).click()
        
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("http://52.14.190.202:3000/logIn")});

        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.LoginTestEmailAddress);
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.LoginTestPassword);
        await driver.findElement(By.id(Selectors.LoginID)).click();

        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("http://52.14.190.202:3000/account/overview/")});

        await driver.findElement(By.xpath(Selectors.GoToWebPlayerHeaderXpath)).click();
        
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("http://52.14.190.202:3000/webplayer" )});*/
        driver.get('http://52.14.190.202:3000/webplayer')

    });

    beforeEach(async function(){
        await driver.navigate().refresh();
        await driver.findElement(By.linkText(Selectors.NewPlaylistLinkText)).click(); 
        await driver.sleep(3000);
    });

    it('Try cancel button for create new playlist', async function() {

        //Try cancel button
        var text;
        text = await driver.findElement(By.xpath(Selectors.NewPlaylistPopUpXpath)).getText();
        expect(text).to.equal('Playlist Name');

        await driver.findElement(By.xpath(Selectors.CancelCreateNewPlaylistXpath)).click(); 
        await driver.sleep(3000);


    });


    it('Try x button for create new playlist', async function() {

        //Try x button

        await driver.findElement(By.xpath(Selectors.ExitCreateNewPlaylistXpath)).click(); 
        await driver.sleep(3000);
        var text;
        text = await driver.findElement(By.xpath(Selectors.NewPlaylistPopUpXpath)).getText();
        expect(text).to.equal('');

    });


    it('Try create new playlist with existing name', async function() {
        //Enter playlist name
        await driver.findElement(By.id(Selectors.InputNewPlaylistNameID)).sendKeys('Pop');
        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.CreateNewPlaylistXpath)).click(); 
        await driver.sleep(3000);
        var text;
        text = await driver.findElement(By.xpath(Selectors.NewPlaylistPopUpXpath)).getText();
        expect(text).to.equal('Playlist Name')
    });


    it('Try create new playlist with no name', async function() {
        await driver.findElement(By.xpath(Selectors.CreateNewPlaylistXpath)).click(); 
        await driver.sleep(3000);
        var text;
        text = await driver.findElement(By.xpath(Selectors.NewPlaylistPopUpXpath)).getText();
        expect(text).to.equal('Playlist Name')


    });


    it('Try create new playlist with new name', async function() {
        await driver.findElement(By.id(Selectors.InputNewPlaylistNameID)).sendKeys('Jazzzzzz');
        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.CreateNewPlaylistXpath)).click(); 
        await driver.sleep(3000); 
        var text;
        text = await driver.findElement(By.xpath(Selectors.NewPlaylistPopUpXpath)).getText();
        expect(text).to.equal('')

    });

    

    it('Try to delete Existing Playlist then Canceling with cancel', async function() {
        await driver.findElement(By.xpath(Selectors.ExitCreateNewPlaylistXpath)).click(); 
        await driver.sleep(3000);
        await driver.findElement(By.xpath(Selectors.FirstPlayListInTheList)).click(); 
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.PlayListDropDown)).click();
        await driver.findElement(By.xpath(Selectors.DeleteInPlalistDropDown)).click();
        var text;
        text=await driver.findElement(By.xpath(Selectors.DeletePopUpText)).getText();
        expect(text).to.equal('Do you really want to delete this playlist ?')
        await driver.findElement(By.xpath(Selectors.CancelDeletePlalist)).click();
        text=await driver.findElement(By.xpath(Selectors.DeletePopUpText)).getText();
        expect(text).to.equal('')
    });
    it('Try to delete Existing Playlist then Canceling with x', async function() {
        await driver.findElement(By.xpath(Selectors.ExitCreateNewPlaylistXpath)).click(); 
        await driver.sleep(3000);
        await driver.findElement(By.xpath(Selectors.FirstPlayListInTheList)).click(); 
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.PlayListDropDown)).click();
        await driver.findElement(By.xpath(Selectors.DeleteInPlalistDropDown)).click();
        var text;
        text=await driver.findElement(By.xpath(Selectors.DeletePopUpText)).getText();
        expect(text).to.equal('Do you really want to delete this playlist ?')
        await driver.findElement(By.xpath(Selectors.CancelDeletePlalistWithX)).click();
        text=await driver.findElement(By.xpath(Selectors.DeletePopUpText)).getText();
        expect(text).to.equal('')
        
    });
    it('Try to delete Existing Playlist ', async function() {
        await driver.findElement(By.xpath(Selectors.ExitCreateNewPlaylistXpath)).click(); 
        await driver.sleep(3000);
        await driver.findElement(By.xpath(Selectors.FirstPlayListInTheList)).click(); 
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.PlayListDropDown)).click();
        await driver.findElement(By.xpath(Selectors.DeleteInPlalistDropDown)).click();
        await driver.findElement(By.xpath(Selectors.DeletePlalist)).click();
        var text;
        text=await driver.findElement(By.xpath(Selectors.DeletePopUpText)).getText();
        expect(text).to.equal('')
    });

});