"use strict";

require("./helpers/setup");

var wd = require("wd"),
    _ = require('underscore'),
    serverConfigs = require('./helpers/appium-servers');

describe("SignUp Test", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;
  var appSelectors=require("./helpers/AppSelectorsAndroid");
  
  before(function () {
    var serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);
    
    
    
    var desired =_.clone(require("./helpers/caps").android);
    desired.automationName= "UiAutomator2",
    desired.appPackage= "com.example.spotify",
    desired.appActivity= "com.example.spotify.MainActivity" 

    return driver
      .init(desired)
      .setImplicitWaitTimeout(10000);
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
	  .sleep(10000)
      .elementById(appSelectors.SignupButton)
      .click()
    .sleep(10000)  
      .elementById(appSelectors.SignUpUserNameID)//to check that the next page has been reached successfuly
     
  });
  
   ///////Displayname test cases testing
    /////test 1: very long max 30 length
  it("should test the username length", function () {
      return driver
      .sleep(5000)
        .elementById(appSelectors.SignUpUserNameID)
        .click()
        .sendKeys('fffffffffffffffffffffffgggghhh')
        ///check that it only accepts till the last g letter
       
  });
    /////test 2: Not entered
  it("should test if the username is not entered", function () {
      return driver
      .sleep(5000)
        .elementById(appSelectors.SignUpUserNameID)
        .click()
      .sleep(5000)  
        .elementById(appSelectors.SignUpPasswordID)//clicking anywhere for the error msg to appear
        ///check the error msg
       
  });
   ///////Password test cases testing
    /////test 1: Very Short password
  it("should test if the password is not entered", function () {
      return driver
      .sleep(5000)
        .elementById(appSelectors.SignUpPasswordID)
        .click()
        .sendKeys('fff')
      .sleep(5000)   
        .elementById(appSelectors.SignUpUserNameID)//clicking anywhere for the error msg to appear
        ///check the error msg
       
  });
    /////test 2: Not entered
  it("should test if the password is not entered", function () {
      return driver
      .sleep(5000)
        .elementById(appSelectors.SignUpPasswordID)
        .clear()
      .sleep(5000)  
        .elementById(appSelectors.SignUpUserNameID)//clicking anywhere for the error msg to appear
        ///check the error msg
       
  });
    ///////////////////////////////
    //successful case for username and password to get to the next page
  it("should put a successful case for username and password to get to the next page", function () {
      return driver
      .sleep(3000)
        .elementById(appSelectors.SignUpUserNameID)
        .sendKeys("akjdhbhfdvfv")
      .sleep(5000)  
        .elementById(appSelectors.SignUpPasswordID)
        .sendKeys("akjdhbh")
      .sleep(5000)
        .elementById(appSelectors.SignUpNextButtonOfThePassAndUsernamePage) 
        .click()
  });
    //////////////////////////////
   //////////email test cases
    ///////test1:invalid mail //fxv//hjgbhg@hjg.co//1234@hgd.c//1@g.com
  it("should test entering invalid email ", function () {
    return driver
	  .sleep(3000)
      .elementById(appSelectors.SignUpEmailID)
      .sendKeys("fxv")
     /////checking error msg
    
  });
    /////test 2: Already exist
  it("should test  the email if it is aleardy exist", function () {
      return driver
      .sleep(3000)
        .elementById(appSelectors.SignUpEmailID)
        .sendKeys("")//an existing email account
       /////checking error msg
      
  });
    /////test 3: Not entered
  it("should test the email if it is not entered", function () {
      return driver
      .sleep(3000)
        .elementById(appSelectors.SignUpEmailID)
        .clear()
       /////checking error msg
      
  });
    ///////Female-male test cases testing
            /////test 1: Not entered //un able to not enter

   ///////entering a successful case to reach the next page
  it("should enter a successful case for email and gender to reach the next page ", function () {
    return driver
    .sleep(5000)
     .elementById(appSelectors.SignUpEmailID)
     .sendKeys("aya.sameh.99@gmail.com")
    .sleep(5000) 
     .elementById(appSelectors.SignUpNextButtonOfTheEmailAndGenderPage)
   
  });
    ///date of birth
       ////test1: Not Entered
  it("should test the date of birth if it is not entered", function () {
        return driver
        .sleep(3000)
          .elementById(appSelectors.SignupDoneButton)
          .click()
         /////checking error msg
        
  });

   ///////confirm email test cases testing //they didn't do it
    //test 1: confirm email doesn't match 
    //test 2: invalid email 
    //test 3: Not entered 
    ///signingup with facebook      
 
});