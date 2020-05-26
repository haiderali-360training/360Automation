/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");


class LmsMyCoursePage {

    constructor(){ this.driver_ = bp.getDriver(); }

    verifyPageTitle (){
        return this.driver_.findByTitle(locator.myCoursePage.title);
    }

    verifyPageHeading(){
        return this.driver_.findById(locator.myCoursePage.pageHeadingClassName);
    }

    verifyCourseStatus(){
        return this.driver_.findByClassName(locator.myCoursePage.courseStatus);
    }

    async clickOnRecentEnrolledCourse(){
       await this.driver_.findButtonAndClick_className(locator.myCoursePage.enrolledCourseClassName);
    }

    async printCertificate() {
        await this.driver_.findButtonAndClick_className(locator.myCoursePage.printCertificateClassName);
        return "";
    }

}

module.exports = LmsMyCoursePage;

