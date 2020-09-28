/**
 * Developed By: Haider Ali
 * @type {any}
 */


const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");
const lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js");


class LmsManageUserListPage {

    constructor(){ this.driver_ = bp.getDriver(); }

    verifyPageTitle (){
        return this.driver_.findByTitle(locator.ManageUserList.title);
    }

    async clickToAddUserButton(){
        await this.driver_.findButtonAndClick(locator.ManageUserList.btnAdd_User);
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

    async enterFirstNameInSearchDialogBoxAndClick(emailAddressLocator, userFirstName){
        await this.driver_.findTextBoxAndWrite_(emailAddressLocator, userFirstName);
        await this.driver_.findButtonAndClick_span(locator.ManageUserList.btnSearch);
    }

    async clickLearnerNameToLaunchProfile() {
        //await this.driver_.findByIdChecked("chk1");
        await this.driver_.findButtonAndClick_xpath(locator.ManageUserList.linkFoundFirstLearnerXpath);
    }

    async clickUserFirstNameInSearchGrid(userSearchResults, userFirstName, t){
        await lmsCommonUtilsPage.findMatchingItemAndClicks(userSearchResults, userFirstName, t);
    }


    isDesiredResultsDisplay(){
        let f = __cache.get(locator.cacheKey.firstName);
        let l = __cache.get(locator.cacheKey.lastName);
        this.driver_.findButtonAndClick_href(f);
        console.info(f);
        console.info(l);
        return true;
    }


    async confirmUserAddedSuccessfully(){
        let searchResultRow = await this.driver_.findAllWebElements(locator.ManageUserGroup.searchResultGrid);
        let searchResultData = await searchResultRow[3].getText();
        console.info(searchResultData);
        return searchResultData;
    }

    async clickManageEnrollments(){
        let managerEnrollmentLink = await this.driver_.findById(locator.manageUserLeftMenuItems.manageEnrollmentMenu);
        managerEnrollmentLink.click();
    }






}

module.exports = new LmsManageUserListPage();
