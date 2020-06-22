/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");

class LmsManageUserAddPage {
    constructor(){ this.driver_ = bp.getDriver();}

    verifyPageTitle (){
        return this.driver_.findByTitle(locator.ManageUserAdd.title);
    }

    async fillAddUserForm(){

        let today = new Date();
        let currentDateTime = today.getFullYear() + "" + (today.getMonth() + 1) + "" + today.getDate() + "T" +
            today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
        let uName = "LMS-ATC-L-" + currentDateTime + "@lms.com";

        __cache.set(locator.cacheKey.email, uName);
        __cache.set(locator.addNewUser.userName, uName);

        await this.driver_.findTextBoxAndWrite(locator.addNewUser.firstName, __faker.name.firstName());
        await this.driver_.findTextBoxAndWrite(locator.addNewUser.lastName, __faker.name.lastName());
        await this.driver_.findTextBoxAndWrite("emailAddress", __cache.get(locator.cacheKey.email));
        await this.driver_.findTextBoxAndWrite(locator.addNewUser.userName, __cache.get(locator.addNewUser.userName));
        await this.driver_.findElementByIdAndClear(locator.addNewUser.userName);
        await this.driver_.findTextBoxAndWrite(locator.addNewUser.userName, __cache.get(locator.addNewUser.userName));
        console.info("New Learner User Name: "+ __cache.get(locator.addNewUser.userName));
        await this.driver_.findTextBoxAndWrite(locator.addNewUser.passwordField, "password1");
        await this.driver_.findTextBoxAndWrite(locator.addNewUser.confirmPasswordField, "password1");

        await this.driver_.findButtonAndClick(locator.ManageUserAdd.btnNext);
        return true;
    }

    async clickLoginAsLearner(){
        this.driver_.findButtonAndClick(locator.ManageUserAdd.btnLoginAsLearner);
        return true;
    }

}

module.exports = new LmsManageUserAddPage();