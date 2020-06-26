/**
 * Developed By: Haider Ali
 * @type {any}
 */

global.__basedir = process.cwd();
const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsMyCoursePage = require(__basedir + "/src/main/lms/pages/learner/learner_my_course/lmsMyCoursePage.js");



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
                let myCoursePageHeading = await lmsMyCoursePage.verifyMyCoursePageHeading();
                console.info("My Course Page Heading: " + myCoursePageHeading);
                expect(myCoursePageHeading).toEqual("My Courses");
            });


            test("Select Show Enrolled Courses Option and Verify Enrolled Course", async () => {
                await lmsMyCoursePage.selectShowEnrolledCoursesOptionFromDropdown();
                //await lmsMyCoursePage.clickCourseToLaunchCoursePlayer(__appProperties.get("lms.Course"));

            });

        });

});