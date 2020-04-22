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
        await this.driver_.findTextBoxAndWrite("firstName", locator.ManageUserAdd.preFixFirstName+bp.cache.get(locator.cacheKey.firstName));
        await this.driver_.findTextBoxAndWrite("middleName", locator.ManageUserAdd.preFixMiddleName);
        await this.driver_.findTextBoxAndWrite("lastName", bp.cache.get(locator.cacheKey.lastName));
        await this.driver_.findTextBoxAndWrite("emailAddress", locator.ManageUserAdd.preFixEmail+bp.cache.get(locator.cacheKey.email));
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

module.exports = LmsManageUserAddPage;
