const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
var page_driver;


class LmsBrowserCheckPage
{
    constructor(driver)
    {
        page_driver = driver;
    }


    verifyBrowserCheckPageAndClickContinueButton(done)
    {
        page_driver.wait(until.elementLocated(By.id("b5")))
        .then(function()
        {
            page_driver.findElement(By.id("b5")).getText()
            .then(function(enrollPageHeading)
            {
                expect(enrollPageHeading).to.include("Browser Check");
            }).then(function()
            {
                page_driver.wait(until.elementLocated(By.id("course-list")))
                .then(function()
                {
                    page_driver.findElement(By.className("btn_normal")).click();
                    done();
                });
            });
        });
    }

}
module.exports = LmsBrowserCheckPage;