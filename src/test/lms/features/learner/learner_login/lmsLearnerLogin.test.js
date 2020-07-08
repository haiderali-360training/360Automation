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


        test("User Login Using Blank Credentials", async () => {
            await lmsLoginPage.enterCredentialsOnLogin("","");
            let blankErrorMessageTF = await lmsLoginPage.verifyLoginErrorMessageForBlankCredentials();
            console.info("Error Message: " + blankErrorMessageTF);
            expect(blankErrorMessageTF.trim()).toEqual("Please type your Username & Password.");

        });
    });



    describe("Verify Login Error Message For Blank Password", function verifyLoginErrorMessageForBlankPassword(){

        test("User Login into LMS with Blank Password", async () => {
            let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
            expect(loginPageTitle).toBe(true);
        });


        test("User Login Using Blank Credentials", async () => {
            await lmsLoginPage.enterCredentialsOnLogin(__faker.internet.userName(), "");
            let blankErrorMessageTF = await lmsLoginPage.verifyLmsLoginErrorMessageForSomeUserNameAndBlankPassword();
            console.info("Error Message: " + blankErrorMessageTF);
            expect(blankErrorMessageTF.trim()).toEqual("Please type your Password.");
        });
    });





    describe("Verify Login Error Message For Blank User Name", function verifyLoginErrorMessageForBlankUserName(){

        test("User Login into LMS with Blank Password", async () => {
            let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
            expect(loginPageTitle).toBe(true);
        });


        test("Verify Login Error Message For Blank User Name", async () => {
            await lmsLoginPage.enterCredentialsOnLogin("", __faker.internet.password());
            let blankErrorMessageTF = await lmsLoginPage.verifyLmsLoginErrorMessageForBlankUserNameAndRandomPassword();
            console.info("Error Message: " + blankErrorMessageTF);
            expect(blankErrorMessageTF.trim()).toEqual("Please type your Username.");
            });
    });

});
