global.__basedir = process.cwd();


const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsCommonActionPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js");




describe("Lms Learner Login Test", function () {
    describe("Login to LMS Using Valid LMS Learner Credentials", function LoginToLmsUsingValidLearnerCredentialsTest() {

        test("Navigate To Lms Page and Login to Lms", async () => {
            let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
            expect(loginPageTitle).toBe(true);
        });


        test("Enter Login Credentials and Login Learner", async () => {
            let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.LearnerUserName"), __appProperties.get("lms.LearnerPassword"));
            expect(a).toBe(true);
        });

        test("Logout Lms User", async () => {
            await lmsCommonActionPage.lmsUserLogout();
            let afterLogoutTitle = await lmsCommonActionPage.verifyUserLogoutSuccessfully();
            expect(afterLogoutTitle).toBe(true);
            console.info("User Logout Successful");
        });
    });



    describe("User Login with Blank User Name and or Blank Password Fields", function userLoginWithBlankUserNameAndOrBlankPasswordFieldsTest(){

        test("Navigate To Lms Page and Login to Lms", async () => {
            let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
            expect(loginPageTitle).toBe(true);
        });


        //TODO  --------How to trim the Text which we get from the web element "blankErrorMessageTF"
        test("User Login Using Blank Credentials", async () => {
            await lmsLoginPage.userLoginUsingProvidedCredentials("","");
            let blankErrorMessageTF = await lmsLoginPage.verifyLoginErrorMessageForBlankCredentials();
            expect(blankErrorMessageTF).toEqual(" Please type your Username & Password.");

        });
    });


});
