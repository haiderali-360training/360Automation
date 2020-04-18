/**
 * Developed By: Haider Ali
 * @type {any}
 */

const
    LmsLoginPage = require(process.cwd() + "/src/main/lms/pages/common/lmsLoginPage.js"),
    LmsGuidedTourPage = require(process.cwd() + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    LmsHeaderIconsPage = require(process.cwd() + "/src/main/lms/pages/common/lmsHeaderIconsPage.js"),
    LmsManageUserListPage = require(process.cwd() + "/src/main/lms/pages/manager/addLearners/lmsManageUserListPage.js"),
    LmsManageUserAddPage = require(process.cwd() + "/src/main/lms/pages/manager/addLearners/lmsManageUserAddPage.js"),
    LmsManageUserGroupPage = require(process.cwd() + "/src/main/lms/pages/manager/addLearners/lmsManageUserGroupPage.js"),
    LmsManageUserConfirmationPage = require(process.cwd() + "/src/main/lms/pages/manager/addLearners/lmsManageUserConfirmationPage.js"),
    LmsEnrollIndexPage = require(process.cwd() + "/src/main/lms/pages/manager/enrollmentWizard/lmsEnrollIndexPage.js"),
    LmsEnrollmentWizardPage = require(process.cwd() + "/src/main/lms/pages/manager/enrollmentWizard/lmsEnrollmentWizardPage.js"),
    env = require(process.cwd() + "/src/main/lms/pages/utils/environment.js");


describe("Lms Manager End To End Test", function lmsManagerEndToEndTest() {

    let lmsLoginPage = new LmsLoginPage();
    let lmsGuidedTourPage = new LmsGuidedTourPage();
    let lmsHeaderIconsPage = new LmsHeaderIconsPage();
    let lmsManageUserListPage = new LmsManageUserListPage();
    let lmsManageUserAddPage = new LmsManageUserAddPage();
    let lmsManageUserGroupPage = new LmsManageUserGroupPage();
    let lmsManageUserConfirmationPage = new LmsManageUserConfirmationPage();
    let lmsEnrollIndexPage = new LmsEnrollIndexPage();
    let lmsEnrollmentWizardPage = new LmsEnrollmentWizardPage();

    it("Verify login window title", async () => {
        let s = await lmsLoginPage.verifyLmsLoginPageTitle();
        expect(s).toBe(true);
    });

    it("Enter login credentials & submit", async () => {
        let a = await lmsLoginPage.enterCredentialsOnLogin(env.getValue("lms.ManagerUserName"), env.getValue("lms.ManagerPassword"));
        expect(a).toBe(true);
    });

    it("verify Guided tour window title", async () => {
        await lmsGuidedTourPage.verifyPageTitle();
        let x = await lmsGuidedTourPage.clickToContinue();
        expect(x).toBe(true);
    });

    it("Verify Manage User Page & click Add User Button ", async () => {
        await lmsManageUserListPage.verifyPageTitle();
        let d = await lmsManageUserListPage.clickToAddUserButton();
        expect(d).toBe(true);
    });


    it("Verify Add User Page & fill-Up form & submit ", async () => {
        let c = await lmsManageUserAddPage.fillAddUserForm();
        expect(c).toBe(true);
    });


    it("Verify Select User Group & submit ", async () => {
        let c = await lmsManageUserGroupPage.clickToAddUserGroup();
        expect(c).toBe(true);
    });

    it("Verify Summary page & finish ", async () => {
        let c = await lmsManageUserConfirmationPage.clickToFinishButton();
        expect(c).toBe(true);
    });

    it("Verify Search Dialog & open ", async () => {
        let c = await lmsManageUserListPage.clickToSearchUserButton();
        expect(c).toBe(true);
    });

    it("Verify Search Dialog fill & find ", async () => {
        let xc = await lmsManageUserListPage.fillSearchDialogBox();
        expect(xc).toBe(true);
    });

    it("Verify Plan & enroll page ", async () => {
        await lmsHeaderIconsPage.clickPlanAndEnroll();
        await lmsEnrollIndexPage.verifyPageHeading();
        let cs = await lmsEnrollIndexPage.clickPlanAndEnrollButton();
        expect(cs).toBe(true);
    });

    it("Verify learner enrollment wizard ", async () => {
        await lmsEnrollmentWizardPage.verifyPageHeading();
        let z = await lmsEnrollmentWizardPage.clickEnrollmentByCourse_wizard();
        expect(z).toBe(true);
    });

    it("Verify Learner to Launch Course in Manger User page", async () => {
        await lmsHeaderIconsPage.clickUserAndGroup();
        await lmsManageUserListPage.clickToSearchUserButton();
        await lmsManageUserListPage.fillSearchDialogBox();
    });

    it("Verify Searched Result and Launch Learner Profile & and launch Dashboard", async () => {
        await lmsManageUserListPage.clickLearnerNameToLaunchProfile();
        await lmsManageUserAddPage.clickLoginAsLearner();
        //await lmsManageUserListPage.fillSearchDialgBox();
    });

    it("Verify launch Course", async () => {
        await lmsManageUserListPage.clickLearnerNameToLaunchProfile();
    });


    /*it('Click Logout Link', async () => {
          let a = await lmsLoginPage.logoutMe();
          expect(a).toBe(null);
      });*/

});