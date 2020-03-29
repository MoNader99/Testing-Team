"use strict";
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');   

var Selectors=require("../AppSelectors");
var TestPerson=require("../TestCasesInfo");

describe('Edit Profile Test', function() {
    this.timeout('1500000000');
    const driver = new Builder().forBrowser('chrome').build();
    var Checkstring;

    beforeEach('Open profile and go to edit proile page',async function(){
        await driver.get('https://www.spotify.com/eg-en/')
        var title = await driver.getTitle();
        expect(title).to.equal('Music for everyone - Spotify');
        await driver.findElement(By.xpath(Selectors.SignInbuttonXbath)).click()
        await driver.sleep(3000);
        title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');
        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.EditProfileCurrentEmailAddress);
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
        await driver.findElement(By.css(Selectors.RememberMeCss)).click();
        await driver.findElement(By.id(Selectors.LoginID)).click();
        await driver.sleep(5000);
        var title = await driver.getTitle();
        expect(title).to.equal('Account overview - Spotify');
        await driver.findElement(By.xpath(Selectors.EditProfileButtonXbath)).click();
        await driver.sleep(10000);
        await (await driver.findElement(By.xpath(Selectors.EditProfileDayOfBirthXbath))).click();
        await driver.sleep(10000);
        await driver.findElement(By.xpath(Selectors.EditProfileMonthOfBirthXbath)).click();
        await driver.sleep(10000);
        await (await driver.findElement(By.xpath(Selectors.EditProfileYearOfBirthXbath))).click();
        expect(title).to.equal('Edit profile - Spotify');            
    });/*
        it('should delete email then save it', async function() {
                await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).clear();
                await driver.findElement(By.xpath(Selectors.EditProfileSaveButton)).click();
                await driver.sleep(3000);
                Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileEmailMsgErrorXbath)).getText();
                expect(Checkstring).to.equal("You must specify your email.");
        });

        it('should enter invalid email address', async function() {
                await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).clear();
                await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).sendKeys("Heba");
                await driver.findElement(By.xpath(Selectors.EditProfileSaveButton)).click();
                await driver.sleep(3000);
                Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileEmailMsgErrorXbath)).getText();
                expect(Checkstring).to.equal("The email address you supplied is invalid, please check to ensure it is correct.");
        });

        it('should change email without password then save it', async function() {
                await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).clear();
                await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).sendKeys("hebanassif@gmail.com");
                await driver.findElement(By.xpath(Selectors.EditProfileSaveButton)).click();
                await driver.sleep(3000);
                Checkstring = await driver.findElement(By.xpath(Selectors.EditProfilePasswordMsgErrorXbath)).getText();
                expect(Checkstring).to.equal("Sorry, wrong password");
            
        });
        it('should change email with Wrong password then save it', async function() {
            await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).clear();
            await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).sendKeys('hebanassif@gmail.com');
            await driver.sleep(1000); 
            await driver.findElement(By.xpath(Selectors.EditProfilePasswordXbath)).sendKeys('HebaAli15');
            await driver.findElement(By.xpath(Selectors.EditProfileSaveButton)).click();
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath(Selectors.EditProfilePasswordMsgErrorXbath)).getText();
            expect(Checkstring).to.equal("Sorry, wrong password");
        });
        
        it('should change email with an existing email then save it', async function() {
            await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).clear();
            await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).sendKeys(TestPerson.EditProfileTestEmailAddress);
            await driver.sleep(1000); 
            await driver.findElement(By.xpath(Selectors.EditProfilePasswordXbath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
            await driver.findElement(By.xpath(Selectors.EditProfileSaveButton)).click();
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileEmailMsgErrorXbath)).getText();
            expect(Checkstring).to.equal("We're sorry, that email is taken.");
        });*/

        it('should change email with current email and right password then save it', async function() {
            await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).clear();
            await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).sendKeys(TestPerson.EditProfileCurrentEmailAddress);
            await driver.sleep(1000); 
            await driver.findElement(By.xpath(Selectors.EditProfilePasswordXbath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
            await driver.findElement(By.xpath(Selectors.EditProfileSaveButton)).click();
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileSuccessMessageXbath)).getText();
            expect(Checkstring).to.equal("Profile saved");
        });

        it('should change email with right password then save it', async function() {
            await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).clear();
            await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).sendKeys('heba.ali99@eng-status.cu.edu.eg');
            await driver.sleep(1000); 
            await driver.findElement(By.xpath(Selectors.EditProfilePasswordXbath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
            await driver.findElement(By.xpath(Selectors.EditProfileSaveButton)).click();
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileSuccessMessageXbath)).getText();
            expect(Checkstring).to.equal("Profile saved");
        });
        after ('Back to Current User',async function() {
            await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).clear();
            await driver.findElement(By.xpath(Selectors.EditProfileEmailXbath)).sendKeys(TestPerson.EditProfileCurrentEmailAddress);
            await driver.sleep(1000); 
            await driver.findElement(By.xpath(Selectors.EditProfilePasswordXbath)).sendKeys(TestPerson.EditProfileCurrentEmailPassword);
            await driver.findElement(By.xpath(Selectors.EditProfileSaveButton)).click();
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath(Selectors.EditProfileSuccessMessageXbath)).getText();
            expect(Checkstring).to.equal("Profile saved");
        });

    afterEach('Log out from profile and close the broswer',async function() {
        await driver.sleep(3000);
        await driver.findElement(By.css(Selectors.ProfileTitleCss)).click();
        await driver.findElement(By.linkText(Selectors.LogoutLinkText)).click();
        await driver.sleep(3000); 
    });
    after(async () => driver.quit());
});