const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
var page_driver;




class LcmsCoursePlayerReviewAnswerPage
{
    constructor(driver)
    {
        page_driver = driver;
    }



    verifyCoursePlayerReviewAnswerPage(callback)
    {
        setTimeout(function()
        {
            page_driver.wait(until.elementLocated(By.css("#AnswerReviewContent a")))
            .then(function()
            {
                page_driver.wait(until.elementLocated(By.css("#AnswerReviewMessage>p")))
                .then(function()
                {
                    page_driver.wait(until.elementLocated(By.css("#AnswerReviewHeading>h1")))
                    .then(function()
                    {
                        page_driver.findElement(By.css("#AnswerReviewHeading>h1"))
                        .then(function(heading)
                        {
                            heading.getText()
                            .then(function(reviewAnswerHeading)
                            {
                                console.log(reviewAnswerHeading);
                                expect(reviewAnswerHeading).to.include("Answer Review");
                                callback();
                            });
                        });
                    });
                });
            });                        
        }, 500);        
    }
    
    
    
    
    clickNextButton(done)
    {
        page_driver.wait(until.elementLocated(By.css("#AnswerReviewButtons button")))
        .then(function()
        {
            page_driver.findElement(By.css("#AnswerReviewButtons button")).click();
            done();
        });
    }
}
module.exports = LcmsCoursePlayerReviewAnswerPage;