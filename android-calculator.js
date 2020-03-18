"use strict";

require("./helpers/setup");

var wd = require("wd"),
    _ = require('underscore'),
    serverConfigs = require('./helpers/appium-servers');

describe("android calculator", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);

    var desired =_.clone(require("./helpers/caps").android);
    desired.automationName= "UiAutomator2",
    desired.appPackage= "com.sec.android.app.popupcalculator",
    desired.appActivity= ".Calculator"

    return driver
      .init(desired)
      .setImplicitWaitTimeout(3000);
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

  it("should add two numbers", function () {
    return driver
	  .sleep(3000)
      .elementById('com.sec.android.app.popupcalculator:id/bt_09')
      .click()
	  .sleep(300)
	  .elementById('com.sec.android.app.popupcalculator:id/bt_add')
      .click()
	  .sleep(300)
	  .elementById('com.sec.android.app.popupcalculator:id/bt_08')
      .click()
	  .sleep(300)
	  .elementById('com.sec.android.app.popupcalculator:id/bt_equal')
      .click()
	  .sleep(300);
  });
});
