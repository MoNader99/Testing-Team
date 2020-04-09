"use strict";

require("./helpers/setup");

var wd = require("wd"),
    _ = require('underscore'),
    serverConfigs = require('./helpers/appium-servers');

describe("Spotify app", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);

    var desired =_.clone(require("./helpers/caps").androidVirtualMM);
    desired.automationName= "UiAutomator2",
    desired.app= "C:/Users/maram/Downloads/Spotify.apk"

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

  it("try log in with correct email and password", function () {
    return driver
	  .sleep(3000)
      .elementById('com.example.spotify:id/login')
      .click()
	  //.sleep(300)
      .elementById('com.example.spotify:id/usernameLoginEdittext')
      .click()
      .sendKeys("ayaelsackaan.1999@gmail.com")
    //.sleep(300)
    
	  .elementById('com.example.spotify:id/passwordLoginEdittext')
      .click()
      .sendKeys("222")
    .sleep(300)
    
    .elementById('com.example.spotify:id/spotifyImageView')
    .click()
    .sleep(300)

	  .elementById('com.example.spotify:id/loginButton')
      .click()
 
    .click()
    .click()
    .sleep(300)

    .elementById('com.example.spotify:id/settingsImageview')
    .click()
    .sleep(300)

    .elementById('com.example.spotify:id/logOut')
    .click()
    .sleep(300);
  });

  it("try log in with correct email and password", function () {
    return driver
	  .sleep(3000)
      .elementById('com.example.spotify:id/login')
      .click()
	  //.sleep(300)
      .elementById('com.example.spotify:id/usernameLoginEdittext')
      .click()
      .sendKeys("ayaelsackaan.1999")
    //.sleep(300)
    
	  .elementById('com.example.spotify:id/passwordLoginEdittext')
      .click()
      .sendKeys("222")
    .sleep(300)
    
    .elementById('com.example.spotify:id/spotifyImageView')
    .click()
    .sleep(300)

	  .elementById('com.example.spotify:id/loginButton')
      .click()
 
    .click()
    .click()
    .sleep(300)

    .elementById('com.example.spotify:id/settingsImageview')
    .click()
    .sleep(300)

    .elementById('com.example.spotify:id/logOut')
    .click()
    .sleep(300);


    
  });




});
