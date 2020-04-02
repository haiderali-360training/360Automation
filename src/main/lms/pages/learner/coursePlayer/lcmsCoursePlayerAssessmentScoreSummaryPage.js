const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
var page_driver;



class LcmsCoursePlayerAssessmentScoreSummaryPage
{
    constructor(driver)
    {
        page_driver = driver;
    }


    verifyCoursePlayerAssessmentScoreSummaryPage(done)
    {
        setTimeout(function()
        {
            page_driver.wait(until.elementLocated(By.id("assessment_score_Summary_subheading")))
            .then(function()
            {
                page_driver.wait(until.elementLocated(By.css("#assessment_result_content h2")))
                .then(function()
                {
                    page_driver.wait(until.elementLocated(By.css("#assessment_result>h1")))
                    .then(function()
                    {
                        page_driver.wait(until.elementLocated(By.id("assessment_result")))
                        .then(function()
                        {
                            page_driver.wait(until.elementLocated(By.id("modal-trigger-save")))
                            .then(function()
                            {
                                page_driver.wait(until.elementLocated(By.css("#assessment_result_content img")))
                                .then(function()
                                {
                                    page_driver.findElement(By.css("#assessment_result>h1")).getText()
                                    .then(function(assessmentScoreSummaryHeading)
                                    {
                                        console.log(assessmentScoreSummaryHeading);
                                        expect(assessmentScoreSummaryHeading).to.include("Assessment Score Summary");
                                        done();
                                    });
                                });                                
                            });                            
                        });                        
                    });
                });
            });                            
        }, 400);        
    }




    /* clickNextButton(callback)
    {
        page_driver.findElement(By.id("NextQuestionButtonEnText")).click();
        callback();
    } */ 
        
    
    /* testInterv()
    {
       count++;
        console.log(`count value outside condition: ${count}`);
        if (count == 4)
        {
            console.log(`count value inside condition: ${count}`);
            page_driver.findElement(By.id("NextQuestionButtonEnText")).click();
            clearInterval(this);            
        }
    } */


    /* 
    var page = 2;
var last_page = 100;

(function loop() {
    if (page <= last_page) {
        request("/data?page=" + page, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                store_data(body)
            }
            page++;
            loop();
        });
    }
}());
     */


    /* checkIfErrorDisplayedThenAgainClickNext(done)
    {
        console.log("calling setInterval function");
        
        setInterval(this.testInterv, 10000);
        done();
    } */




}
module.exports = LcmsCoursePlayerAssessmentScoreSummaryPage;


//#networkErrorContent
//.network-error-msg.network-error-msg-show

