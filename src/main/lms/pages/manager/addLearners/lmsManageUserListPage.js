/**
 * Developed By: Haider Ali
 * @type {any}
 */

/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(process.cwd()+'/src/main/lms/pages/BasePage.js');
const locator = require(process.cwd()+'/src/main/lms/pages/locator.js');


class LmsManageUserListPage {

    constructor(){ this.driver_ = bp.getDriver(); }

    verifyPageTitle (){
        return this.driver_.findByTitle(locator.ManageUserList.title);
    }

     async clickToAddUserButton(){
       await this.driver_.findButtonAndClick(locator.ManageUserList.btnAdd_User);
       return true;
     }

     async clickToSearchUserButton(){
       await this.driver_.findButtonAndClick(locator.ManageUserList.btnSearch);
       return true;
     }

     async fillSearchDialogBox(){
       this.driver_.findTextBoxAndWrite_('firstname', bp.faker.name.firstName());
       this.driver_.findTextBoxAndWrite('lastname', bp.faker.name.firstName());
       await this.driver_.findButtonAndClick_span(locator.ManageUserList.btnSearch);
       return true;
     }

}

module.exports = LmsManageUserListPage;

