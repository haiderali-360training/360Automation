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

    switchToCoursePlayWindow (){
        return this.driver_.switchCoursePlayWindow();
    }

    async checkAcknowledgmentButtonAndNext(){
        await this.driver_.findCheckboxAndClick(locator.coursePlayerPage.chkAcknowledge);
        await this.driver_.findButtonAndClick_xpath("/html/body/form/div[8]/div[9]/div/div/div[5]/span[2]/a/span");
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
        //INCASE WE COUSER PLAY ENCOUNTER NETWORK ERROR
        //await this.driver_.findButtonAndClick_xpath_nm("//*[@id=\"networkErrorContent\"]");
        console.info("Course Completed.......and delay 90000");

        await this.driver_.switchMainWindow();
        return "";
    }

}

module.exports = LcmsCoursePlayerPage;
