
const bp = require(process.cwd()+'/src/main/lms/pages/BasePage.js');
const locator = require(process.cwd()+'/src/main/lms/pages/locator.js');


class LmsManageUserGroupPage {

    constructor(){ this.driver_ = bp.getDriver(); }

    verifyPageTitle (){
        return this.driver_.findByTitle(locator.ManageUserGroup.title);
    }

     async clickToAddUserGroup(){
       await this.driver_.findCheckboxAndClick(locator.ManageUserGroup.rootGroupId);
       await this.driver_.findButtonAndClick(locator.ManageUserGroup.btnNext);
       return true;
     }

}

module.exports = LmsManageUserGroupPage;
