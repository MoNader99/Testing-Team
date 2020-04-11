"use strict";
require("./helpers/setup");
const { assert } = require('chai');
var wd = require("wd"),
  _ = require('underscore'),
  actions = require("./helpers/actions"),
  serverConfigs = require('./helpers/appium-servers');
wd.addPromiseChainMethod('swipe', actions.swipe);

describe("Login with Facebook", function () {
  this.timeout(300000);
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
    .elementById(appSelectors.LoginWithFacebookButtonID)
    .click()
    .sleep(3000);
  });

  it("Should press cancel button", async function () {
    return driver
      .sleep(1000)
      .elementByXPath(appSelectors.LoginWithFacebookCancelButtonXpath)
      .click()
      .sleep(3000)
      .elementById(appSelectors.SpotifyLogoHomeScreen)
      .text().should.become("Spotify");
  });

  it("Should press close button", async function () {
    return driver
      .sleep(1000)
      .elementByXPath(appSelectors.LoginWithFacebookCloseButtonXpath)
      .click()
      .sleep(3000)
      .elementById(appSelectors.SpotifyLogoHomeScreen)
      .text().should.become("Spotify");
  });

  it("Should press Contiue button", async function () {
    return driver
      .sleep(1000)
      .elementByXPath(appSelectors.LoginWithFacebookContiueButtonXpath)
      .click()
      .sleep(1000)
      .elementById(appSelectors.SettingButtonID)
      .click()
  });



});