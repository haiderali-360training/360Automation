const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
var page_driver;


class LcmsCoursePlayerAcknowledgmentPage
{
    constructor(driver)
    {
        page_driver = driver;
    }


    verifyAcknowledgementPageDisplayedAndAcceptAcknowledgement(done)
    {
        setTimeout(function()
        {
            page_driver.wait(until.elementLocated(By.className("scene-content")))
            .then(function()
            {
                page_driver.wait(until.elementsLocated(By.css(".scene-content>font>b")))
                .then(function()
                {
                    page_driver.wait(until.elementLocated(By.css("#htmlContentContainer .scene-title")))
                    .then(function()
                    {
                        page_driver.findElement(By.css("#htmlContentContainer .scene-title")).getText()
                        .then(function(acknowledgmentHeading)
                        {
                            console.log(acknowledgmentHeading);
                            expect(acknowledgmentHeading).to.include("Acknowledgment");
                        }).then(function()
                        {
                            page_driver.wait(until.elementLocated(By.id("Checkbox1")))
                            .then(function()
                            {
                                page_driver.findElement(By.id("Checkbox1")).click()
                                .then(function()
                                {
                                    page_driver.wait(until.elementLocated(By.css("#PlaybuttonAcknowledgeName #PlaybuttonEnText")))
                                    .then(function()
                                    {
                                        page_driver.findElement(By.css("#PlaybuttonAcknowledgeName #PlaybuttonEnText")).click();
                                        done();                    
                                    });
                                });
                            });                    
                        });
                    });
                });
            });
            console.log('timeout completed');
        }, 1500);        
    }

}
module.exports = LcmsCoursePlayerAcknowledgmentPage;