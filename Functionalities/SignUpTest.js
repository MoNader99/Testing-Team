const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser("chrome").build();
describe('DefaultTest', () => {
      it('should go to spotify.com and click on signup and register email,password,data', async () => {
        await driver.get("https://www.spotify.com/eg-en/");
        const titleSpotHome = await driver.getTitle();
        await driver.sleep(3000);
        expect(titleSpotHome).to.equal('Music for everyone - Spotify');//testing that i reached the req page

        await driver.findElement(By.xpath("//a[@data-ga-action='sign-up']")).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Sign up - Spotify');//testing that i reached the req page
        
        ///////email test cases testing
            /////test 1: invalid email
            await driver.findElement(By.xpath("//input[@id='register-email']")).sendKeys("fxv");
            await driver.findElement(By.xpath("//input[@id='register-password']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            var Checkstring = await driver.findElement(By.xpath("//*[@id='js-register-with-email']/fieldset/ul/li[1]/label[2]")).getText(); //finding the msg place and copying its text
            expect(Checkstring).to.equal('The email address you supplied is invalid.');//comparing the text copied with the expected one 
            /////test 2: Already exist
            await driver.findElement(By.xpath("//input[@id='register-email']")).clear();
            await driver.findElement(By.xpath("//input[@id='register-email']")).sendKeys("maram311999@hotmail.com");
            await driver.findElement(By.xpath("//input[@id='register-password']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='js-register-with-email']/fieldset/ul/li[1]/label[2]")).getText(); //finding the msg place and copying its text
            expect(Checkstring).to.equal("We're sorry, that email is taken.");//comparing the text copied with the expected one 
            /////test 3: Not entered
            await driver.findElement(By.xpath("//input[@id='register-email']")).clear();
            await driver.findElement(By.xpath("//input[@id='register-password']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='js-register-with-email']/fieldset/ul/li[1]/label[2]")).getText(); //finding the msg place and copying its text
            expect(Checkstring).to.equal("Please enter your email.");//comparing the text copied with the expected one

        ///////confirm email test cases testing
            //test 1: confirm email doesn't match 
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).sendKeys("aya.sameh.99@gmail.com");
            await driver.findElement(By.xpath("//input[@id='register-password']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='js-register-with-email']/fieldset/ul/li[2]/label[2]")).getText();
            expect(Checkstring).to.equal("Email address doesn't match.");
            //test 2: invalid email 
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).clear();
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).sendKeys("sda");
            await driver.findElement(By.xpath("//input[@id='register-password']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='js-register-with-email']/fieldset/ul/li[2]/label[2]")).getText();
            expect(Checkstring).to.equal("The email address you supplied is invalid.");
            //test 3: Not entered 
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).clear();
            await driver.findElement(By.xpath("//input[@id='register-password']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='js-register-with-email']/fieldset/ul/li[2]/label[2]")).getText();
            expect(Checkstring).to.equal("Please enter your email.");
        

        ///////Password test cases testing
            /////test 1: Very Short password
            await driver.findElement(By.xpath("//input[@id='register-password']")).sendKeys("aya");
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='js-register-with-email']/fieldset/ul/li[3]/label[2]")).getText();
            expect(Checkstring).to.equal("Your password is too short.");
            /////test 2: Not entered
            await driver.findElement(By.xpath("//input[@id='register-password']")).clear();
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='js-register-with-email']/fieldset/ul/li[3]/label[2]")).getText();
            expect(Checkstring).to.equal("Enter a password to continue.");


        ///////Displayname test cases testing
            /////test 1: very long max 30 length
            await driver.findElement(By.xpath("//input[@id='register-displayname']")).sendKeys("lsvffffffffffdddddddddddddddddkkkkkk");//should only take till lsvffffffffffddddddddddddddddd only
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).click();
            await driver.sleep(3000);
            /////////////////////////Checkstring = await driver.findElement(By.xpath("//input[@id='register-displayname']")).getText();
            ///////////////////////expect(Checkstring).to.equal("lsvffffffffffddddddddddddddddd");
            /////test 2: Not entered
            await driver.findElement(By.xpath("//input[@id='register-displayname']")).clear();
            await driver.findElement(By.xpath("//a[@id='register-button-email-submit']")).click();///msg won't appear untill we press the submit button
            await driver.sleep(6000);
            //Checkstring = await driver.findElement(By.xpath("//*[@id='js-register-with-email']/fieldset/ul/li[4]/label[2]")).getText();
            //expect(Checkstring).to.equal("What should we call you?");///not working here
        
        ///////Day of birth test cases testing
            /////test 1: Invalid not less than 1
            await driver.findElement(By.xpath("//input[@id='register-dob-day']")).sendKeys("0");
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='li-dob']/label[2]")).getText();
            expect(Checkstring).to.equal("Please enter a valid day of the month.");
            /////test 2: Invalid not more than 31
            await driver.findElement(By.xpath("//input[@id='register-dob-day']")).clear();
            await driver.findElement(By.xpath("//input[@id='register-dob-day']")).sendKeys("35");
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='li-dob']/label[2]")).getText();
            expect(Checkstring).to.equal("Please enter a valid day of the month.");
            /////test 3: Invalid not more than 2 digits such as 017
            await driver.findElement(By.xpath("//input[@id='register-dob-day']")).clear();
            await driver.findElement(By.xpath("//input[@id='register-dob-day']")).sendKeys("006");
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='li-dob']/label[2]")).getText();
            expect(Checkstring).to.equal("Please enter a valid day of the month.");
            /////test 4: Invalid entering negative number
            await driver.findElement(By.xpath("//input[@id='register-dob-day']")).clear();
            await driver.findElement(By.xpath("//input[@id='register-dob-day']")).sendKeys("-4");
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='li-dob']/label[2]")).getText();
            expect(Checkstring).to.equal("Please enter a valid day of the month.");
            /////test 5: Invalid not entered
            await driver.findElement(By.xpath("//input[@id='register-dob-day']")).clear();
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='li-dob']/label[2]")).getText();
            expect(Checkstring).to.equal("Please enter a valid day of the month.");
             ////////////////////////////////////////////
            //////////////////////////////////test 6: Invalid not accepting any letter including special chars
             ////////////////////////////////////////////
             //theDisplay name test!!!
             Checkstring = await driver.findElement(By.xpath("//*[@id='js-register-with-email']/fieldset/ul/li[4]/label[2]")).getText();
            expect(Checkstring).to.equal("What should we call you?");
        ///////Month of birth test cases testing
            /////test 1: Not entered
            await driver.findElement(By.xpath("//a[@id='register-button-email-submit']")).click();///msg won't appear untill we press the submit button
            await driver.sleep(6000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='li-dob']/label[3]")).getText();
            expect(Checkstring).to.equal("Please enter your birth month.");
        //await driver.findElement(By.css("#register-dob-month > option:nth-child(12)")).click(); choosing november
        
       ///////Year of birth test cases testing
            /////test 1: Invalid not less than 1900
            await driver.findElement(By.xpath("//input[@id='register-dob-year']")).sendKeys("1800");
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='li-dob']/label[4]")).getText();
            expect(Checkstring).to.equal("Please enter a valid year.");
            /////test 2: Invalid not more than 1999
            await driver.findElement(By.xpath("//input[@id='register-dob-year']")).clear();
            await driver.findElement(By.xpath("//input[@id='register-dob-year']")).sendKeys("2000");
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='li-dob']/label[4]")).getText();
            expect(Checkstring).to.equal("Sorry, but you don't meet Spotify's age requirements.");
            /////test 3: Invalid not more than 4 digits such as 01956
            await driver.findElement(By.xpath("//input[@id='register-dob-year']")).clear();
            await driver.findElement(By.xpath("//input[@id='register-dob-year']")).sendKeys("01956");
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='li-dob']/label[4]")).getText();
            expect(Checkstring).to.equal("Please enter a valid year.");
            /////test 4: Invalid entering negative number
            await driver.findElement(By.xpath("//input[@id='register-dob-year']")).clear();
            await driver.findElement(By.xpath("//input[@id='register-dob-year']")).sendKeys("-1956");
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='li-dob']/label[4]")).getText();
            expect(Checkstring).to.equal("Please enter a valid year.");
            /////test 5: Invalid not entered
            await driver.findElement(By.xpath("//input[@id='register-dob-year']")).clear();
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).click();///clicking anywhere for the msg to appear
            await driver.sleep(3000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='li-dob']/label[4]")).getText();
            expect(Checkstring).to.equal("Please enter a valid year.");
             ////////////////////////////////////////////
            //////////////////////////////////test 6: Invalid not accepting any letter including special chars
             ////////////////////////////////////////////
        ///////Female-male test cases testing
            /////test 1: Not entered
            await driver.findElement(By.xpath("//a[@id='register-button-email-submit']")).click();///msg won't appear untill we press the submit button
            await driver.sleep(6000);
            Checkstring = await driver.findElement(By.xpath("//*[@id='li-gender']/label[4]")).getText();
            expect(Checkstring).to.equal("Please indicate your gender.");

    ///signingup with facebook

        ////Sucessfull Test case
            await driver.findElement(By.xpath("//input[@id='register-email']")).sendKeys("aya.sameh.99@gmail.com"); 
            await driver.findElement(By.xpath("//input[@id='register-confirm-email']")).sendKeys("aya.sameh.99@gmail.com");
            await driver.findElement(By.xpath("//input[@id='register-password']")).sendKeys("aya99sameh");
            await driver.findElement(By.xpath("//input[@id='register-displayname']")).sendKeys("AyaSameh99");
            await driver.findElement(By.xpath("//input[@id='register-dob-day']")).sendKeys("9");
            await driver.findElement(By.xpath("//select[@id='register-dob-month']")).click();
            await driver.findElement(By.xpath("//option[@value='11']")).click();
            await driver.findElement(By.xpath("//input[@id='register-dob-year']")).sendKeys("1999");
            await driver.findElement(By.xpath("//input[@id='register-female']")).click();
        
        //It is not going to submit since in the actual spotify there is "i am not a robot" icon so i commented the following line
        //await driver.findElement(By.xpath("//a[@id='register-button-email-submit']")).click();


        
      }).timeout(100000000);
 after(async () => await driver.quit());
});