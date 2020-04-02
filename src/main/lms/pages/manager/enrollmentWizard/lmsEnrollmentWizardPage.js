const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var page_driver;


class LmsEnrollmentWizardPage
{
    constructor(driver)
    {
        page_driver = driver;
    }


    verifyEnrollmentWizardPage(callback)
    {
        page_driver.wait(until.elementLocated(By.id("page-icon")))
        .then(function()
        {
            page_driver.wait(until.elementLocated(By.css("#page-description #page-heading")))
            .then(function()
            {
                page_driver.findElement(By.css("#page-description #page-heading")).getText()
                .then(function(enrollPageHeading)
                {
                    expect(enrollPageHeading).to.include("Enroll Learners");
                    callback();
                });
            });
        });
        
    }



    selectEnrollByUsersMethod(callback)
    {
        page_driver.wait(until.elementLocated(By.id("Learner"))).click();
        callback();
    }



    clickNextButton(buttonLabel, callback)
    {
        /*  INNER FUNCTION LOGIC
        
        console.log("start main func");
        var start = new Date();
        page_driver.findElements(By.css(".managerBtn .btn_normal"))
        .then(function(buttonArray)
        {
            console.log("before custom func");
            function test()
            {
                console.log("inside custom func");
                buttonArray.forEach(function(element)
                {
                    element.getText()
                    .then(function(innerText)
                    {
                        console.log(`before condition = ${innerText}`);
                        if(innerText.toUpperCase() === buttonLabel)
                        {
                            console.log(`inside condition = ${innerText}`);
                            element.click();
                            var end = new Date() - start;
                            console.info('Execution time: %dms', end);
                            done();
                            return;
                        }
                    })
                });
            }
            test();
        }); */



        /*  RECURRSEIVE FUNCTION LOGIC  */
     var start = new Date();
        page_driver.findElements(By.css(".managerBtn .btn_normal"))
        .then(function(buttonArray)
        {
            function recurseButtons(counter)
            {
                if(counter < buttonArray.length)
                {
                    buttonArray[counter].getText()
                    .then(function(innerText)
                    {
                        if(innerText.toUpperCase() == buttonLabel)
                        {
                            //console.log(`inside condition = ${counter}: ${innerText}`);
                            buttonArray[counter].click();
                            callback();                        
                        }
                        else
                        {
                            recurseButtons(counter + 1);
                        }
                    });
                }
                var end = new Date() - start;
                console.info('Recursive Function Execution time: %dms', end);
            }
            recurseButtons(0);
        });
    }



    verifySelectLearnerPage(callback)
    {
        page_driver.wait(until.elementLocated(By.id("page-icon")))
        .then(function()
        {
            page_driver.wait(until.elementLocated(By.css("#page-heading")))
            .then(function()
            {
                page_driver.findElement(By.css("#page-heading")).getText()
                .then(function(enrollPageHeading)
                {
                    expect(enrollPageHeading).to.include("Assign Enrollment - Select Learners");
                    callback();
                });
            });
        });        
    }



    searchLearner(userName, callback)
    {
        page_driver.wait(until.elementLocated(By.css(".result_left_side .btn_normal")))
        .then(function()
        {
            page_driver.findElement(By.css(".result_left_side .btn_normal")).click();
        }).then(function()
        {
            page_driver.wait(until.elementLocated(By.id("searchBox")))
            .then(function()
            {
                page_driver.findElement(By.name("searchEmailAddress")).sendKeys(userName)
                .then(function()
                {
                    page_driver.findElement(By.css("#searchBox a[name='qsearch']")).click();
                    callback();
                });
            });
        });
    }



    selectLearnerFromSearchedResult(uName, callback)
    {
        page_driver.wait(until.elementLocated(By.id("chk1")))
        .then(function()
        {
            page_driver.findElement(By.id("chk1")).click();
            callback();
        });

        /* this.clickNextButton("NEXT", function(){
            done();
        }); */
    }


    clickNextBtn(btnLabel, callback)
    {
        page_driver.findElements(By.css(".managerBtn .btn_normal"))
        .then(function(buttonArray)
        {
            function recurseButtons(counter)
            {
                if(counter < buttonArray.length)
                {
                    buttonArray[counter].getText()
                    .then(function(innerText)
                    {
                        if(innerText.toUpperCase() == btnLabel)
                        {
                            //console.log(`inside condition = ${counter}: ${innerText}`);
                            buttonArray[counter].click();
                            callback();                        
                        }
                        else
                        {
                            recurseButtons(counter + 1);
                        }
                    });
                }
            }
            recurseButtons(0);
        });
    }



