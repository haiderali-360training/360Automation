const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
var page_driver;


class LmsMyCoursePage
{
    constructor(driver)
    {
        page_driver = driver;
    }



    verifyMyCoursePage(lmsCourse, callback)
    {
        page_driver.wait(until.elementLocated(By.id("page-heading")))
        .then(function()
        {
            page_driver.findElement(By.id("page-heading")).getText()
            .then(function(PageHeading)
            {
                expect(PageHeading).to.include("My Courses");
            }).then(function()
                {
                    page_driver.wait(until.elementLocated(By.id("show")))
                    .then(function()
                    {
                        page_driver.wait(until.elementLocated(By.className("bodycourseTitle-ul")))
                        .then(function()
                        {
                            page_driver.findElement(By.className("bodycourseTitle-ul")).getText()
                            .then(function(courseName)
                            {
                                expect(courseName).to.include(lmsCourse);
                                callback();
                            });
                        });
                    });
                });
            });
        }



    clickCourseNameToLaunchCoursePlayer(callback)
    {
        page_driver.findElement(By.className("bodycourseTitle-ul")).click()
        .then(function()
        {
            setTimeout(function()
            {
                var parentWindowId = null;
                page_driver.getWindowHandle()
                .then(function(parentWindow)
                {
                    console.log("Parent window Id: " + parentWindow);
                    parentWindowId = parentWindow;
                }).then(function()
                {
                    var coursePlayer = null;
                    page_driver.getAllWindowHandles()
                    .then(function(allHandles)
                    {
                        console.log("Total Windows Id: " + allHandles);
                        coursePlayer = allHandles[0] == parentWindowId ? allHandles[1] : allHandles[0];
                    }).then(function()
                    {
                        console.log("value in coursePlayer variable: " + coursePlayer);
                        console.log("switching control to course player window");
                        
                        page_driver.switchTo().window(coursePlayer)
                        .then(function()
                        {
                            /* setTimeout(function()
                            { */
                                page_driver.wait(until.titleIs("LCMS Course Player"))
                                .then(function()
                                {
                                    page_driver.wait(until.urlContains("scu-qa-player.360training.com/iCP4/CoursePlayer.aspx?SESSION="))
                                    .then(function()
                                    {
                                        page_driver.getTitle()
                                        .then(function(coursePlayerTitle)
                                        {
                                            expect(coursePlayerTitle).to.include("LCMS Course Player");
                                            callback(parentWindowId);
                                        });
                                    });
                                });
                            //}, 1500);
                        });
                    });
                });
            }, 4000);
        });     
    }




    confirmCoursePlayerLaunched(done)
    {
        console.log("switched");
        done();
    }




    clickOnMyCourseHeadersMenu(callback)
    {
        page_driver.wait(until.elementLocated(By.id("learner-my-courses")))
        .then(function()
        {
            page_driver.findElement(By.id("learner-my-courses")).click();
            callback();
        });
    }




    verifyCourseCompletionStatusAndClickPrintCertificate(done)
    {
        page_driver.wait(until.elementLocated(By.className("text-green")))
        .then(function()
        {
            page_driver.findElement(By.className("text-green")).getText()
            .then(function(courseStatus)
            {
                expect(courseStatus).to.include("Completed");
            }).then(function()
            {
                page_driver.findElement(By.className("print-certificate")).click()
                .then(function()
                {
                    setTimeout(function()
                    {
                        var lmsWindow = null;
                        page_driver.getWindowHandle()
                        .then(function(parentWindow)
                        {
                            console.log("LMS Parent window Id: " + parentWindow);
                            lmsWindow = parentWindow;
                        }).then(function()
                        {
                            var courseCertificateWindow = null;
                            page_driver.getAllWindowHandles()
                            .then(function(totalWindows)
                            {
                                console.log("Total Windows Id: " + totalWindows);
                                courseCertificateWindow = totalWindows[0] == lmsWindow ? totalWindows[1] : totalWindows[0];
                            }).then(function()
                            {
                                console.log("value in course Certificate Window variable: " + courseCertificateWindow);
                                console.log("switching control to course Certificate Window");
                                
                                page_driver.switchTo().window(courseCertificateWindow)
                                .then(function()
                                {
                                    page_driver.wait(until.urlContains("scu-qa-lms.360training.com/lms/rest/certificate"))
                                    .then(function()
                                    {
                                        page_driver.getCurrentUrl()
                                        .then(function(currentlUrl)
                                        {
                                            console.log(currentlUrl);
                                            expect(currentlUrl).to.include("scu-qa-lms.360training.com/lms/rest/certificate");
                                            done();
                                        });
                                    });                                    
                                });
                            });
                        });
                    }, 20000);
                });
            });
        });
    }



}
module.exports = LmsMyCoursePage;