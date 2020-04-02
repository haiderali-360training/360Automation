const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
var page_driver;


class LmsUserGroupPage
{
    constructor(driver)
    {
        page_driver = driver;
    }


    verifySelectGroupsOnAddNewUserPage(callback)
    {
        page_driver.wait(until.elementLocated(By.css("#table-page-description #page-heading")))
        .then(function()
        {
            page_driver.findElement(By.css("#table-page-description #page-heading"))
            .then(function(pageHeading)
            {
                pageHeading.getText()
                .then(function(pHeading)
                {
                    expect(pHeading).to.include("Add New User - Groups");
                }).then(function()
                {
                    page_driver.wait(until.elementsLocated(By.className("arrow-transfer")));
                    callback();
                });
            });
        });
    }



    checkOrganizationGroupCheckbox(callback)
    {
        page_driver.wait(until.elementLocated(By.className("content-Block-wizard-tree")))
        .then(function()
        {
            page_driver.wait(until.elementLocated(By.className("User-checkbox-row-d2a")))
            .then(function()
            {
                page_driver.wait(until.elementLocated(By.css(".org_checkbox input")))
                .then(function()
                {
                    page_driver.findElement(By.id("_orgGroup1")).click();
                    callback();
                });
            });
        });
    }



    clickNextButtonInAddGroupsPage(done)
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
                    if(innerText.toUpperCase() == 'NEXT')
                    btn.click();
                });
                done();
                break;
            }
        });
    }

}
module.exports = LmsUserGroupPage;