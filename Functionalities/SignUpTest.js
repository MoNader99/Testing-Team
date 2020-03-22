"use strict";

const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser("chrome").build();
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
        await driver.findElement(By.xpath(require("../AppSelectors").SignUpbutton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Sign up - Spotify');//testing that i reached the req page
    }) 

        ///////email test cases testing
            /////test 1: invalid email
    it('should test the case of entering an invalid email',async function() {        
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpEmail)).sendKeys("fxv");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
             Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
            expect(Checkstring).to.equal('The email address you supplied is invalid.');//comparing the text copied with the expected one 
    }) 

            /////test 2: Already exist
    it('should test the case of entering an email which is already token',async function() {       
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpEmail)).clear();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpEmail)).sendKeys("maram311999@hotmail.com");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpPassword)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
            expect(Checkstring).to.equal("We're sorry, that email is taken.");//comparing the text copied with the expected one 
    })    

            /////test 3: Not entered
    it('should test the case of not entering an email',async function() {
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpEmail)).clear();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpPassword)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
            expect(Checkstring).to.equal("Please enter your email.");//comparing the text copied with the expected one
    })

        ///////confirm email test cases testing
            //test 1: confirm email doesn't match 
    it('should test the case of entering a confirm email which does not match the entered one',async function() {       
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).sendKeys("aya.sameh.99@gmail.com");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpPassword)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidConfirmEmailmsg)).getText();
            expect(Checkstring).to.equal("Email address doesn't match.");
    })    

            //test 2: invalid email 
    it('should test the case of entering an Invalid confirm email',async function() {
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).clear();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).sendKeys("sda");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpPassword)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidConfirmEmailmsg)).getText();
            expect(Checkstring).to.equal("The email address you supplied is invalid.");
    })

            //test 3: Not entered 
    it('should test the case of  not entering an confirm email',async function() {        
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).clear();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpPassword)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidConfirmEmailmsg)).getText();
            expect(Checkstring).to.equal("Please enter your email.");
    })    

        ///////Password test cases testing
            /////test 1: Very Short password
    it('should test the case of entering a very short password',async function() { 
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpPassword)).sendKeys("aya");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidPasswordmsg)).getText();
            expect(Checkstring).to.equal("Your password is too short.");
    })

            /////test 2: Not entered
    it('should test the case of not entering a password',async function() { 
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpPassword)).clear();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidPasswordmsg)).getText();
            expect(Checkstring).to.equal("Enter a password to continue.");
    })

        ///////Displayname test cases testing
            /////test 1: very long max 30 length
    it('should test the case of entering a very long Displayname',async function() {         
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpDispName)).sendKeys("lsvffffffffffdddddddddddddddddkkkkkk");//should only take till lsvffffffffffddddddddddddddddd only
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).click();
            await driver.sleep(5000);
            //Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpDispName)).getText();
            //expect(Checkstring).to.equal("lsvffffffffffddddddddddddddddd");
    })        
            
            /////test 2: Not entered
    it('should test the case of not entering a Displayname',async function() {          
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpDispName)).clear();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpSubmitButton)).click();///msg won't appear untill we press the submit button
            await driver.sleep(6000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidDispNamemsg)).getText();
            expect(Checkstring).to.equal("What should we call you?");///not working here
    })     

        ///////Day of birth test cases testing
            /////test 1: Invalid not less than 1
    it('should test the case of entering an invalid Day of birth (less than 1)',async function() {         
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpDayOfBirth)).sendKeys("0");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal("Please enter a valid day of the month.");
    })

            /////test 2: Invalid not more than 31
    it('should test the case of entering an invalid Day of birth (more than 31)',async function() {
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpDayOfBirth)).clear();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpDayOfBirth)).sendKeys("35");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal("Please enter a valid day of the month.");
    })

            /////test 3: Invalid not more than 2 digits such as 017
    it('should test the case of entering an invalid Day of birth (more than 2 digits)',async function() {
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpDayOfBirth)).clear();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpDayOfBirth)).sendKeys("006");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal("Please enter a valid day of the month.");
    })       
            /////test 4: Invalid entering negative number
    it('should test the case of entering an invalid Day of birth (negative number)',async function() {       
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpDayOfBirth)).clear();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpDayOfBirth)).sendKeys("-4");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal("Please enter a valid day of the month.");
    })        
            /////test 5: Invalid not entered
    it('should test the case of not entering a Day of birth',async function() {        
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpDayOfBirth)).clear();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal("Please enter a valid day of the month.");
    })         

             ////////////////////////////////////////////
            //////////////////////////////////test 6: Invalid not accepting any letter including special chars
             ////////////////////////////////////////////


        ///////Month of birth test cases testing
            /////test 1: Not entered
    it('should test the case of not entering a Month of birth',async function() {         
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpSubmitButton)).click();///msg won't appear untill we press the submit button
            await driver.sleep(6000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidMonthOfBirthmsg)).getText();
            expect(Checkstring).to.equal("Please enter your birth month.");
    })    
        
       ///////Year of birth test cases testing
            /////test 1: Invalid not less than 1900
    it('should test the case of entering an invalid Year of birth (less than 1900)',async function() {        
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpyearOfBirth)).sendKeys("1800");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal("Please enter a valid year.");
    })
            /////test 2: Invalid not more than 1999
    it('should test the case of entering an invalid Year of birth (more than 1999)',async function() {  
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpyearOfBirth)).sendKeys("2000");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal("Sorry, but you don't meet Spotify's age requirements.");
    })
            /////test 3: Invalid not more than 4 digits such as 01956
    it('should test the case of entering an invalid Year of birth (more than 4 digits)',async function() {          
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpyearOfBirth)).sendKeys("01956");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal("Please enter a valid year.");
    })        
            /////test 4: Invalid entering negative number
    it('should test the case of entering an invalid Year of birth (negative number)',async function() {         
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpyearOfBirth)).sendKeys("-1956");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal("Please enter a valid year.");
    })

            /////test 5: Invalid not entered
    it('should test the case of not entering a Year of birth',async function() { 
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal("Please enter a valid year.");
    })
             ////////////////////////////////////////////
            //////////////////////////////////test 6: Invalid not accepting any letter including special chars
             ////////////////////////////////////////////

        ///////Female-male test cases testing
            /////test 1: Not entered
    it('should test the case of not choosing a gender',async function() {        
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpSubmitButton)).click();///msg won't appear untill we press the submit button
            await driver.sleep(6000);
            Checkstring = await driver.findElement(By.xpath(require("../AppSelectors").SignUpInvalidGendermsg)).getText();
            expect(Checkstring).to.equal("Please indicate your gender.");
    })
    ///signingup with facebook

        ////Sucessfull Test case
    it('should test a Successful case',async function() {
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpEmail)).sendKeys("aya.sameh.99@gmail.com"); 
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpConfirmEmail)).sendKeys("aya.sameh.99@gmail.com");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpPassword)).sendKeys("aya99sameh");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpDispName)).sendKeys("AyaSameh99");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpDayOfBirth)).sendKeys("9");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpMonthOfBirth)).click();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpMonthOfBirthNovember)).click();
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpyearOfBirth)).sendKeys("1999");
            await driver.findElement(By.xpath(require("../AppSelectors").SignUpFemaleGender)).click();
    })   

        //It is not going to submit since in the actual spotify there is "i am not a robot" icon so i commented the following line
        //await driver.findElement(By.xpath(require("../AppSelectors").SignUpSubmitButton)).click();
     
 after(async () => await driver.quit());
});