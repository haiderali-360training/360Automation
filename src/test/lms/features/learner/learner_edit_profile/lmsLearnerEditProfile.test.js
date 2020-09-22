/**
 * Created by asadullah.qazi
 * On 7/13/2020}
 **/

global.__basedir = process.cwd();
const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js"),
    lmsHeaderIconsPage = require(__basedir + "/src/main/lms/pages/common/lmsHeaderIconsPage.js"),
    lmsMyProfilePage = require(__basedir + "/src/main/lms/pages/learner/learner_my_profile/lmsMyProfilePage.js"),
    lmsManageUserListPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserListPage.js"),
    lmsManageUserAddPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserAddPage.js"),
    lmsManageUserGroupPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserGroupPage.js"),
    lmsManageUserConfirmationPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserConfirmationPage.js"),
    lmsBrowserCheckPage = require(__basedir + "/src/main/lms/pages/common/lmsBrowserCheckPage.js"),
    lmsLicenseAgreementPage = require(__basedir + "/src/main/lms/pages/common/lmsLicenseAgreementPage.js"),
    locator = require(__basedir + "/src/main/lms/pages/locator.js");


afterAll (async () => {
    await lmsCommonUtilsPage.quitWindow();
});


describe("Lms Learner Edit Profile Test", function () {
    describe("Verify Existing Learner Update Profile Test", function verifyExistingLearnerUpdateProfileTest() {

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

        test("Verify Learner First Name and Last Name Should be Disabled", async () => {
            let myProfilePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
            expect(myProfilePageHeading).toEqual("Profile");

            let learnerFirstName = await lmsMyProfilePage.verifyFirstNameFieldShouldBeDisabled();
            expect(learnerFirstName).toBeFalsy();
            let learnerLastName = await lmsMyProfilePage.verifyLastNameFieldShouldBeDisabled();
            expect(learnerLastName).toBeFalsy();
        });

        test("Update and Verify Learner Profile Fields", async () => {
            let updateSuccessMsgTF = await lmsMyProfilePage.updateLearnerAddressAndCityAndVerifySuccessfulUpdateMessage();
            expect(updateSuccessMsgTF).toBe(true);
        });

        test("Logout Lms User", async () => {
            await lmsCommonUtilsPage.lmsUserLogout();
            let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
            expect(afterLogoutTitle).toBe(true);
            console.info("User Logout Successfully");
        });
    });


    describe("Verify New Learner Update First Name and Last Name fields Profile Test", function verifyNewLearnerUpdateFirstNameAndLastNameProfileTest() {

        test("Enter Login Credentials and Login Manager ", async () => {
            let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.ManagerUserName"), __appProperties.get("lms.ManagerPassword"));
            expect(a).toBe(true);
        });

        test("Verify Guided Tour Page and Title", async () => {
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


        test("Verify Add New User Page and Add The New User", async () => {
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

        test("Logout Lms User", async () => {
            await lmsCommonUtilsPage.lmsUserLogout();
            let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
            expect(afterLogoutTitle).toBe(true);
            console.info("User Logout Successfully");
        });


        //New Learner Login
        test("Enter New Learner Login Credentials and Login Learner", async () => {
            let a = await lmsLoginPage.enterCredentialsOnLogin(__cache.get(locator.addNewUser.userName), "password1");// __cache.get(locator.addNewUser.passwordField));
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


        test("Verify License Agreement Page and Click Agree Button", async () => {
            let licenseAgreementPageHeading = await lmsLicenseAgreementPage.verifyLicenseAgreementPage();
            expect(licenseAgreementPageHeading).toEqual("License Agreement!");
            await lmsLicenseAgreementPage.clickButtonIAgree();
        });

        test("Verify My Course Page and Click My Profile Icon", async () => {
            let myCoursePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
            expect(myCoursePageHeading).toEqual("My Courses");
            await lmsHeaderIconsPage.clickMyProfile();
        });

        test("Verify Warning Message on Updating First and Last Name Changes and Save Changes", async () => {
            await lmsMyProfilePage.enterFirstNameAndLastNameAndClickSave();

            let warningMessage = await lmsMyProfilePage.verifyWarningMessageOnUpdatingFirstNameAndLastName();
            expect(warningMessage).toContain(locator.learnerMyProfile.firstAndLastNameUpdateWarningMessage);
        });

        test("Verify First and Last Name Changes Successfully", async () => {
            await lmsMyProfilePage.clickContinueToCloseConfirmationDialog();

            let updateSuccessMsgTF = await lmsMyProfilePage.verifySuccessMessageAfterUpdateLearnerFirstAndLastName();
            expect(updateSuccessMsgTF).toBe(true);
        });

        test("Logout Lms User", async () => {
            await lmsCommonUtilsPage.lmsUserLogout();
            let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
            expect(afterLogoutTitle).toBe(true);
            console.info("User Logout Successfully");
        });
    });


    describe("Verify New Learner Update Password Test", function verifyNewLearnerUpdatePasswordTest() {

        test("Enter Login Credentials and Login Manager", async () => {
            let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.ManagerUserName"), __appProperties.get("lms.ManagerPassword"));
            expect(a).toBe(true);
        });

        test("Verify Guided Tour Page and Title", async () => {
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

        test("Logout Lms User", async () => {
            await lmsCommonUtilsPage.lmsUserLogout();
            let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
            expect(afterLogoutTitle).toBe(true);
            console.info("User Logout Successfully");
        });


        //New Learner Login
        test("Enter Login Credentials and Login Learner", async () => {
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


        test("Verify License Agreement Page and Click Agree Button", async () => {
            let licenseAgreementPageHeading = await lmsLicenseAgreementPage.verifyLicenseAgreementPage();
            expect(licenseAgreementPageHeading).toEqual("License Agreement!");
            await lmsLicenseAgreementPage.clickButtonIAgree();
        });

        test("Verify My Course Page", async () => {
            let myCoursePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
            expect(myCoursePageHeading).toEqual("My Courses");
            await lmsHeaderIconsPage.clickMyProfile();
        });

        test("Change New User Password and Verify Success Message", async () => {
            let myProfilePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
            expect(myProfilePageHeading).toEqual("Profile");
            await lmsMyProfilePage.enterPasswordAndConfirmPasswordValuesAndClickSave();

            let updateSuccessMsgTF = await lmsMyProfilePage.verifySuccessMessageAfterUpdateLearnerFirstAndLastName();
            expect(updateSuccessMsgTF).toBe(true);
        });

        test("Logout Lms User", async () => {
            await lmsCommonUtilsPage.lmsUserLogout();
            let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
            expect(afterLogoutTitle).toBe(true);
            console.info("User Logout Successfully");
        });
    });


});