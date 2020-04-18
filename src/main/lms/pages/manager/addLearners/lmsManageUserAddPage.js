/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(process.cwd() + "/src/main/lms/pages/BasePage.js");
const locator = require(process.cwd() + "/src/main/lms/pages/locator.js");

class LmsManageUserAddPage {
    constructor(){ this.driver_ = bp.getDriver();}

    verifyPageTitle (){
        return this.driver_.findByTitle(locator.ManageUserAdd.title);
    }

    async fillAddUserForm(){
        bp.cache.set(locator.cacheKey.firstName, bp.faker.name.firstName());
        bp.cache.set(locator.cacheKey.lastName, bp.faker.name.lastName());
        let email = bp.faker.internet.email();
        bp.cache.set(locator.cacheKey.email, email);
        this.driver_.findTextBoxAndWrite("firstName", bp.cache.get(locator.cacheKey.firstName));
        this.driver_.findTextBoxAndWrite("middleName", "X");
        this.driver_.findTextBoxAndWrite("lastName", bp.cache.get(locator.cacheKey.lastName));
        this.driver_.findTextBoxAndWrite("emailAddress", bp.cache.get(locator.cacheKey.email));
        this.driver_.findTextBoxAndWrite("password", "password1");
        this.driver_.findTextBoxAndWrite("confirmPassword", "password1");
        this.driver_.findButtonAndClick(locator.ManageUserAdd.btnNext);
        return true;
    }

    async clickLoginAsLearner(){
        this.driver_.findButtonAndClick(locator.ManageUserAdd.btnLoginAsLearner);
        return true;
    }

}

module.exports = LmsManageUserAddPage;
