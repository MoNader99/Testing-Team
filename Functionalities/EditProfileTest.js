"use strict";
require("../helpers/setup");
const { assert } = require('chai');
var wd = require("wd"),
  _ = require('underscore'),
  serverConfigs = require('../helpers/appium-servers');

describe("Test Edit Profile", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;
  var TestPerson = require("./TestCasesInfo");
  var Selectors = require("../helpers/AppSelectorsAndroid");
  before("Login to the profile", async function () {
    var serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("../helpers/logging").configure(driver);

    var desired = _.clone(require("../helpers/caps").android);
    desired.automationName = "UiAutomator2",
      desired.appPackage = "com.example.spotify",
      desired.appActivity = "com.example.spotify.MainActivity"

    return await driver
      .init(desired)
      .setImplicitWaitTimeout(3000);
  });

  beforeEach(function () {
    return driver
      .resetApp()
      .sleep(3000)
      .elementById(Selectors.LoginButtonID)
      .click()
      .elementById(Selectors.LoginEmailAddressID)
      .click()
      .sendKeys(TestPerson.AccountEmailAddress)
      .elementById(Selectors.LoginPasswordID)
      .click()
      .sendKeys(TestPerson.AccountPassword)
      .sleep(300)
      .elementById(Selectors.SpotifyLogoHomeScreen)
      .click()
      .sleep(300)
      .elementById(Selectors.LoginSubmitID)
      .click()
      .sleep(300)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become('YAY')
  });

  after(async function () {
    return driver
      .quit()
      .finally(function () {
      });
  });

  afterEach(async function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

 
  it("Should check if the info exist", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileUsernameID)
      .text().should.become(TestPerson.EditProfileCurrentUsername)
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .text().should.become("Create your password")
      .elementById(appSelectors.EditProfileNewPasswordID)
      .text().should.become("Create your password");
  });

  it("Should press save without any change", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("info saved ")
  });

  it("Should clear username then press save", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileUsernameID)
      .clear()
      .elementById(appSelectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementById(appSelectors.EditProfileLogoID)
      .text().should.become("Edit profile")
  });

  it("Should change username with existing one then press save", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileUsernameID)
      .clear()
      .elementById(appSelectors.EditProfileUsernameID)
      .sendKeys("heba")
      .elementById(appSelectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementById(appSelectors.EditProfileLogoID)
      .text().should.become("Edit profile")
  });

  it("Should change username with right one then press save", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileUsernameID)
      .clear()
      .elementById(appSelectors.EditProfileUsernameID)
      .sendKeys("Maram")
      .elementById(appSelectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("info saved ")
  });

  it("Should change username right one then press save(back to its default)", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileUsernameID)
      .clear()
      .elementById(appSelectors.EditProfileUsernameID)
      .sendKeys(TestPerson.EditProfileCurrentUsername)
      .elementById(appSelectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("info saved ")
  });

  it("Should change password with empty current password ", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileNewPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileNewPasswordID)
      .sendKeys(TestPerson.EditProfileTestEmailPassword)
      .elementById(appSelectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementById(appSelectors.EditProfileLogoID)
      .text().should.become("Edit profile");
  });

  it("Should change password with empty new password ", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .sendKeys(TestPerson.EditProfileCurrentEmailPassword)
      .elementById(appSelectors.EditProfileNewPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementById(appSelectors.EditProfileLogoID)
      .text().should.become("Edit profile");

  });

  it("Should change password with wrong current password ", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .sendKeys("heba")
      .elementById(appSelectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementById(appSelectors.EditProfileLogoID)
      .text().should.become("Edit profile");
  });

  it("Should change password with too short new password ", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .sendKeys(TestPerson.EditProfileCurrentEmailPassword)
      .elementById(appSelectors.EditProfileNewPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileNewPasswordID)
      .sendKeys("14")
      .elementById(appSelectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementById(appSelectors.EditProfileLogoID)
      .text().should.become("Edit profile");

  });

  it("Should change password with right new password ", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .sendKeys(TestPerson.EditProfileCurrentEmailPassword)
      .elementById(appSelectors.EditProfileNewPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileNewPasswordID)
      .sendKeys(TestPerson.EditProfileTestEmailPassword)
      .elementById(appSelectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become(" new password is saved ")
  });
});