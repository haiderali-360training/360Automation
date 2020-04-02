const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
var page_driver;


class LmsLicenseAgreementPage
{
    constructor(driver)
    {
        page_driver = driver;
    }


    verifyLicenseAgreementPage(done, callback)
    {
        page_driver.wait(until.elementLocated(By.id("b5")))
        .then(function()
        {
            page_driver.findElement(By.id("b5")).getText()
            .then(function(enrollPageHeading)
            {
                expect(enrollPageHeading).to.include("License Agreement!");
            }).then(function()
            {
                page_driver.wait(until.elementLocated(By.css(".row_text>textarea")));
                callback(done);
            });
        });
    }
}
module.exports = LmsLicenseAgreementPage;