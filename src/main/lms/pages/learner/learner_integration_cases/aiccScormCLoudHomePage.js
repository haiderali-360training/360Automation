/**
 * Created by asadullah.qazi
 * On 7/23/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");
const lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js");

class AiccScormCloudHomePage {

    constructor() {
        this.driver_ = bp.getDriver();
    }

    async verifyScormCloudHomePage(){
        let homePageLogoDisplayed = await this.driver_.findByClassName(locator.scormCloud.scormCloudHomePageLogo);
        return homePageLogoDisplayed.isDisplayed();
    }

    async clickOnLibraryOptionInLeftMenu(){
        let libraryOption = await this.driver_.findElementByCss(locator.scormCloud.scormCloudLibraryOption);
        await libraryOption.click();
    }

    async verifyScormCloudLibraryPage(){
        let libraryPageHeading = await this.driver_.findElementByCss(locator.scormCloud.scormCloudLibraryPageHeading);
        return libraryPageHeading.getText();
    }

    async clickOnAiccCourseNameInTheGrid(aiccScormCourseName){
        await lmsCommonUtilsPage.findMatchingItemAndClicks(locator.scormCloud.scormCloudCoursesList, aiccScormCourseName, true);
    }

    async resetAICCCourseProgress(){
        await this.driver_.findButtonAndClick(locator.scormCloud.scormCloudResitProgressButtonText);
        //await this.driver_.switchToAlert();
    }

}
module.exports = new AiccScormCloudHomePage();