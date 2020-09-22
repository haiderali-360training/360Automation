/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");
const lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js");

class LmsManageUserAddPage {
    constructor(){ this.driver_ = bp.getDriver();}

    verifyPageTitle (){
        return this.driver_.findByTitle(locator.ManageUserAdd.title);
    }

    async fillAddUserForm(){

        let today = new Date();
        let currentDateTime = today.getFullYear() + "" + (today.getMonth() + 1) + "" + today.getDate() + "T" +
            today.getHours() + "" + today.getMinutes() + "" + today.getSeconds() + "" + today.getMilliseconds();
        let uName = "LMS-ATC-L-" + currentDateTime + "@lms.com";

        __cache.set(locator.cacheKey.email, uName);
        __cache.set(locator.addNewUser.userName, uName);
        __cache.set(locator.addNewUser.passwordField, "password1");

        await this.driver_.findTextBoxAndWrite(locator.addNewUser.firstName, __faker.name.firstName());
        await this.driver_.findTextBoxAndWrite(locator.addNewUser.lastName, __faker.name.lastName());
        await this.driver_.findTextBoxAndWrite("emailAddress", __cache.get(locator.addNewUser.userName));//__cache.get(locator.cacheKey.email));
        /*await this.driver_.findTextBoxAndWrite(locator.addNewUser.userName, __cache.get(locator.addNewUser.userName));
        await this.driver_.findElementByIdAndClear(locator.addNewUser.userName);
        await this.driver_.findTextBoxAndWrite(locator.addNewUser.userName, __cache.get(locator.addNewUser.userName));*/
        console.info("New Learner User Name: "+ __cache.get(locator.addNewUser.userName));
        await lmsCommonUtilsPage.customWaitFunctionInMilliSeconds(3000);
        await this.driver_.findTextBoxAndWrite(locator.addNewUser.passwordField, __cache.get(locator.addNewUser.passwordField));
        await this.driver_.findTextBoxAndWrite(locator.addNewUser.confirmPasswordField, __cache.get(locator.addNewUser.passwordField));


        await this.driver_.findButtonAndClick(locator.ManageUserAdd.btnNext);
        return __cache.get(locator.addNewUser.userName);
    }

    async clickLoginAsLearner(){
        this.driver_.findButtonAndClick(locator.ManageUserAdd.btnLoginAsLearner);
        return true;
    }

}

module.exports = new LmsManageUserAddPage();