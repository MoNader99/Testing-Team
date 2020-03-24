const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser("chrome").build();
var Selectors=require("../AppSelectorsRealSpot");
describe('HelpPageTest', function(){
      this.timeout('1500000000');

      it('should go to spotify.com and get its title', async () => {
        await driver.get("https://www.spotify.com/eg-en/");
        const titleSpotHome = await driver.getTitle();
        await driver.sleep(3000);
        expect(titleSpotHome).to.equal('Music for everyone - Spotify');//testing that i reached the req page
    })
    it('should press on Help button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.HelpPageButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Support - Spotify');//testing that i reached the req page
    }) 
    ///////////////Buttons Testing///////////////////
    it('should press on Account Help Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.AccountHelpButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Account Help');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page

    it('should press on Payment Help Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.PaymentHelpButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Payment Help');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page

    it('should press on Subscription Options Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.SubscriptionOptionsButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Subscription Options');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page

    it('should press on PrivacyAndSecurity Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.PrivacyAndSecurityButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Privacy & Security');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page

    it('should press on Video tutorials Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.VideotutorialsButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Video Tutorials');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page

    it('should press on Getting started Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.GettingstartedButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Getting Started');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page

    it('should press on Playlists Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.PlaylistsButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Playlists');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page

    it('should press on Features Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.FeaturesButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Features');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page

    it('should press on SystemAndsettings Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.SystemAndsettingsButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('System & Settings');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page

    it('should press on Speakers Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.SpeakersButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Speakers');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page

    it('should press on TVs Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.TVsButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('TVs');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page

    it('should press on Cars Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.CarsButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Cars');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page

    it('should press on Gaming Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.GamingButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Gaming');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page

    it('should press on Smart Watches Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.SmartWatchesButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Smart Watches');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
    it('should press on Get Spotify Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.GetSpotifyButton)).click();
        await driver.sleep(3000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Sign up - Spotify');//testing that i reached the req page
    }) 
    await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
    
    after(async () => await driver.quit());

});