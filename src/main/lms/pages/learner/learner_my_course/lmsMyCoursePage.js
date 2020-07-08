/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");
const lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js");


class LmsMyCoursePage {

    constructor() {
        this.driver_ = bp.getDriver();
    }

    verifyPageTitle() {
        return this.driver_.findByTitle(locator.myCoursePage.myCoursePageTitle);
    }

    verifyCourseStatus() {
        return this.driver_.findByClassName(locator.myCoursePage.courseStatus);
    }

    async clickOnRecentEnrolledCourse() {
        await this.driver_.findButtonAndClick_className(locator.myCoursePage.enrolledCourseClassName);
    }

    async printCertificate() {
        await this.driver_.findButtonAndClick_className(locator.myCoursePage.printCertificateClassName);
        return "";
    }

    async selectShowEnrolledCoursesOptionFromDropdown() {
        await this.driver_.selectOptionFromDropdown(locator.myCoursePage.myCoursePageDropdown, "enrolled");
    }


    async selectCompletedCoursesOptionFromDropdown(){
        await this.driver_.selectOptionFromDropdown(locator.myCoursePage.myCoursePageDropdown, "completedCourses");
    }

    async selectAvailableCoursesOptionFromDropdown(){
        await this.driver_.selectOptionFromDropdown(locator.myCoursePage.myCoursePageDropdown, "coursecatalog");
    }


    async clickCourseNameToLaunchCoursePlayer(enrolledCourse) {
        await lmsCommonUtilsPage.findMatchingItemAndClick(locator.myCoursePage.enrollCourseClassName, enrolledCourse, true);
    }


    async verifyEnrolledCourseNameDisplayedOnEnrolledCourseListing(enrollCourseName){
        return lmsCommonUtilsPage.findMatchingItemAndClick(locator.myCoursePage.enrollCourseClassName, enrollCourseName, false);
    }


    async verifyCompletedCourseNameDisplayedAndCompletedStatus(completedCourseName){
        return lmsCommonUtilsPage.findMatchingItemAndClick(locator.myCoursePage.enrollCourseClassName, completedCourseName, false);
    }


    async clickOnFirstCourseGroupName(courseGroupName){
        await lmsCommonUtilsPage.findMatchingItemAndClicks(locator.availableFilter.availableCourseGroups, courseGroupName, true);
    }


    async clickPrintCertificateLinkForCompletedCourse(printCertificateCourseName) {
        await lmsCommonUtilsPage.findMatchingItemAndClickChildItemOrReturnElement(locator.myCoursePage.enrollCourseClassName, locator.printCertificate.printCertificateLink, printCertificateCourseName, true);
    }

    async verifyCompletedCourseStatus(completedCourseName){
        let childElement = await lmsCommonUtilsPage.findMatchingItemAndClickChildItemOrReturnElement(locator.myCoursePage.enrollCourseClassName, locator.completedFilter.completedCourseStatus, completedCourseName, false);
        return childElement.getText();
    }

    async verifyAvailableFilterCourseGroupsHeading(){
        let courseGroupsHeading = await this.driver_.findElementByCss(locator.availableFilter.availableFilterCourseGroupsHeading);
        return courseGroupsHeading.getText();
    }

    async verifyAvailableFilterCoursesHeading() {
        let coursesHeading = await this.driver_.findById(locator.availableFilter.availableFilterCoursesHeading);
        return coursesHeading.getText();
    }

    async verifyCoursesHeadingAfterClickCourseGroup(){
        let coursesHeadingAfterClick = await this.driver_.findByXpath(locator.availableFilter.availableCourseGroupsCoursesHeading);
        return coursesHeadingAfterClick.getText();
    }



}

module.exports = new LmsMyCoursePage();

