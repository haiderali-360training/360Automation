/**
 * Developed By: Haider Ali
 * @type {DriverWrapper}
 */

const { Builder, By, until } = require("selenium-webdriver");
require("selenium-webdriver/chrome");
require("selenium-webdriver/firefox");
require("chromedriver");
require("geckodriver");
//require("selenium-webdriver/Select");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

const DriverWrapper = function() {

    const driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize().then(r => {});
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
            let parent = windows_[0];
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
        await driver.wait(until.elementLocated(By.id(id)), elementFindTimeout, "Looking for element with ID");
        return driver.findElement(By.id(id));
    };

    this.findByIdAndGetText = async function(id) {
        await driver.wait(until.elementLocated(By.id(id)), elementFindTimeout, "Looking for element with ID");
        return driver.findElement(By.id(id)).getText();
    };

    this.findByIdChecked = async function(id) {
        await driver.wait(until.elementLocated(By.id(id)), elementFindTimeout, "Looking for element");
        return await driver.findElement(By.id(id)).click();
    };

    // wait and find a specific element with it's title
    this.findByTitle = async function(title) {
        return driver.wait(until.titleIs(title), elementFindTimeout, "verifying title");
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

    this.findElementByIdAndClear = async function(Id) {
        await driver.wait(until.elementLocated(By.id(Id)), elementFindTimeout, "Looking for element");
        let clearField = await driver.findElement(By.id(Id));
        driver.wait((until.elementIsVisible(clearField)), elementFindTimeout);
        await clearField.clear();
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

    this.findButtonAndClick_css = async function (cssElement) {
        await driver.wait(until.elementLocated(By.css(cssElement)), elementFindTimeout, "looking for CSS element");
        let cssEle = driver.findElement(By.css(cssElement));
        await driver.wait(until.elementIsVisible(cssEle), elementFindTimeout);
        return cssEle.click();
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
        //return a.click();
        a.click();
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



    //TODO -----How to work with Dropdown in JEST
    this.selectOptionFromDropdown = async function(dropdownCss) {
        /*Select coursesDropdown = new Select(locator.myCoursePage.myCoursePageDropdown);
        if (coursesDropdown.getFirstSelectedOption().getText().equalsIgnoreCase("Enrolled Courses")) {
            logger.info("Enrolled Courses Option already selected");
        } else {
            coursesDropdown.selectByValue("enrolled");
            logger.info("Selected Enrolled Courses Option from dropdown");
        }*/

        //await driver.wait((until.elementLocated(dropdownCss)), elementFindTimeout, "waiting for dropdown to visible");
        await driver.findElement(By.css(dropdownCss)).click();
    };

    this.findErrorMessageAndGet = async function (errorMessageEle) {
        await driver.wait(until.elementLocated(By.xpath(errorMessageEle)), elementFindTimeout);
        let aa =  driver.findElement(By.xpath(errorMessageEle)).getText();
        return aa;
    };



    this.myexec = async function (scripts) {
        await driver.executeScript(scripts);
    };



};


module.exports = DriverWrapper;
