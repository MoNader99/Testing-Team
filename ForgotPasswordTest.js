+"use strict";

require("./helpers/setup");

var wd = require("wd"),
    _ = require('underscore'),
    serverConfigs = require('./helpers/appium-servers');

describe("try forgot password", function () {
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
    .setImplicitWaitTimeout(3000)

  });


  beforeEach(function () {
    return driver
    .resetApp()
    .sleep(3000)
    
    .elementById(Selectors.LoginButtonID)
    .click()
    
    .elementById(Selectors.ForgotPasswordButtonID)
    .click()
    .sleep(500); 
  });


  after(function () {
    return driver
    .quit()
    .finally(function () {
    });
  });


  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });


  it("try going back to previous screen and returning to forgot password screen", function () {
    return driver
    .sleep(3000)

	  .back().sleep(1000)

    .elementById(Selectors.ForgotPasswordButtonID)
    .click()
  });


  it("try forgot password without any input", function () {
    return driver
    .sleep(3000)

    .elementById(Selectors.ForgotPasswordSubmitID)
    .click()

    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('Please enter an email');
  });


  it("try forgot password with invalid email", function () {
    return driver
	  .sleep(3000)

    .elementById(Selectors.ForgotPasswordEmailID)
    .click()
    .sendKeys("ayaelsackaan.1999")
 
    .back().sleep(500)

    .elementById(Selectors.ForgotPasswordSubmitID)
    .click()

    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('Please enter a valid email!');
  });


  it("try forgot password with valid email", function () {
    return driver
	  .sleep(3000)

      .elementById(Selectors.ForgotPasswordEmailID)
      .click()
      .sendKeys(TestPerson.AccountEmailAddress)
 
      .elementById(Selectors.ForgotPasswordSubmitID)
      .click()

    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('A recovery link has been sent to your email.');
  });


});