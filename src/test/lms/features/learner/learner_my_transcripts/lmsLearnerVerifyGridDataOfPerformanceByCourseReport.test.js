/**
 * Created by asadullah.qazi
 * On 7/19/2020}
 **/

global.__basedir = process.cwd();


const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsLearnerMyTranscriptsPage = require(__basedir + "/src/main/lms/pages/learner/learner_myTranscripts/lmsLearnerMyTranscriptsPage.js"),
    lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js"),
    lmsMyCoursePage = require(__basedir + "/src/main/lms/pages/learner/learner_my_course/lmsMyCoursePage.js"),
    lmsManageUserListPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserListPage.js"),
    lmsManageUserAddPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserAddPage.js"),
    lmsManageUserGroupPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserGroupPage.js"),
    lmsManageUserConfirmationPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserConfirmationPage.js"),
    lmsHeaderIconsPage = require(__basedir + "/src/main/lms/pages/common/lmsHeaderIconsPage.js"),
    lmsEnrollIndexPage = require(__basedir + "/src/main/lms/pages/manager/enrollmentWizard/lmsEnrollIndexPage.js"),
    lmsEnrollmentWizardPage = require(__basedir + "/src/main/lms/pages/manager/enrollmentWizard/lmsEnrollmentWizardPage.js"),
    lmsManageEnrollmentPage = require(__basedir + "/src/main/lms/pages/manager/manageUsers/lmsManageEnrollmentPage.js"),
    lmsBrowserCheckPage = require(__basedir + "/src/main/lms/pages/common/lmsBrowserCheckPage.js"),
    lmsLicenseAgreementPage = require(__basedir + "/src/main/lms/pages/common/lmsLicenseAgreementPage.js"),
    lcmsCoursePlayerPage = require(__basedir + "/src/main/lms/pages/learner/coursePlayer/lcmsCoursePlayerPage.js"),
    locator = require(__basedir + "/src/main/lms/pages/locator.js");


afterAll (async () => {
    await lmsCommonUtilsPage.quitWindow();
});



