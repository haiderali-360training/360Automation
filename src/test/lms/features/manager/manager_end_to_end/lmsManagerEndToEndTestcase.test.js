/**
 * Developed By: Haider Ali
 * @type {any}
 */

const
    env = require(process.cwd() + "/src/main/lms/pages/utils/environment.js"),
    LmsLoginPage = require(process.cwd() + "/src/main/lms/pages/common/lmsLoginPage.js"),
    LmsGuidedTourPage = require(process.cwd() + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    LmsHeaderIconsPage = require(process.cwd() + "/src/main/lms/pages/common/lmsHeaderIconsPage.js"),
    LmsManageUserListPage = require(process.cwd() + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserListPage.js"),
    LmsManageUserAddPage = require(process.cwd() + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserAddPage.js"),
    LmsManageUserGroupPage = require(process.cwd() + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserGroupPage.js"),
    LmsManageUserConfirmationPage = require(process.cwd() + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserConfirmationPage.js"),
    LmsEnrollIndexPage = require(process.cwd() + "/src/main/lms/pages/manager/enrollmentWizard/lmsEnrollIndexPage.js"),
    LmsEnrollmentWizardPage = require(process.cwd() + "/src/main/lms/pages/manager/enrollmentWizard/lmsEnrollmentWizardPage.js"),
    LmsMyCoursePage = require(process.cwd() + "/src/main/lms/pages/learner/learner_my_course/lmsMyCoursePage.js"),
    LcmsCoursePlayerPage = require(process.cwd() + "/src/main/lms/pages/learner/coursePlayer/lcmsCoursePlayerPage.js");

-
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
    let lmsMyCoursePage = new LmsMyCoursePage();
    let lcmsCoursePlayerPage = new LcmsCoursePlayerPage();

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
    });

    it("Verify Dashboard and Launch course", async () => {
        await lmsMyCoursePage.verifyPageTitle();
        await lmsMyCoursePage.clickOnRecentEnrolledCourse();
    });

    it("Verify Player Screen", async () => {
        await lcmsCoursePlayerPage.switchToCoursePlayWindow();
        await lcmsCoursePlayerPage.verifyPageTitle();
    });

    it("Verify Player Acknowledgment on Player", async () => {
        await lcmsCoursePlayerPage.checkAcknowledgmentButtonAndNext();
    });

    it("Verify Player Turn of Use & agreement on Player", async () => {
        await lcmsCoursePlayerPage.TermsOfUseClick();
    });

    it("Verify Player Start & complete course on Player", async () => {
        await lcmsCoursePlayerPage.clickNextCourseStartAndComplete();
    });

    it("Verify Main LMS window and Launch Course", async () => {
        //await lmsMyCoursePage.verifyPageTitle();
        let a = await lmsMyCoursePage.verifyCourseStatus();
        expect(a).toContain("Completed");

    });


    /*it('Click Logout Link', async () => {
          let a = await lmsLoginPage.logoutMe();
          expect(a).toBe(null);
      });*/

});