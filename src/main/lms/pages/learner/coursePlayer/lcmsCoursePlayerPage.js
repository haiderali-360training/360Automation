const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
var page_driver;


class LcmsCoursePlayerPage
{
    constructor(driver)
    {
        page_driver = driver;
    }

    verifyCourseNameOnStartScreenAndClickNext(courseName, done)
    {
        setTimeout(function()
        {
            /* page_driver.wait(until.elementLocated(By.className("slimScrollDiv")))
            .then(function()
            { */
                page_driver.wait(until.elementLocated(By.id("coursetitle")))
                .then(function()
                {
                    page_driver.findElement(By.id("coursetitle")).getText()
                    .then(function(nameOfCourse)
                    {
                        console.log(nameOfCourse);
                        expect(nameOfCourse).to.include(courseName);                    
                    }).then(function()
                    {
                        page_driver.findElement(By.id("PlaybuttonEnText")).click();
                        done();
                    });
                });
            //});
        }, 400);                
    }

}
module.exports = LcmsCoursePlayerPage;