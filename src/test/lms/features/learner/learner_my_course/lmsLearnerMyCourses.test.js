/**
 * Created by asadullah.qazi
 * On 7/7/2020}
 **/

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
    lmsHeaderIconsPage = require(__basedir + "/src/main/lms/pages/common/lmsHeaderIconsPage.js"),
    lmsEnrollIndexPage = require(__basedir + "/src/main/lms/pages/manager/enrollmentWizard/lmsEnrollIndexPage.js"),
    lmsEnrollmentWizardPage = require(__basedir + "/src/main/lms/pages/manager/enrollmentWizard/lmsEnrollmentWizardPage.js"),
    lcmsCoursePlayerPage = require(__basedir + "/src/main/lms/pages/learner/coursePlayer/lcmsCoursePlayerPage.js"),
    lmsManageEnrollmentPage = require(__basedir + "/src/main/lms/pages/manager/manageUsers/lmsManageEnrollmentPage.js"),
    lmsBrowserCheckPage = require(__basedir + "/src/main/lms/pages/common/lmsBrowserCheckPage.js"),
    lmsLicenseAgreementPage = require(__basedir + "/src/main/lms/pages/common/lmsLicenseAgreementPage.js"),
    locator = require(__basedir + "/src/main/lms/pages/locator.js");



