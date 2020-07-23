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
    lmsManageUserListPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserListPage.js"),
    lmsManageUserAddPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserAddPage.js"),
    lmsManageUserGroupPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserGroupPage.js"),
    lmsManageUserConfirmationPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserConfirmationPage.js"),
    lmsBrowserCheckPage = require(__basedir + "/src/main/lms/pages/common/lmsBrowserCheckPage.js"),
    lmsLicenseAgreementPage = require(__basedir + "/src/main/lms/pages/common/lmsLicenseAgreementPage.js"),
    lcmsCoursePlayerPage = require(__basedir + "/src/main/lms/pages/learner/coursePlayer/lcmsCoursePlayerPage.js"),
    locator = require(__basedir + "/src/main/lms/pages/locator.js");


describe("Lms Learner Launch Course From My Course Page Test", function () {
    describe("Learner Launch Enrolled Self-Paced Course From My Courses Page Test", function lmsLearnerLaunchEnrolledSelfPacedCourseFromMyCoursesPageTest() {

        test("Verify Login Page Title", async () => {
            let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
            expect(loginPageTitle).toBe(true);
        });


        test("Enter Login Credentials and Login Learner", async () => {
            let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.LearnerUserName"), __appProperties.get("lms.LearnerPassword"));
            expect(a).toBe(true);
        });


        test("Verify Guided Tour Page and Title", async () => {
            let guidedTourPH = await lmsGuidedTourPage.verifyGuidedTourPageHeading();
            expect(guidedTourPH).toEqual(locator.guidedTour.guidedTourPageHeadingText);
            await lmsGuidedTourPage.clickToContinue();
        });


        test("Verify My Course Page", async () => {
            let myCoursePageTitle = await lmsMyCoursePage.verifyPageTitle();
            expect(myCoursePageTitle).toBe(true);
            let myCoursePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
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







//TODO Need to complete
    describe("Learner Launch Enrolled Scorm Course From My Courses Page Test", function lmsLearnerLaunchEnrolledScormCourseFromMyCoursesPageTest() {

        test("Verify Login Page Title", async () => {
            let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
            expect(loginPageTitle).toBe(true);
        });


        test("Enter Login Credentials and Login Learner", async () => {
            let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.LearnerUserName"), __appProperties.get("lms.LearnerPassword"));
            expect(a).toBe(true);
        });


        test("Verify Guided Tour Page and Title", async () => {
            let guidedTourPageHeading = await lmsGuidedTourPage.verifyGuidedTourPageHeading();
            expect(guidedTourPageHeading).toEqual(locator.guidedTour.guidedTourPageHeadingText);
            await lmsGuidedTourPage.clickToContinue();
        });


        test("Verify My Course Page", async () => {
            let myCoursePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
            expect(myCoursePageHeading).toEqual("My Courses");
        });


        test("Select Show Enrolled Courses Option and Launch Enrolled Course", async () => {
            await lmsMyCoursePage.selectShowEnrolledCoursesOptionFromDropdown();


            //TODO Continue Code from Here
            //await lmsMyCoursePage.clickCourseNameToLaunchCoursePlayer(__appProperties.get("lms.atc.test.scorm.course"));
        });


        /*test("Switch to Scorm Course Player and Verify Course Name", async () => {
            await lcmsCoursePlayerPage.switchToCoursePlayWindow();

            //await lcmsCoursePlayerPage.removeAlert();

            await lcmsCoursePlayerPage.switchToScormPlayerWindow();


            let scormCourseContentHeading = await lcmsCoursePlayerPage.verifyScormCoursePageHeading();
            expect(scormCourseContentHeading).toEqual("Play of the game");
            await lcmsCoursePlayerPage.closeLcmsCoursePlayerWindowAndSwitchBackToLms();
        });*/

        test("Logout Lms User", async () => {
            await lmsCommonUtilsPage.lmsUserLogout();
            let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
            expect(afterLogoutTitle).toBe(true);
            console.info("User Logout Successfully");
        });

    });








    describe("Learner Launch Any Available Course From My Courses Page Test", function lmsLaunchAnyAvailableCourseFromMyCoursesPageTest() {

        test("Verify Login Page Title", async () => {
            let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
            expect(loginPageTitle).toBe(true);
        });


        test("Enter Login Credentials and Login Manager ", async () => {
            let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.ManagerUserName"), __appProperties.get("lms.ManagerPassword"));
            expect(a).toBe(true);
        });

        test("Verify Guided Tour Page and Title ", async () => {
            let guidedTourPH = await lmsGuidedTourPage.verifyGuidedTourPageHeading();
            expect(guidedTourPH).toEqual(locator.guidedTour.guidedTourPageHeadingText);
            await lmsGuidedTourPage.clickToContinue();

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

        test("Choose Available Courses Option From Dropdown on My Courses Page ", async () => {
            await lmsMyCoursePage.selectAvailableCoursesOptionFromDropdown();
        });

        test("Verify Course Groups and Courses Section Headings in Available and Click Course Group", async () => {
            let courseGroupsHeading = await lmsMyCoursePage.verifyAvailableFilterCourseGroupsHeading();
            expect(courseGroupsHeading).toEqual("BROWSE COURSE GROUPS");

            let coursesHeading = await lmsMyCoursePage.verifyAvailableFilterCoursesHeading();
            expect(coursesHeading).toEqual("COURSES");

            await lmsMyCoursePage.clickOnFirstCourseGroupName(__appProperties.get("lms.available.filter.courseGroup.name"));
        });


        test("Launch Course and Verify Course Name on Course Player", async () => {
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
    });

});