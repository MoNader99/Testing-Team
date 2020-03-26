"use strict";

const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser("chrome").build();
var Selectors=require("../AppSelectorsRealSpot");
var Msgs=require("../AppErrorMsgsRealSpot");

describe('SignUpTest', function(){
      this.timeout('1500000000');
      var Checkstring;
    it('should go to spotify.com and get its title',async function() {
        await driver.get("https://www.spotify.com/eg-en/");
        const titleSpotHome = await driver.getTitle();
        await driver.sleep(5000);
        expect(titleSpotHome).to.equal('Music for everyone - Spotify');//testing that i reached the req page
    })

    it('should press on SignUp button and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.SignUpbutton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Sign up - Spotify');//testing that i reached the req page
    }) 

        ///////email test cases testing
            /////test 1: invalid email //sdf//12334@gamil.com//asdfsd@gmail.co ////adshgdbhhhhhhhhh@hsjdcbshcbhsdbc.com
    it('should test the case of entering an invalid email',async function() {        
            await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("fxv");
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
             Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
            expect(Checkstring).to.equal(Msgs.SignUpEmailInvalidErrormsg);//comparing the text copied with the expected one 
    }) 

            /////test 2: Already exist ///not supported by app Spot
    it('should test the case of entering an email which is already token',async function() {       
            await driver.findElement(By.xpath(Selectors.SignUpEmail)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("maram311999@hotmail.com");
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
            expect(Checkstring).to.equal(Msgs.SignUpEmailTakenErrormsg);//comparing the text copied with the expected one 
    })    

            /////test 3: Not entered
    it('should test the case of not entering an email',async function() {
            await driver.findElement(By.xpath(Selectors.SignUpEmail)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
            expect(Checkstring).to.equal(Msgs.SignUpEmailEmptyErrormsg);//comparing the text copied with the expected one
    })

        ///////confirm email test cases testing
            //test 1: confirm email doesn't match  ///not supported by app Spot
    it('should test the case of entering a confirm email which does not match the entered one',async function() {       
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).sendKeys("aya.sameh.99@gmail.com");
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidConfirmEmailmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpEmailNotMatchingErrormsg);
    })    

            //test 2: invalid email 
    it('should test the case of entering an Invalid confirm email',async function() {
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).sendKeys("sda");
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidConfirmEmailmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpEmailInvalidErrormsg);
    })

            //test 3: Not entered 
    it('should test the case of  not entering an confirm email',async function() {        
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidConfirmEmailmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpEmailEmptyErrormsg);
    })    

        ///////Password test cases testing
            /////test 1: Very Short password//or verylong on real spotify they don't accept more than 30 char
    it('should test the case of entering a very short password',async function() { 
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).sendKeys("aya");
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidPasswordmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpPasswordShortErrormsg);
    })

            /////test 2: Not entered
    it('should test the case of not entering a password',async function() { 
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidPasswordmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpPasswordEmptyErrormsg);
    })

        ///////Displayname test cases testing
            /////test 1: very long max 30 length
    it('should test the case of entering a very long Displayname',async function() {         
            await driver.findElement(By.xpath(Selectors.SignUpDispName)).sendKeys("lsvffffffffffdddddddddddddddddkkkkkk");//should only take till lsvffffffffffddddddddddddddddd only
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).click();
            await driver.sleep(5000);
            //Checkstring = await driver.findElement(By.xpath(Selectors.SignUpDispName)).getText();
            //expect(Checkstring).to.equal("lsvffffffffffddddddddddddddddd");
    })        
            
            /////test 2: Not entered
    it('should test the case of not entering a Displayname',async function() {          
            await driver.findElement(By.xpath(Selectors.SignUpDispName)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpSubmitButton)).click();///msg won't appear untill we press the submit button
            await driver.sleep(6000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDispNamemsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDispNameEmptyErrormsg);///not working here
    })     

        ///////Day of birth test cases testing
            /////test 1: Invalid not less than 1
    it('should test the case of entering an invalid Day of birth (less than 1)',async function() {         
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("0");
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDayInvalidErrormsg);
    })

            /////test 2: Invalid not more than 31
    it('should test the case of entering an invalid Day of birth (more than 31)',async function() {
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("35");
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDayInvalidErrormsg);
    })

            /////test 3: Invalid not more than 2 digits such as 017 /***/
    it('should test the case of entering an invalid Day of birth (more than 2 digits)',async function() {
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("006");
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDayInvalidErrormsg);
    })       
            /////test 4: Invalid entering negative number//or a decimal no.//or + /***/
    it('should test the case of entering an invalid Day of birth (negative number)',async function() {       
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("-4");
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDayInvalidErrormsg);
    })        
            /////test 5: Invalid not entered
    it('should test the case of not entering a Day of birth',async function() {        
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDayEmptyErrormsg);
    })         

             ////////////////////////////////////////////
            //////////////////////////////////test 6: Invalid not accepting any letter including special chars
             ////////////////////////////////////////////


        ///////Month of birth test cases testing
            /////test 1: Not entered
    it('should test the case of not entering a Month of birth',async function() {         
            await driver.findElement(By.xpath(Selectors.SignUpSubmitButton)).click();///msg won't appear untill we press the submit button
            await driver.sleep(6000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidMonthOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpMonthInvalidErrormsg);
    })    
        
       ///////Year of birth test cases testing
            /////test 1: Invalid not less than 1900
    it('should test the case of entering an invalid Year of birth (less than 1900)',async function() {        
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("1800");
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpYearInvalidErrormsg);
    })
            /////test 2: Invalid not more than 1999
    it('should test the case of entering an invalid Year of birth (more than 1999)',async function() {  
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("2000");
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpYearInvalidTooYoungErrormsg);
    })
            /////test 3: Invalid not more than 4 digits such as 01956 /***/
    it('should test the case of entering an invalid Year of birth (more than 4 digits)',async function() {          
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("01956");
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpYearInvalidErrormsg);
    })        
            /////test 4: Invalid entering negative number //or a decimal no.//or + /***/
    it('should test the case of entering an invalid Year of birth (negative number)',async function() {         
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("-1956");
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpYearInvalidErrormsg);
    })

            /////test 5: Invalid not entered
    it('should test the case of not entering a Year of birth',async function() { 
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpYearEmptyErrormsg);
    })
             ////////////////////////////////////////////
            //////////////////////////////////test 6: Invalid not accepting any letter including special chars
             ////////////////////////////////////////////

        ///////Female-male test cases testing
            /////test 1: Not entered
    it('should test the case of not choosing a gender',async function() {        
            await driver.findElement(By.xpath(Selectors.SignUpSubmitButton)).click();///msg won't appear untill we press the submit button
            await driver.sleep(6000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidGendermsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpGenderEmptyErrormsg);
    })
        ////////Account Type test cases   ////extra for app spot
            /////test1:Not Entered
   // it('should test the case of not choosing an account',async function() {        
        //await driver.findElement(By.xpath(Selectors.SignUpSubmitButton)).click();///msg won't appear untill we press the submit button
        //await driver.sleep(6000);
        //Checkstring = await driver.findElement(By.xpath(Selectors.SignUpAccountEmptyErrormsg)).getText();
        //expect(Checkstring).to.equal("What type of account do you like?");
     //})

    ///signingup with facebook

        ////Sucessfull Test case
    it('should test a Successful case',async function() {
            await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("aya.sameh.99@gmail.com"); 
            await driver.findElement(By.xpath(Selectors.SignUpConfirmEmail)).sendKeys("aya.sameh.99@gmail.com");
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).sendKeys("aya99sameh");
            await driver.findElement(By.xpath(Selectors.SignUpDispName)).sendKeys("AyaSameh99");
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("9");
            await driver.findElement(By.xpath(Selectors.SignUpMonthOfBirth)).click();
            await driver.findElement(By.xpath(Selectors.SignUpMonthOfBirthNovember)).click();
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("1999");
            await driver.findElement(By.xpath(Selectors.SignUpFemaleGender)).click();
            //await driver.findElement(By.xpath(Selectors.SignUpAccountType)).click(); //extra for app Spot
            //await driver.findElement(By.xpath(Selectors.SignUpAccountTypeReg)).click();
    })   

        //It is not going to submit since in the actual spotify there is "i am not a robot" icon so i commented the following line
        //await driver.findElement(By.xpath(Selectors.SignUpSubmitButton)).click();
     
 after(async () => await driver.quit());
});