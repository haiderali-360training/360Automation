/**
 * Created by asadullah.qazi
 * On 7/11/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");


class LmsManageEnrollmentPage {

    constructor() {
        this.driver_ = bp.getDriver();
    }

    async clickToSearchUserButton() {
        await this.driver_.findButtonAndClick(locator.ManageUserList.btnSearch);
    }

    async fillSearchDialogBox(){
        await this.driver_.findTextBoxAndWrite_("emailAddress", __cache.get(locator.cacheKey.email));
        await this.driver_.findButtonAndClick_span(locator.ManageUserList.btnSearch);
    }

    async clickViewEnrollment(){
        let searchResultRow = await this.driver_.findElementByCss(locator.manageEnrollmentPage.viewEnrollmentLink);
        let viewEnrollmentIsDisplayed = await searchResultRow.isDisplayed();
        await searchResultRow.click();
        return viewEnrollmentIsDisplayed;
    }

    async verifyEnrollmentCreatedSuccessfully(){
        let enrollmentSearchResult = await this.driver_.findAllWebElements(locator.manageEnrollmentPage.searchResultGrid);
        return enrollmentSearchResult[1].getText();
    }


}
module.exports = new LmsManageEnrollmentPage();