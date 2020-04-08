"use strict";

const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser("chrome").build();
var Selectors=require("../AppSelectors");
var Msgs=require("../AppErrorMsgs");

describe('SignUpTest', function(){
      this.timeout('1500000000');
      var Checkstring;
    it('should go to spotify.com and get its title',async function() {
        await driver.get("http://52.14.190.202:3000/");
        const titleSpotHome = await (await driver).getCurrentUrl();
        await driver.sleep(5000);
        expect(titleSpotHome).to.equal('http://52.14.190.202:3000/');//testing that i reached the req page
    })

    it('should press on SignUp button and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.SignUpbutton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getCurrentUrl();
        expect(titleSpotReg).to.equal('http://52.14.190.202:3000/signup');//testing that i reached the req page
    }) 
    it('should press on Spotify Logo Button and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.SpotifyButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getCurrentUrl();
        expect(titleSpotReg).to.equal('http://52.14.190.202:3000/');//testing that i reached the req page
        await driver.get("http://52.14.190.202:3000/signup");//getting to signup page to continue testing
    }) 

        ///////email test cases testing
            /////test 1: invalid email //1@2.co//12334@gamil.com//asdfsd@gmail.co ////adshgdbhhhhhbjbbbbbbbbbbbbbbbbbbbhhhhh@hsjdcbshcbhsdbc.com
        it('should test the case of entering an invalid email(veryshort without @.com)',async function() {        
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("fxv");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
                expect(Checkstring).to.equal(Msgs.SignUpEmailInvalidErrormsg);//comparing the text copied with the expected one 
        }) 
        it('should test the case of entering an invalid email(anything@anything.co)',async function() {  
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).clear();      
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("asdfsd@hbgkgh.co");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
                expect(Checkstring).to.equal(Msgs.SignUpEmailInvalidErrormsg);//comparing the text copied with the expected one 
        }) 
        /*it('should test the case of entering an invalid email(verylong anythinglong@anythinglong.com)',async function() { ////this test case fails and the server will be unresponsive
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).clear();       
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("adshgdbhhhhhbjbbbbbbbbbbbbbbbbbbbhhhhh@hsjdcbshcbhsdbc.com");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
                expect(Checkstring).to.equal(Msgs.SignUpEmailInvalidErrormsg);//comparing the text copied with the expected one 
        }) */
        /*it('should test the case of entering an invalid email(anything very long)',async function() { ////this test case fails and the server will be unresponsive
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).clear();       
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("adshgdbhhhhhbjbbbbbbbbbbbbbbbbbbbhhhhhgyughjjjjjjjjftt");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
                expect(Checkstring).to.equal(Msgs.SignUpEmailInvalidErrormsg);//comparing the text copied with the expected one 
        })*/ 
            /////test 2: Already exist 
        it('should test the case of entering an email which is already token',async function() {       
            await driver.findElement(By.xpath(Selectors.SignUpEmail)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("Hebanassif19@gmail.com");
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
            expect(Checkstring).to.equal(Msgs.SignUpEmailTakenErrormsg);//comparing the text copied with the expected one 
        })    

            /////test 3: Not entered
        it('should test the case of not entering an email',async function() {
            await driver.findElement(By.xpath(Selectors.SignUpEmail)).clear();
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
            expect(Checkstring).to.equal(Msgs.SignUpEmailEmptyErrormsg);//comparing the text copied with the expected one
        })  

       ///////Password test cases testing
            /////test 1: Very Short password
        it('should test the case of entering a very short password',async function() { 
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).sendKeys("aya");
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidPasswordmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpPasswordShortErrormsg);
        })

            /////test 2: Not entered
        it('should test the case of not entering a password',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpPassword)).clear();
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidPasswordmsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpPasswordEmptyErrormsg);
        })
        /////test 3: Very long ///to be updated not finished////////////////////////////////////////////////////////////////////////////////////
        /*it('should test the case of entering a very long password',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpPassword)).sendKeys("ayafhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddlllllllllllllllllllllllllllllllllllllllll");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidPasswordmsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpPasswordEmptyErrormsg);
        })*/
        /////test 4:only entering numbers no chars in it
        it('should test the case of entering only numbers password',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpPassword)).sendKeys("123456789");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidPasswordmsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpPasswordShortErrormsg);
            })

       ///////Displayname test cases testing ////already exists
            /////test 1: very long max 30 length
    /*it('should test the case of entering a very long Displayname',async function() {         
            await driver.findElement(By.xpath(Selectors.SignUpDispName)).sendKeys("lsvffffffffffdddddddddddddddddkkkkkkkkkkkkkuhjuhhhhhhhhhhhhhhhkkk");//should only take till lsvffffffffffddddddddddddddddd only
            await driver.sleep(5000);
          
    })*/ 
       /////test 2: Very Short      
        it('should test the case of entering a very short Displayname',async function() {         
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).sendKeys("1");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDispNamemsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpDispNameEmptyErrormsg);
        })    
        /////test 3:invalid special char//@#%@
        it('should test the case of entering invali Displayname(using only special chars)',async function() {         
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).sendKeys("@#%@");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDispNamemsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpDispNameEmptyErrormsg);
        }) 
           /////test 4: Not entered
        it('should test the case of not entering a Displayname',async function() {          
            await driver.findElement(By.xpath(Selectors.SignUpDispName)).clear();
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDispNamemsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDispNameEmptyErrormsg);
        })     

       ///////Day of birth test cases testing
            /////test 1: Invalid not less than 1
    it('should test the case of entering an invalid Day of birth (less than 1)',async function() {         
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("0");
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDayInvalidErrormsg);
    })

            /////test 2: Invalid not more than 31
    it('should test the case of entering an invalid Day of birth (more than 31)',async function() {
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("32");
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDayInvalidErrormsg);
    })

            /////test 3: Invalid not more than 2 digits such as 017 
    it('should test the case of entering an invalid Day of birth (more than 2 digits)',async function() {
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("006");
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDayInvalidErrormsg);
    })       
            /////test 4: Invalid entering negative number//or a decimal no.//or + 
    it('should test the case of entering an invalid Day of birth (negative number)',async function() {       
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("-4");
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDayInvalidErrormsg);
    })   
    /////test 5: Invalid entering a decimal no.    
    it('should test the case of entering an invalid Day of birth (Deciemal number)',async function() {       
        await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).clear();
        await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("2.4348768345");
        await driver.sleep(5000);
        Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
        expect(Checkstring).to.equal(Msgs.SignUpDayInvalidErrormsg);
})        
            /////test 6: Invalid not entered
    it('should test the case of not entering a Day of birth',async function() {        
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).clear();
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDayEmptyErrormsg);
    })         


       /* ///////Month of birth test cases testing
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
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpYearInvalidErrormsg);
    })
            /////test 2: Invalid not more than 1999
    it('should test the case of entering an invalid Year of birth (more than 1999)',async function() {  
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("2000");
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpYearInvalidTooYoungErrormsg);
    })
            /////test 3: Invalid not more than 4 digits such as 01956 
    it('should test the case of entering an invalid Year of birth (more than 4 digits)',async function() {          
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("01956");
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpYearInvalidErrormsg);
    })        
            /////test 4: Invalid entering negative number //or a decimal no.//or + 
    it('should test the case of entering an invalid Year of birth (negative number)',async function() {         
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("-1956");
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).click();///clicking anywhere for the msg to appear
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpYearInvalidErrormsg);
    })

            /////test 5: Invalid not entered
    it('should test the case of not entering a Year of birth',async function() { 
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).click();///clicking anywhere for the msg to appear
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
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).sendKeys("aya.sameh.99@gmail.com");
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
     
 after(async () => await driver.quit());*/
});