    searchAndSelectCourse(course, callback)
    {
        page_driver.wait(until.elementLocated(By.css("#page-heading")))
        .then(function()
        {
            page_driver.findElement(By.css("#page-heading")).getText()
            .then(function(enrollPageHeading)
            {
                expect(enrollPageHeading).to.include("Assign Enrollment - Select Courses");
            }).then(function()
            {
                page_driver.wait(until.elementLocated(By.css(".result_left_side .btn_normal")))
                .then(function()
                {
                    page_driver.findElement(By.css(".result_left_side .btn_normal")).click();
                }).then(function()
                {
                    page_driver.wait(until.elementLocated(By.id("searchBox")))
                    .then(function()
                    {
                        page_driver.findElement(By.id("formSearchCourseName")).sendKeys(course)
                        .then(function()
                        {
                            page_driver.findElement(By.css("#searchBox a[name='qsearch']")).click();                            
                        }).then(function()
                        {
                            page_driver.wait(until.elementLocated(By.id("chk0")))
                            .then(function()
                            {
                                page_driver.findElement(By.id("chk0")).click();
                                callback();
                            });
                        });
                    });
                });
            });
        });
    }



    clickNext(btnLabel, done)
    {
        page_driver.findElements(By.css(".managerBtn .btn_normal"))
        .then(function(buttonArray)
        {
            function recurseButtons(counter)
            {
                if(counter < buttonArray.length)
                {
                    buttonArray[counter].getText()
                    .then(function(innerText)
                    {
                        if(innerText.toUpperCase() == btnLabel)
                        {
                            //console.log(`inside condition = ${counter}: ${innerText}`);
                            buttonArray[counter].click();
                            done();                        
                        }
                        else
                        {
                            recurseButtons(counter + 1);
                        }
                    });
                }
            }
            recurseButtons(0);
        });
    }




    selectCourseEnrollmentDates(callback)
    {
        page_driver.wait(until.elementLocated(By.css("#page-heading")))
        .then(function()
        {
            page_driver.findElement(By.css("#page-heading")).getText()
            .then(function(enrollPageHeading)
            {
                expect(enrollPageHeading).to.include("Assign Enrollment - Duration of Enrollments");
            }).then(function()
            {
                page_driver.wait(until.elementsLocated(By.css("#e13 .datepicker_wrap")))
                .then(function()
                {
                    page_driver.findElement(By.id("allCourses")).click();
                }).then(function()
                {
                    var currentDate = new Date();
                    var startDate = currentDate.toLocaleDateString("en-US");
                    page_driver.findElement(By.id("allCourseStartDate")).sendKeys(startDate)
                    .then(function()
                    {
                        var currentDate = new Date();
                        var currentDatePlus100Days = 50;
                        currentDate.setTime(currentDate.getTime() + (currentDatePlus100Days * 24 *60 * 60 * 1000));                        
                        var endDate = currentDate.toLocaleDateString("en-US");
                        page_driver.findElement(By.id("allCourseEndDate")).sendKeys(endDate)
                        callback();
                    });
                });
            });
        });
    }


    clickNextButon(btnLabel, callback)
    {
        page_driver.findElements(By.css(".managerBtn .btn_normal"))
        .then(function(buttonArray)
        {
            function recurseButtons(counter)
            {
                if(counter < buttonArray.length)
                {
                    buttonArray[counter].getText()
                    .then(function(innerText)
                    {
                        if(innerText.toUpperCase() == btnLabel)
                        {
                            //console.log(`inside condition = ${counter}: ${innerText}`);
                            buttonArray[counter].click();
                            callback();                        
                        }
                        else
                        {
                            recurseButtons(counter + 1);
                        }
                    });
                }
            }
            recurseButtons(0);
        });
    }




    configureEnrollmentSettings(callback)
    {
        page_driver.wait(until.elementLocated(By.css("#page-heading")))
        .then(function()
        {
            page_driver.findElement(By.css("#page-heading")).getText()
            .then(function(enrollPageHeading)
            {
                expect(enrollPageHeading).to.include("Assign Enrollment - Assignment Options");
                callback();
            });
        });
    }




    clickNextB(btnLabel, callback)
    {
        page_driver.findElements(By.css(".managerBtn .btn_normal"))
        .then(function(buttonArray)
        {
            function recurseButtons(counter)
            {
                if(counter < buttonArray.length)
                {
                    buttonArray[counter].getText()
                    .then(function(innerText)
                    {
                        if(innerText.toUpperCase() == btnLabel)
                        {
                            //console.log(`inside condition = ${counter}: ${innerText}`);
                            buttonArray[counter].click();
                            callback();                        
                        }
                        else
                        {
                            recurseButtons(counter + 1);
                        }
                    });
                }
            }
            recurseButtons(0);
        });
    }




    verifyNumberOfEnrollmentAndClickOkButton(done)
    {
        page_driver.wait(until.elementLocated(By.css("#page-heading")))
        .then(function()
        {
            page_driver.findElement(By.css("#page-heading")).getText()
            .then(function(enrollPageHeading)
            {
                expect(enrollPageHeading).to.include("Assign Enrollment - Results");
            }).then(function()
            {
                page_driver.findElement(By.xpath("//*[@id='e7b']/div[1]/div[2]"))
                .then(function(enrollmentCount)
                {
                    enrollmentCount.getText()
                    .then(function(enrollments)
                    {
                        expect(enrollments).to.equal("1");
                    }).then(function()
                    {
                        page_driver.findElement(By.css(".managerBtn .btn_normal")).click();
                        done();
                    });
                });
            });
        });
    }


}
module.exports = LmsEnrollmentWizardPage;
