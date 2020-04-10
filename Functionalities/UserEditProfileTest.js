"use strict";
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
var Selectors = require("../AppSelectors");
var TestPerson = require("../TestCasesInfo");

describe('Edit Profile Test', function () {
    this.timeout('1500000000');
    var driver = new Builder().forBrowser('firefox').build();
    var Checkstring;

    beforeEach('Open profile and go to edit proile page', async function () {
        await driver.get('http://52.14.190.202:3000/');
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.LoginButtonHomeScreenXpath)).click()
        await driver.sleep(3000);
        await driver.findElement(By.xpath(Selectors.LoginPageEmailAddressXpath)).sendKeys(TestPerson.EditProfileCurrentEmailAddress);
        await driver.findElement(By.xpath(Selectors.LoginPagePasswordXpath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
        await driver.findElement(By.xpath(Selectors.LoginPageLoginButtonXpath)).click();
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.EditProfileButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.EditProfilePageHeaderXpath)).getText();
        expect(Checkstring).to.equal('Edit Profile');

    });

    it('should check if the info exist', async function () {
        Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileEmailXpath)).getText();
        expect(Checkstring).to.equal(TestPerson.EditProfileCurrentEmailAddress);
        Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileUsernameXpath)).getAttribute("value");
        expect(Checkstring).to.equal(TestPerson.EditProfileCurrentUsername);
        await driver.sleep(3000);
    });
    
    it('should press Cancel button and check if it goes to overview page', async function () {
        await driver.findElement(By.xpath(Selectors.EditProfileCancelButton)).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.AccountOverviewHeaderXpath)).getText();
        expect(Checkstring).to.equal('Account overview');
    });

    it('should delete username then check for error message', async function () {
        await (await driver.findElement(By.xpath(Selectors.EditProfileUsernameXpath))).clear();
        await (await driver.findElement(By.xpath(Selectors.EditProfileUsernameXpath))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileUsernameErrorMsgXpath)).getText();
        expect(Checkstring).to.equal("You must specify your username");
    });

    it('should delete username then press save ', async function () {
        await driver.findElement(By.xpath(Selectors.EditProfileUsernameXpath)).clear();
        await driver.findElement(By.xpath(Selectors.EditProfileSaveButton)).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileUsernameErrorMsgXpath)).getText();
        expect(Checkstring).to.equal("You must specify your username");
    });

    it('should reload the page then check if the info still exist', async function () {
        await driver.navigate().refresh();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileEmailXpath)).getText();
        expect(Checkstring).to.equal(TestPerson.EditProfileCurrentEmailAddress);
        Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileUsernameXpath)).getText();
        expect(Checkstring).to.equal(TestPerson.EditProfileCurrentUsername);
        await driver.sleep(3000);
    });
    it('should enter invalid username then check for error msg', async function () {
        await driver.findElement(By.xpath(Selectors.EditProfileUsernameXpath)).clear();
        await driver.findElement(By.xpath(Selectors.EditProfileUsernameXpath)).sendKeys("Heba");
        await driver.findElement(By.xpath(Selectors.EditProfileSaveButton)).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileUsernameErrorMsgXpath)).getText();
        expect(Checkstring).to.equal("We're sorry, that username is taken.");
    });

    it('should enter invalid username then check it in the overview page', async function () {
        await driver.findElement(By.xpath(Selectors.EditProfileUsernameXpath)).clear();
        await driver.findElement(By.xpath(Selectors.EditProfileUsernameXpath)).sendKeys("Heba");
        await driver.findElement(By.xpath(Selectors.EditProfileSaveButton)).click();
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.AccountOverviewButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.AccountOverviewUsernameXpath)).getText();
        expect(Checkstring).to.equal(TestPerson.EditProfileCurrentUsername);
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.EditProfileButtonXpath)).click();
        await driver.sleep(5000);
    });

    it('should test Account Overview button', async function () {
        await driver.findElement(By.xpath(Selectors.AccountOverviewButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.AccountOverviewHeaderXpath)).getText();
        expect(Checkstring).to.equal('Account overview');
        Checkstring = await driver.findElement(By.xpath(Selectors.AccountOverviewEmailXpath)).getText();
        expect(Checkstring).to.equal(TestPerson.EditProfileCurrentEmailAddress);
        Checkstring = await driver.findElement(By.xpath(Selectors.AccountOverviewUsernameXpath)).getText();
        expect(Checkstring).to.equal(TestPerson.EditProfileCurrentUsername);
        Checkstring = await driver.findElement(By.xpath(Selectors.AccountOverviewGenderXpath)).getText();
        expect(Checkstring).to.equal(TestPerson.EditProfileCurrentGender);
        Checkstring = await driver.findElement(By.xpath(Selectors.AccountOverviewBirthdateXpath)).getText();
        expect(Checkstring).to.equal(TestPerson.EditProfileCurrenDateOfbirth);
        await driver.sleep(3000);

    });

    it('should test set password button', async function () {
        await driver.sleep(3000);
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SetDevicePasswordHeaderXpath)).getText();
        expect(Checkstring).to.equal('Set device Password');
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

    it('should test Facebook button in the footer(no link yet)', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.FacebookButtonFooterXpath))).click();
        await driver.sleep(3000);
        //Checkstring = await driver.findElement(By.xpath(Selectors.HelpPageHeaderXpath)).getText();
        //expect(Checkstring).to.equal('How can we help you?');
    });

    it('should test Spotify logo in the header', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.SpotifyLogoHeader))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.HomeScreenMusiceForEveryOneXpath)).getText();
        expect(Checkstring).to.equal('Music For Everyone.');
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

    it('should test Premium button in the header', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.PremiumButtonHeaderXpath))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.PremiumPageHeaderXpath)).getText();
        expect(Checkstring).to.equal('Get Premium free for 1 month');
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