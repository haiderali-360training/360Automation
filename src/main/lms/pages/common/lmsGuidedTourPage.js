/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(process.cwd()+'/src/main/lms/pages/BasePage.js');
const locator = require(process.cwd()+'/src/main/lms/pages/locator.js');

class LmsGuidedTourPage  {

    constructor(){ this.driver_ = bp.getDriver(); }

     verifyPageTitle (){
        return this.driver_.findByTitle(locator.guidedTour.title);
     }

     async clickToContinue(){
       await this.driver_.findButtonAndClick(locator.guidedTour.btnContinue);
       return true;
     }

/*
    verifyGuidedTourPageTitle(callback)
    {
        page_driver.wait(until.titleIs("LMS - Manager Mode"))
        .then(function ()
        {
            page_driver.getTitle()
            .then(function (homeTitle)
            {
                expect(homeTitle).to.include("LMS - Manager Mode");

                page_driver.wait(until.elementLocated(By.css("b")))
                .then(function()
                {
                    page_driver.findElement(By.css("b"))
                    .then(function(guidedTourSectionHeading)
                    {
                        guidedTourSectionHeading.getText()
                        .then(function(guidedTourText)
                        {
                            expect(guidedTourText).to.include("GUIDED TOUR");
                            callback();
                        });                        
                    });
                });                     
            });
        });
    }



    verifyGuidedTourPageForLearner(callback)
    {
        page_driver.wait(until.elementLocated(By.id("learner-mode-video")))
        .then(function()
        {
            page_driver.wait(until.titleIs("LMS - Learner Mode"))
            .then(function ()
            {
                page_driver.getTitle()
                .then(function (homeTitle)
                {
                    expect(homeTitle).to.include("LMS - Learner Mode");
    
                    page_driver.wait(until.elementLocated(By.css("b")))
                    .then(function()
                    {
                        page_driver.findElement(By.css("b"))
                        .then(function(guidedTourSectionHeading)
                        {
                            guidedTourSectionHeading.getText()
                            .then(function(guidedTourText)
                            {
                                expect(guidedTourText).to.include("GUIDED TOUR");
                                callback();
                            });                        
                        });
                    });                     
                });
            });
        });
        
    }


    clickContinueButton(done)
    {
        page_driver.wait(until.elementLocated(By.className("btn_normal")))
        .then(function()
        {
            page_driver.findElement(By.className("btn_normal")).click();
            done();
        });
    }
*/

}



module.exports = LmsGuidedTourPage;