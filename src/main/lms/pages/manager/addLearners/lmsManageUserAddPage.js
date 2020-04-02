/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(process.cwd()+'/src/main/lms/pages/BasePage.js');
const locator = require(process.cwd()+'/src/main/lms/pages/locator.js');


class LmsManageUserAddPage {

    constructor(){ this.driver_ = bp.getDriver();}

    verifyPageTitle (){
        return this.driver_.findByTitle(locator.ManageUserAdd.title);
    }

    async fillAddUserForm(){
        //await this.driver_.findPageHeading(locator.ManageUserAdd.title);
        this.driver_.findTextBoxAndWrite('firstName', bp.faker.name.firstName());
        this.driver_.findTextBoxAndWrite('middleName', 'X');
        this.driver_.findTextBoxAndWrite('lastName', bp.faker.name.lastName());
        let email = bp.faker.internet.email();
        this.driver_.findTextBoxAndWrite('emailAddress', email);
        //this.driver_.findTextBoxAndWrite('userName', email);
        this.driver_.findTextBoxAndWrite('password', 'password1');
        this.driver_.findTextBoxAndWrite('confirmPassword', 'password1');
        this.driver_.findButtonAndClick(locator.ManageUserAdd.btnNext);
        return true;
    }

}

module.exports = LmsManageUserAddPage;
