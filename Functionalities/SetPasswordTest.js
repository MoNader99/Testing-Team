"use strict";
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');   

var Selectors=require("../AppSelectors");
var TestPerson=require("../TestCasesInfo");

describe('Change Password Test', function() {
    this.timeout('1500000000');
    const driver = new Builder().forBrowser(require("../Driver").Drive).build();
    var Checkstring;

    beforeEach('Open profile and go to Set Password page',async function(){
        await driver.get('http://52.14.190.202:3000/')
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.LoginButtonHomeScreenXpath)).click()
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.LoginPageEmailAddressXpath)).sendKeys(TestPerson.EditProfileCurrentEmailAddress);
        await driver.findElement(By.xpath(Selectors.LoginPagePasswordXpath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
        await driver.findElement(By.xpath(Selectors.LoginPageLoginButtonXpath)).click();
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SetDevicePasswordHeaderXpath)).getText();
        expect(Checkstring).to.equal('Set device Password');

    });
    
    it('should press submit without any inputs', async function() {
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordSubmitButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SetDevicePasswordCurrentPasswordPassErrorXpath)).getText();
        expect(Checkstring).to.equal("Enter your current password.");
        Checkstring = await driver.findElement(By.xpath(Selectors.SetDevicePasswordNewPasswordtPassErrorXpath)).getText();
        expect(Checkstring).to.equal("Enter your new password.");
    });

    it('should change password with empty current password', async function() {
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordNewPasswordtPassXpath)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordSubmitButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SetDevicePasswordCurrentPasswordPassErrorXpath)).getText();
        expect(Checkstring).to.equal("Enter your current password.");
    });

    it('should change password with empty new password', async function() {
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordCurrentPasswordPassXpath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordSubmitButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SetDevicePasswordNewPasswordtPassErrorXpath)).getText();
        expect(Checkstring).to.equal("Enter your new password.");
    });

    it('should change password with wrong current password', async function() {
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordCurrentPasswordPassXpath)).sendKeys('hjbwjfebdbn');
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordNewPasswordtPassXpath)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordSubmitButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SetDevicePasswordCurrentPasswordPassErrorXpath)).getText();
        expect(Checkstring).to.equal("Sorry, wrong password");
    });

    it('should test the case of entering a very short new password',async function() { 
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordCurrentPasswordPassXpath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordNewPasswordtPassXpath)).sendKeys("aya");
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordSubmitButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SetDevicePasswordNewPasswordtPassErrorXpath)).getText();
        expect(Checkstring).to.equal('The password you entered is too short.');
    });

    it('should change password with true one', async function() {
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordCurrentPasswordPassXpath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordNewPasswordtPassXpath)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordSubmitButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SetDevicePasswordCurrentPasswordPassErrorXpath)).getText();
        expect(Checkstring).to.equal("Your password is updated");
    });

    it('should change password with true one(back to its default)', async function() {
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordCurrentPasswordPassXpath)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordNewPasswordtPassXpath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
        await driver.findElement(By.xpath(Selectors.SetDevicePasswordSubmitButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SetDevicePasswordCurrentPasswordPassErrorXpath)).getText();
        expect(Checkstring).to.equal("Your password is updated");
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

    it('should test edit profile button', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.EditProfileButtonXpath))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.EditProfilePageHeaderXpath)).getText();
        expect(Checkstring).to.equal('Edit Profile');
        Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileEmailXpath)).getText();
        expect(Checkstring).to.equal(TestPerson.EditProfileCurrentEmailAddress);
        Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileUsernameXpath)).getAttribute("value");
        expect(Checkstring).to.equal(TestPerson.EditProfileCurrentUsername);
        await driver.sleep(3000);
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

    afterEach('Log out from profile and close the broswer', async function () {
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.ProfileDropDownlistXpath)).click();
        await driver.sleep(1000);
        await driver.findElement(By.xpath(Selectors.ProfileDropDownlistLogOutXpath)).click();
        await driver.sleep(5000);
    });
    after(async () => driver.quit());
});