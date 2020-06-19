/**
 * Developed By: Haider Ali
 * @type {DriverWrapper}
 */

const { Builder, By, until } = require("selenium-webdriver");
require("selenium-webdriver/chrome");
require("selenium-webdriver/firefox");
require("chromedriver");
require("geckodriver");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

const DriverWrapper = function() {

    const driver = new Builder().forBrowser("chrome").build();
    let elementFindTimeout = 200000; //20 sec

    // visit a webPage
    this.visit = async function(theUrl) {
        return await driver.get(theUrl);
    };

    //switch to course play window
    this.switchCoursePlayWindow = async function() {
        try {
            //const parent = await driver.getWindowHandle();
            let windows_ = await driver.getAllWindowHandles();
            let parent = await windows_[0];
            let coursePlayer = await windows_[1];
            await driver.switchTo().window(coursePlayer);
        }catch (e) {
            console.info("ERROR::::"+e.toString());
        }
    };

    //switch to main lms window
    this.switchMainWindow = async function() {
        try {
            //const parent = await driver.getWindowHandle();
            let windows_ = await driver.getAllWindowHandles();
            let parent = await windows_[0];
            const coursePlayer = windows_[1];
            console.info("main window::"+parent);
            console.info("player window::"+coursePlayer);

            await driver.close();
            await driver.switchTo().window(parent);
            await driver.navigate().refresh();
        }catch (e) {
            console.info("ERROR::::"+e.toString());
        }
    };

    // quit current session
    this.quit = async function() {
        // return await driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function(id) {
        await driver.wait(until.elementLocated(By.id(id)), elementFindTimeout, "Looking for element");
        return await driver.findElement(By.id(id));
    };

    this.findByIdChecked = async function(id) {
        await driver.wait(until.elementLocated(By.id(id)), elementFindTimeout, "Looking for element");
        return await driver.findElement(By.id(id)).click();
    };

    // wait and find a specific element with it's title
    this.findByTitle = async function(title) {
        return  await driver.wait(until.titleIs(title), elementFindTimeout);
    };

    // wait and find a specific element with it's name
    this.findByName = async function(name) {
        await driver.wait(until.elementLocated(By.name(name)), elementFindTimeout, "Looking for element");
        return await driver.findElement(By.name(name));
    };

    //wait and find element by name
    this.findByName = async function(name) {
        await driver.wait(until.elementLocated(By.name(name)), elementFindTimeout, "Looking for element");
        return await driver.findElement(By.name(name));
    };

    // wait and find a specific element with it's name
    this.findTextBoxAndWrite = async function(elemId, value) {
        await driver.wait(until.elementLocated(By.id(elemId)), elementFindTimeout, "Looking for element");
        let a = await driver.findElement(By.id(elemId));
        driver.wait(until.elementIsVisible(a), elementFindTimeout);
        return await this.write(a, value);
    };

    // wait and find a specific element with it's name
    this.findTextBoxAndWrite_ = async function(elemName, value) {
        await driver.wait(until.elementLocated(By.name(elemName)), elementFindTimeout, "Looking for element");
        let b = await driver.findElement(By.name(elemName));
        return await this.write(b, value);
    };

    // wait and find a submit and click to submit
    this.findSubmitAndClick = async function(elemId) {
        await driver.wait(until.elementLocated(By.className(elemId)), elementFindTimeout, "Looking for element");
        let a = await driver.findElement(By.className(elemId));
        return a.click();
    };

    // wait and find a button click
    this.findButtonAndClick = async function(buttonTxt) {
        let xp = "//div[text()='"+buttonTxt+"']";
        await driver.wait(until.elementLocated(By.xpath(xp)), elementFindTimeout, "Looking for element");
        let a = await driver.findElement(By.xpath(xp));
        return a.click();
    };

    // wait and find a button click
    this.findButtonAndClick_span = async function(buttonTxt) {
        let xp = "//span[text()='"+buttonTxt+"']";
        await driver.wait(until.elementLocated(By.xpath(xp)), elementFindTimeout, "Looking for element");
        let a = await driver.findElement(By.xpath(xp));
        return a.click();
    };

    // wait and find a button click
    this.findButtonAndClick_href = async function(buttonTxt) {
        let xp = "//a[text()='"+buttonTxt+"']";
        await driver.wait(until.elementLocated(By.xpath(xp)), elementFindTimeout, "Looking for element");
        let a = await driver.findElement(By.xpath(xp));
        return a.click();
    };

    this.findButtonAndClick_xpath = async function(element_xpath) {
        console.info("find: "+element_xpath);
        await driver.wait(until.elementLocated(By.xpath(element_xpath)), elementFindTimeout, "Looking for element");
        let a = await driver.findElement(By.xpath(element_xpath));
        await driver.wait(until.elementIsVisible(a), elementFindTimeout);
        return a.click();
    };

    //wait and find element by className
    this.findButtonAndClick_className = async function(element_className) {
        await driver.wait(until.elementLocated(By.className(element_className)), elementFindTimeout, "Looking for element");
        let a = await driver.findElement(By.className(element_className));
        return a.click();
    };

    // wait and find a Page Heading text
    this.findPageHeading = async function(text) {
        let xp = "//div[text()='"+text+"']";
        await driver.wait(until.elementLocated(By.xpath(xp)), elementFindTimeout, "Looking for element");
        driver.findElement(By.xpath(xp)).innerText;
    };

    // wait and find checkbox and click
    this.findCheckboxAndClick = async function(id) {
        await driver.wait(until.elementLocated(By.id(id)), elementFindTimeout, "Looking for element");
        await driver.findElement(By.id(id)).click();
    };

    // wait and find a Element by Css
    this.findElementAndClick_Css = async function(eCss) {
        await driver.wait(until.elementLocated(By.css(eCss)), elementFindTimeout, "Looking for element");
        await driver.findElement(By.css(eCss)).click();
    };

    // wait and find a specific element with it's name
    this.findByClassName = async function(name) {
        await driver.wait(until.elementLocated(By.className(name)), elementFindTimeout, "Looking for element");
        return await driver.findElement(By.className(name));
    };

    // wait and find a specific element with it's xpath
    this.findByXpath = async function(xpath_) {
        await driver.wait(until.elementLocated(By.xpath(xpath_)), elementFindTimeout, "Looking for element");
        return await driver.findElement(By.xpath(xpath_));
    };

    // fill input web elements
    this.write = async function (el, txt) {
        return await el.sendKeys(txt);
    };

    this.findElementByIdAndClear = async function(Id) {
        await driver.wait(until.elementLocated(By.id(Id)), elementFindTimeout, "Looking for element");
        await driver.findElement(By.id(Id)).clear();
    };


    this.myexec = async function (scripts) {
        await driver.executeScript(scripts);
    };



};


module.exports = DriverWrapper;
