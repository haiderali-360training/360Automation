/**
 * Created by asadullah.qazi
 * On 7/6/2020}
 **/

global.__basedir = process.cwd();
const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js"),
    lmsMyCoursePage = require(__basedir + "/src/main/lms/pages/learner/learner_my_course/lmsMyCoursePage.js"),
    lmsCourseCertificatePage = require(__basedir + "/src/main/lms/pages/learner/learner_print_certificate/lmsCourseCertificatePage.js");



describe("Lms Learner Print Certificate Test", function () {

    test("Verify Login Page Title", async () => {
        let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
        expect(loginPageTitle).toBe(true);
    });


    test("Enter Login Credentials and Login Learner", async () => {
        let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.LearnerUserName"), __appProperties.get("lms.LearnerPassword"));
        expect(a).toBe(true);
    });


    test("Verify Guided Tour Page and Title", async () => {
        await lmsGuidedTourPage.verifyGuidedTourPageHeading();
        await lmsGuidedTourPage.clickToContinue();
    });


    test("Verify My Course Page", async () => {
        let myCoursePageTitle = await lmsMyCoursePage.verifyPageTitle();
        expect(myCoursePageTitle).toBe(true);
        let myCoursePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
        console.info("My Course Page Heading: " + myCoursePageHeading);
        expect(myCoursePageHeading).toEqual("My Courses");
    });


    test("Select Show Enrolled Courses Option and Click on Print Certificate Link of Completed Course", async () => {
        await lmsMyCoursePage.selectShowEnrolledCoursesOptionFromDropdown();
        await lmsMyCoursePage.clickPrintCertificateLinkForCompletedCourse(__appProperties.get("lms.atc.new.learner.course"));
    });



    test("Verify Course Certificate", async () => {
        await lmsCourseCertificatePage.switchToCourseCertificateWindow();
        let printCertificateTitle = await lmsCourseCertificatePage.verifyCourseCompletionCertificate();
        expect(printCertificateTitle).toContain("atc_smoke");
    });



    test("Logout Lms User", async () => {
        await lmsCourseCertificatePage.closeCourseCertificateWindow();
        await lmsCommonUtilsPage.lmsUserLogout();
        let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
        expect(afterLogoutTitle).toBe(true);
        console.info("User Logout Successfully");
    });







});