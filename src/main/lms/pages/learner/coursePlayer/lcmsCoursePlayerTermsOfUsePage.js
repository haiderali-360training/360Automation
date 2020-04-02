const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
var page_driver;



class LcmsCoursePlayerTermsOfUsePage
{
    constructor(driver)
    {
        page_driver = driver;
    }


    verifyTermOfUsePageDisplayedAndClickAgreeAndContinueButton(done)
    {
        page_driver.wait(until.elementLocated(By.id("container_terms")))
        .then(function()
        {
            page_driver.wait(until.elementLocated(By.css("#htmlContentContainer h1.scene-title")))
            .then(function()
            {
                page_driver.findElement(By.css("#htmlContentContainer h1.scene-title")).getText()
                .then(function(tocHeading)
                {
                    console.log(tocHeading);
                    expect(tocHeading).to.include("Terms of Use");
                }).then(function()
                {
                    page_driver.wait(until.elementLocated(By.css("#continueButton .cd-btn.main-action.button")))
                    .then(function()
                    {
                        page_driver.findElement(By.css("#continueButton .cd-btn.main-action.button")).click();
                        done();
                    });
                });
            });
        });
    }


}
module.exports = LcmsCoursePlayerTermsOfUsePage;