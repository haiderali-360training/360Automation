/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(process.cwd() + "/src/main/lms/pages/BasePage.js");
const locator = require(process.cwd() + "/src/main/lms/pages/locator.js");


class LmsLoginPage {

    constructor(){ this.driver_ = bp.getDriver(); }

    verifyLmsLoginPageTitle (){
        this.driver_.visit(bp.env.getLmsUrl());
        return this.driver_.findByTitle(locator.loginPage.title);
    }

    enterCredentialsOnLogin (userName, password){
        this.driver_.findTextBoxAndWrite(locator.loginPage.usernameId, userName);
        this.driver_.findTextBoxAndWrite(locator.loginPage.password, password);
        this.driver_.findButtonAndClick(locator.loginPage.btnLogin);
        return true;
    }



    /*
        verifyLmsLoginPageTitle(callback)
        {
            page_driver.wait(until.titleIs("Learner-My Courses Login"))
            .then(function ()
            {
                page_driver.getTitle()
                .then(function (homeTitle)
                {
                    expect(homeTitle).to.include("Learner-My Courses Login");
                    callback();
                });
            });
        }
    */

/*
    enterLoginCredentials(callback)
    {
        

        console.log(pro.getLmsUserCredentialsProperty("qa","lms.ManagerUserName"));
        console.log(userRole.ROLE_LEARNER);

        page_driver.findElement(By.id("username")).sendKeys("Lms_Customer_Automation@lms.com")
        .then(function()
        {
            page_driver.findElement(By.id("password")).sendKeys("passw0rd")
            .then(function()
            {
                callback();
            });            
        });
    }


    clickLoginButton(done)
    {
        page_driver.findElement(By.className("btn_normal")).click();
        done();
    }*/
}

module.exports = LmsLoginPage;
