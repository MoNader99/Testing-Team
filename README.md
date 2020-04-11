# Get the Code
git clone - ( repository link )
https://github.com/MohammedNader99/Testing-Team.git

Bug Report - ( google docs link )
https://docs.google.com/spreadsheets/d/1-pbsExw0CJZHoDsEoXC873Dl5veI_xefPxyEbVAq49o/edit?usp=sharing

## Dependencies
For all test types:
* Mocha  
* Chai

For web:
* selenium-webdriver
* geckodriver
* chromedriver

For android:
* Appium UiAutomator2 Driver
* wd(Webdriver)  
* underscore
* appium


___Note___ :open using Visual Studio Code 

# Build

## Install

steps to install dependencies:

```sh
For all test types:
* npm install Mocha
* npm install Chai
For web:
* npm install selenium-webdriver
* npm install geckodriver
* npm install chromedriver
For android:
* npm install appium-uiautomator2-driver
* npm install wd
* npm install underscore
* npm install appium
```

## Example code
```python
it('should test Help button in the footer', async function () {
        await driver.sleep(3000);
        await (await driver.findElement(By.xpath(Selectors.HelpButtonFooterXpath))).click();
        await driver.sleep(3000);
        Checkstring = await driver.findElement(By.xpath(Selectors.HelpPageHeaderXpath)).getText();
        expect(Checkstring).to.equal('How can we help you?');
});
```
## How to run code 

It does not need to be run

# Running E2E Tests

* navigate to the directory of the code in the command prompt then to Functionalities folder
* in cmd, type 
```sh
mocha test_file_name.js
```
___Notes___ :

* Functionalities.txt file is provided in the Functionalities folder with the names of test files
* Results of test cases appear in the cmd

___WebNotes___ :
* To change driver, Go to Driver.js file then change the browser's name with the required one.
For:
```py
Firefox driver type 'firefox'
Chrome driver type 'chrome'
```
___AndroidNotes___ :
To set capabilities of the android device:
* Go to helpers folder
* Fill the capabilities of the device in exports.android at the top of the file

```py
        exports.android = {
        browserName: '',
        platformName: 'Android',
        platformVersion: '7',
        deviceName: 'Pixel 2 API 24',
        appActivity: undefined // will be set later
        };  
```
