/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");

class LmsGuidedTourPage  {

    constructor(){ this.driver_ = bp.getDriver(); }


     verifyGuidedTourPageTitle (){
        return this.driver_.findByTitle(locator.guidedTour.learnerModePageTitle);
     }

    verifyGuidedTourPageTitleForManager(){
        return this.driver_.findByTitle(locator.guidedTour.managerModePageTitle);
    }

    verifyGuidedTourPageHeading(){
        return this.driver_.findElementAndClick_Css(locator.guidedTour.guidedTourPageHeading);
    }

     async clickToContinue(){
         await this.driver_.findButtonAndClick_className(locator.guidedTour.btnContinueClassName);
     }

}



module.exports = new LmsGuidedTourPage();