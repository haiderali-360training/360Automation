/**
 * Developed By: Haider Ali
 * @type {any}
 */

global.__basedir = process.cwd();
const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsHeaderIconsPage = require(__basedir + "/src/main/lms/pages/common/lmsHeaderIconsPage.js"),
    lmsManageUserListPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserListPage.js"),
    lmsManageUserAddPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserAddPage.js"),
    lmsManageUserGroupPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserGroupPage.js"),
    lmsManageUserConfirmationPage = require(__basedir + "/src/main/lms/pages/manager/addNewUserWizard/lmsManageUserConfirmationPage.js"),
    lmsEnrollIndexPage = require(__basedir + "/src/main/lms/pages/manager/enrollmentWizard/lmsEnrollIndexPage.js"),
    lmsEnrollmentWizardPage = require(__basedir + "/src/main/lms/pages/manager/enrollmentWizard/lmsEnrollmentWizardPage.js"),
    lmsMyCoursePage = require(__basedir + "/src/main/lms/pages/learner/learner_my_course/lmsMyCoursePage.js"),
    lcmsCoursePlayerPage = require(__basedir + "/src/main/lms/pages/learner/coursePlayer/lcmsCoursePlayerPage.js");

describe("Lms Manager End To End Test", function lmsManagerEndToEndTest() {

    test("Verify login window title", async () => {
        let s = await lmsLoginPage.verifyLmsLoginPageTitle();
        expect(s).toBe(true);
    });

    test("Enter login credentials & submit", async () => {
        let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.ManagerUserName"), __appProperties.get("lms.ManagerPassword"));
        expect(a).toBe(true);
    });

    test("verify Guided tour window title", async () => {
        let x = await lmsGuidedTourPage.verifyPageTitle();
        await lmsGuidedTourPage.clickToContinue();
        expect(x).toBe(true);
    });

    test("Verify Manage User Page & click Add User Button ", async () => {
        await lmsManageUserListPage.verifyPageTitle();
        let d = await lmsManageUserListPage.clickToAddUserButton();
        expect(d).toBe(true);
    });


    test("Verify Add User Page & fill-Up form & submit ", async () => {
        let c = await lmsManageUserAddPage.fillAddUserForm();
        expect(c).toBe(true);
    });


    test("Verify Select User Group & submit ", async () => {
        let c = await lmsManageUserGroupPage.clickToAddUserGroup();
        expect(c).toBe(true);
    });

    test("Verify Summary page & finish ", async () => {
        let c = await lmsManageUserConfirmationPage.clickToFinishButton();
        expect(c).toBe(true);
    });

    test("Verify Search Dialog & open ", async () => {
        let c = await lmsManageUserListPage.clickToSearchUserButton();
        expect(c).toBe(true);
    });

    test("Verify Search Dialog fill & find ", async () => {
        let xc = await lmsManageUserListPage.fillSearchDialogBox();
        expect(xc).toBe(true);
    });

    test("Verify Plan & enroll page ", async () => {
        await lmsHeaderIconsPage.clickPlanAndEnroll();
        await lmsEnrollIndexPage.verifyPageHeading();
        let cs = await lmsEnrollIndexPage.clickPlanAndEnrollButton();
        expect(cs).toBe(true);
    });

    test("Verify learner enrollment wizard ", async () => {
        await lmsEnrollmentWizardPage.verifyPageHeading();
    let z = await lmsEnrollmentWizardPage.clickEnrollmentByCourse_wizard();
        expect(z).toBe(true);
    });

    test("Verify Learner to Launch Course in Manger User page", async () => {
        await lmsHeaderIconsPage.clickUserAndGroup();
        await lmsManageUserListPage.clickToSearchUserButton();
        let x = await lmsManageUserListPage.fillSearchDialogBox();
        expect(x).toBe(true);
    });

    test("Verify Searched Result and Launch Learner Profile & and launch Dashboard", async () => {
        await lmsManageUserListPage.clickLearnerNameToLaunchProfile();
        let p = await lmsManageUserAddPage.clickLoginAsLearner();
        expect(p).toBe(true);
    });

    test("Verify Dashboard and Launch course", async () => {
        await lmsMyCoursePage.verifyPageTitle();
        await lmsMyCoursePage.clickOnRecentEnrolledCourse();
    });

    test("Verify Player Screen", async () => {
        await lcmsCoursePlayerPage.switchToCoursePlayWindow();
        await lcmsCoursePlayerPage.verifyPageTitle();
    });

    test("Verify Player Acknowledgment on Player", async () => {
        await lcmsCoursePlayerPage.checkAcknowledgmentButtonAndNext();
    });

    test("Verify Player Turn of Use & agreement on Player", async () => {
        await lcmsCoursePlayerPage.TermsOfUseClick();
    });

    test("Verify Player Start & complete course on Player", async () => {
        let a = await lcmsCoursePlayerPage.clickNextCourseStartAndComplete();
        expect(a);
    });

    test("Verify Player save and close window", async () => {
        let a = await lcmsCoursePlayerPage.coursePlayerSaveAndClose();
        expect(a);
    });

    it("Verify to launch certificate", async () => {
        let a = await lmsMyCoursePage.printCertificate();
        expect(a);
    });


});

