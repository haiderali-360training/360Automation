const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
var page_driver;


class LmsManageUserPage
{
    constructor(driver)
    {
        page_driver = driver;
    }


    verifyManageUserPage(callback)
    {
        page_driver.wait(until.elementLocated(By.id("page-icon")))
        .then(function()
        {
            page_driver.wait(until.titleIs("Manage Users"))
            .then(function ()
            {
                page_driver.getTitle()
                .then(function (pageTitle)
                {
                    expect(pageTitle).to.include("Manage Users");
                }).then(function()
                {
                    page_driver.wait(until.elementsLocated(By.css('#left-navigation #table-bands div')))
                    .then(function()
                    {
                        page_driver.wait(until.elementLocated(By.id("manageEnrollments")))
                        .then(function()
                        {
                            page_driver.findElements(By.css('#left-navigation #table-bands div'))
                            .then(function(manageUserLeftMenuNames)
                            {
                                expect(manageUserLeftMenuNames).to.have.lengthOf(8);
                                callback();
                            });
                        });
                        
                    });                
                });
            });
        });
        
    }



    clickAddUserButton(done)
    {
        page_driver.findElements(By.css("#resultHeader .btn_normal"))
        .then(function(buttonArray)
        {
            for(var i = 0; i < buttonArray.length; i++)
            {
                var btn = buttonArray[i];
                buttonArray[i].getText()
                .then(function(innerText)
                {
                    if(innerText.toUpperCase() == 'ADD USER')
                    btn.click();
                });
                done();
                break;                
            }
        });
    }



    confirmUserAddedSuccessfully(localVar, done)
    {
        page_driver.findElements(By.xpath("//*[@id='searchResult']//tr/td[4]"))
        .then(function(eleArray)
        {         
            var splitValues = [];

            function test()
            {
                for (var value of eleArray)
                {
                    value.getText()
                    .then(function(arrayValue)
                    {
                        splitValues[0] = arrayValue;
                        
                        if(arrayValue.includes('.'))
                        {
                            splitValues = arrayValue.split('.');
                        }
                        
                        if (localVar.includes(splitValues[0]))
                        {
                            expect(localVar).to.include(splitValues[0]);
                            done();
                            return;
                        }
                    });
                }
            }
            test();
        });
    }
}
module.exports = LmsManageUserPage;