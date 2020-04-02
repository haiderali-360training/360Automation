const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const faker = require('faker');
var page_driver;


class LmsAddNewUserInformationPage
{
    constructor(driver)
    {
        page_driver = driver;
    }


    verifyUserRegistrationPageTitle(callback)
    {
        page_driver.wait(until.titleIs("LMS - Manager Mode"))
        .then(function ()
        {
            page_driver.getTitle()
            .then(function (pageTitle)
            {
                expect(pageTitle).to.include("LMS - Manager Mode");            
                
                page_driver.wait(until.elementLocated(By.id("page-heading")))
                .then(function()
                {
                    page_driver.findElement(By.id("page-heading"))
                    .then(function(pageHeading)
                    {
                        pageHeading.getText()
                        .then(function(pHeading)
                        {
                            expect(pHeading).to.include("Add New User - Information");
                            callback();
                        });
                    });
                });
            });
        });
    }



    enterNewUserInformation(callback)
    {
        var today = new Date();
        var currentDateTime = today.getFullYear() + '' + (today.getMonth() + 1) + '' + today.getDate() + 'T' +
        today.getHours() + '' + today.getMinutes() + '' + today.getSeconds();
        var userName = "LMS-ATC-L-" + currentDateTime + "@mailinator.com";
        var firstName = userName.substring(0, 24);
        //var userFirstName = "LMS-ATC-L-" + faker.name.firstName() + currentDateTime;        

        page_driver.findElement(By.id("firstName")).sendKeys(firstName)
        .then(function()
        {
            page_driver.findElement(By.id("emailAddress")).sendKeys(userName)
            .then(function()
            {
                page_driver.findElement(By.id("lastName")).sendKeys(faker.name.lastName())
                .then(function()
                {
                    page_driver.findElement(By.id("userName")).clear();
                    page_driver.findElement(By.id("userName")).sendKeys(userName)
                    .then(function()
                    {
                        page_driver.findElement(By.id("password")).sendKeys("password1")
                        .then(function()
                        {
                            page_driver.findElement(By.id("confirmPassword")).sendKeys("password1")
                            .then(function()
                            {
                                page_driver.executeScript("window.scrollBy(0,300)")
                                .then(function()
                                {
                                    console.log("Adding User: " + userName);
                                    callback(userName);
                                });
                            });
                        });
                    });
                });
            });
        });
    }



    clickNextButtonInAddUserPage(done)
    {
        page_driver.findElements(By.css(".managerBtn .btn_normal"))
        .then(function(buttonArray)
        {
            firstLoop: for(var i = 0; i < buttonArray.length; i++)
            {
                var btn = buttonArray[i];
                buttonArray[i].getText()
                .then(function(innerText)
                {
                    //console.log(`${i}: ${innerText}`);
                    if(innerText.toUpperCase() == 'NEXT')
                        btn.click();
                });
                done();
                break firstLoop;                
            }
        });
    }

}
module.exports = LmsAddNewUserInformationPage;