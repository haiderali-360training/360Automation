/*
const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
var page_driver;




class LcmsCoursePlayerClosePage
{
    constructor(driver)
    {
        page_driver = driver;
    }



    /!* verifyCoursePlayerClosePage(callback)
    {
        console.log("Inside Close Function");
        setTimeout(function()
        {
            console.log("Inside setTimeOut of Close Function");
            page_driver.wait(until.elementLocated(By.css(".content-wrapper>h1")))
            .then(function()
            {            
                page_driver.findElement(By.css(".content-wrapper>h1"))
                .then(function(heading)
                {
                    heading.getText()
                    .then(function(closePageHeading)
                    {
                        console.log(closePageHeading);
                        expect(closePageHeading).to.include("This Concludes The Course.");
                        callback();
                    });
                });
            });
        }, 10000);        
    }




    clickCloseButton(done)
    {
        page_driver.wait(until.elementLocated(By.id("modal-trigger-save-2")))
        .then(function()
        {
            page_driver.findElement(By.id("modal-trigger-save-2")).click();
            done();
        });
    } *!/




    closeChildWindowAndSwitchParentWindow(pWind, callback)
    {
        var childWindow;
        var parentWindowId = pWind;
        console.log("From Returen: " + parentWindowId);
        page_driver.wait(until.elementLocated(By.css("#assessment_result>h1")))
        .then(function()
        {
            page_driver.wait(until.elementLocated(By.id("assessment_result")))
            .then(function()
            {
                page_driver.getAllWindowHandles()
                .then(function(allHandles)
                {
                    console.log(`All Handles values: ${allHandles}`);
                    if (allHandles.length == 2)
                    {
                        childWindow = allHandles[0] == parentWindowId ? allHandles[1] : allHandles[0];
                        console.log(`child window id: ${childWindow}`);
                        page_driver.close(childWindow)
                        .then(function()
                        {
                            page_driver.switchTo().window(parentWindowId)
                            .then(function()
                            {
                                console.log("Switched Back to LMS My Course Page");
                                callback();
                            });                            
                        });
                    }
                });                
            });
        });
    }




    
    verifyMyCoursePage(done)
    {
        page_driver.wait(until.elementLocated(By.id("page-heading")))
        .then(function()
        {
            page_driver.findElement(By.id("page-heading")).getText()
            .then(function(PageHeading)
            {
                expect(PageHeading).to.include("My Courses");
                done();
            });            
        });
    }





}
module.exports = LcmsCoursePlayerClosePage;*/
