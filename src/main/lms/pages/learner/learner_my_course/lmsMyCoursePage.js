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

    async printCourseCertificate() {
        await this.driver_.findButtonAndClick_className(locator.myCoursePage.printCertificateClassName);
        return "";
    }

    async selectShowRecentlyAccessedCoursesOptionFromDropdown() {
        await this.driver_.selectOptionFromDropdown(locator.myCoursePage.myCoursePageDropdown, "recent");
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

    async selectExpiredCoursesOptionFromDropdown(){
        await this.driver_.selectOptionFromDropdown(locator.myCoursePage.myCoursePageDropdown, "expiredCourses");
    }


    async clickCourseNameToLaunchCoursePlayer(enrolledCourse) {
        await lmsCommonUtilsPage.findMatchingItemAndClick(locator.myCoursePage.enrollCourseClassName, enrolledCourse, true);
    }

    async clickOnAvailableCourseNameToLaunchCoursePlayer(availableCourse) {
        await lmsCommonUtilsPage.findMatchingItemAndClick(locator.availableFilter.availableCourseGroupsCoursesName, availableCourse, true);
    }


    async verifyEnrolledCourseNameDisplayedOnEnrolledCourseListing(enrollCourseName){
        return lmsCommonUtilsPage.findMatchingItemAndClick(locator.myCoursePage.enrollCourseClassName, enrollCourseName, false);
    }


    async verifyCompletedCourseNameDisplayedAndCompletedStatus(completedCourseName){
        return lmsCommonUtilsPage.findMatchingItemAndClick(locator.myCoursePage.enrollCourseClassName, completedCourseName, false);
    }

    async clickOnTrainingPlanSubCourseGroup(subCourseGroupTP){
        return lmsCommonUtilsPage.findMatchingItemAndClick(locator.availableFilter.availableTrainingPlanSubCourseGroups, subCourseGroupTP, true);
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

    async clickCourseDescriptionForCourseGroupCourse(courseGroupsCoursesName){
        await lmsCommonUtilsPage.findMatchingItemAndClickChildItemOrReturnElement(locator.availableFilter.availableCourseGroupsCoursesName, locator.availableFilter.availableCourseDescription, courseGroupsCoursesName, true);
    }


    async clickMoreDetailsLinkOfDesireCourse(moreDetailCourseName){
        await lmsCommonUtilsPage.findMatchingItemAndClickChildItemOrReturnElement(locator.myCoursePage.enrollCourseClassName, locator.myCoursePage.myCourseMoreDetailLink, moreDetailCourseName, true);
    }

    async getLastAccessedDateFromCourse(courseNameForLastAccessedDate){
        let lastAccessedDate = await lmsCommonUtilsPage.findMatchingItemAndClickChildItemOrReturnElement(locator.myCoursePage.enrollCourseClassName, locator.myCoursePage.myCourseLastAccessedDate, courseNameForLastAccessedDate, false);
        let lastAccessedDateString = await lastAccessedDate.getText();
        return lastAccessedDateString.substring(15,28);
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

    async verifySubGroupsOfTrainingPlanSection(){
        let subGroupsVisible = await this.driver_.findById(locator.availableFilter.availableFilterSubGroupsOfCourseGroup);
        return subGroupsVisible.isDisplayed();
    }

    async verifyTrainingPlanCoursesGridHeading(){
        let subGroupsHeading = await this.driver_.findById(locator.availableFilter.availableCourseGroupsCoursesTitle);
        return subGroupsHeading.getText();
    }

    async verifyCourseNameOnCourseDescriptionPopup(){
        let courseDescriptionHeading = await this.driver_.findElementByCss(locator.availableFilter.availableCourseDescriptionHeading);
        return courseDescriptionHeading.getText();
    }

    async closeCourseDescriptionPopup(){
        let courseDescriptionClose =  await this.driver_.findElementByCss(locator.availableFilter.availableCourseDescriptionPopupClose);
        courseDescriptionClose.click();
    }

    async verifyBreadCrumb(){
        let breadCrumb = await this.driver_.findById(locator.availableFilter.availableCourseBreadcrumb);
        return breadCrumb.getText();
    }

    async verifyExpiredCourses(){
        let expiredCourseExpiry = await this.driver_.findElementsList(locator.expiredFilter.expiredCourseExpiryDate);
        return expiredCourseExpiry[0].getText();
    }

    async verifyNoCoursesShouldBeDisplayedInRecentAccessedCourseFilter(){
        let recentAccessedCourseList = await this.driver_.findByXpath(locator.recentlyAccessedCourseFilter.emptyGrid);
        return recentAccessedCourseList.isDisplayed();
    }

    async verifyCoursesNameShouldBeDisplayedInRecentAccessedCourse(recentlyAccessedCourse){
        return lmsCommonUtilsPage.findMatchingItemAndClick(locator.recentlyAccessedCourseFilter.recentlyAccessedCoursesList, recentlyAccessedCourse, false);
    }





}

module.exports = new LmsMyCoursePage();

