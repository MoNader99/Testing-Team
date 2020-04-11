"use strict";

require("./helpers/setup");
var Selectors=require("./helpers/AppSelectorsAndroid");

var wd = require("wd"),
    _ = require('underscore'),
    serverConfigs = require('./helpers/appium-servers');

describe("try create playlist", function () {
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
    .sleep(500)

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

    .elementById(Selectors.LibraryIconID)
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


  it("try create playlist then cancel", function () {
    return driver
    .sleep(3000)

    .elementById(Selectors.CreatePlaylistID)
    .click()
    .sleep(500)

    .elementById(Selectors.CreatePlaylistCancelID)
    .click()
    .sleep(500)  
    
    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('Cancelled');
  });


  it("try create playlist", function () {
    return driver
    .sleep(3000)

    .elementById(Selectors.CreatePlaylistID)
    .click()
    .sleep(500)

    .elementById(Selectors.CreatePlaylistTextFieldID)
    .sendKeys('Pop')
    .sleep(500)

    .elementById(Selectors.CreatePlaylistSetID)
    .click()
    .sleep(500)
    
    .elementById(Selectors.CreatedPlaylistNameID)
    .text().should.become('Pop')
    .sleep(500);    
  });


  it("try create playlist with no name", function () {
    return driver
    .sleep(3000)

    .elementById(Selectors.CreatePlaylistID)
    .click()
    .sleep(500)

    .elementById(Selectors.CreatePlaylistSetID)
    .click()
    .sleep(500) 
    
    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('Enter playlist name');
  });


  it("try create playlist with name already exists", function () {
    return driver
    .sleep(3000)

    .elementById(Selectors.CreatePlaylistID)
    .click()
    .sleep(500)

    .elementById(Selectors.CreatePlaylistTextFieldID)
    .sendKeys('Jazz')
    .sleep(500)

    .elementById(Selectors.CreatePlaylistSetID)
    .click()
    .sleep(500)
    
    .elementById(Selectors.CreatedPlaylistNameID)
    .text().should.become('Jazz')
    .sleep(500)  

    .elementById(Selectors.CreatePlaylistID)
    .click()
    .sleep(500)

    .elementById(Selectors.CreatePlaylistTextFieldID)
    .sendKeys('Jazz')
    .sleep(500)

    .elementById(Selectors.CreatePlaylistSetID)
    .click()
    .sleep(500)

    .elementByXPath('/hierarchy/android.widget.Toast')
    .text().should.become('Failed, Code:400');
  });

});