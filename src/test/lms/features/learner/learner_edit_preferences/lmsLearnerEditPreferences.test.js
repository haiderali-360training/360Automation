/**
 * Created by asadullah.qazi
 * On 7/15/2020}
 **/

global.__basedir = process.cwd();
const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js"),
    lmsHeaderIconsPage = require(__basedir + "/src/main/lms/pages/common/lmsHeaderIconsPage.js"),
    lmsMyPreferencesPage = require(__basedir + "/src/main/lms/pages/learner/learner_my_profile/lmsMyPreferencesPage.js"),
    locator = require(__basedir + "/src/main/lms/pages/locator.js");


describe("Verify Learner Edit Preferences Test", function () {

    test("Verify Login Page Title", async () => {
        let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
        expect(loginPageTitle).toBe(true);
    });

    test("Enter Login Credentials and Login Learner ", async () => {
        let userLoginTF = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.LearnerUserName"), __appProperties.get("lms.LearnerPassword"));
        expect(userLoginTF).toBe(true);
    });

    test("Verify Guided Tour Page and Title", async () => {
        await lmsGuidedTourPage.verifyGuidedTourPageHeading();
        await lmsGuidedTourPage.clickToContinue();
    });


    test("Verify My Course Page and Click My Profile Icon", async () => {
        let myCoursePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
        expect(myCoursePageHeading).toEqual("My Courses");
        await lmsHeaderIconsPage.clickMyProfile();
    });

    test("Verify My Profile Page and Navigate to My Preferences Page", async () => {
        let myProfilePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
        expect(myProfilePageHeading).toEqual("Profile");

        await lmsMyPreferencesPage.clickMyPreferencesMenu(locator.learnerMyProfile.profileLeftMenuMyPreferences);
    });

    test("Edit and Verify Updated Preferences", async () => {
        let myProfilePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
        expect(myProfilePageHeading).toEqual(locator.myPreferences.myPreferencesHeadingText);

        await lmsMyPreferencesPage.updatePreferences();
        let myPreferencesSaved = await lmsMyPreferencesPage.verifyPreferencesUpdatedAndSave();
        expect(myPreferencesSaved).toBe(true);
    });


    test("Revert Changes and Verify Preferences", async () => {
        await lmsMyPreferencesPage.revertPreferences();
    });


    test("Logout Lms User", async () => {
        await lmsCommonUtilsPage.lmsUserLogout();
        let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
        expect(afterLogoutTitle).toBe(true);
        console.info("User Logout Successfully");
    });
});