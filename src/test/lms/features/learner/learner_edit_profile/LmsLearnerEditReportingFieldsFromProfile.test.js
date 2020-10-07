/**
 * Created by asadullah.qazi
 * On 7/20/2020}
 **/

global.__basedir = process.cwd();
const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js"),
    lmsHeaderIconsPage = require(__basedir + "/src/main/lms/pages/common/lmsHeaderIconsPage.js"),
    lmsMyProfilePage = require(__basedir + "/src/main/lms/pages/learner/learner_my_profile/lmsMyProfilePage.js"),
    locator = require(__basedir + "/src/main/lms/pages/locator.js");

afterAll (async () => {
    await lmsCommonUtilsPage.quitWindow();
});

describe("Learner Edit Reporting Fields From My Profile Test", function () {

    describe("lms Learner Update Date Reporting Field", function () {

        test("Verify Login Page Title ", async () => {
            let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
            expect(loginPageTitle).toBe(true);
        });

        test("Enter Login Credentials and Login Learner", async () => {
            let userLoginTF = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.learnerUserName.for.edit.ReportingField"), __appProperties.get("lms.learnerPassword.for.edit.ReportingField"));
            expect(userLoginTF).toBe(true);
        });

        test("Verify Guided Tour Page and Title", async () => {
            let guidedTourPH = await lmsGuidedTourPage.verifyGuidedTourPageHeading();
            expect(guidedTourPH).toEqual(locator.guidedTour.guidedTourPageHeadingText);
            await lmsGuidedTourPage.clickToContinue();
        });

        test("Verify My Course Page and Click My Profile Icon", async () => {
            let myCoursePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
            expect(myCoursePageHeading).toEqual("My Courses");
            await lmsHeaderIconsPage.clickMyProfile();
        });

        test("Verify My Profile Page and Verify Reporting Fields Section", async () => {
            await lmsMyProfilePage.waitUntilPageLoad();
            let myProfilePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
            expect(myProfilePageHeading).toEqual("Profile");

            let reportingFieldDisplayed = await lmsMyProfilePage.verifyReportingFieldsAreDisplaying(locator.learnerMyProfile.dateReportingFieldLabel);
            expect(reportingFieldDisplayed).toBe(true);
        });

        test("Update Date Reporting Field and Verify Updated Date", async () => {
            let previousDate = await lmsMyProfilePage.updateDateReportingField(locator.learnerMyProfile.dateReportingFieldLabel);
            await lmsMyProfilePage.clickSaveButton();

            let dateFieldUpdated = await lmsMyProfilePage.verifyUpdatedDateField(previousDate);
            expect(dateFieldUpdated).toBe(true);
        });

        test("Update Choose Menu Reporting Field and Verify", async () => {
            await lmsMyProfilePage.updateMenuToChooseReportingField();
            await lmsMyProfilePage.clickSaveButton();

            let successMessageBox = await lmsMyProfilePage.verifySavedChangesSuccessfulMessage();
            expect(successMessageBox).toBe(true);
        });

        test("Update Social Security Number Reporting Field and Verify", async () => {
            let previousSSN = await lmsMyProfilePage.updateSocialSecurityNumberReportingField(locator.learnerMyProfile.SSNReportingFieldLabel);
            await lmsMyProfilePage.clickSaveButton();

            let SSNFieldUpdated = await lmsMyProfilePage.verifyUpdatedSSNField(previousSSN);
            expect(SSNFieldUpdated).toBe(true);
        });

        test("Logout Lms User", async () => {
            await lmsCommonUtilsPage.lmsUserLogout();
            let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
            expect(afterLogoutTitle).toBe(true);
            console.info("User Logout Successfully");
        });

    });

});
