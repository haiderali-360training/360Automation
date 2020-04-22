/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(process.cwd() + "/src/main/lms/pages/BasePage.js");
const locator = require(process.cwd() + "/src/main/lms/pages/locator.js");

class LcmsCoursePlayerPage {
    constructor(){ this.driver_ = bp.getDriver();}

    verifyPageTitle (){
        return this.driver_.findByTitle(locator.coursePlayerPage.title);
    }

    async browserCheckAndModePage (){
         await this.driver_.findButtonAndClick_span(locator.coursePlayerPage.btnContinue);
         //await this.driver_.findButtonAndClick("Continue");
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
        //await this.driver_.findButtonAndClick(locator.coursePlayerPage.btnLoginAsLearner);
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
        console.info("Course Completed.......");
        //await this.driver_.findByIdChecked("modal-trigger-save-2");
        //await this.driver_.findButtonAndClick_xpath("//*[@id=\"modal-trigger-save-2\"]/span[1]");
        this.driver_.switchMainWindow();
        return true;
    }

}

module.exports = LcmsCoursePlayerPage;
