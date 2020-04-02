const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var page_driver;


class LmsAddNewUserConfirmationPage
{
    constructor(driver)
    {
        page_driver = driver;
    }


    verifyAddNewUserConfirmationPageAndPageTitle(callback)
    {
        /* page_driver.wait(until(Promise.all([
            page_driver.getTitle(),
            page_driver.findElement(By.id("page-heading")).getText()
        ]).then(function(values){
            expect(values[0]).to.equal('LMS - Manager Mode');
            expect(values[1]).to.equal('Add New User - Confirmation');
        }))); */


        /* page_driver.wait(until.titleIs("LMS - Manager Mode")).then(function()
        {
            page_driver.wait(until.elementLocated(By.id("page-heading"))).then(function()
            {
                page_driver.findElement(By.id("page-heading")).then(function(e)
                {
                    expect((e).getText()).to.eventually.equal("Add New User - Confirmation");
                });
            });
        }); */

        //expect(page_driver.getTitle()).to.eventually.contain('LMS - Manager Mode');
        //expect(By.id("page-heading")).to.eventually.equal("Add New User - Confirmation");

        //callback();

        page_driver.wait(until.titleIs("LMS - Manager Mode"))
        .then(function ()
        {
            page_driver.getTitle()
            .then(function (pageTitle)
            {
                expect(pageTitle).to.include("LMS - Manager Mode");
                //console.log("LMS Add New User Confirmation Page Title Verified " + pageTitle);
            
                page_driver.wait(until.elementLocated(By.css("#page-heading")))
                .then(function()
                {
                    page_driver.findElement(By.css("#page-heading"))
                    .then(function(pageHeading)
                    {
                        pageHeading.getText()
                        .then(function(pHeading)
                        {
                            expect(pHeading).to.include("Add New User - Confirmation");
                            callback();
                        });
                    });
                });
            });
        });
    }



    clickFinishButtonInAddNewUserConfirmationPage(done)
    {
        page_driver.findElements(By.css(".managerBtn .btn_normal"))
        .then(function(buttonArray)
        {
            for(var i = 0; i < buttonArray.length; i++)
            {
                var btn = buttonArray[i];
                buttonArray[i].getText()
                .then(function(innerText)
                {
                    //console.log(`${i}: ${innerText}`);
                    if(innerText.toUpperCase() == 'FINISH')
                    btn.click();
                });
                done();
                break;                
            }
        });
    }
}
module.exports = LmsAddNewUserConfirmationPage;