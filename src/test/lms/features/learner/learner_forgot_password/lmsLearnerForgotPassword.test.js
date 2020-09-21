/**
 * Created by asadullah.qazi
 * On 7/27/2020}
 **/

global.__basedir = process.cwd();
const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsLearnerForgotPasswordPage = require(__basedir + "/src/main/lms/pages/learner/learner_forgot_password/lmsLearnerForgotPasswordPage.js"),
    mailinatorHomePage = require(__basedir + "/src/main/lms/pages/learner/learner_forgot_password/mailinatorHomePage.js"),
    mailinatorInboxPage = require(__basedir + "/src/main/lms/pages/learner/learner_forgot_password/mailinatorInboxPage.js"),
    lmsResitPasswordPage = require(__basedir + "/src/main/lms/pages/learner/learner_forgot_password/lmsResitPasswordPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js"),
    locator = require(__basedir + "/src/main/lms/pages/locator.js");


afterAll (async () => {
    await lmsCommonUtilsPage.quitWindow();
});


describe("Lms Learner Forgot Password Then Reset Password Test", function lmsLearnerForgotPasswordThenResetPasswordTest() {

    test("Navigate To Lms Page", async () => {
        let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
        expect(loginPageTitle).toBe(true);
    });

    test("Click Forgot Button on Login Screen", async () => {
        await lmsLearnerForgotPasswordPage.clickForgotPasswordButton();
    });

    test("Select I don't know my password Option and Click Continue Button", async () => {
        let iDontKnowMyPasswordOptionVisible = await lmsLearnerForgotPasswordPage.verifyRadioOptionIDontKnowMyPasswordVisible();
        expect(iDontKnowMyPasswordOptionVisible).toBe(true);

        await lmsLearnerForgotPasswordPage.selectRadioOptionIDontKnowMyPassword();

        await lmsLearnerForgotPasswordPage.clickButton(locator.forgotPassword.continueButtonText);
    });

    test("Select Enter Your Email Address Option and Type Email and Click Submit", async () => {
        let enterYourEmailAddressOptionVisible = await lmsLearnerForgotPasswordPage.verifyRadioOptionEnterYourEmailAddressVisible();
        expect(enterYourEmailAddressOptionVisible).toBe(true);

        await lmsLearnerForgotPasswordPage.selectRadioOptionEnterYourEmailAddress();

        await lmsLearnerForgotPasswordPage.typeEmailAddressInEmailTextbox(__appProperties.get("lms.learner.email.address.for.forgot.password"));

        await lmsLearnerForgotPasswordPage.clickButton(locator.forgotPassword.submitButtonText);
    });

    test("Verify Password Change Request Sent Successful", async () => {
        let verifySuccessMessage = await lmsLearnerForgotPasswordPage.verifyEmailWithLoginCredentialsSentMessageScreen();
        console.info("Password Change Request Email Sent Successful");
        expect(verifySuccessMessage).toBe(true);
    });



    console.info("<---------------------------------->");
    console.info("<---------------------------------->");
    console.info("<---------------------------------->");




    test("Navigate to Mailinator Website", async () => {
        await lmsLoginPage.openUrl(__appProperties.get("mailinator.url"));
    });

    test("Verify Mailinator Page and Enter Email Address", async () => {
        let inboxTextFieldVisible = await mailinatorHomePage.verifyMailinatorMainPage();
        expect(inboxTextFieldVisible).toBe(true);

        await mailinatorHomePage.enterEmailIdAndClickGoButton(__appProperties.get("lms.learner.email.address.for.forgot.password"));
    });

    test("Verify Mailinator Inbox and Verify Forgot Password Email Received", async () => {
       let inboxEmailFieldTF = await mailinatorInboxPage.verifyMailinatorInboxPage();
       expect(inboxEmailFieldTF).toBe(true);

       let messagePaneTF = await mailinatorInboxPage.verifyEmailMessagePane();
       expect(messagePaneTF).toBe(true);

       let emailSubject = await mailinatorInboxPage.verifyForgotPasswordEmailReceived(locator.mailinator.mailinatorEmailForgotPasswordSubject);
       expect(emailSubject).toBe(true);
    });


    test("Open Forgot Password Email and Click on Resit Password Link", async () => {
        await mailinatorInboxPage.clickForgotPasswordEmailToOpen(locator.mailinator.mailinatorEmailForgotPasswordSubject);

        let emailVerify = await mailinatorInboxPage.verifyForgotPasswordEmailContent(locator.mailinator.mailinatorEmailForgotPasswordSubject);
        expect(emailVerify).toBe(true);

        await mailinatorInboxPage.clickOnResitPasswordLink();
    });

    test("Verify Lms Resit Password Screen and Change The Password", async () => {
        await mailinatorInboxPage.switchToLmsResitPasswordPage();

        let resitPasswordPageHeading = await lmsResitPasswordPage.verifyResitPasswordPageHeading();
        expect(resitPasswordPageHeading).toEqual(locator.mailinator.lmsResitPasswordHeadingText);

        await lmsResitPasswordPage.enterNewPasswordValuesInLMSResitPasswordScreen();

        await lmsResitPasswordPage.clickContinueButton();

        let resitPasswordSuccessful = await lmsResitPasswordPage.verifyChangePasswordSuccessfulMessage();
        expect(resitPasswordSuccessful).toEqual(locator.mailinator.lmsResitPasswordSuccessMessage);
    });

    test("Click Continue Sign-In Button and login with New Password", async () => {
        await lmsResitPasswordPage.clickContinueToSignInButton();

        await lmsLoginPage.enterCredentialsOnLogin(
            __appProperties.get("lms.learner.email.address.for.forgot.password"),
            __appProperties.get("lms.learner.password.for.forgot.password"));
    });

    test("Verify Learner Login Successfully With New Password", async () => {
        let guidedTourPH = await lmsGuidedTourPage.verifyGuidedTourPageHeading();
        expect(guidedTourPH).toEqual(locator.guidedTour.guidedTourPageHeadingText);
    });


    test("Logout Lms User", async () => {
        await lmsCommonUtilsPage.lmsUserLogout();
        let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
        expect(afterLogoutTitle).toBe(true);
        console.info("User Logout Successfully");
    });

});