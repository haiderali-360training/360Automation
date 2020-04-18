/**
 * Developed By: Haider Ali
 * @type {any}
 */


const bp = require(process.cwd()+"/src/main/lms/pages/BasePage.js");
const locator = require(process.cwd()+"/src/main/lms/pages/locator.js");


class LmsEnrollIndexPage {

    constructor(){ this.driver_ = bp.getDriver(); }

    verifyPageTitle (){
        return this.driver_.findByTitle(locator.planAndEnroll.title);
    }

    verifyPageHeading(){
        return this.driver_.findById("page-icon");
    }

     async clickPlanAndEnrollButton(){
       await this.driver_.findButtonAndClick(locator.planAndEnroll.btnEnrollUserByCourse);
       return true;
     }


}

module.exports = LmsEnrollIndexPage;
