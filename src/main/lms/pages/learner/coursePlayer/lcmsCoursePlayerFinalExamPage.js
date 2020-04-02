const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
var page_driver;


class LcmsCoursePlayerFinalExamPage
{
    constructor(driver)
    {
        page_driver = driver;
    }



    verifyBeginFinalExamPage(callback)
    {
        setTimeout(function()
        {
            page_driver.wait(until.elementLocated(By.id("BeginPostAssessmentButton")))
            .then(function()
            {
                page_driver.findElement(By.id("BeginPostAssessmentButton"))
                .then(function(examHeading)
                {
                    examHeading.getText()
                    .then(function(finalExamHeading)
                    {
                        console.log(finalExamHeading);
                        expect(finalExamHeading).to.include("BEGIN FINAL EXAM");
                    }).then(function()
                    {
                        page_driver.wait(until.elementLocated(By.id("BeginPostAssessmentButton")))
                        .then(function()
                        {
                            page_driver.findElement(By.id("BeginPostAssessmentButton")).click();
                            callback();
                        });
                    });
                });
            });
        }, 200);        
    }




    attemptFinalExam(done)
    {
        setTimeout(function()
        {
            page_driver.wait(until.elementLocated(By.id("toogle-flag")))
            .then(function()
            {
                console.log("verify toggle button");
                page_driver.wait(until.elementsLocated(By.css("#question input")))
                .then(function()
                {
                    page_driver.findElements(By.css(".scene-content div>label>span"))
                    .then(function(arrayElements)
                    {
                        function recursive(counter)
                        {                            
                            if (counter < arrayElements.length)
                            {                                
                                arrayElements[counter].getText()
                                .then(function(txt)
                                {
                                    if(txt.toUpperCase() === "TRUE")
                                    {                                
                                        console.log(`inside condition = ${counter}: ${txt}`);
                                        arrayElements[counter].click();
                                        done();
                                    }
                                    else
                                    {
                                        recursive(counter + 1);
                                    }
                                });
                            }
                        }
                        recursive(0);
                    });
                });
            });
        }, 200);
    }





    clickNextButton(done)
    {
        page_driver.findElement(By.id("NextQuestionButtonEnText")).click();
        done();
    }


}
module.exports = LcmsCoursePlayerFinalExamPage;