/**
 * Developed By: Haider Ali
 * @type {any}
 * @Date: 23-june-2020
 */

global.__basedir = process.cwd();
const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsHeaderIconsPage = require(__basedir + "/src/main/lms/pages/common/lmsHeaderIconsPage.js"),
    lmsManageUserListPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserListPage.js"),
    lmsManageUserAddPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserAddPage.js"),
    lmsManageUserGroupPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserGroupPage.js"),
    lmsManageUserConfirmationPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserConfirmationPage.js"),
    lmsEnrollIndexPage = require(__basedir + "/src/main/lms/pages/manager/enrollmentWizard/lmsEnrollIndexPage.js"),
    lmsEnrollmentWizardPage = require(__basedir + "/src/main/lms/pages/manager/enrollmentWizard/lmsEnrollmentWizardPage.js"),
    lmsMyCoursePage = require(__basedir + "/src/main/lms/pages/learner/learner_my_course/lmsMyCoursePage.js"),
    lmsBrowserCheckPage = require(__basedir + "/src/main/lms/pages/common/lmsBrowserCheckPage.js"),
    lmsLicenseAgreementPage = require(__basedir + "/src/main/lms/pages/common/lmsLicenseAgreementPage.js"),
    lmsCourseCertificatePage = require(__basedir + "/src/main/lms/pages/learner/learner_print_certificate/lmsCourseCertificatePage.js"),
    lcmsCoursePlayerPage = require(__basedir + "/src/main/lms/pages/learner/coursePlayer/lcmsCoursePlayerPage.js"),
    lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js"),
    locator = require(__basedir + "/src/main/lms/pages/locator.js");


afterAll (async () => {
    await lmsCommonUtilsPage.quitWindow();
});


