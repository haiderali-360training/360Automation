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
        let resitProgressBtnElement =  await this.driver_.findByXpath(locator.scormCloud.scormCloudResitProgressButton);
        await resitProgressBtnElement.click();
        await this.driver_.switchToAlert();
    }

    async verifyCourseProgressResitSuccessful(totalTime){
        return lmsCommonUtilsPage.findMatchingItemAndClicks(locator.scormCloud.scormCloudCheckZeroProgress, totalTime, false);
    }

    async clickCourseLaunchButton(){
        let courseLaunchBtnElement = await this.driver_.findElementByCss(locator.scormCloud.scormCloudLaunchCourseButton);
        await courseLaunchBtnElement.click();
    }

    async switchToScormCloudWindowAndClickStartToLaunchCourse(){
        //TODO discuss time with Haider bhai
        await lmsCommonUtilsPage.customWaitFunctionInMilliSeconds(10000);

        await this.driver_.switchToWindow();

        let pageUrl = await this.driver_.findAndGetCurrentUrl();
        if (pageUrl.includes("aicc.do")){
            await this.driver_.myexec("window.scrollTo(0, document.body.scrollHeight);");
            let clickStartToLaunchCourse = await this.driver_.findElementByCss(locator.scormCloud.scormCloudStartButton);
            await clickStartToLaunchCourse.click();
        }
    }

    async switchToThirdWindow(){
        await lmsCommonUtilsPage.customWaitFunctionInMilliSeconds(12000);
        await this.driver_.switchThirdWindow();
    }

    async scormCloudSignOut(){

    }


}
module.exports = new AiccScormCloudHomePage();