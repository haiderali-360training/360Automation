const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var page_driver;


class LmsManagerPageHeadersPage
{
    constructor(driver)
    {
        page_driver = driver;
    }


    verifyManagerHeaders(callback)
    {
        page_driver.wait(until.elementLocated(By.css("#header #table-icons")))
        .then(function()
        {
            page_driver.findElements(By.css("#header #table-icons"))
            .then(function(managerHeaders)
            {
                expect(managerHeaders).to.have.lengthOf(5);
                callback();
            });
        });
    }


    clickPlanAndEnrollIcon(done)
    {
        page_driver.wait(until.elementLocated(By.id("manager-plan-enroll")))
        .then(function()
        {
            page_driver.findElement(By.id("manager-plan-enroll")).click();
            done();
        });        
    }
}
module.exports = LmsManagerPageHeadersPage;