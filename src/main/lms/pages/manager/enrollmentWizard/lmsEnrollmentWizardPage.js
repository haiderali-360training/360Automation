/**
 * Developed By: Haider Ali
 * @type {any}
 */


const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");
const lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js");

class LmsEnrollmentWizardPage {

    constructor(){ this.driver_ = bp.getDriver(); }

    verifyPageTitle (){
        return this.driver_.findByTitle(locator.planAndEnroll.title);
    }

    async clickEnrollmentByCourse_wizard(){

        //Enrollment Method Selection
        await this.driver_.findByIdChecked(locator.enrollmentWizard.enrollmentMethod_learner);
        await this.driver_.findButtonAndClick(locator.enrollmentWizard.btnNext);

        //Step 1
        await this.driver_.findButtonAndClick(locator.enrollmentWizard.btnSearch);
        //await this.driver_.findTextBoxAndWrite_(locator.enrollmentWizard.firstName, bp.cache.get(locator.cacheKey.firstName));
        //await this.driver_.findTextBoxAndWrite_(locator.enrollmentWizard.lastName, bp.cache.get(locator.cacheKey.lastName));
        await this.driver_.findTextBoxAndWrite_(locator.enrollmentWizard.emailAddress, __cache.get(locator.cacheKey.email));
        await this.driver_.findButtonAndClick_span(locator.enrollmentWizard.btnSearch);

        //sept 2
        //select first searched learner (assume 1 learner is our recent added learner)
        await this.driver_.findByIdChecked(locator.enrollmentWizard.firstFoundLearner);
        await this.driver_.findButtonAndClick(locator.enrollmentWizard.btnNext);

        //step 3
        await this.driver_.findButtonAndClick(locator.enrollmentWizard.btnSearch);
        await this.driver_.findTextBoxAndWrite(locator.enrollmentWizard.txtSearchCourseName, locator.enrollmentWizard.txtSearchCourseNameValue);
        __cache.set(locator.cacheKey.enrolledCourseName, locator.enrollmentWizard.txtSearchCourseNameValue);
        await this.driver_.findTextBoxAndWrite(locator.enrollmentWizard.txtSearchBusinessKey, locator.enrollmentWizard.txtSearchBusinessKeyValue);
        __cache.set(locator.cacheKey.enrolledCourseBusinessKey, locator.enrollmentWizard.txtSearchBusinessKeyValue);
        await this.driver_.findButtonAndClick_span(locator.enrollmentWizard.btnSearch);
        await this.driver_.findByIdChecked(locator.enrollmentWizard.firstFoundCourse);
        await this.driver_.findButtonAndClick(locator.enrollmentWizard.btnNext);

        //step 4
        let dateValues = await lmsCommonUtilsPage.enrollmentDateRange();
        await this.driver_.findTextBoxAndWrite(locator.enrollmentWizard.enrollmentStartDate, dateValues.startDate);
        await this.driver_.findTextBoxAndWrite(locator.enrollmentWizard.enrollmentEndDate, dateValues.endDate);
        //await this.driver_.findTextBoxAndWrite(locator.enrollmentWizard.enrollmentStartDate, bp.formatDate(new Date()));
        //await this.driver_.findTextBoxAndWrite(locator.enrollmentWizard.enrollmentEndDate, bp.formatDate(new Date()));



        await this.driver_.findButtonAndClick(locator.enrollmentWizard.btnNext);
        //step 5
        await this.driver_.findButtonAndClick(locator.enrollmentWizard.btnFinish);
        //step 6
        await this.driver_.findButtonAndClick(locator.enrollmentWizard.btnOK);
        console.info("Enrollment Done");

        return true;
    }
}

module.exports = new LmsEnrollmentWizardPage();