/**
 * Developed By: Haider Ali
 * @type {any}
 */


const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");


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
        //await this.driver_.findTextBoxAndWrite_("firstname", bp.cache.get(locator.cacheKey.firstName));
        //await this.driver_.findTextBoxAndWrite_("lastname", bp.cache.get(locator.cacheKey.lastName));
        await this.driver_.findTextBoxAndWrite_("emailaddress", __cache.get(locator.cacheKey.email));
        await this.driver_.findButtonAndClick_span(locator.ManageUserList.btnSearch);
        return true;
    }

    async clickLearnerNameToLaunchProfile() {
        //await this.driver_.findByIdChecked("chk1");
        await this.driver_.findButtonAndClick_xpath(locator.ManageUserList.linkFoundFirstLearnerXpath);
    }


    isDesiredResultsDisplay(){
        let f = __cache.get(locator.cacheKey.firstName);
        let l = __cache.get(locator.cacheKey.lastName);
        this.driver_.findButtonAndClick_href(f);
        console.info(f);
        console.info(l);
        return true;
    }

}

module.exports = new LmsManageUserListPage();