describe("Lms Learner My Courses Test", function () {

    describe("Verify Recently Accessed Courses are Listed in Recently Accessed Courses Filter", function verifyRecentlyAccessedCoursesFilterOnMyCourses() {

        test("Verify Login Page Title", async () => {
            let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
            expect(loginPageTitle).toBe(true);
        });


        test("Enter Login Credentials and Login  Manager", async () => {
            let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.ManagerUserName"), __appProperties.get("lms.ManagerPassword"));
            expect(a).toBe(true);
        });

        test("Verify Guided Tour Page and  Title ", async () => {
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
        test("Enter Login Credential and Login Learner", async () => {
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

        test("Verify Recently Accessed Course Filter Should Be Empty", async () => {
            await lmsMyCoursePage.selectShowRecentlyAccessedCoursesOptionFromDropdown();
            let recentAccessedCourseEmptyGrid = await lmsMyCoursePage.verifyNoCoursesShouldBeDisplayedInRecentAccessedCourseFilter();
            console.info("Recently Accessed Courses List Empty");
            expect(recentAccessedCourseEmptyGrid).toBe(true);
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

        test("Verify Recently Accessed Course Filter Launched Course Name Should Be Display", async () => {
            await lmsMyCoursePage.selectShowRecentlyAccessedCoursesOptionFromDropdown();
            let recentAccessedCourseEmptyGrid = await lmsMyCoursePage.verifyCoursesNameShouldBeDisplayedInRecentAccessedCourse(__appProperties.get("lms.atc.new.learner.course"));
            expect(recentAccessedCourseEmptyGrid).toBe(true);
        });

        test("Logout Lms User", async () => {
            await lmsCommonUtilsPage.lmsUserLogout();
            let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
            expect(afterLogoutTitle).toBe(true);
            console.info("User Logout Successfully");
        });
    });





    describe("Verify Enrolled Course are Listed in Enrolled Courses Filter", function verifyEnrolledCoursesFilterOnMyCourses() {


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


        test("Choose Enrolled Courses Option From Dropdown on My Courses Page", async () => {
            await lmsMyCoursePage.selectShowEnrolledCoursesOptionFromDropdown();
        });

        test("Verify Enrolled Courses are Displaying", async () => {
            let enrolledCoursesTF = await lmsMyCoursePage.verifyEnrolledCourseNameDisplayedOnEnrolledCourseListing(__appProperties.get("lms.atc.new.learner.course"));
            expect(enrolledCoursesTF).toBe(true);
        });
    });







    describe("Verify Available Courses are Listed in Available Courses Filter", function verifyAvailableCoursesFilterOnMyCourses() {

        test("Choose Available Courses Option From Dropdown on My Courses Page", async () => {
            await lmsMyCoursePage.selectAvailableCoursesOptionFromDropdown();
        });

        test("Verify Course Groups and Courses Section Headings in Available Filter", async () => {
            let courseGroupsHeading = await lmsMyCoursePage.verifyAvailableFilterCourseGroupsHeading();
            expect(courseGroupsHeading).toEqual("BROWSE COURSE GROUPS");

            let coursesHeading = await lmsMyCoursePage.verifyAvailableFilterCoursesHeading();
            expect(coursesHeading).toEqual("COURSES");
        });


        test("Verify Course Groups and Courses Section Data in Available Filter", async () => {
            await lmsMyCoursePage.clickOnFirstCourseGroupName(__appProperties.get("lms.available.filter.courseGroup.name"));

            let courseGroupsCoursesHeading = await lmsMyCoursePage.verifyCoursesHeadingAfterClickCourseGroup();
            expect(courseGroupsCoursesHeading).toEqual("ATC COURSES");


        });
    });





    describe("Verify Course Description Under Available Courses Filter", function verifyCourseDescriptionUnderAvailableCoursesFilterOnMyCourses() {

        test("Verify Course Description Under Available Courses Filter", async () => {
            await lmsMyCoursePage.clickCourseDescriptionForCourseGroupCourse(__appProperties.get("lms.atc.new.learner.course"));

            let courseDescriptionHeading = await lmsMyCoursePage.verifyCourseNameOnCourseDescriptionPopup();
            expect(courseDescriptionHeading).toEqual("ATC-Smoke");

            await lmsMyCoursePage.closeCourseDescriptionPopup();
        });
    });





    describe("Verify Breadcrumbs In Available Courses Filter", function verifyBreadcrumbsInAvailableCoursesFilterOnMyCourses() {

        test("Verify Breadcrumbs in Available Courses Filter", async () => {
            await lmsMyCoursePage.clickOnFirstCourseGroupName(__appProperties.get("lms.available.filter.courseGroup.name"));

            let courseGroupsBreadCrumb = await lmsMyCoursePage.verifyBreadCrumb();
            expect(courseGroupsBreadCrumb).toEqual("ATC");
        });
    });







    describe("Verify Completed Courses are Listed in Completed Courses Filter", function verifyCompletedCoursesFilterOnMyCourses() {

        test("Choose Completed Courses Option From Dropdown on My Courses Page", async () => {
            await lmsMyCoursePage.selectCompletedCoursesOptionFromDropdown();
        });

        test("Verify Completed Courses are Displaying", async () => {
            let completedCoursesTF = await lmsMyCoursePage.verifyCompletedCourseNameDisplayedAndCompletedStatus(__appProperties.get("lms.atc.new.learner.course"));
            expect(completedCoursesTF).toBe(true);
        });

        test("Verify Completed Courses Status", async () => {
            let completedCoursesStatus = await lmsMyCoursePage.verifyCompletedCourseStatus(__appProperties.get("lms.atc.new.learner.course"));
            expect(completedCoursesStatus).toEqual("Completed");
        });
    });






    describe("Verify Expired Courses are Listed in Expired Courses Filter", function verifyExpiredCoursesFilterOnMyCourses() {

        test("Choose Expired Courses Option From Dropdown on My Courses Page", async () => {
            await lmsMyCoursePage.selectExpiredCoursesOptionFromDropdown();
        });

        test("Verify Expired Courses", async () => {
            let expiredCourseExpiryText = await lmsMyCoursePage.verifyExpiredCourses();
            console.info(expiredCourseExpiryText);
            expect(expiredCourseExpiryText).toContain("Expired On");

        });
    });






    test("Logout Lms User", async () => {
        await lmsCommonUtilsPage.lmsUserLogout();
        let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
        expect(afterLogoutTitle).toBe(true);
        console.info("User Logout Successfully");
    });

});

