"use strict";
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');   

var Selectors=require("../AppSelectors");
var TestPerson=require("../TestCasesInfo");

describe('Forget Password Test', function() {
    this.timeout('1500000000');
    const driver = new Builder().forBrowser(require("../Driver").Driver).build();
    var Checkstring;

    beforeEach('Open website and go to forget password page',async function(){
        await driver.get('http://52.14.190.202:3000/')
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.LoginButtonHomeScreenXpath)).click();
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.ForgetPasswordButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.ForgetPasswordPageHeader)).getText();
        expect(Checkstring).to.equal('Password Reset');
    });
    
    it('should press Send without any inputs', async function() {
        await driver.findElement(By.xpath(Selectors.ForgetPasswordPageSendButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.ForgetPasswordPageEmailErrMsgXpath)).getText();
        expect(Checkstring).to.equal("This field is required.");
    });

    it('should enter wrong email address then press send -yay-', async function() {
        await driver.findElement(By.xpath(Selectors.ForgetPasswordPageEmailXpath)).sendKeys("Yay");
        await driver.findElement(By.xpath(Selectors.ForgetPasswordPageSendButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.ForgetPasswordPageEmailErrMsgXpath)).getText();
        expect(Checkstring).to.equal('The email address you entered is invalid.');
    });

    it('should enter unsigned email address then press send ', async function() {
        await driver.findElement(By.xpath(Selectors.ForgetPasswordPageEmailXpath)).sendKeys("IK@gmail.com");
        await driver.findElement(By.xpath(Selectors.ForgetPasswordPageSendButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.ForgetPasswordPageEmailErrMsgXpath)).getText();
        expect(Checkstring).to.equal('The email address you entered is invalid.');
    });

    it('should enter signed email address then press send ', async function() {
        await driver.findElement(By.xpath(Selectors.ForgetPasswordPageEmailXpath)).sendKeys(TestPerson.EditProfileCurrentEmailAddress);
        await driver.findElement(By.xpath(Selectors.ForgetPasswordPageSendButtonXpath)).click();
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.ForgetPasswordPageVerificationMsgXpath)).getText();
        expect(Checkstring).to.equal('A message has been sent to you by email with a link to reset your current password.');
    });

    it('should test Help button in the footer', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.ForgetPasswordPageHelpButtonXpath))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.HelpPageHeaderXpath)).getText();
        expect(Checkstring).to.equal('How can we help you?');
    });

    it('should test loginin the footer', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.ForgetPasswordPageLogInButtonXpath))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SigninHeaderXpath)).getText();
        expect(Checkstring).to.equal("To continue, log in to Spotify.");
    });

    it('should test sign up in the footer', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.ForgetPasswordPageSignUpButtonXpath))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SignUpHeaderXpath)).getText();
        expect(Checkstring).to.equal('Sign up with your email address');
    });

    it('should test Spotify logo in the header', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.ForgetPasswordPageSpotifyLogo))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.HomeScreenMusiceForEveryOneXpath)).getText();
        expect(Checkstring).to.equal('Music For Everyone.');
    });

    afterEach('', async function () {
        await driver.sleep(5000);
    });
    after(async () => driver.quit());
});