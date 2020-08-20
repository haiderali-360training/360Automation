/**
 * Created by asadullah.qazi
 * On 7/13/2020}
 **/

global.__basedir = process.cwd();
const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js"),
    lmsMyCoursePage = require(__basedir + "/src/main/lms/pages/learner/learner_my_course/lmsMyCoursePage.js"),
    lmsCoursesStatisticsPage = require(__basedir + "/src/main/lms/pages/learner/learner_my_course/lmsCoursesStatisticsPage.js"),
    locator = require(__basedir + "/src/main/lms/pages/locator.js");


describe("Lms Learner Check Course Statistics Test", function () {

    describe("Verify Course Last Accessed Date from My Courses to Course Statistics From More Details", function verifyLastAccessedDateFromMoreDetails() {

        test("Verify Login Page Title", async () => {
            let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
            expect(loginPageTitle).toBe(true);
        });


        test("Enter Login Credentials and Login Learner", async () => {
            let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.LearnerUserName"), __appProperties.get("lms.LearnerPassword"));
            expect(a).toBe(true);
        });


        test("Verify Guided Tour Page and Title", async () => {
            let guidedTourPageHeading = await lmsGuidedTourPage.verifyGuidedTourPageHeading();
            expect(guidedTourPageHeading).toEqual("GUIDED TOUR");
            await lmsGuidedTourPage.clickToContinue();
        });


        test("Verify My Course Page", async () => {
            let myCoursePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
            expect(myCoursePageHeading).toEqual("My Courses");
        });


        test("Choose Enrolled Courses Option From Dropdown and Click More Details", async () => {
            await lmsMyCoursePage.selectShowEnrolledCoursesOptionFromDropdown();
        });


        test("Verify Last Accessed Date Should be Display in Course Statistics Page and equal to My Courses Date", async () => {
            let lastAccessedFromCourse = await lmsMyCoursePage.getLastAccessedDateFromCourse(__appProperties.get("lms.atc.new.learner.course"));

            await lmsMyCoursePage.clickMoreDetailsLinkOfDesireCourse(__appProperties.get("lms.atc.new.learner.course"));

            let courseNameOnCourseStat = await lmsCoursesStatisticsPage.verifyCourseStatisticsPage();
            expect(courseNameOnCourseStat).toEqual(__appProperties.get("lms.atc.new.learner.course"));

            let statisticsSectionsHeading = await lmsCoursesStatisticsPage.verifySummaryAndDetailedStatisticsSectionHeadings();
            expect(statisticsSectionsHeading).toBe(true);

            let lastAccessedDateFromCourseStatistics = await lmsCoursesStatisticsPage.verifyLastAccessedDateIsDisplayingInCourseStatisticsPage();
            console.info("Date from Enrolled Page: " + lastAccessedFromCourse);
            console.info("Date from Course Statistic Page: " + lastAccessedDateFromCourseStatistics);
            expect(lastAccessedFromCourse).toEqual(lastAccessedDateFromCourseStatistics);
        });
    });


    describe("Verify Course Statistics of Self-Paced Course From More Details", function verifyCourseStatisticsOfSelfPacedCourse() {

        test("Verify Course Statistics of Self-Paced and Course Status", async () => {

            let courseStatusFromCourseStatistics = await lmsCoursesStatisticsPage.verifyCourseStatusIsDisplayingInCourseStatisticsPage();
            expect(courseStatusFromCourseStatistics).toEqual("Completed");
        });
    });


    describe("Verify Course Statistics of Scorm Course From More Details", function verifyCourseStatisticsOfScormCourse() {

        test("Go Back to My Course and Click on Scrom Course", async () => {

            lmsCoursesStatisticsPage.backToMyCoursesPage();

            let myCoursePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
            expect(myCoursePageHeading).toEqual("My Courses");

            await lmsMyCoursePage.clickMoreDetailsLinkOfDesireCourse(__appProperties.get("lms.ScormCourse"));
        });


        test("Verify Course Statistics of Scorm Course and Course Status", async () => {

            let courseNameOnCourseStat = await lmsCoursesStatisticsPage.verifyCourseStatisticsPage();
            expect(courseNameOnCourseStat).toEqual(locator.moreDetailsCourseStats.moreDetailScormCourseName);

            let statisticsSectionsHeading = await lmsCoursesStatisticsPage.verifySummaryAndDetailedStatisticsSectionHeadings();
            expect(statisticsSectionsHeading).toBe(true);

            let courseStatusFromCourseStatistics = await lmsCoursesStatisticsPage.verifyCourseStatusIsDisplayingInCourseStatisticsPage();
            expect(courseStatusFromCourseStatistics).toEqual("Completed");
        });
    });


    test("Logout Lms User", async () => {
        await lmsCommonUtilsPage.lmsUserLogout();
        let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
        expect(afterLogoutTitle).toBe(true);
        console.info("User Logout Successfully");
    });

});