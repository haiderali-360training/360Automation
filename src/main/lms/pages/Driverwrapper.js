/**
 * Developed By: Haider Ali
 * @type {DriverWrapper}
 */

/*const { Builder, By, until } = require("selenium-webdriver");
require("selenium-webdriver/chrome");
require("selenium-webdriver/firefox");
require("chromedriver");
require("geckodriver");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

const DriverWrapper = function() {

    const driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize().then(() => {});*/


//const { Builder, By, until } = require("selenium-webdriver");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

const webdriver = require("selenium-webdriver"),
    chrome = require("selenium-webdriver/chrome"),
    chromeDriver = require("chromedriver"),
    By = webdriver.By,
    until = webdriver.until,
    options = new chrome.Options();

//options.addArguments("--headless");
options.addArguments("test-type=browser");
options.addArguments("disable-plugins");
options.addArguments("disable-extensions");
options.addArguments("--window-size=1366,768");

chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriver.path).build());


let driver = new webdriver.Builder()
    .forBrowser("chrome")
    .withCapabilities(options.toCapabilities())
    .build();

const DriverWrapper = function() {

    let elementFindTimeout = 200000; //20 sec

    // visit a webPage
    this.visit = async function(theUrl) {
        return driver.get(theUrl);
    };


    //switch to course play window
    this.switchToWindow = async function() {
        try {
            let windows_ = await driver.getAllWindowHandles();
            let parent =  windows_[0];
            let coursePlayer =  windows_[1];
            await driver.switchTo().window(coursePlayer);
            console.info(parent);
            console.info(coursePlayer);

        }catch (e) {
            console.info("ERROR::::"+e.toString());
        }
    };


    /*
    * For move to third window
    * */
    this.switchThirdWindow = async function() {
        try {
            let windows_ = await driver.getAllWindowHandles();
            let parent = windows_[0];
            let child = windows_[1];
            let subChild = windows_[2];
            await driver.switchTo().window(child);
            __cache.set("parentWindowId", parent);
            console.info("parent window: " + parent);
            console.info("child Window: " + child);
            console.info("sub child window: " + subChild);

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



    this.switchToSubChildWindowAndClose = async function (parentWindowId) {
        try {
            let handles = await driver.getAllWindowHandles();
            let parent = handles[0];
            let child = handles[1];
            if (parent.match(parentWindowId)){
                console.info("Switching to Sub-Child Window " + child);
                driver.switchTo().window(child);
                driver.close();
            }
        }catch (e) {
            console.info("ERROR::::"+e.toString());
        }
    };


    this.switchToFrame = async function (iFrame) {
        try{
            console.info("Before Switching");
            await driver.switchTo().frame(iFrame);
            console.info("After Switching on Iframe");

        }catch (e) {
            //await this.switchToAlert();
            console.info("ERROR::::"+e.toString());

        }
    };


    this.switchToFrameTwo = async function (iFrameTwo) {
        try{

            console.info("Before Switching");
            await driver.switchTo().frame(iFrameTwo);
            console.info("After Switching on Iframe");

        }catch (e) {
            //await this.switchToAlert();
            console.info("ERROR:Switchframe2:::"+e.toString());

        }
    };


    this.switchToAlert = async function () {

        await driver.switchTo().alert().accept();

        /*let tr = await driver.switchTo().alert();
        await tr.accept().then(function () {
            console.info("switching back to active content");
        }).catch(function (err) {
            console.info(err);
        });*/
    };


    this.switchToDefaultContent = async function () {
        try{
            await driver.switchTo().activeElement();
        }catch (e) {
            console.info("ERROR::::"+e.toString());
        }
    };



    this.maximizeWindow = async function () {
        await driver.manage().window().maximize();
    };

    this.closeWindow = async function () {
        await driver.close();
    };


    // quit current session
    this.quitWindowDriver = async function() {
        await driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function(id) {
        await driver.wait(until.elementLocated(By.id(id)), elementFindTimeout, "Looking for element with ID");
        return driver.findElement(By.id(id));
    };

    this.findByIdChecked = async function(id) {
        await driver.wait(until.elementLocated(By.id(id)), elementFindTimeout, "Looking for element");
        return await driver.findElement(By.id(id)).click();
    };

    // wait and find a specific element with it's title
    this.findByTitle = async function(title) {
        return driver.wait(until.titleIs(title), elementFindTimeout, "verifying title");
    };

    //wait and find element by name
    this.findByName = async function(name) {
        await driver.wait(until.elementLocated(By.name(name)), elementFindTimeout, "Looking for element");
        return driver.findElement(By.name(name));
    };

    // wait and find a specific element with it's name
    this.findTextBoxAndWrite = async function(elemId, value) {
        await driver.wait(until.elementLocated(By.id(elemId)), elementFindTimeout, "Looking for element");
        let a = await driver.findElement(By.id(elemId));
        await driver.wait(until.elementIsVisible(a), elementFindTimeout);
        return await this.write(a, value);
    };

    this.findElementByIdAndClear = async function(Id) {
        await driver.wait(until.elementLocated(By.id(Id)), elementFindTimeout, "Looking for element");
        let clearField = await driver.findElement(By.id(Id));
        await driver.wait((until.elementIsVisible(clearField)), elementFindTimeout);
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
        let cssEle = await driver.findElement(By.css(cssElement));
        await driver.wait(until.elementIsVisible(cssEle), elementFindTimeout);
        return cssEle.click();
    };

    // wait and find a button click clickButtonByDivText()
    this.findButtonAndClick = async function(buttonTxt) {
        let xp = "//div[text()='"+buttonTxt+"']";
        await driver.wait(until.elementLocated(By.xpath(xp)), elementFindTimeout, "Looking for element");
        let a = await driver.findElement(By.xpath(xp));
        await a.click();
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
        await driver.findElement(By.xpath(xp)).innerText;
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
        return driver.findElement(By.className(name));
    };

    // wait and find a specific element with it's xpath
    this.findByXpath = async function(xpath_) {
        await driver.wait(until.elementLocated(By.xpath(xpath_)), elementFindTimeout, "Looking for element");
        return driver.findElement(By.xpath(xpath_));

    };

    // fill input web elements
    this.write = async function (el, txt) {
        return await el.sendKeys(txt);
    };

    this.findElementByIdAndClear = async function(Id) {
        await driver.wait(until.elementLocated(By.id(Id)), elementFindTimeout, "Looking for element");
        await driver.findElement(By.id(Id)).clear();
    };


    this.findAllHeaderIcons = async function (headerIconCss) {
        await driver.wait(until.elementsLocated(By.css(headerIconCss)), elementFindTimeout);
        return driver.findElements(By.css(headerIconCss));
    };


    this.findAllWebElements = async function (allWebElements) {
        await driver.wait(until.elementsLocated(By.css(allWebElements)), elementFindTimeout);
        return driver.findElements(By.css(allWebElements));
    };


    this.selectOptionFromDropdown = async function(dropdownCss, optionValue) {
        await driver.wait(until.elementLocated(By.css(dropdownCss)), elementFindTimeout);
        await driver.findElement(By.css(dropdownCss + " option[value='" + optionValue + "']")).click();
    };


    this.findErrorMessageAndGet = async function (errorMessageEle) {
        await driver.wait(until.elementLocated(By.css(errorMessageEle)), elementFindTimeout);
        return driver.findElement(By.css(errorMessageEle));
    };


    this.findElementsList= async function (enrolledCoursesList) {
        await driver.wait(until.elementsLocated(By.css(enrolledCoursesList)), elementFindTimeout, "Waiting for Enrolled course list to display");
        return driver.findElements(By.css(enrolledCoursesList));
    };


    this.waitUntilElementDisplayed = async function (coursePlayerLeftMenu) {
        await driver.wait(until.elementLocated(By.css(coursePlayerLeftMenu)), elementFindTimeout);
        let waitToDisplayElement = await driver.findElement(By.css(coursePlayerLeftMenu));
        await driver.wait(until.elementIsVisible(waitToDisplayElement), elementFindTimeout);
    };


    this.findElementByCss = async function (cssElement) {
        await driver.wait(until.elementLocated(By.css(cssElement)), elementFindTimeout, "Looking for element with CSS");
        return driver.findElement(By.css(cssElement));
    };


    this.findElementWithInElementByXpath = async function(childLocator, parentLocatorXpath) {
        //await driver.wait(until.elementLocated(By.css(xpath_)), elementFindTimeout, "Looking for element");
        return parentLocatorXpath.findElement(By.xpath(childLocator));
    };



    this.findAndGetCurrentUrl = async function() {
        return driver.getCurrentUrl();
    };


    this.myexec = async function (scripts, args) {
        await driver.executeScript(scripts, args);
    };


    this.waitForPageLoad = async function () {
        await driver.wait(function () {
            return driver.executeScript("return document.readyState").then(function(readyState) {
                return readyState === "complete";
            });
        });
    };



};


module.exports = DriverWrapper;
