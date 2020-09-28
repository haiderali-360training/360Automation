/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");
const lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js");

class LcmsCoursePlayerPage {

    constructor()
    {
        this.driver_ = bp.getDriver();
    }

    async maximizeCoursePlayerWindow(){
        await this.driver_.maximizeWindow();
    }

    verifyPageTitle (){
        return this.driver_.findByTitle(locator.coursePlayerPage.title);
    }

    async removeAlert(){
        await this.driver_.switchToAlert();
    }


    async confirmCourseNameOnLcmsCoursePlayerPage(){
        console.info("Switched Successfully to LCMS Course Player Page");
        await this.driver_.waitUntilElementDisplayed(locator.coursePlayerPage.courseNameInLeftMenu);
        let cName = await this.driver_.findElementByCss(locator.coursePlayerPage.courseNameInLeftMenu);
        let courseName = await cName.getText();
        console.info("Course Name Appear on Course Player: " + courseName);
        return courseName;
    }

    async switchToScormPlayerWindow(){
        await this.driver_.switchToFrame(locator.coursePlayerPage.iframeOne);

    }

    async verifyScormCoursePageHeading(){
        let scormContentHeading = await this.driver_.findAllWebElements(locator.coursePlayerPage.scormCourseContentHeading);
        let value0 = await scormContentHeading[0].getText();
        let value1 = await scormContentHeading[1].getText();
        let value2 = await scormContentHeading[2].getText();
        console.info("Scorm Title 0 "+value0);
        console.info("Scorm Title 1 "+value1);
        console.info("Scorm Title 2 "+value2);
        let scormPageHeading = await scormContentHeading[0].getText();
        console.info(scormPageHeading);
        return scormPageHeading;
    }



    async browserCheckAndModePage (){
        await this.driver_.findButtonAndClick_span(locator.coursePlayerPage.btnContinue);
        return true;
    }

    async switchToCoursePlayWindow (){
        return this.driver_.switchToWindow();
    }

    async checkAcknowledgmentButtonAndNext(){
        //await this.driver_.findCheckboxAndClick(locator.coursePlayerPage.chkAcknowledge);
        //await this.driver_.findButtonAndClick_css(locator.coursePlayerPage.coursePlayerNextButton);
        await lmsCommonUtilsPage.customWaitFunctionInMilliSeconds(3000);
        let acknowledgmentCheckbox = await this.driver_.findById(locator.coursePlayerPage.chkAcknowledge);
        acknowledgmentCheckbox.isDisplayed();
        acknowledgmentCheckbox.click();
        await this.driver_.findButtonAndClick_css(locator.coursePlayerPage.coursePlayerNextButton);
    }

    async TermsOfUseClick(){
        await this.driver_.findButtonAndClick_href(locator.coursePlayerPage.btnAgree_Continue);
    }

    async clickNextCourseStartAndComplete(){
        await this.driver_.findButtonAndClick_css(locator.coursePlayerPage.coursePlayerPlayButton);
        await this.driver_.findButtonAndClick_css(locator.coursePlayerPage.coursePlayerPlayButton);
        await this.driver_.findButtonAndClick_xpath(locator.coursePlayerPage.btnBeginPostAssessment);
        await this.driver_.findButtonAndClick_xpath(locator.coursePlayerPage.btnQuestion);
        await this.driver_.findButtonAndClick_xpath(locator.coursePlayerPage.btnQuestionNext);
        await this.driver_.findButtonAndClick_xpath(locator.coursePlayerPage.btnReview);
        await this.driver_.findButtonAndClick_xpath(locator.coursePlayerPage.btnQuestionNext);
        return "";
    }

    async coursePlayerSaveAndClose(){

        /* FOR THE TIME BEEN WE ARE NOT ABLE TO CLOSE COURSE PLAYER WINDOW.
        AND WE LEAVING WINDOW UNTIL WE FIND PROPER SOLUTION.

         */
        console.info("coursePlayerSaveAndClose");

        //INCASE WE COUSER PLAY ENCOUNTER NETWORK ERROR
        //await this.driver_.findButtonAndClick_xpath_nm("//*[@id=\"networkErrorContent\"]");
        console.info("Course Completed.......and delay 90000");

        await this.driver_.switchMainWindow();
        return "";
    }


    async closeLcmsCoursePlayerWindowAndSwitchBackToLms(){
        await this.driver_.switchMainWindow();
    }


    async closeLcmsPlayerAndSwitchSubChildWindow(){
        await this.driver_.closeWindow();
        await this.driver_.switchToSubChildWindowAndClose();
    }

}

module.exports = new LcmsCoursePlayerPage();