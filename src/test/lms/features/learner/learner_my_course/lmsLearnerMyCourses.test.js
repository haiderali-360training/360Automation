/**
 * Created by asadullah.qazi
 * On 7/7/2020}
 **/

global.__basedir = process.cwd();
const
    lmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    lmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js"),
    lmsMyCoursePage = require(__basedir + "/src/main/lms/pages/learner/learner_my_course/lmsMyCoursePage.js");



describe("Lms Learner My Courses Test", function () {
    describe("Verify Enrolled Course are Listed in Enrolled Courses Filter", function verifyEnrolledCoursesFilterOnMyCourses() {


        test("Verify Login Page Title", async () => {
            let loginPageTitle = await lmsLoginPage.verifyLmsLoginPageTitle();
            expect(loginPageTitle).toBe(true);
        });


        test("Enter Login Credentials and Login Learner", async () => {
            let a = await lmsLoginPage.enterCredentialsOnLogin(__appProperties.get("lms.LearnerUserName"), __appProperties.get("lms.LearnerPassword"));
            expect(a).toBe(true);
        });


        test("Verify Guided Tour Page and Title", async () => {
            let guidedTourPageTitle = await lmsGuidedTourPage.verifyGuidedTourPageTitle();
            await lmsGuidedTourPage.verifyGuidedTourPageHeading();
            await lmsGuidedTourPage.clickToContinue();
            expect(guidedTourPageTitle).toBe(true);
        });


        test("Verify My Course Page", async () => {
            let myCoursePageTitle = await lmsMyCoursePage.verifyPageTitle();
            expect(myCoursePageTitle).toBe(true);
            let myCoursePageHeading = await lmsCommonUtilsPage.verifyPageHeading();
            console.info("My Course Page Heading: " + myCoursePageHeading);
            expect(myCoursePageHeading).toEqual("My Courses");
        });


        test("Chose Enrolled Courses Option From Dropdown on My Courses Page", async () => {
            await lmsMyCoursePage.selectShowEnrolledCoursesOptionFromDropdown();
        });

        test("Verify Enrolled Courses are Displaying", async () => {
            let enrolledCoursesTF = await lmsMyCoursePage.verifyEnrolledCourseNameDisplayedOnEnrolledCourseListing(__appProperties.get("lms.atc.new.learner.course"));
            expect(enrolledCoursesTF).toBe(true);
        });
    });






    describe("Verify Completed Courses are Listed in Completed Courses Filter", function verifyCompletedCoursesFilterOnMyCourses() {

        test("Chose Completed Courses Option From Dropdown on My Courses Page", async () => {
            await lmsMyCoursePage.selectCompletedCoursesOptionFromDropdown();
        });

        test("Verify Completed Courses are Displaying", async () => {
            let completedCoursesTF = await lmsMyCoursePage.verifyCompletedCourseNameDisplayedAndCompletedStatus(__appProperties.get("lms.atc.new.learner.course"));
            expect(completedCoursesTF).toBe(true);
        });

        test("Verify Completed Courses Status", async () => {
            let completedCoursesStatus = await lmsMyCoursePage.verifyCompletedCourseStatus(__appProperties.get("lms.atc.new.learner.course"));
            expect(completedCoursesStatus).toEqual("Completed");
        });
    });






    describe("Verify Available Courses are Listed in Available Courses Filter", function verifyAvailableCoursesFilterOnMyCourses() {

        test("Chose Available Courses Option From Dropdown on My Courses Page", async () => {
            await lmsMyCoursePage.selectAvailableCoursesOptionFromDropdown();
        });

        test("Verify Course Groups and Courses Section Headings in Available Filter", async () => {
            let courseGroupsHeading = await lmsMyCoursePage.verifyAvailableFilterCourseGroupsHeading();
            expect(courseGroupsHeading).toEqual("BROWSE COURSE GROUPS");

            let coursesHeading = await lmsMyCoursePage.verifyAvailableFilterCoursesHeading();
            expect(coursesHeading).toEqual("COURSES");
        });


        test("Verify Course Groups and Courses Section Data in Available Filter", async () => {
            await lmsMyCoursePage.clickOnFirstCourseGroupName(__appProperties.get("lms.available.filter.courseGroup.name"));

            let courseGroupsCoursesHeading = await lmsMyCoursePage.verifyCoursesHeadingAfterClickCourseGroup();
            expect(courseGroupsCoursesHeading).toEqual("ATC COURSES");
        });


    });



    test("Logout Lms User", async () => {
        await lmsCommonUtilsPage.lmsUserLogout();
        let afterLogoutTitle = await lmsCommonUtilsPage.verifyUserLogoutSuccessfully();
        expect(afterLogoutTitle).toBe(true);
        console.info("User Logout Successfully");
    });

});

