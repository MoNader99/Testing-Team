"use strict";

require("./helpers/setup");

var wd = require("wd"),
    _ = require('underscore'),
    serverConfigs = require('./helpers/appium-servers');

describe("try log in", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;
  var TestPerson = require("./TestCasesInfo");
  var Selectors = require("./helpers/AppSelectorsAndroid");

  before(function () {
    var serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);

    var desired =_.clone(require("./helpers/caps").androidVirtualMM);
    desired.automationName= "UiAutomator2",
    desired.appPackage = "com.example.spotify",
    desired.appActivity = "com.example.spotify.MainActivity"

    return driver
    .init(desired)
    .setImplicitWaitTimeout(3000);
  });


  beforeEach(function () {
    return driver
    .resetApp()
    .sleep(3000)
    
    .elementById(Selectors.LoginButtonID)
    .click()
    .sleep(500)
  });

  after(function () {
    return driver
    .quit()
  });


  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed'
  });


  it("try going back to previous screen and then returning again to login screen", function () {
    return driver
    .sleep(3000)

	  .back().sleep(1000)

    .elementById(Selectors.LoginButtonID)
    .click()
  });

  it("try log in with without any input", function () {
    return driver
    .sleep(3000)

    .elementById(Selectors.LoginSubmitID)
    .click()

    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('Wrong username or password.');
  });


  it("try log in with wrong email", function () {
    return driver
	  .sleep(3000)

    .elementById(Selectors.LoginEmailAddressID)
    .click()
    .sendKeys("ayaelsackaan.1999")
 
	  .elementById(Selectors.LoginPasswordID)
    .click()
    .sendKeys(TestPerson.AccountPassword)
    
    .elementById(Selectors.SpotifyLogoID)
    .click()

	  .elementById(Selectors.LoginSubmitID)
    .click()

    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('Wrong username or password.');
});


it("try log in with wrong password", function () {
    return driver
	  .sleep(3000)

    .elementById(Selectors.LoginEmailAddressID)
    .click()
    .sendKeys(TestPerson.AccountEmailAddress)
 
	  .elementById(Selectors.LoginPasswordID)
    .click()
    .sendKeys("232")
    
    .elementById(Selectors.SpotifyLogoID)
    .click()
    .sleep(300)

	  .elementById(Selectors.LoginSubmitID)
    .click()

    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('Wrong username or password.');
  });


  it("try log in with correct email and password then logout", function () {
    return driver
    .sleep(3000)

    .elementById(Selectors.LoginEmailAddressID)
    .click()
    .sendKeys(TestPerson.AccountEmailAddress)
    
	  .elementById(Selectors.LoginPasswordID)
    .click()
    .sendKeys(TestPerson.AccountPassword)
    
    .elementById(Selectors.SpotifyLogoID)
    .click()
    .sleep(300)

	  .elementById(Selectors.LoginSubmitID)
    .click()
    .click()
    .click()
    .sleep(500)

    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('YAY')
    .sleep(500)

    .elementById(Selectors.SettingButtonID)
    .click()
    .sleep(500)

    .elementById(Selectors.LogOutInSettingsO2ButtonID)
    .click()
    .sleep(500);
  });


  it("try log in with correct email and password then exit app and open again to check if still logged in", function () {
    return driver
	  .sleep(3000)

    .elementById(Selectors.LoginEmailAddressID)
    .click()
    .sendKeys(TestPerson.AccountEmailAddress)
    
	  .elementById(Selectors.LoginPasswordID)
    .click()
    .sendKeys(TestPerson.AccountPassword)
    
    .elementById(Selectors.SpotifyLogoID)
    .click()

	  .elementById(Selectors.LoginSubmitID)
    .click()
    .click()
    .click()
    .sleep(500)

    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('YAY')
    .sleep(500)

    .back()
    //.closeApp()
    .sleep(500)

    .launchApp()
    .sleep(500)

    .elementById(Selectors.SettingButtonID)
    .click()
    .sleep(500)

    .elementById(Selectors.LogOutInSettingsO2ButtonID)
    .click()
    .sleep(500);
  });

});