describe("Lms Manager End To End Test", function lmsManagerEndToEndTest() {

    test("Verify login window title", async () => {
        let s = await lmsLoginPage.verifyLmsLoginPageTitle();
        expect(s).toBe(true);
    });

    test("Enter login credentials & submit", async () => {
        let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.ManagerUserName"), __appProperties.get("lms.ManagerPassword"));
        expect(a).toBe(true);
    });

    test("verify Guided tour window title", async () => {
        let guidedTourPageTitle = await lmsGuidedTourPage.verifyGuidedTourPageTitleForManager();
        await lmsGuidedTourPage.verifyGuidedTourPageHeading();
        await lmsGuidedTourPage.clickToContinue();
        expect(guidedTourPageTitle).toBe(true);
    });

    test("Verify Manage User Page & click Add User Button ", async () => {
        let managerTitle = await lmsManageUserListPage.verifyPageTitle();
        await lmsManageUserListPage.clickToAddUserButton();
        expect(managerTitle).toBe(true);
    });


    test("Verify Add User Page & fill-Up form & submit ", async () => {
        let newLearnerUserName = await lmsManageUserAddPage.fillAddUserForm();
        expect(newLearnerUserName).toEqual(__cache.get(locator.addNewUser.userName));
    });


    test("Verify Select User Group & submit ", async () => {
        let c = await lmsManageUserGroupPage.clickToAddUserGroup();
        expect(c).toBe(true);
    });

    test("Verify Summary page & finish ", async () => {
        let c = await lmsManageUserConfirmationPage.clickToFinishButton();
        expect(c).toBe(true);
    });

    test("Verify Search Dialog & open ", async () => {
        let c = await lmsManageUserListPage.clickToSearchUserButton();
        expect(c).toBe(true);
    });

    test("Verify Search Dialog fill & find ", async () => {
        let xc = await lmsManageUserListPage.fillSearchDialogBox();
        expect(xc).toBe(true);
    });

    test("Verify Manager Page Headers Menu And Click Plan Enroll Button", async () => {
        await lmsHeaderIconsPage.clickPlanAndEnroll();
        await lmsEnrollIndexPage.verifyPageHeading();
        let cs = await lmsEnrollIndexPage.clickEnrollUsersByCourse();
        expect(cs).toBe(true);
    });

    test("Verify learner enrollment wizard ", async () => {
        let enrollmentWizardPageTitle = await lmsCommonUtilsPage.verifyPageHeading();
        expect(enrollmentWizardPageTitle).toEqual("Enroll Learners");
        let z = await lmsEnrollmentWizardPage.clickEnrollmentByCourse_wizard();
        expect(z).toBe(true);
    });

    test("Verify Learner to Launch Course in Manger User page", async () => {
        await lmsHeaderIconsPage.clickUserAndGroup();
        await lmsManageUserListPage.clickToSearchUserButton();
        let x = await lmsManageUserListPage.fillSearchDialogBox();
        expect(x).toBe(true);
    });

    test("Logout Lms User", async () => {
        await lmsCommonUtilsPage.lmsUserLogout();
        let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
        expect(afterLogoutTitle).toBe(true);
        console.info("User Logout Successfully");
    });









    //New Learner Login
    test("Enter Login Credentials and Login Learner ", async () => {
        let a = await lmsLoginPage.enterCredentialsOnLogin(__cache.get(locator.addNewUser.userName), __cache.get(locator.addNewUser.passwordField));
        expect(a).toBe(true);
    });

    test("First Time User Login Verify Browser Check Page and Click Continue", async () => {
        let browserPageHeading = await lmsBrowserCheckPage.verifyBrowserCheckPage();
        expect(browserPageHeading).toEqual("Browser Check");
        await lmsBrowserCheckPage.clickToContinue();
    });


    test("Verify Guided Tour Page and Title", async () => {
        let guidedTourPH = await lmsGuidedTourPage.verifyGuidedTourPageHeading();
        expect(guidedTourPH).toEqual(locator.guidedTour.guidedTourPageHeadingText);
        await lmsGuidedTourPage.clickToContinue();
    });


    test("Verify License Agreement Page and Click Agree Button ", async () => {
        let licenseAgreementPageHeading = await lmsLicenseAgreementPage.verifyLicenseAgreementPage();
        expect(licenseAgreementPageHeading).toEqual("License Agreement!");
        await lmsLicenseAgreementPage.clickButtonIAgree();
    });

    test("Verify My Course Page", async () => {
        let myCoursePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
        expect(myCoursePageHeading).toEqual("My Courses");
    });

    test("Launch Enrolled Course ", async () => {
        await lmsMyCoursePage.selectShowEnrolledCoursesOptionFromDropdown();
        await lmsMyCoursePage.clickCourseNameToLaunchCoursePlayer(__appProperties.get("lms.atc.new.learner.course"));
    });

    test("Verify Course Player and Verify Course Name and Close Course Player", async () => {
        await lcmsCoursePlayerPage.switchToCoursePlayWindow();
        await lcmsCoursePlayerPage.verifyPageTitle();
        let cName = await lcmsCoursePlayerPage.confirmCourseNameOnLcmsCoursePlayerPage();
        expect(cName).toEqual(__appProperties.get("lms.atc.new.learner.course"));
    });

    test("Verify Player Acknowledgment on Player", async () => {
        await lcmsCoursePlayerPage.checkAcknowledgmentButtonAndNext();
    });

    test("Verify Player Turn of Use & agreement on Player", async () => {
        await lcmsCoursePlayerPage.TermsOfUseClick();
    });

    test("Verify Player Start & complete course on Player", async () => {
        let a = await lcmsCoursePlayerPage.clickNextCourseStartAndComplete();
        expect(a);
    });

    test("Verify Player save and close window", async () => {
        let a = await lcmsCoursePlayerPage.coursePlayerSaveAndClose();
        expect(a);
    });

    test("Verify Certificate Launch Successfully and Close Window", async () => {
        await lmsMyCoursePage.selectShowEnrolledCoursesOptionFromDropdown();
        await lmsMyCoursePage.printCourseCertificate();
        await lmsCourseCertificatePage.switchToCourseCertificateWindow();
        let printCertificateTitle = await lmsCourseCertificatePage.verifyCourseCompletionCertificate();
        expect(printCertificateTitle).toContain("atc_smoke");
        await lmsCourseCertificatePage.closeCourseCertificateWindow();
    });

    test("Logout Lms User", async () => {
        await lmsCommonUtilsPage.lmsUserLogout();
        let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
        expect(afterLogoutTitle).toBe(true);
        console.info("User Logout Successfully");
    });




});

