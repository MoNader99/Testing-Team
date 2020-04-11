"use strict";

require("../helpers/setup");

var wd = require("wd"),
    _ = require('underscore'),
    serverConfigs = require('../helpers/appium-servers');

describe("try log in into app", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("../helpers/logging").configure(driver);

    var desired =_.clone(require("../helpers/caps").android);
    desired.automationName= "UiAutomator2",
    desired.app="C:/Users/maram/Downloads/TestApp.apk"

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


  it("try going back to previous screen", function () {
    return driver
    .sleep(3000)
    .elementById('com.example.spotify:id/login')
    .click()

	  .back().sleep(1000)

    .elementById('com.example.spotify:id/login')
    .click()
  });


  it("try log in with without any input", function () {
    return driver
    .sleep(3000)
    .elementById('com.example.spotify:id/loginButton')
    .click()

    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('Wrong username or password.');
  });

  it("try log in with wrong email", function () {
    return driver
	  .sleep(3000)

      .elementById('com.example.spotify:id/usernameLoginEdittext')
      .click()
      .sendKeys("ayaelsackaan.1999")
 
	  .elementById('com.example.spotify:id/passwordLoginEdittext')
      .click()
      .sendKeys("222")
    
    .elementById('com.example.spotify:id/spotifyImageView')
    .click()
    .sleep(300)

	  .elementById('com.example.spotify:id/loginButton')
    .click()

    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('Wrong username or password.');
  });


  it("try log in with wrong password", function () {
    return driver
	  .sleep(3000)

      .elementById('com.example.spotify:id/usernameLoginEdittext')
      .click()
      .sendKeys("ayaelsackaan.1999@gmail.com")
 
	  .elementById('com.example.spotify:id/passwordLoginEdittext')
      .click()
      .sendKeys("232")
    
    .elementById('com.example.spotify:id/spotifyImageView')
    .click()
    .sleep(300)

	  .elementById('com.example.spotify:id/loginButton')
    .click()

    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('Wrong username or password.');

  });


  it("try log in with correct email and password then logout", function () {
    return driver
	  .sleep(3000)
      .elementById('com.example.spotify:id/login')
      .click()
	
      .elementById('com.example.spotify:id/usernameLoginEdittext')
      .click()
      .sendKeys("ayaelsackaan.1999@gmail.com")
    
	  .elementById('com.example.spotify:id/passwordLoginEdittext')
      .click()
      .sendKeys("222")
    .sleep(300)
    
    .elementById('com.example.spotify:id/spotifyImageView')
    .click()
    .sleep(300)

	  .elementById('com.example.spotify:id/loginButton')
    .click()
    .sleep(300)

    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('YAY')

    .elementById('com.example.spotify:id/settingsImageview')
    .click()
    .sleep(300)

    .elementById('com.example.spotify:id/logOut')
    .click()
    .sleep(300);
  });



});
