/**
 * Developed By: Haider Ali
 * @type {any}
 */

const { Builder, By, Key, until } = require('selenium-webdriver');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

var DriverWrapper = function() {

     this.driver = new Builder()
        .forBrowser('chrome')
        .build();

    // visit a webpage
    this.visit = async function(theUrl) {
        return await this.driver.get(theUrl);
    };

    // quit current session
    this.quit = async function() {
        return await this.driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function(id) {
        await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element');
        return await this.driver.findElement(By.id(id));
    };

    // wait and find a specific element with it's title
    this.findByTitle = async function(title) {
        return  await this.driver.wait(until.titleIs(title), 15000);
    };

    // wait and find a specific element with it's name
    this.findByName = async function(name) {
        await this.driver.wait(until.elementLocated(By.name(name)), 15000, 'Looking for element');
        return await this.driver.findElement(By.name(name));
    };

    // wait and find a specific element with it's name
    this.findTextBoxAndWrite = async function(elemId, value) {
        await this.driver.wait(until.elementLocated(By.id(elemId)), 15000, 'Looking for element');
        let a = await this.driver.findElement(By.id(elemId));
        return await this.write(a, value);
    };

    // wait and find a specific element with it's name
    this.findTextBoxAndWrite_ = async function(elemName, value) {
        await this.driver.wait(until.elementLocated(By.name(elemName)), 15000, 'Looking for element');
        let b = await this.driver.findElement(By.name(elemName));
        return await this.write(b, value);
    };

    // wait and find a submit and click to submit
    this.findSubmitAndClick = async function(elemId) {
        await this.driver.wait(until.elementLocated(By.className(elemId)), 15000, 'Looking for element');
        let a = await this.driver.findElement(By.className(elemId));
        return a.click();
    };

    // wait and find a button click
    this.findButtonAndClick = async function(buttonTxt) {
        let xp = "//div[text()='"+buttonTxt+"']";
        await this.driver.wait(until.elementLocated(By.xpath(xp)), 15000, 'Looking for element');
        let a = await this.driver.findElement(By.xpath(xp));
        return a.click();
    };

    // wait and find a button click
    this.findButtonAndClick_span = async function(buttonTxt) {
        let xp = "//span[text()='"+buttonTxt+"']";
        await this.driver.wait(until.elementLocated(By.xpath(xp)), 15000, 'Looking for element');
        let a = await this.driver.findElement(By.xpath(xp));
        return a.click();
    };

    // wait and find a Page Heading text
    this.findPageHeading = async function(text) {
        let xp = "//div[text()='"+text+"']";
        await this.driver.wait(until.elementLocated(By.xpath(xp)), 15000, 'Looking for element');
        let p =  await this.driver.findElement(By.xpath(xp)).innerText;
    };

    // wait and find a Page Heading text
    this.findCheckboxAndClick = async function(id) {
        await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element');
        let p = await this.driver.findElement(By.id(id)).click();
    };

    // wait and find a specific element with it's name
    this.findByClassName = async function(name) {
        await this.driver.wait(until.elementLocated(By.className(name)), 15000, 'Looking for element');
        return await this.driver.findElement(By.className(name));
    };

    // wait and find a specific element with it's name
    this.findByXpath = async function(xpath_) {
        await this.driver.wait(until.elementLocated(By.xpath(xpath_)), 15000, 'Looking for element');
        return await this.driver.findElement(By.xpath(xpath_));
    };

    // fill input web elements
    this.write = async function (el, txt) {
        return await el.sendKeys(txt);
    };

};


module.exports = DriverWrapper;
