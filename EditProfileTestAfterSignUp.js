"use strict";
require("./helpers/setup");
const { assert } = require('chai');
var wd = require("wd"),
  _ = require('underscore'),
  actions = require("./helpers/actions"),
  serverConfigs = require('./helpers/appium-servers');
wd.addPromiseChainMethod('swipe', actions.swipe);

describe("Edit Profile", function () {
  this.timeout(30000000);
  var driver;
  var allPassed = true;
  var appSelectors = require("./helpers/appSelectorsAndroid");
  var TestPerson = require("./TestCasesInfo");
  before(async function () {
    var serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);



    var desired = _.clone(require("./helpers/caps").android);
    desired.automationName = "UiAutomator2",
      desired.appPackage = "com.example.spotify",
      desired.appActivity = "com.example.spotify.MainActivity"

    return driver
      .init(desired)
      .setImplicitWaitTimeout(10000);
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

  beforeEach( function () {
    return driver
    .resetApp()
    .sleep(3000)
    .elementById(appSelectors.SignupButton).click()
    .click()
    .sleep(3000)
    .elementById(appSelectors.SignUpUserNameTextID)
    .text().should.become('Username')
    //.back().sleep(5000)
    .elementById(appSelectors.SignUpUserNameID)
    .sendKeys(TestPerson.EditProfileCurrentUsername)
    .elementById(appSelectors.SignUpPasswordID)
    .sendKeys(TestPerson.EditProfileCurrentEmailPassword)
    .elementById(appSelectors.SignUpNextButtonOfThePassAndUsernamePage)
    .click()
    .sleep(5000)
    .elementById(appSelectors.SignUpEmailTextID) ///to check that we are on the same page
    .text().should.become('Email')
    .sleep(5000)
    .elementById(appSelectors.SignUpEmailID)
    .sendKeys(TestPerson.EditProfileCurrentEmailAddress)
    .elementById(appSelectors.SignUpNextButtonOfTheEmailAndGenderPage)
    .click()
    .sleep(5000)
    .elementById(appSelectors.SignupDateOfBirthTextId)
    .text().should.become('Date of birth')
    .sleep(3000)
    .elementById(appSelectors.SignupDateOfBirthId)
    .click()
    .elementById(appSelectors.SignupYear)
    .click()
    .elementById(appSelectors.SignupYearsIDInSwipeList)
    .then(function (els) {

        return driver.swipe({
            startX: '70', startY: '543',
            endX: '70', endY: '1750',
            duration: 500
        });
    })
    .elementByXPath(appSelectors.SignupYear2007BYXPATH)
    .click()
    .elementById(appSelectors.SignupDateOfBirthOkButton)
    .click()
    .elementById(appSelectors.SignupDoneButton)
    .click()
    .sleep(3000)
    .elementById(appSelectors.SettingButtonID)
    .click()
    .sleep(3000)
    .elementById(appSelectors.ViewProfileButtonInSettingsO1ID)
    .click()
    .sleep(1000)
    .elementById(appSelectors.EditProfileButtonID)
    .click();            
});

  it("Should check if the info exist", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileUsernameID)
      .text().should.become(TestPerson.EditProfileCurrentUsername)
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .text().should.become("")
      .elementById(appSelectors.EditProfileNewPasswordID)
      .text().should.become("");
  });

  it("Should press save without any change", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("info saved")
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
      .text().should.become("Edit profile ")
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
      .text().should.become("Edit profile ")
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
      .text().should.become("info saved")
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
      .text().should.become("Edit profile ");
  });

  it("Should change password with too short new password ", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .sendKeys(TestPerson.EditProfileCurrentPasswordID)
      .elementById(appSelectors.EditProfileNewPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileNewPasswordID)
      .sendKeys("14")
      .elementById(appSelectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementById(appSelectors.EditProfileLogoID)
      .text().should.become("Edit profile ");

  });

  it("Should change password with right new password ", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .sendKeys(TestPerson.EditProfileCurrentPasswordID)
      .elementById(appSelectors.EditProfileNewPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileNewPasswordID)
      .sendKeys(TestPerson.EditProfileTestEmailPassword)
      .elementById(appSelectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("new password is saved")
  });

  it("Should change password new password (back to its default)", async function () {
    return driver
      .sleep(3000)
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileCurrentPasswordID)
      .sendKeys(TestPerson.EditProfileCurrentPasswordID)
      .elementById(appSelectors.EditProfileNewPasswordID)
      .clear()
      .elementById(appSelectors.EditProfileNewPasswordID)
      .sendKeys(TestPerson.EditProfileTestEmailPassword)
      .elementById(appSelectors.EditProfileSaveButtonID)
      .click()
      .sleep(1000)
      .elementByXPath('/hierarchy/android.widget.Toast')
      .text().should.become("new password is saved")
  });

});