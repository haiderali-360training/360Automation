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
        __cache.set(locator.cacheKey.firstName, __faker.name.firstName());
        __cache.set(locator.cacheKey.lastName, __faker.name.lastName());
        let email = __faker.internet.email();
        __cache.set(locator.cacheKey.email, email);
        await this.driver_.findTextBoxAndWrite("firstName", locator.ManageUserAdd.preFixFirstName+__cache.get(locator.cacheKey.firstName));
        await this.driver_.findTextBoxAndWrite("middleName", locator.ManageUserAdd.preFixMiddleName);
        await this.driver_.findTextBoxAndWrite("lastName", __cache.get(locator.cacheKey.lastName));
        await this.driver_.findTextBoxAndWrite("emailAddress", locator.ManageUserAdd.preFixEmail+__cache.get(locator.cacheKey.email));
        await this.driver_.findElementByIdAndClear(locator.ManageUserAdd.userName);
        await this.driver_.findTextBoxAndWrite("password", "password123!@#");
        await this.driver_.findTextBoxAndWrite("confirmPassword", "password123!@#");
        await this.driver_.findButtonAndClick(locator.ManageUserAdd.btnNext);
        return true;
    }

    async clickLoginAsLearner(){
        this.driver_.findButtonAndClick(locator.ManageUserAdd.btnLoginAsLearner);
        return true;
    }

}

module.exports = new LmsManageUserAddPage();
