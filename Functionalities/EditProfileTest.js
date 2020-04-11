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
      .setImplicitWaitTimeout(3000)
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

  it("Should go to edit profile page", async function () {
    return driver
      .sleep(3000)
      .elementById(Selectors.SettingButtonID)
      .click()
      .sleep(3000)
      .elementById(Selectors.UserNameInSettingsID)
      .text().should.become(TestPerson.EditProfileCurrentUsername)
      .elementById(Selectors.ViewProfileButtonInSettingsO1ID)
      .click()
      .sleep(1000)
      .elementById(Selectors.ProfileEmailTextboxId)
      .text().should.become(TestPerson.EditProfileCurrentEmailAddress)
      .elementById(Selectors.EditProfileButtonID)
      .click();
  });

  it("Should check if the info exist", async function () {
    return driver
      .sleep(3000)
      .elementById(Selectors.EditProfileUsernameID)
      .text().should.become(TestPerson.EditProfileCurrentUsername)
      .elementById(Selectors.EditProfileCurrentPasswordID)
      .text().should.become("")
      .elementById(Selectors.EditProfileNewPasswordID)
      .text().should.become("");
  });

  it("Should press save without any change", async function () {
    return driver
      .sleep(3000)
      .elementById(Selectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("info saved")
  });

  it("Should clear username then press save", async function () {
    return driver
      .sleep(3000)
      .elementById(Selectors.SettingButtonID)
      .click()
      .sleep(3000)
      .elementById(Selectors.UserNameInSettingsID)
      .text().should.become(TestPerson.EditProfileCurrentUsername)
      .elementById(Selectors.ViewProfileButtonInSettingsO1ID)
      .click()
      .sleep(1000)
      .elementById(Selectors.ProfileEmailTextboxId)
      .text().should.become(TestPerson.EditProfileCurrentEmailAddress)
      .elementById(Selectors.EditProfileButtonID)
      .click()
      .sleep(3000)
      .elementById(Selectors.EditProfileUsernameID)
      .clear()
      .elementById(Selectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("Enter your username")
  });

  it("Should change username with existing one then press save", async function () {
    return driver
      .sleep(3000)
      .elementById(Selectors.EditProfileUsernameID)
      .clear()
      .elementById(Selectors.EditProfileUsernameID)
      .sendKeys("heba")
      .elementById(Selectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("Username is used")
  });

  it("Should change username with right one then press save", async function () {
    return driver
      .sleep(3000)
      .elementById(Selectors.EditProfileUsernameID)
      .clear()
      .elementById(Selectors.EditProfileUsernameID)
      .sendKeys("Maram")
      .elementById(Selectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("info saved")
  });

  it("Should change username right one then press save(back to its default)", async function () {
    return driver
      .sleep(3000)
      .elementById(Selectors.SettingButtonID)
      .click()
      .sleep(3000)
      .elementById(Selectors.UserNameInSettingsID)
      .text().should.become(TestPerson.EditProfileCurrentUsername)
      .elementById(Selectors.ViewProfileButtonInSettingsO1ID)
      .click()
      .sleep(1000)
      .elementById(Selectors.ProfileEmailTextboxId)
      .text().should.become(TestPerson.EditProfileCurrentEmailAddress)
      .elementById(Selectors.EditProfileButtonID)
      .click()
      .sleep(3000)
      .elementById(Selectors.EditProfileUsernameID)
      .clear()
      .elementById(Selectors.EditProfileUsernameID)
      .sendKeys(TestPerson.EditProfileCurrentUsername)
      .elementById(Selectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("info saved")
  });

  it("Should change password with wrong current password ", async function () {
    return driver
      .sleep(3000)
      .elementById(Selectors.SettingButtonID)
      .click()
      .sleep(3000)
      .elementById(Selectors.UserNameInSettingsID)
      .text().should.become(TestPerson.EditProfileCurrentUsername)
      .elementById(Selectors.ViewProfileButtonInSettingsO1ID)
      .click()
      .sleep(1000)
      .elementById(Selectors.ProfileEmailTextboxId)
      .text().should.become(TestPerson.EditProfileCurrentEmailAddress)
      .elementById(Selectors.EditProfileButtonID)
      .click()
      .sleep(3000)
      .elementById(Selectors.EditProfileCurrentPasswordID)
      .clear()
      .elementById(Selectors.EditProfileCurrentPasswordID)
      .sendKeys("heba")
      .elementById(Selectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("Enter your old password correctly")
  });

  it("Should change password with too short new password ", async function () {
    return driver
      .sleep(3000)
      .elementById(Selectors.EditProfileCurrentPasswordID)
      .clear()
      .elementById(Selectors.EditProfileCurrentPasswordID)
      .sendKeys(TestPerson.EditProfileCurrentPasswordID)
      .elementById(Selectors.EditProfileNewPasswordID)
      .clear()
      .elementById(Selectors.EditProfileNewPasswordID)
      .sendKeys("14")
      .elementById(Selectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("Password is too short")

  });

  it("Should change password with right new password ", async function () {
    return driver
      .sleep(3000)
      .elementById(Selectors.SettingButtonID)
      .click()
      .sleep(3000)
      .elementById(Selectors.UserNameInSettingsID)
      .text().should.become(TestPerson.EditProfileCurrentUsername)
      .elementById(Selectors.ViewProfileButtonInSettingsO1ID)
      .click()
      .sleep(1000)
      .elementById(Selectors.ProfileEmailTextboxId)
      .text().should.become(TestPerson.EditProfileCurrentEmailAddress)
      .elementById(Selectors.EditProfileButtonID)
      .click()
      .sleep(3000)
      .elementById(Selectors.EditProfileCurrentPasswordID)
      .clear()
      .elementById(Selectors.EditProfileCurrentPasswordID)
      .sendKeys(TestPerson.EditProfileCurrentPasswordID)
      .elementById(Selectors.EditProfileNewPasswordID)
      .clear()
      .elementById(Selectors.EditProfileNewPasswordID)
      .sendKeys(TestPerson.EditProfileTestEmailPassword)
      .elementById(Selectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("new password is saved")
  });

  it("Should change password new password (back to its default)", async function () {
    return driver
      .sleep(3000)
      .elementById(Selectors.SettingButtonID)
      .click()
      .sleep(3000)
      .elementById(Selectors.UserNameInSettingsID)
      .text().should.become(TestPerson.EditProfileCurrentUsername)
      .elementById(Selectors.ViewProfileButtonInSettingsO1ID)
      .click()
      .sleep(1000)
      .elementById(Selectors.ProfileEmailTextboxId)
      .text().should.become(TestPerson.EditProfileCurrentEmailAddress)
      .elementById(Selectors.EditProfileButtonID)
      .click()
      .sleep(3000)
      .elementById(Selectors.EditProfileCurrentPasswordID)
      .clear()
      .elementById(Selectors.EditProfileCurrentPasswordID)
      .sendKeys(TestPerson.EditProfileCurrentPasswordID)
      .elementById(Selectors.EditProfileNewPasswordID)
      .clear()
      .elementById(Selectors.EditProfileNewPasswordID)
      .sendKeys(TestPerson.EditProfileTestEmailPassword)
      .elementById(Selectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("new password is saved")
  });

});