"use strict";

const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
    
const driver = new Builder().forBrowser('firefox').build();

describe('DefaultTest', () => {
    it('should go to facebook and type the email and password', async () => {
        await driver.get("https://www.facebook.com");
        await driver.findElement(By.id(require("../AppSelectors").EmailID)).sendKeys('heba@gmail.com');
        await driver.findElement(By.id(require("../AppSelectors").PasswordID)).sendKeys('123456');
        await driver.findElement(By.id(require("../AppSelectors").loginId)).click();
        
    }).timeout('15000000');

    after(async () => driver.quit());
});