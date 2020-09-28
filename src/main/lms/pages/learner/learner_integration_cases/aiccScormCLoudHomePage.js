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
        console.info("clicking course launch button");
        await courseLaunchBtnElement.click();
    }

    async switchToScormCloudWindowAndClickStartToLaunchCourse(){
        //TODO discuss time with Haider bhai
        await lmsCommonUtilsPage.customWaitFunctionInMilliSeconds(5000);

        await this.driver_.switchToWindow();
        console.info("switching to scorm cloud window to launch lcms course player");

        let courseNames = await this.driver_.findElementsList(locator.scormCloud.scormCloudCoursesList);
        for (const cName of courseNames) {
            if (cName.isDisplayed()){
                await this.driver_.myexec("window.scrollTo(0, document.body.scrollHeight);");
                let clickStartToLaunchCourse = await this.driver_.findElementByCss(locator.scormCloud.scormCloudStartButton);
                console.info("clicking start button");
                await clickStartToLaunchCourse.click();
                break;
            }
        }

        let pageUrl = await this.driver_.findAndGetCurrentUrl();
        /*if (pageUrl.includes("aicc.do")){
            await this.driver_.myexec("window.scrollTo(0, document.body.scrollHeight);");
            let clickStartToLaunchCourse = await this.driver_.findElementByCss(locator.scormCloud.scormCloudStartButton);
            console.info("clicking start button");
            await clickStartToLaunchCourse.click();
        }*/
    }

    async switchToThirdWindow(){
        await this.driver_.waitForPageLoad();
        //await lmsCommonUtilsPage.customWaitFunctionInMilliSeconds(30000);
        console.info("switching to course player");
        await this.driver_.switchThirdWindow();
    }

    async scormCloudSignOut(){
        await this.driver_.waitForPageLoad();
        //await this.driver_.switchToWindow();
        console.info("Step: Logging out from Scorm Cloud Website!!");
        let scormCloudSignOutBtn = await this.driver_.findElementByCss(locator.scormCloud.scormCloudSignOutButton);
        await scormCloudSignOutBtn.click();
    }


}
module.exports = new AiccScormCloudHomePage();