"use strict";
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
var Selectors = require("../AppSelectors");
var TestPerson = require("../TestCasesInfo");

describe('Edit Profile Test', function () {
    this.timeout('1500000000');
    var driver = new Builder().forBrowser(require("../Driver").Driver).build();
    var Checkstring;

    beforeEach('Open Website', async function () {
        await driver.get('http://52.14.190.202:3000/');
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.HomeScreenMusiceForEveryOneXpath)).getText();
        expect(Checkstring).to.equal('Music For Everyone.');
    });
    
    it('should test Spotify logo in the footer', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.SpotifyLogoFooterHomeScreen))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.HomeScreenMusiceForEveryOneXpath)).getText();
        expect(Checkstring).to.equal('Music For Everyone.');
    });

    it('should test Help button in the footer', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.HelpFooterHomeScreen))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.HelpPageHeaderXpath)).getText();
        expect(Checkstring).to.equal('How can we help you?');
    });

    it('should test Web Player button in the footer', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.WebPlayerFooterHomeScreen))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.WebPlayerRecentlyPlayedHeaderXpath)).getText();
        expect(Checkstring).to.equal('Recently played');
    });

    it('should test Help button in the header', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.HelpButtonHeaderXpath))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.HelpPageHeaderXpath)).getText();
        expect(Checkstring).to.equal('How can we help you?');
    });

    it('should test Web Player button in the header', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.WebPlayerButtonHeaderXpath))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.WebPlayerRecentlyPlayedHeaderXpath)).getText();
        expect(Checkstring).to.equal('Recently played');
    });

    it('should test Facebook button in the footer(no link yet)', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.FacebookFooterHomeScreen))).click();
        await driver.sleep(3000);
        //Checkstring = await driver.findElement(By.xpath(Selectors.HelpPageHeaderXpath)).getText();
        //expect(Checkstring).to.equal('How can we help you?');
    });

    it('should test Premium button in the header', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.PremiumButtonHeaderXpath))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.PremiumPageHeaderXpath)).getText();
        expect(Checkstring).to.equal('Get Premium free for 1 month');
    });

    it('should test Spotify logo in the header', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.SpotifyLogoHeader))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.HomeScreenMusiceForEveryOneXpath)).getText();
        expect(Checkstring).to.equal('Music For Everyone.');
    });

    it('should test loginin the header', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.LoginButtonHomeScreenXpath))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SigninHeaderXpath)).getText();
        expect(Checkstring).to.equal("To continue, log in to Spotify.");
    });

    it('should test sign up in the header', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.SignUpbutton))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SignUpHeaderXpath)).getText();
        expect(Checkstring).to.equal('Sign up with your email address');
    });

    it('should test Get Spotify free button', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.GetSpotifyFreeButton))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SignUpHeaderXpath)).getText();
        expect(Checkstring).to.equal('Sign up with your email address');
    });

    afterEach('', async function () {
        await driver.sleep(3000);
    });
    after(async () => driver.quit());
});