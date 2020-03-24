SignUpTestAndroid
"use strict";

require("./helpers/setup");

var wd = require("wd"),
    _ = require('underscore'),
    serverConfigs = require('./helpers/appium-servers');

describe("SignUp Test", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);

    var desired =_.clone(require("./helpers/caps").android);
    desired.automationName= "UiAutomator2",
    desired.appPackage= "com.sec.android.app.popupcalculator",//to be updated
    desired.appActivity= ".Calculator" //to be updated

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

  it("should press on sign up button", function () {
    return driver
	  .sleep(3000)
      .elementById('')
      .click()
     
  });
  var Checkstring;
  //////////email test cases
    ///////test1:invalid mail
  it("should test entering invalid email button", function () {
    return driver
	  .sleep(3000)
      .elementById('')
      .sendKeys("fxv")
     /////clicking on next
     .elementById('')
     .click()
     //Checkstring= driver.elementById('').getText(); //finding the msg place and copying its text
     //expect(Checkstring).to.equal('The email address you supplied is invalid.');//comparing the text copied with the expected one
  });
    /////test 2: Already exist
    /////test 3: Not entered
   ///////confirm email test cases testing
    //test 1: confirm email doesn't match 
    //test 2: invalid email 
    //test 3: Not entered 
   ///////Password test cases testing
    /////test 1: Very Short password
    /////test 2: Not entered
   ///////Displayname test cases testing
    /////test 1: very long max 30 length
    /////test 2: Not entered
    ///////Day of birth test cases testing
            /////test 1: Invalid not less than 1
            /////test 2: Invalid not more than 31
            /////test 3: Invalid not more than 2 digits such as 017
            /////test 4: Invalid entering negative number
            /////test 5: Invalid not entered
            /////test 6: Invalid not accepting any letter including special chars
    ///////Month of birth test cases testing
            /////test 1: Not entered       
  ///////Year of birth test cases testing
            /////test 1: Invalid not less than 1900
            /////test 2: Invalid not more than 1999
            /////test 3: Invalid not more than 4 digits such as 01956
            /////test 4: Invalid entering negative number
            /////test 5: Invalid not entered
            /////test 6: Invalid not accepting any letter including special chars
     ///////Female-male test cases testing
            /////test 1: Not entered


      ///signingup with facebook      
            ////Sucessfull Test case       






});