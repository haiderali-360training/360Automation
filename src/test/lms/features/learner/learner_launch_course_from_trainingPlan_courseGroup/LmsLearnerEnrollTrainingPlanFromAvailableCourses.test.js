/**
 * Created by asadullah.qazi
 * On 7/19/2020}
 **/

global.__basedir = process.cwd();
const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js"),
    lmsMyCoursePage = require(__basedir + "/src/main/lms/pages/learner/learner_my_course/lmsMyCoursePage.js"),
    lmsManageEnrollmentPage = require(__basedir + "/src/main/lms/pages/manager/manageUsers/lmsManageEnrollmentPage.js"),
    lmsManageUserListPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserListPage.js"),
    lmsManageUserAddPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserAddPage.js"),
    lmsManageUserGroupPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserGroupPage.js"),
    lmsManageUserConfirmationPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserConfirmationPage.js"),
    lmsBrowserCheckPage = require(__basedir + "/src/main/lms/pages/common/lmsBrowserCheckPage.js"),
    lmsLicenseAgreementPage = require(__basedir + "/src/main/lms/pages/common/lmsLicenseAgreementPage.js"),
    lcmsCoursePlayerPage = require(__basedir + "/src/main/lms/pages/learner/coursePlayer/lcmsCoursePlayerPage.js"),
    locator = require(__basedir + "/src/main/lms/pages/locator.js");




describe("Learner Self Enroll In Training Plan Course from Available Course and Manager Verify Enrollment Test", function lmsLearnerSelfEnrollInTrainingPlanCoursefromAvailableCourseAndManagerVerifyEnrollmentTest(){

    test("Verify Login Page Title", async () => {
        let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
        expect(loginPageTitle).toBe(true);
    });


    test("Enter Login Credentials and Login Manager ", async () => {
        let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.ManagerUserName"), __appProperties.get("lms.ManagerPassword"));
        expect(a).toBe(true);
    });

    test("Verify Guided Tour Page and Title ", async () => {
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


    test("Verify Add User Page & fill-Up form & submit", async () => {
        let newLearnerUserName = await lmsManageUserAddPage.fillAddUserForm();
        expect(newLearnerUserName).toEqual(__cache.get(locator.addNewUser.userName));
    });

    test("Verify Select User Group & submit", async () => {
        let addNewUserInGroupPageTitle = await lmsCommonUtilsPage.verifyPageHeading();
        expect(addNewUserInGroupPageTitle).toEqual("Add New User - Groups");
        let c = await lmsManageUserGroupPage.clickToAddUserGroup();
        expect(c).toBe(true);
    });

    test("Verify Add User Summary Page & Click Finish Button ", async () => {
        let addNewUserConfirmationPageTitle = await lmsCommonUtilsPage.verifyPageHeading();
        expect(addNewUserConfirmationPageTitle).toEqual("Add New User - Confirmation");
        let c = await lmsManageUserConfirmationPage.clickToFinishButton();
        expect(c).toBe(true);
    });

    test("Verify That New User is Added Successfully ", async () => {
        await lmsManageUserListPage.clickToSearchUserButton();
        await lmsManageUserListPage.fillSearchDialogBox();
        let confirmUserAdded = await lmsManageUserListPage.confirmUserAddedSuccessfully();
        expect(confirmUserAdded).toEqual(__cache.get(locator.addNewUser.userName));
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
        await lmsGuidedTourPage.verifyGuidedTourPageHeading();
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

    test("Choose Available Courses Option From Dropdown on My Courses Page ", async () => {
        await lmsMyCoursePage.selectAvailableCoursesOptionFromDropdown();
    });

    test("Verify Course Groups and Courses Section Headings in Available and Click Training Plan Course Group", async () => {
        let courseGroupsHeading = await lmsMyCoursePage.verifyAvailableFilterCourseGroupsHeading();
        expect(courseGroupsHeading).toEqual("BROWSE COURSE GROUPS");

        let coursesHeading = await lmsMyCoursePage.verifyAvailableFilterCoursesHeading();
        expect(coursesHeading).toEqual("COURSES");

        await lmsMyCoursePage.clickOnFirstCourseGroupName(__appProperties.get("lms.available.filter.trainingPlan.courseGroup.name"));
    });


    test("Verify Training Plan Sub Groups and Click on Training Plan Sub Group", async () => {
        let subGroupTrainingPlan = await lmsMyCoursePage.verifySubGroupsOfTrainingPlanSection();
        expect(subGroupTrainingPlan).toBe(true);

        await lmsMyCoursePage.clickOnTrainingPlanSubCourseGroup(__appProperties.get("lms.available.filter.trainingPlan.sub.courseGroup.name"));
    });

    test("Verify Training Plan Courses and Launch Course and Verify Course Name on Course Player", async () => {
        await lmsMyCoursePage.clickOnAvailableCourseNameToLaunchCoursePlayer(__appProperties.get("lms.atc.launch.available.course"));
        await lcmsCoursePlayerPage.switchToCoursePlayWindow();
        await lcmsCoursePlayerPage.verifyPageTitle();
        let cName = await lcmsCoursePlayerPage.confirmCourseNameOnLcmsCoursePlayerPage();
        expect(cName).toEqual(__appProperties.get("lms.atc.launch.available.course"));
        await lcmsCoursePlayerPage.closeLcmsCoursePlayerWindowAndSwitchBackToLms();
    });


    test("Logout Lms User", async () => {
        await lmsCommonUtilsPage.lmsUserLogout();
        let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
        expect(afterLogoutTitle).toBe(true);
        console.info("User Logout Successfully");
    });






    //Verify Learner Enrollment in Training Plan
    test(" Enter Login Credentials and Login Manager ", async () => {
        let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.ManagerUserName"), __appProperties.get("lms.ManagerPassword"));
        expect(a).toBe(true);
    });

    test("Verify Guided Tour Page and Title ", async () => {
        await lmsGuidedTourPage.verifyGuidedTourPageHeading();
        await lmsGuidedTourPage.clickToContinue();
    });

    test("Verify Manage User Page and Click Manage Enrollment Left Navigation Menu Iten", async () => {
        let managerTitle = await lmsCommonUtilsPage.verifyPageHeading();
        expect(managerTitle).toEqual("Manage Users");

        await lmsManageUserListPage.clickManageEnrollments();
    });


    test("Verify Enrollment Created Successfully ", async () => {

        let manageEnrollmentPageHeading = await lmsCommonUtilsPage.verifyPageHeading();
        expect(manageEnrollmentPageHeading).toEqual("Manage Enrollments");

        await lmsManageEnrollmentPage.clickToSearchUserButton();
        await lmsManageEnrollmentPage.fillSearchDialogBox();
        let viewEnrollment = await lmsManageEnrollmentPage.clickViewEnrollment();
        expect(viewEnrollment).toBe(true);

        let confirmEnrollmentCreated = await lmsManageEnrollmentPage.verifyEnrollmentCreatedSuccessfully();
        expect(confirmEnrollmentCreated).toEqual(__appProperties.get("lms.atc.launch.available.course"));
        console.info("Course Used in Learner Enrollment: " + confirmEnrollmentCreated);
    });

    test("Logout Lms User", async () => {
        await lmsCommonUtilsPage.lmsUserLogout();
        let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
        expect(afterLogoutTitle).toBe(true);
        console.info("User Logout Successfully");
    });

});