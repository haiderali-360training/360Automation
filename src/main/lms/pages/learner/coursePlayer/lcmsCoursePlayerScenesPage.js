const { By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
var page_driver;



class LcmsCoursePlayerScenesPage
{
    constructor(driver)
    {
        page_driver = driver;
    }


    startAndCompleteScenesCourseOnLcmsCoursePlayer(done)
    {
        setTimeout(function()
        {
            page_driver.wait(until.elementLocated(By.css("#contentTable p")))
            .then(function()
            {
                page_driver.findElement(By.css("#contentTable p")).getText()
                .then(function(sceneText)
                {                
                    console.log(sceneText);
                    expect(sceneText).to.include("SmokeTestScene");                
                }).then(function()
                {
                    page_driver.wait(until.elementLocated(By.css(".btn.ctrl #PlaybuttonEnText")))
                    .then(function()
                    {
                        page_driver.findElement(By.css(".btn.ctrl #PlaybuttonEnText")).click();
                        done();                        
                    });                
                });
            });
        }, 200);        
    }


}
module.exports = LcmsCoursePlayerScenesPage;