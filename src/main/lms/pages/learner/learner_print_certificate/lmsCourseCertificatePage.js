const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
var page_driver;



class LmsCourseCertificatePage
{
    constructor(driver)
    {
        page_driver = driver;
    }


    closeCourseCertificateWindowAndSwitchParentWindow(pWind, callback)
    {
        var childWindow;
        var parentWindowId = pWind;
        console.log("From Returen: " + parentWindowId);
        
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
    }


}
module.exports = LmsCourseCertificatePage;