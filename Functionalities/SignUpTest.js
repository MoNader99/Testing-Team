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
        Checkstring=await driver.findElement(By.xpath(Selectors.SignUpbutton)).getText();
        expect(Checkstring).to.equal('Sign up');
    })

    it('should press on SignUp button and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.SignUpbutton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getCurrentUrl();
        expect(titleSpotReg).to.equal('http://52.14.190.202:3000/signup');//testing that i reached the req page
        Checkstring=await driver.findElement(By.xpath(Selectors.SignUpLabelText)).getText();
        expect(Checkstring).to.equal('Sign up with your email address');
    }) 
    it('should press on Spotify Logo Button and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.SpotifyButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getCurrentUrl();
        expect(titleSpotReg).to.equal('http://52.14.190.202:3000/');//testing that i reached the req page
        Checkstring=await driver.findElement(By.xpath(Selectors.SignUpbutton)).getText();
        expect(Checkstring).to.equal('Sign up');
        await driver.get("http://52.14.190.202:3000/signup");//getting to signup page to continue testing
    }) 
    it('should refresh the page and get the current page url',async function() {
        await driver.navigate().refresh();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getCurrentUrl();
        expect(titleSpotReg).to.equal('http://52.14.190.202:3000/signup');//testing that i reached the req page
        Checkstring=await driver.findElement(By.xpath(Selectors.SignUpLabelText)).getText();
        expect(Checkstring).to.equal('Sign up with your email address');
    }) 

        ///////email test cases testing
            /////test 1: invalid email veryshort without @.com //1@2.co//12334@5435.com
        it('should test the case of entering an invalid email(veryshort without @.com)',async function() {        
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("fxv");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
                expect(Checkstring).to.equal(Msgs.SignUpEmailInvalidErrormsg);//comparing the text copied with the expected one 
        })
        /////test 2: invalid email 1@2.co//12334@5435.com
        it('should test the case of entering an invalid email(only numbers such as 1@2.com)',async function() {  
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).clear();          
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("1@2.com");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
                expect(Checkstring).to.equal(Msgs.SignUpEmailInvalidErrormsg);//comparing the text copied with the expected one 
        })
        /////test 3:invalid email//asdfsd@gmail.co 
        it('should test the case of entering an invalid email(anything@anything.co)',async function() {  
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).clear();      
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("asdfsd@hbgkgh.co");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
                expect(Checkstring).to.equal(Msgs.SignUpEmailInvalidErrormsg);//comparing the text copied with the expected one 
        }) 
       /* /////test 4:invalid emailverylong anythinglong@anythinglong.com
        it('should test the case of entering an invalid email(verylong anythinglong@anythinglong.com)',async function() { ////this test case fails and the server will be unresponsive
                this.timeout('0.00000000000000000000000000000000000000000000000000000000000000000000000000000000001');
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).clear();       
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("adshgdbhhhhhbjbbbbbbbbbbbbbbbbbbbhhhhh@hsjdcbshcbhsdbc.com");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
                expect(Checkstring).to.equal(Msgs.SignUpEmailInvalidErrormsg);//comparing the text copied with the expected one 
        }) 
        /////test 5:invalid emailverylong anythinglong@anythinglong.com
        it('should test the case of entering an invalid email(anything very long without @.com)',async function() { ////this test case fails and the server will be unresponsive
                this.timeout('0.00000000000000000000000000000000000000000000000000000000000000000000000000000000001');
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).clear();       
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("adshgdbhhhhhbjbbbbbbbbbbbbbbbbbbbhhhhhgyughjjjjjjjjftt");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); //finding the msg place and copying its text
                expect(Checkstring).to.equal(Msgs.SignUpEmailInvalidErrormsg);//comparing the text copied with the expected one 
        })*/
            


       ///////Password test cases testing
            /////test 1: Very Short password
        it('should test the case of entering a very short password',async function() { 
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).sendKeys("aya");
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidPasswordmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpPasswordShortErrormsg);
        })
        /////test 2: Very long 
        it('should test the case of entering a very long password',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpPassword)).clear();
                await driver.findElement(By.xpath(Selectors.SignUpPassword)).sendKeys("ayafhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddlllllllllllllllllllllllllllllllllllllllll");
                await driver.sleep(5000);
                Checkstring=await driver.findElement(By.xpath(Selectors.SignUpPassword)).getAttribute("value");
                expect(Checkstring).to.equal("ayafhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
        })
        /////test 3:only entering numbers no chars in it
        it('should test the case of entering only numbers password',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpPassword)).clear();
                await driver.findElement(By.xpath(Selectors.SignUpPassword)).sendKeys("123456789");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidPasswordmsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpPasswordShortErrormsg);
        })
        /////test 4:only entering special chars
        it('should test the case of entering only special chars password',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpPassword)).clear();
                await driver.findElement(By.xpath(Selectors.SignUpPassword)).sendKeys("@#$%^&*(");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidPasswordmsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpPasswordShortErrormsg);
        })
        /////test 5:only entering decimals numbers
        it('should test the case of entering only decimals numbers password',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpPassword)).clear();
                await driver.findElement(By.xpath(Selectors.SignUpPassword)).sendKeys("2.343556");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidPasswordmsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpPasswordShortErrormsg);
        })


       ///////Displayname test cases testing 
            /////test 1: very long max 30 length
        it('should test the case of entering a very long Displayname',async function() {         
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).sendKeys("lsvffffffffffdddddddddddddddddkkkkkkkkkkkkkuhjuhhhhhhhhhhhhhhhkkk");//should only take till lsvffffffffffddddddddddddddddd only
                await driver.sleep(5000);
                Checkstring=await driver.findElement(By.xpath(Selectors.SignUpDispName)).getAttribute("value");
                expect(Checkstring).to.equal("lsvffffffffffdddddddddddddddddkkk");
          
        }) 
       /////test 2: Very Short      
        it('should test the case of entering a very short Displayname',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).clear();        
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).sendKeys("1");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDispNamemsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpDispNameEmptyErrormsg);
        })    
        /////test 3:invalid special char//@#%@
        it('should test the case of entering invalid Displayname(using only special chars)',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).clear();        
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).sendKeys("@#%@");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDispNamemsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpDispNameEmptyErrormsg);
        }) 
          
        /////test 5: OnlyNumbers    
        it('should test the case of entering only numbers Displayname',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).clear();        
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).sendKeys("12764");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDispNamemsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpDispNameEmptyErrormsg);
        })  
        /////test 5: Only decimal number   
        it('should test the case of entering decimal number Displayname',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).clear();        
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).sendKeys("2.67904");
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
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("017");
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDayInvalidErrormsg);
        })       
            /////test 4: Invalid entering negative number 
        it('should test the case of entering an invalid Day of birth (negative number)',async function() {       
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("-4");
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDayInvalidErrormsg);
        })   
            /////test 5: Invalid entering a decimal no.    
        it('should test the case of entering an invalid Day of birth (Decimal number)',async function() {       
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("30.9999999999999999999999999999999999999999999999999999999");
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpDayInvalidErrormsg);
        })             
            /////test 6: Invalid not accepting any  special chars
            it('should test the case of not accepting any special chars in Day of birth',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).clear();
                await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("!@#%");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).getAttribute("value");
                expect(Checkstring).to.equal("");
        })
            /////test 7: Invalid not accepting any letter 
            it('should test the case of not accepting any letter in Day of birth',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).clear();
                await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("abcdefghijklmnopqrstuvwxyz");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).getAttribute("value");
                expect(Checkstring).to.equal("&");
        })
       ///////Year of birth test cases testing
            /////test 1: Invalid not less than 1900
        it('should test the case of entering an invalid Year of birth (less than 1900)',async function() {        
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("1800");
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpYearInvalidErrormsg);
        })
            /////test 2: Invalid not more than 2020
        it('should test the case of entering an invalid Year of birth (more than 2020)',async function() {  
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("2030");
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpYearInvalidTooYoungErrormsg);
        })
            /////test 3: Invalid not more than 4 digits such as 01956 
        it('should test the case of entering an invalid Year of birth (more than 4 digits)',async function() {          
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("01999");
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpYearInvalidErrormsg);
        })        
            /////test 4: Invalid entering negative number 
        it('should test the case of entering an invalid Year of birth (negative number)',async function() {         
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("-1956");
            await driver.sleep(5000);
            Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
            expect(Checkstring).to.equal(Msgs.SignUpYearInvalidErrormsg);
        })
        /////test 5: Invalid entering deciemal number 
        //1999.99999999999999999999999999999999999999999999
        it('should test the case of entering an invalid Year of birth (deciemal number )',async function() {         
                await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
                await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("2019.99999999999999999999999999999999999999999999999999999999");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpYearInvalidErrormsg);
        })
             
            /////test 6: Invalid not accepting any special chars
        it('should test the case of not accepting any special chars in Year of birth',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
                await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("!@#%");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).getAttribute("value");
                expect(Checkstring).to.equal("");
        })
            /////test 7: Invalid not accepting any letter 
        it('should test the case of not accepting any letter in Year of birth',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
                await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("abcdefghijklmnopqrstuvwxyz");
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).getAttribute("value");
                expect(Checkstring).to.equal("&");
        })
  /////////////////////clearing data and submiting
        it('should test The case clearing the data and not submitting ',async function() {
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).clear();///clearing the element for not entering test
                await driver.findElement(By.xpath(Selectors.SignUpPassword)).clear();
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).clear();
                await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).clear();
                await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).clear();
                await driver.findElement(By.xpath(Selectors.SignUpSubmitButton)).click();
                await driver.sleep(5000);
                const title = await (await driver).getCurrentUrl();
                expect(title).to.equal("http://52.14.190.202:3000/signup");
                await driver.findElement(By.xpath(Selectors.SpotifyButton)).getText();
                expect(Checkstring).to.equal('Spotify');

        }) 
  /////////////////////////////Not Entering anything TestCases
        /////test1:Empty Email
        it('should test The case of not entering Email ',async function() {
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailmsg)).getText(); 
                expect(Checkstring).to.equal(Msgs.SignUpEmailEmptyErrormsg);
        })   
         /////test2:Empty Password
        it('should test The case of not entering Password',async function() {
                
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidPasswordmsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpPasswordEmptyErrormsg);
        })   
          /////test3:Empty UserName
        it('should test The case of not entering UserName',async function() {
               
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDispNamemsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpDispNameEmptyErrormsg);
        }) 
          /////test4:Empty DayofBirth
        it('should test The case of not entering DayofBirth',async function() {
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidDayOfBirthmsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpDayEmptyErrormsg);
        })
          /////test5:Empty MonthofBirth
        it('should test The case of not entering MonthofBirth',async function() {
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidMonthOfBirthmsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpMonthInvalidErrormsg);
        }) 
          /////test6:Empty YearofBirth
        it('should test The case of not entering YearofBirth',async function() {
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidyearOfBirthmsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpYearEmptyErrormsg);
        }) 
          /////test7:Empty Gender selection
        it('should test The case of not selecting a Gender',async function() {
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidGendermsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpGenderEmptyErrormsg);
        })      
         /////test8:Empty Account Type selection
        it('should test The case of not selecting an Account Type',async function() {
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidAccountTypemsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpAccountEmptyErrormsg);
        }) 

   
         /////test 6 of email: Already exist 
         it('should test the case of entering an email which is already token',async function() {      
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).clear();
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("Hebanassif19@gmail.com");
                await driver.findElement(By.xpath(Selectors.SignUpPassword)).sendKeys("aya99sacsameh999");
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).sendKeys("hmvmhgcszcvgv");
                await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("9");
                await driver.findElement(By.xpath(Selectors.SignUpMonthOfBirth)).click();
                await driver.findElement(By.xpath(Selectors.SignUpMonthOfBirthNovember)).click();
                await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("1999");
                await driver.findElement(By.xpath(Selectors.SignUpFemaleGender)).click();
                await driver.findElement(By.xpath(Selectors.SignUpAccountType)).click(); 
                await driver.findElement(By.xpath(Selectors.SignUpAccountTypeReg)).click();
                await driver.findElement(By.xpath(Selectors.SignUpSubmitButton)).click();
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailTokenmsg)).getText(); //finding the msg place and copying its text
                expect(Checkstring).to.equal(Msgs.SignUpEmailorSUserNameTakenErrormsg);//comparing the text copied with the expected one 
            })   
            /////test 4: already exist username     
        it('should test the case of entering already exist Displayname',async function() { 
                await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("Hef19@gmail.com");
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).clear();        
                await driver.findElement(By.xpath(Selectors.SignUpDispName)).sendKeys("heba");
                await driver.findElement(By.xpath(Selectors.SignUpPassword)).sendKeys("aya99samejdhnkh999");
                await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("9");
                await driver.findElement(By.xpath(Selectors.SignUpMonthOfBirth)).click();
                await driver.findElement(By.xpath(Selectors.SignUpMonthOfBirthNovember)).click();
                await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("1999");
                await driver.findElement(By.xpath(Selectors.SignUpFemaleGender)).click();
                await driver.findElement(By.xpath(Selectors.SignUpAccountType)).click(); 
                await driver.findElement(By.xpath(Selectors.SignUpAccountTypeReg)).click();
                await driver.findElement(By.xpath(Selectors.SignUpSubmitButton)).click();
                await driver.sleep(5000);
                Checkstring = await driver.findElement(By.xpath(Selectors.SignUpInvalidEmailTokenmsg)).getText();
                expect(Checkstring).to.equal(Msgs.SignUpEmailorSUserNameTakenErrormsg);
        }) 
        ////////////Testing Having an account login button
        it('should test Having an account login button',async function() {
                await driver.findElement(By.xpath(Selectors.SignUpLogInButton)).click();
                await driver.sleep(5000);
                const title = await (await driver).getCurrentUrl();
                expect(title).to.equal("http://52.14.190.202:3000/logIn");
                Checkstring=await driver.findElement(By.xpath(Selectors.SubmitLoginButton)).getText();
                expect(Checkstring).to.equal("LOG IN");
        })  
        ////Sucessfull Test case
    it('should test a Successful case',async function() {
            await driver.get("http://52.14.190.202:3000/signup");///getting back to signup page to test the successful case
            await driver.findElement(By.xpath(Selectors.SignUpEmail)).sendKeys("aa.sahfeh.99@gmail.com"); 
            await driver.findElement(By.xpath(Selectors.SignUpPassword)).sendKeys("aya99sameh999");
            await driver.findElement(By.xpath(Selectors.SignUpDispName)).sendKeys("Ayajeh99");
            await driver.findElement(By.xpath(Selectors.SignUpDayOfBirth)).sendKeys("9");
            await driver.findElement(By.xpath(Selectors.SignUpMonthOfBirth)).click();
            await driver.findElement(By.xpath(Selectors.SignUpMonthOfBirthNovember)).click();
            await driver.findElement(By.xpath(Selectors.SignUpyearOfBirth)).sendKeys("1999");
            await driver.findElement(By.xpath(Selectors.SignUpMaleGender)).click();
            await driver.findElement(By.xpath(Selectors.SignUpAccountType)).click(); 
            await driver.findElement(By.xpath(Selectors.SignUpAccountTypeReg)).click();
            await driver.findElement(By.xpath(Selectors.SignUpSubmitButton)).click();
            await driver.sleep(5000);
            const title = await (await driver).getCurrentUrl();
            expect(title).to.equal("http://52.14.190.202:3000/signup/emailsent/");
            Checkstring=await driver.findElement(By.xpath(Selectors.ConfirmationEmailTextElement)).getText();
            expect(Checkstring).to.equal("Confirmation Email Sent!");
    })   
     
 after(async () => await driver.quit());
});