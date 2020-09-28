/**
 * Created by asadullah.qazi
 * On 7/22/2020}
 **/

global.__basedir = process.cwd();
const
    scormCloudLoginPage = require(__basedir + "/src/main/lms/pages/learner/learner_integration_cases/aiccScormCloudLoginPage.js"),
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    scormCloudHomePage = require(__basedir + "/src/main/lms/pages/learner/learner_integration_cases/aiccScormCloudHomePage.js"),
    lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsMyCoursePage = require(__basedir + "/src/main/lms/pages/learner/learner_my_course/lmsMyCoursePage.js"),
    lmsManageUserListPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserListPage.js"),
    lmsManageUserAddPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserAddPage.js"),
    lmsManageUserGroupPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserGroupPage.js"),
    lcmsCoursePlayerPage = require(__basedir + "/src/main/lms/pages/learner/coursePlayer/lcmsCoursePlayerPage.js"),
    locator = require(__basedir + "/src/main/lms/pages/locator.js");


afterAll (async () => {
    await lmsCommonUtilsPage.quitWindow();
});


describe("Lms Learner AICC Type Course Launch and Course Completion Test", function LmsLearnerAICCTypeCourseLaunchAndCourseCompletionTest() {

    test("Navigate to Scorm Cloud URL", async () => {
        await lmsLoginPage.openUrl(__appProperties.get("scorm.cloud.aicc.url"));
        let loginPageTitle = await lmsCommonUtilsPage.verifyTitle(locator.scormCloud.scormCloudPageTitle);
            expect(loginPageTitle).toBe(true);
    });

    test("Enter Login Credentials and Login AICC Learner", async () => {
        await scormCloudLoginPage.enterLoginCredentialsForAICCScorm(
            __appProperties.get("lms.aicc.scorm.cloud.learner.username"),
            __appProperties.get("lms.aicc.scorm.cloud.learner.password"));
    });

    test("Verify Scorm Cloud Page and Click on Library Option in Left Navigation", async () => {
        let homePageLogoVisible = await scormCloudHomePage.verifyScormCloudHomePage();
        expect(homePageLogoVisible).toBe(true);

        await scormCloudHomePage.clickOnLibraryOptionInLeftMenu();

    });

    test("Verify Scorm Cloud Library Page and Click on Course Name", async () => {
        let libraryPageHeading = await scormCloudHomePage.verifyScormCloudLibraryPage();
        expect(libraryPageHeading).toEqual(locator.scormCloud.scormCloudLibraryPageHeadingText);

        await scormCloudHomePage.clickOnAiccCourseNameInTheGrid(__appProperties.get("lms.scorm.cloud.aicc.course"));
    });

    test("Resit AICC Scorm Course Progress and Verify", async () => {
        await scormCloudHomePage.resetAICCCourseProgress();
        let resitProgressSuccessful = await scormCloudHomePage.verifyCourseProgressResitSuccessful(locator.scormCloud.scormCloudTotalTime);
        expect(resitProgressSuccessful).toBe(true);
    });

    test("Launch AICC Course and Switch to Course Player Window and Verify", async () => {
        await scormCloudHomePage.clickCourseLaunchButton();
        await scormCloudHomePage.switchToScormCloudWindowAndClickStartToLaunchCourse();
        await scormCloudHomePage.switchToThirdWindow();
        let cName = await lcmsCoursePlayerPage.confirmCourseNameOnLcmsCoursePlayerPage();
        expect(cName).toEqual(locator.coursePlayerPage.aiccScormCloudCourseName);
    });

    test("Complete Course and Close Lcms Course Player", async () => {
        await lcmsCoursePlayerPage.maximizeCoursePlayerWindow();
        await lcmsCoursePlayerPage.TermsOfUseClick();
        await lcmsCoursePlayerPage.clickNextCourseStartAndComplete();
        await lcmsCoursePlayerPage.closeLcmsPlayerAndSwitchSubChildWindow();
    });

    test("Switch to Cloud Scorm and Sign-Out ", async () => {
        await scormCloudHomePage.scormCloudSignOut();
    });

    test("Navigate To Lms Page", async () => {
        let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
        expect(loginPageTitle).toBe(true);
    });

    test("Enter Login Credentials and Login Learner", async () => {
        let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.ManagerAICCUserName"), __appProperties.get("lms.ManagerAICCPassword"));
        expect(a).toBe(true);
    });

    test("Verify Guided Tour Page and Title", async () => {
        await lmsGuidedTourPage.verifyGuidedTourPageHeading();
        await lmsGuidedTourPage.clickToContinue();
    });

    /*test("Search AICC Manager and Click On First Name", async () => {
        await lmsManageUserListPage.clickToSearchUserButton();
        await lmsManageUserListPage.enterFirstNameInSearchDialogBoxAndClick(locator.ManageUserList.searchUserByEmail, locator.ManageUserList.aiccManagerFirstName);
        await lmsManageUserListPage.clickUserFirstNameInSearchGrid(locator.ManageUserList.userSearchResultGrid, locator.ManageUserList.aiccManagerFirstName, true);
    });

    test("Verify Searched Result and Launch Learner Profile & and launch Dashboard", async () => {
        //await lmsManageUserListPage.clickLearnerNameToLaunchProfile();
        let p = await lmsManageUserAddPage.clickLoginAsLearner();
        expect(p).toBe(true);
    });*/

    test("Choose Completed Courses Option From Dropdown on My Courses Page", async () => {
        await lmsMyCoursePage.selectCompletedCoursesOptionFromDropdown();
    });

    test("Verify the Course Status is Completed", async () => {
        let lastAccessedFromCourse = await lmsMyCoursePage.getLastAccessedDateOfCurrentCompletedCourse(locator.completedFilter.lastAccesstDate);
        console.info("Last Accessed Date " + lastAccessedFromCourse);
        expect(lastAccessedFromCourse).toBe(true);

        /*let completedStatus = await lmsMyCoursePage.verifyCompletedStatusForTodaysCompletedCourse(lastAccessedFromCourse);
        expect(completedStatus).toBe(true);*/
    });


    test("Logout Lms User", async () => {
        await lmsCommonUtilsPage.lmsUserLogout();
        let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
        expect(afterLogoutTitle).toBe(true);
        console.info("User Logout Successfully");
    });
});
