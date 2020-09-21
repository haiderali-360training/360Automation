/**
 * Created by asadullah.qazi
 * On 6/29/2020}
 **/

global.__basedir = process.cwd();


const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsLearnerMyTranscriptsPage = require(__basedir + "/src/main/lms/pages/learner/learner_myTranscripts/lmsLearnerMyTranscriptsPage.js"),
    lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js"),
    lmsHeaderIconsPage = require(__basedir + "/src/main/lms/pages/common/lmsHeaderIconsPage.js"),
    locator = require(__basedir + "/src/main/lms/pages/locator.js");


afterAll (async () => {
    await lmsCommonUtilsPage.quitWindow();
});

describe("Verify Learner Reports in My Transcripts", function () {
    describe("Verify Learner Performance By Course Report in My Transcripts", function verifyPerformanceByCourseReportInLearnerMyTranscripts() {


        test("Navigate To Lms Page and Login to Lms", async () => {
            let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
            expect(loginPageTitle).toBe(true);
        });


        test("Enter Login Credentials and Login Learner", async () => {
            let learnerLoginTF = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.LearnerUserName"), __appProperties.get("lms.LearnerPassword"));
            expect(learnerLoginTF).toBe(true);
        });


        test("Verify Guided Tour Page and Title", async () => {
            let guidedTourPageTitle = await lmsGuidedTourPage.verifyGuidedTourPageTitle();
            await lmsGuidedTourPage.verifyGuidedTourPageHeading();
            await lmsGuidedTourPage.clickToContinue();
            expect(guidedTourPageTitle).toBe(true);
        });


        test("Navigate to My Transcripts Page", async () => {
            let headerIconsTF = await lmsHeaderIconsPage.verifyHeaderIcons("MY TRANSCRIPTS");
            expect(headerIconsTF).toEqual("MY TRANSCRIPTS");
            await lmsHeaderIconsPage.clickMyTranscriptsIcon();
        });


        test("Verify Learner My Transcript Report Page", async () => {
            let pHeading = await lmsCommonUtilsPage.verifyPageHeading();
            expect(pHeading).toEqual("Performance by Course");
        });


        //verify Performance By Course Report
        test("Verify Learner Performance By Course Report", async () => {
            await lmsLearnerMyTranscriptsPage.clickOnReportNameInLeftNavigationMenu(locator.learnerMyTranscriptsReports.PerformanceByCourseReportName);
            let verifyReportName = await lmsCommonUtilsPage.verifyPageHeading();
            expect(verifyReportName).toEqual("Performance by Course");
            await lmsLearnerMyTranscriptsPage.clickExecuteReportButton();
            let performanceByCourseReportGrid = await lmsLearnerMyTranscriptsPage.verifyPerformanceByCourseReportGridDisplayed();
            expect(performanceByCourseReportGrid).toBe(true);
            /*let numberOfColumnsInReport = await lmsLearnerMyTranscriptsPage.verifyReport();
            expect(numberOfColumnsInReport).toBe(true);*/
        });
    });




    describe("Verify Learner Performance By Course Transcript Report in My Transcripts", function verifyPerformanceByCourseReportTranscript() {

        test("Verify Learner Performance By Course Transcript Report", async () => {
            await lmsLearnerMyTranscriptsPage.clickOnReportNameInLeftNavigationMenu(locator.learnerMyTranscriptsReports.PerformanceByCourseTranscriptReportName);
            let verifyReportTitleName = await lmsLearnerMyTranscriptsPage.verifyDisplayingReportTitlePage();
            expect(verifyReportTitleName).toEqual("Performance by Course (Transcript)");
            await lmsLearnerMyTranscriptsPage.clickExecuteReportButton();
            let performanceByCourseReportGrid = await lmsLearnerMyTranscriptsPage.verifyPerformanceByCourseReportGridDisplayed();
            expect(performanceByCourseReportGrid).toBe(true);
        });
    });





    describe("Verify Learner Performance by Training Plan Report in My Transcripts", function verifyPerformanceByTrainingPlanReport() {

        test("Verify Learner Performance by Training Plan Report", async () => {
            await lmsLearnerMyTranscriptsPage.clickOnReportNameInLeftNavigationMenu(locator.learnerMyTranscriptsReports.PerformanceByTrainingPlanReportName);
            let verifyReportTitleName = await lmsLearnerMyTranscriptsPage.verifyDisplayingReportTitlePage();
            expect(verifyReportTitleName).toEqual("Performance by Training Plan");
            await lmsLearnerMyTranscriptsPage.clickExecuteReportButton();
            let performanceByCourseReportGrid = await lmsLearnerMyTranscriptsPage.verifyPerformanceByCourseReportGridDisplayed();
            expect(performanceByCourseReportGrid).toBe(true);
        });
    });





    describe("Verify Learner Performance Summary (All Course Groups) in My Transcripts", function verifyPerformanceSummaryAllCourseGroupReport() {

        test("Verify Learner Performance Summary (All Course Groups) Report", async () => {
            await lmsLearnerMyTranscriptsPage.clickOnReportNameInLeftNavigationMenu(locator.learnerMyTranscriptsReports.PerformanceSummaryAllCourseGroupsReportName);
            let verifyReportTitleName = await lmsLearnerMyTranscriptsPage.verifyDisplayingReportTitlePage();
            expect(verifyReportTitleName).toEqual("Performance Summary (All Course Groups)");
            await lmsLearnerMyTranscriptsPage.clickExecuteReportButton();
            let performanceByCourseReportGrid = await lmsLearnerMyTranscriptsPage.verifyPerformanceByCourseReportGridDisplayed();
            expect(performanceByCourseReportGrid).toBe(true);
        });
    });





    describe("Verify Learner Performance Summary (All Courses) Report in My Transcripts", function verifyPerformanceSummaryAllCourseReport() {

        test("Verify Learner Performance Summary (All Courses) Report", async () => {
            await lmsLearnerMyTranscriptsPage.clickOnReportNameInLeftNavigationMenu(locator.learnerMyTranscriptsReports.PerformanceSummaryAllCoursesReportName);
            let verifyReportTitleName = await lmsLearnerMyTranscriptsPage.verifyDisplayingReportTitlePage();
            expect(verifyReportTitleName).toEqual("Performance Summary (All Courses)");
            await lmsLearnerMyTranscriptsPage.clickExecuteReportButton();
            let performanceByCourseReportGrid = await lmsLearnerMyTranscriptsPage.verifyPerformanceByCourseReportGridDisplayed();
            expect(performanceByCourseReportGrid).toBe(true);
        });
    });




    describe("Verify Learner Performance Summary (All Training Plans) Report in My Transcripts", function verifyPerformanceSummaryAllTrainingPlanReport() {

        test("Verify Learner Performance Summary (All Training Plans) Report", async () => {
            await lmsLearnerMyTranscriptsPage.clickOnReportNameInLeftNavigationMenu(locator.learnerMyTranscriptsReports.PerformanceSummaryAllTrainingPlansReportName);
            let verifyReportTitleName = await lmsLearnerMyTranscriptsPage.verifyDisplayingReportTitlePage();
            expect(verifyReportTitleName).toEqual("Performance Summary (All Training Plans)");
            await lmsLearnerMyTranscriptsPage.clickExecuteReportButton();
            let performanceByCourseReportGrid = await lmsLearnerMyTranscriptsPage.verifyPerformanceByCourseReportGridDisplayed();
            expect(performanceByCourseReportGrid).toBe(true);
        });
    });






    describe("Verify Learner Performance Summary by Course Group Report in My Transcripts", function verifyPerformanceSummaryByCourseGroupReport() {

        test("Verify Learner Performance Summary by Course Group Report", async () => {
            await lmsLearnerMyTranscriptsPage.clickOnReportNameInLeftNavigationMenu(locator.learnerMyTranscriptsReports.PerformanceSummaryByCourseGroup);
            let verifyReportTitleName = await lmsLearnerMyTranscriptsPage.verifyDisplayingReportTitlePage();
            expect(verifyReportTitleName).toEqual("Performance Summary by Course Group");
            await lmsLearnerMyTranscriptsPage.clickExecuteReportButton();
            let performanceByCourseReportGrid = await lmsLearnerMyTranscriptsPage.verifyPerformanceByCourseReportGridDisplayed();
            expect(performanceByCourseReportGrid).toBe(true);
        });
    });



        test("Logout Lms User", async () => {
            await lmsCommonUtilsPage.lmsUserLogout();
            let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
            expect(afterLogoutTitle).toBe(true);
            console.info("User Logout Successfully");
        });
});