const bp = require(__basedir+"/src/main/lms/pages/BasePage.js");
const locator = require(__basedir+"/src/main/lms/pages/locator.js");


class LmsManageUserConfirmationPage {

    constructor(){ this.driver_ = bp.getDriver(); }

    verifyPageTitle (){
        return this.driver_.findByTitle(locator.ManageUserConfirmation.title);
    }

     async clickToFinishButton(){
       await this.driver_.findButtonAndClick(locator.ManageUserConfirmation.btnFinish);
       return true;
     }

}

module.exports = new LmsManageUserConfirmationPage();