describe("Verify Grid Data Of Performance By Course Report Test", function verifyGridDataOfPerformanceByCourseReportTest() {
    test("Verify Login Page Title", async () => {
        let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
        expect(loginPageTitle).toBe(true);
    });


    test("Enter Login  Credentials and Login  Manager", async () => {
        let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.ManagerUserName"), __appProperties.get("lms.ManagerPassword"));
        expect(a).toBe(true);
    });

    test("Verify Guided Tour Page and  Title", async () => {
        let guidedTourPageTitle = await lmsGuidedTourPage.verifyGuidedTourPageTitleForManager();
        await lmsGuidedTourPage.verifyGuidedTourPageHeading();
        await lmsGuidedTourPage.clickToContinue();
        expect(guidedTourPageTitle).toBe(true);
    });

    test("Verify Manage User Page & click Add User Button ", async () => {
        let managerTitle = await lmsCommonUtilsPage.verifyPageHeading();
        await lmsManageUserListPage.clickToAddUserButton();
        expect(managerTitle).toEqual("Manage Users");
    });

    test("Verify Add User Page & fill-Up form & submit ", async () => {
        let newLearnerUserName = await lmsManageUserAddPage.fillAddUserForm();
        expect(newLearnerUserName).toEqual(__cache.get(locator.addNewUser.userName));
    });

    test("Verify Select User Group & submit ", async () => {
        let addNewUserInGroupPageTitle = await lmsCommonUtilsPage.verifyPageHeading();
        expect(addNewUserInGroupPageTitle).toEqual("Add New User - Groups");
        let c = await lmsManageUserGroupPage.clickToAddUserGroup();
        expect(c).toBe(true);
    });

    test("Verify Add User Summary Page & Click Finish Button", async () => {
        let addNewUserConfirmationPageTitle = await lmsCommonUtilsPage.verifyPageHeading();
        expect(addNewUserConfirmationPageTitle).toEqual("Add New User - Confirmation");
        let c = await lmsManageUserConfirmationPage.clickToFinishButton();
        expect(c).toBe(true);
    });

    test("Verify That New User is Added Successfully", async () => {
        await lmsManageUserListPage.clickToSearchUserButton();
        await lmsManageUserListPage.fillSearchDialogBox();
        let confirmUserAdded = await lmsManageUserListPage.confirmUserAddedSuccessfully();
        expect(confirmUserAdded).toEqual(__cache.get(locator.addNewUser.userName));
    });

    test("Verify Manage Page Heading And Click Plan & Enroll Button", async () => {
        let manageUserPageHeading = await lmsCommonUtilsPage.verifyPageHeading();
        expect(manageUserPageHeading).toEqual("Manage Users");
        await lmsHeaderIconsPage.clickPlanAndEnroll();
    });

    test("Verify Enrollment page And Click Enroll User By Course", async () => {
        let enrollmentPageHeading = await lmsCommonUtilsPage.verifyPageHeading();
        expect(enrollmentPageHeading).toEqual("Enroll");
        await lmsEnrollIndexPage.clickEnrollUsersByCourse();
    });

    test("Verify Enrollment Wizard and Select Enroll By Users Method and Complete Enrollment", async () => {
        let enrollmentWizardPageHeading = await lmsCommonUtilsPage.verifyPageHeading();
        expect(enrollmentWizardPageHeading).toEqual("Enroll Learners");
        await lmsEnrollmentWizardPage.clickEnrollmentByCourse_wizard();
    });

    test("Verify Enrollment Created Successfully", async () => {
        let enrollmentPageHeading = await lmsCommonUtilsPage.verifyPageHeading();
        expect(enrollmentPageHeading).toEqual("Enroll");

        await lmsHeaderIconsPage.clickUserAndGroup();
        await lmsManageUserListPage.clickManageEnrollments();

        let manageEnrollmentPageHeading = await lmsCommonUtilsPage.verifyPageHeading();
        expect(manageEnrollmentPageHeading).toEqual("Manage Enrollments");

        await lmsManageEnrollmentPage.clickToSearchUserButton();
        await lmsManageEnrollmentPage.fillSearchDialogBox();
        let viewEnrollment = await lmsManageEnrollmentPage.clickViewEnrollment();
        expect(viewEnrollment).toBe(true);

        let confirmEnrollmentCreated = await lmsManageEnrollmentPage.verifyEnrollmentCreatedSuccessfully();
        expect(confirmEnrollmentCreated).toEqual(__appProperties.get("lms.atc.new.learner.course"));
        console.info("enrolled course: " + confirmEnrollmentCreated);
    });

    test("Logout Lms User", async () => {
        await lmsCommonUtilsPage.lmsUserLogout();
        let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
        expect(afterLogoutTitle).toBe(true);
        console.info("User Logout Successfully");
    });






    //New Learner Login
    test(" Enter Login Credential and Login Learner", async () => {
        let a = await lmsLoginPage.enterCredentialsOnLogin(__cache.get(locator.addNewUser.userName), __cache.get(locator.addNewUser.passwordField));
        expect(a).toBe(true);
    });

    test("First Time User Login Verify Browser Check Page and Click Continue", async () => {
        let browserPageHeading = await lmsBrowserCheckPage.verifyBrowserCheckPage();
        expect(browserPageHeading).toEqual("Browser Check");
        await lmsBrowserCheckPage.clickToContinue();
    });


    test("Verify Guided Tour Page and Title", async () => {
        await lmsGuidedTourPage.verifyGuidedTourPageHeading();
        await lmsGuidedTourPage.clickToContinue();
    });


    test("Verify License Agreement Page And Click Agree Button", async () => {
        let licenseAgreementPageHeading = await lmsLicenseAgreementPage.verifyLicenseAgreementPage();
        expect(licenseAgreementPageHeading).toEqual("License Agreement!");
        await lmsLicenseAgreementPage.clickButtonIAgree();
    });

    test("Verify My Course Page", async () => {
        let myCoursePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
        expect(myCoursePageHeading).toEqual("My Courses");
    });

    test("Launch Enrolled Course", async () => {
        await lmsMyCoursePage.selectShowEnrolledCoursesOptionFromDropdown();
        await lmsMyCoursePage.clickCourseNameToLaunchCoursePlayer(__appProperties.get("lms.atc.new.learner.course"));
    });

    test("Verify Course Player and Verify Course Name and Close Course Player", async () => {
        await lcmsCoursePlayerPage.switchToCoursePlayWindow();
        await lcmsCoursePlayerPage.verifyPageTitle();
        let cName = await lcmsCoursePlayerPage.confirmCourseNameOnLcmsCoursePlayerPage();
        expect(cName).toEqual(__appProperties.get("lms.atc.new.learner.course"));
        await lcmsCoursePlayerPage.closeLcmsCoursePlayerWindowAndSwitchBackToLms();
    });

    test("Navigate to My Transcripts Page", async () => {
        let headerIconsTF = await lmsHeaderIconsPage.verifyHeaderIcons("MY TRANSCRIPTS");
        expect(headerIconsTF).toEqual("MY TRANSCRIPTS");
        await lmsHeaderIconsPage.clickMyTranscriptsIcon();
    });

    //verify Performance By Course Report
    test("Verify Learner Performance By Course Report", async () => {
        await lmsLearnerMyTranscriptsPage.clickOnReportNameInLeftNavigationMenu(locator.learnerMyTranscriptsReports.PerformanceByCourseReportName);
        let verifyReportName = await lmsCommonUtilsPage.verifyPageHeading();
        expect(verifyReportName).toEqual("Performance by Course");
        await lmsLearnerMyTranscriptsPage.clickExecuteReportButton();
        let performanceByCourseReportGrid = await lmsLearnerMyTranscriptsPage.verifyPerformanceByCourseReportGridDisplayed();
        expect(performanceByCourseReportGrid).toBe(true);

        let performanceByCourseReportGridData = await lmsLearnerMyTranscriptsPage.verifyPerformanceByCourseReportGridData(__appProperties.get("lms.atc.new.learner.course"));
        expect(performanceByCourseReportGridData).toBe(true);
    });


    test("Logout Lms User", async () => {
        await lmsCommonUtilsPage.lmsUserLogout();
        let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
        expect(afterLogoutTitle).toBe(true);
        console.info("User Logout Successfully");
    });

});