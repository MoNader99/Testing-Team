"use strict";
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
var Selectors = require("../AppSelectors");
var TestPerson = require("../TestCasesInfo");

describe('Edit Profile Test', function () {
    this.timeout('1500000000');
    var driver = new Builder().forBrowser('firefox').build();
    var Checkstring;

    beforeEach('Open Website then log in and go to home page', async function () {
        await driver.get('http://52.14.190.202:3000/');
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.LoginButtonHomeScreenXpath)).click()
        await driver.sleep(3000);
        await driver.findElement(By.xpath(Selectors.LoginPageEmailAddressXpath)).sendKeys(TestPerson.EditProfileCurrentEmailAddress);
        await driver.findElement(By.xpath(Selectors.LoginPagePasswordXpath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
        await driver.findElement(By.xpath(Selectors.LoginPageLoginButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.AccountOverviewHeaderXpath)).getText();
        expect(Checkstring).to.equal('Account overview');
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.HomeScreenMusiceForEveryOneXpath)).getText();
        expect(Checkstring).to.equal('Music For Everyone.');
    });
    
    it('should test Spotify logo in the footer', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.SpotifyLogoFooter))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.HomeScreenMusiceForEveryOneXpath)).getText();
        expect(Checkstring).to.equal('Music For Everyone.');
    });

    it('should test Help button in the footer', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.HelpButtonFooterXpath))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.HelpPageHeaderXpath)).getText();
        expect(Checkstring).to.equal('How can we help you?');
    });

    it('should test Web Player button in the footer', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.WebPlayerButtonFooterXpath))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.WebPlayerRecentlyPlayedHeaderXpath)).getText();
        expect(Checkstring).to.equal('Recently played');
        await (await driver.findElement(By.xpath(Selectors.WebPlayerXpathDropDownlistXpath))).click();
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.WebPlayerDropDownlistProfileXpath))).click();
        await driver.sleep(3000);
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
        await (await driver.findElement(By.xpath(Selectors.WebPlayerXpathDropDownlistXpath))).click();
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.WebPlayerDropDownlistProfileXpath))).click();
        await driver.sleep(3000);
    });

    it('should test Facebook button in the footer(no link yet)', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.FacebookButtonFooterXpath))).click();
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

    afterEach('Log out from profile and close the broswer', async function () {
        await driver.sleep(3000);
        await driver.findElement(By.xpath(Selectors.ProfileDropDownlistXpath)).click();
        await driver.sleep(1000);
        await driver.findElement(By.xpath(Selectors.ProfileDropDownlistLogOutXpath)).click();
        await driver.sleep(3000);
    });
    after(async () => driver.quit());
});