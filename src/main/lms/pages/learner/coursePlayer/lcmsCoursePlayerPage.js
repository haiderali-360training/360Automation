/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");

class LcmsCoursePlayerPage {

    constructor(){ this.driver_ = bp.getDriver();}

    verifyPageTitle (){
        return this.driver_.findByTitle(locator.coursePlayerPage.title);
    }

    async removeAlert(){
        await this.driver_.switchToAlert();
        //return this.driver_.findByTitle(locator.coursePlayerPage.scormTitle);
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
        //await this.driver_.switchToDefaultContent();
        await this.driver_.switchToFrame(locator.coursePlayerPage.iframeTwo);
        let scormContentHeading = await this.driver_.findElementByCss(locator.coursePlayerPage.scormCourseContentHeading);
        let scormPageHeading = await scormContentHeading.getText();
        console.info(scormPageHeading);
        return scormPageHeading;
    }



    async browserCheckAndModePage (){
        await this.driver_.findButtonAndClick_span(locator.coursePlayerPage.btnContinue);
        return true;
    }

    async switchToCoursePlayWindow (){
        return this.driver_.switchCoursePlayWindow();
    }

    async checkAcknowledgmentButtonAndNext(){
        await this.driver_.findCheckboxAndClick(locator.coursePlayerPage.chkAcknowledge);
        //await this.driver_.findButtonAndClick_xpath("/html/body/form/div[8]/div[9]/div/div/div[5]/span[2]/a/span");
        await this.driver_.findButtonAndClick_css(locator.coursePlayerPage.coursePlayerNextButton);
        //return true;
    }

    async TermsOfUseClick(){
        await this.driver_.findButtonAndClick_href(locator.coursePlayerPage.btnAgree_Continue);
        //return true;
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

}

module.exports = new LcmsCoursePlayerPage();