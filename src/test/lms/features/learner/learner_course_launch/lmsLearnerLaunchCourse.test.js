/**
 * Developed By: Haider Ali
 * @type {any}
 */

global.__basedir = process.cwd();
const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js"),
    lmsMyCoursePage = require(__basedir + "/src/main/lms/pages/learner/learner_my_course/lmsMyCoursePage.js"),
    lcmsCoursePlayerPage = require(__basedir + "/src/main/lms/pages/learner/coursePlayer/lcmsCoursePlayerPage.js");



    describe("Lms Learner Launch Course From My Course Page Test", function () {
        describe("Learner Launch Enrolled Self-Paced Course From My Courses Page Test", function lmsLearnerLaunchEnrolledSelfPacedCourseFromMyCoursesPageTest(){

            test("Verify Login Page Title", async () => {
                let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
                expect(loginPageTitle).toBe(true);
            });


            test("Enter Login Credentials and Login Learner", async () => {
                let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.LearnerUserName"), __appProperties.get("lms.LearnerPassword"));
                expect(a).toBe(true);
            });


            test("Verify Guided Tour Page and Title", async () => {
                let guidedTourPageTitle = await lmsGuidedTourPage.verifyGuidedTourPageTitle();
                await lmsGuidedTourPage.verifyGuidedTourPageHeading();
                await lmsGuidedTourPage.clickToContinue();
                expect(guidedTourPageTitle).toBe(true);
            });


            test("Verify My Course Page", async () => {
                let myCoursePageTitle = await lmsMyCoursePage.verifyPageTitle();
                expect(myCoursePageTitle).toBe(true);
                let myCoursePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
                console.info("My Course Page Heading: " + myCoursePageHeading);
                expect(myCoursePageHeading).toEqual("My Courses");
        });


            test("Select Show Enrolled Courses Option and Launch Enrolled Course", async () => {
                await lmsMyCoursePage.selectShowEnrolledCoursesOptionFromDropdown();
                await lmsMyCoursePage.clickCourseNameToLaunchCoursePlayer(__appProperties.get("lms.atc.new.learner.course"));
            });


            test("Switch to Course Player Window and Verify Course Name", async () => {
                await lcmsCoursePlayerPage.switchToCoursePlayWindow();
                await lcmsCoursePlayerPage.verifyPageTitle();
                let cName = await lcmsCoursePlayerPage.confirmCourseNameOnLcmsCoursePlayerPage();
                expect(cName).toEqual(__appProperties.get("lms.atc.new.learner.course"));
                await lcmsCoursePlayerPage.closeLcmsCoursePlayerWindowAndSwitchBackToLms();
            });


            test("Logout Lms User", async () => {
                await lmsCommonUtilsPage.lmsUserLogout();
                let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
                expect(afterLogoutTitle).toBe(true);
                console.info("User Logout Successfully");
            });

        });

});