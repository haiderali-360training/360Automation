/**
 * Created by asadullah.qazi
 * On 7/22/2020}
 **/

global.__basedir = process.cwd();
const
    scormCloudLoginPage = require(__basedir + "/src/main/lms/pages/learner/learner_integration_cases/aiccScormCloudLoginPage.js"),
    scormCloudHomePage = require(__basedir + "/src/main/lms/pages/learner/learner_integration_cases/aiccScormCloudHomePage.js"),
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


describe("Lms Learner AICC Type Course Launch and Course Completion Test", function LmsLearnerAICCTypeCourseLaunchAndCourseCompletionTest() {

    test("Navigate to Scorm Cloud URL", async () => {
        await scormCloudLoginPage.openUrl(__appProperties.get("scorm.cloud.aicc.url"));
        let loginPageTitle = await lmsCommonUtilsPage.verifyTitle(locator.scormCloud.scormCloudPageTitle);
            expect(loginPageTitle).toBe(true);
    });

    test("Enter Login Credentials and Login AICC Learner", async () => {
        await scormCloudLoginPage.enterCredentialsOnLogin(
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

    /*test("Resit AICC Scorm Course Progress and Launch the Course", async () => {
        await scormCloudHomePage.resetAICCCourseProgress();
    });*/



});