/**
 * Created by asadullah.qazi
 * On 7/15/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");
const lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js");



class LmsMyPreferencesPage {

    constructor() {
        this.driver_ = bp.getDriver();
    }

    async clickMyPreferencesMenu(leftMenuName){
        await lmsCommonUtilsPage.findMatchingItemAndClicks(locator.learnerMyProfile.profileLeftMenu, leftMenuName, true);
    }

    async updatePreferences(){
        let registrationEmailsYes = await this.driver_.findElementByCss(locator.myPreferences.myPreferencesRegistrationEmailYes);
        if (registrationEmailsYes.isSelected()){
            let registrationEmailsNo = await this.driver_.findElementByCss(locator.myPreferences.myPreferencesRegistrationEmailNo);
            await registrationEmailsNo.click();
        }
        else {
            await registrationEmailsYes.click();
        }



        let enrollmentEmailsYes = await this.driver_.findElementByCss(locator.myPreferences.myPreferencesEnrollmentEmailYes);
        if (enrollmentEmailsYes.isSelected()){
            let enrollmentEmailsNo = await this.driver_.findElementByCss(locator.myPreferences.myPreferencesEnrollmentEmailNo);
            await enrollmentEmailsNo.click();
        }
        else {
           await enrollmentEmailsYes.click();
        }



        let courseCompletionEmailsYes = await this.driver_.findElementByCss(locator.myPreferences.myPreferencesCourseCompletionEmailYes);
        if (courseCompletionEmailsYes.isSelected()){
            let courseCompletionEmailsNo = await this.driver_.findElementByCss(locator.myPreferences.myPreferencesCourseCompletionEmailNo);
            await courseCompletionEmailsNo.click();
        }
        else {
            await courseCompletionEmailsYes.click();
        }

        await this.driver_.findButtonAndClick(locator.myPreferences.myPreferencesSaveButton);
    }


    async verifyPreferencesUpdatedAndSave(){
        let registrationEmailsNo = await this.driver_.findElementByCss(locator.myPreferences.myPreferencesRegistrationEmailNo);
        let enrollmentEmailsNo = await this.driver_.findElementByCss(locator.myPreferences.myPreferencesEnrollmentEmailNo);
        let courseCompletionEmailsNo = await this.driver_.findElementByCss(locator.myPreferences.myPreferencesCourseCompletionEmailNo);

        if (registrationEmailsNo.isSelected()
            && enrollmentEmailsNo.isSelected()
            && courseCompletionEmailsNo.isSelected()){
            console.info("My Preferences Changes Saved");
            return true;
        }
    }


    async revertPreferences(){
        let registrationEmailsYes = await this.driver_.findElementByCss(locator.myPreferences.myPreferencesRegistrationEmailYes);
        await registrationEmailsYes.click();
        let enrollmentEmailsYes = await this.driver_.findElementByCss(locator.myPreferences.myPreferencesEnrollmentEmailYes);
        await enrollmentEmailsYes.click();
        let courseCompletionEmailsYes = await this.driver_.findElementByCss(locator.myPreferences.myPreferencesCourseCompletionEmailYes);
        await courseCompletionEmailsYes.click();

        await this.driver_.findButtonAndClick(locator.myPreferences.myPreferencesSaveButton);
    }


}
module.exports = new LmsMyPreferencesPage();