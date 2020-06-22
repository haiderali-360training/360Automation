/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");

class LmsGuidedTourPage  {

    constructor(){ this.driver_ = bp.getDriver(); }

     verifyPageTitle (){
        return this.driver_.findByTitle(locator.guidedTour.title);
     }

     verifyLearnerPageTitle (){
        return this.driver_.findByTitle(locator.guidedTour.LearnerModePagetitle);
     }

     async clickToContinue(){
       //await this.driver_.findButtonAndClick(locator.guidedTour.btnContinue);
         await this.driver_.findButtonAndClick_className(locator.guidedTour.btnContinueClassName);
       //return true;
     }

}



module.exports = new LmsGuidedTourPage();