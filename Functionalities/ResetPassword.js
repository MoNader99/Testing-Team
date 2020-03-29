"use strict";
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');   

var Selectors=require("../AppSelectorsRealSpot");
var TestPerson=require("../TestCasesInfo");

describe('Change Password Test', function() {
    this.timeout('1500000000');
    const driver = new Builder().forBrowser('firefox').build();
    var Checkstring;

    beforeEach('Open profile and go to edit proile page',async function(){
        await driver.get('https://www.spotify.com/eg-en/')
        var title = await driver.getTitle();
        expect(title).to.equal('Music for everyone - Spotify');
        await driver.findElement(By.xpath(Selectors.SignInbuttonXbath)).click()
        await driver.sleep(5000);
        title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');
        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.EditProfileTestEmailAddress);
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        await driver.findElement(By.css(Selectors.RememberMeCss)).click();
        await driver.findElement(By.id(Selectors.LoginID)).click();
        await driver.sleep(10000);
        await driver.findElement(By.linkText('Change password')).click();
        await driver.sleep(5000);
    });
    it('should press the button without any inputs', async function() {
        await driver.findElement(By.xpath(Selectors.ChangePasswordSetPasswordButton)).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.ChangePasswordCurrentErrorXpath)).getText();
        expect(Checkstring).to.equal("Sorry, wrong password");
    });
    it('should change password with wrong one', async function() {
        await driver.findElement(By.xpath(Selectors.ChangePasswordCurrentXpath)).sendKeys('hjbwjfebdbn');
        await driver.findElement(By.xpath(Selectors.ChangePasswordNewXpath)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        await driver.findElement(By.xpath(Selectors.ChangePasswordNewValidXpath)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        await driver.findElement(By.xpath(Selectors.ChangePasswordSetPasswordButton)).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.ChangePasswordCurrentErrorXpath)).getText();
        expect(Checkstring).to.equal("Sorry, wrong password");
    });

    it('should change password with empty new password', async function() {
        await driver.findElement(By.xpath(Selectors.ChangePasswordCurrentXpath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
        await driver.findElement(By.xpath(Selectors.ChangePasswordSetPasswordButton)).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.ChangePasswordNewErrorXpath)).getText();
        expect(Checkstring).to.equal("Enter a password to continue.");
    });

    it('should change password with true one', async function() {
        await driver.findElement(By.xpath(Selectors.ChangePasswordCurrentXpath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
        await driver.findElement(By.xpath(Selectors.ChangePasswordNewXpath)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        await driver.findElement(By.xpath(Selectors.ChangePasswordNewValidXpath)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        await driver.findElement(By.xpath(Selectors.ChangePasswordSetPasswordButton)).click();
        await driver.sleep(3000);
        //Checkstring = await driver.findElement(By.xpath(Selectors.ChangePasswordCurrentErrorxpath)).getText();
        //expect(Checkstring).to.equal("The email address you supplied is invalid, please check to ensure it is correct.");
    });
    it('should change password with true one(back to its default)', async function() {
        await driver.findElement(By.xpath(Selectors.ChangePasswordCurrentXpath)).sendKeys(TestPerson.EditProfileTestEmailPassword);
        await driver.findElement(By.xpath(Selectors.ChangePasswordNewXpath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
        await driver.findElement(By.xpath(Selectors.ChangePasswordNewValidXpath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
        await driver.findElement(By.xpath(Selectors.ChangePasswordSetPasswordButton)).click();
        await driver.sleep(3000);
        //Checkstring = await driver.findElement(By.xpath(Selectors.ChangePasswordCurrentErrorxpath)).getText();
        //expect(Checkstring).to.equal("The email address you supplied is invalid, please check to ensure it is correct.");
    });
    afterEach('Log out from profile and close the broswer',async function() {
        await driver.sleep(3000);
        await driver.findElement(By.css(Selectors.ProfileTitleCss)).click();
        await driver.findElement(By.linkText(Selectors.LogoutLinkText)).click();
        await driver.sleep(3000); 
    });
    after(async () => driver.quit());
});