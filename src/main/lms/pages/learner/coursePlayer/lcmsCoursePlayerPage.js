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

    async browserCheckAndModePage (){
         await this.driver_.findButtonAndClick_span(locator.coursePlayerPage.btnContinue);
         return true;
    }

    async switchToCoursePlayWindow (){
        return await this.driver_.switchCoursePlayWindow();
    }

    async checkAcknowledgmentButtonAndNext(){
        await this.driver_.findElementAndClick_Css(locator.coursePlayerPage.chkAcknowledge);
        await this.driver_.findElementAndClick_Css(locator.coursePlayerPage.btnNext);
        return true;
    }

    async TermsOfUseClick(){
        await this.driver_.findButtonAndClick_href(locator.coursePlayerPage.btnAgree_Continue);
        return true;
    }

    async clickNextCourseStartAndComplete(){
        await this.driver_.findButtonAndClick_xpath(locator.coursePlayerPage.btnPlayButton);
        await this.driver_.findButtonAndClick_xpath(locator.coursePlayerPage.btnPlayButton);
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
        await this.driver_.findButtonAndClick_xpath("//*[@id=\"networkErrorContent\"]");
        console.info("Course Completed.......and delay 90000");

        await this.driver_.switchMainWindow();
        return "";
    }

}

module.exports = new LcmsCoursePlayerPage();
