const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var page_driver;



class LmsEnrollPage
{
    constructor(driver)
    {
        page_driver = driver;
    }


    verifyEnrollPage(callback)
    {
        page_driver.wait(until.titleIs("LMS - Manager Mode"))
        .then(function()
        {
            /* page_driver.getTitle()
            .then(function (homeTitle)
            {
                expect(homeTitle).to.include("LMS - Manager Mode"); */

                page_driver.wait(until.elementLocated(By.css("#page-description #page-heading")))
                .then(function()
                {
                    page_driver.findElement(By.css("#page-description #page-heading")).getText()
                    .then(function(enrollPageHeading)
                    {
                        expect(enrollPageHeading).to.include("Enroll");
                        callback();
                    });
                });
            //});
        });
    }



    clickEnrollUsersByCourse(done)
    {
        page_driver.wait(until.elementLocated(By.css("a[onclick*='mgr_assignEnrollments.do'] .button-large")))
        .then(function()
        {
            page_driver.findElement(By.css("a[onclick*='mgr_assignEnrollments.do'] .button-large")).click();
            done();
        });        
    }
}

module.exports = LmsEnrollPage;