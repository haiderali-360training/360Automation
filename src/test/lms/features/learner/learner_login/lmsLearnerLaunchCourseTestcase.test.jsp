/**
 * Developed By: Haider Ali
 * @type {any}
 */

const
    env = require(__basedir + "/src/main/lms/pages/utils/environment.js"),
    LmsLoginPage = require(__basedir + "/src/main/lms/pages/common/lmsLoginPage.js"),
    LmsGuidedTourPage = require(__basedir + "/src/main/lms/pages/common/lmsGuidedTourPage.js"),
    LcmsCoursePlayerPage = require(__basedir + "/src/main/lms/pages/learner/coursePlayer/lcmsCoursePlayerPage.js"),
    LmsMyCoursePage = require(__basedir + "/src/main/lms/pages/learner/learner_my_course/lmsMyCoursePage.js");



    describe.skip("Lms Learner Launch course Test", function lmsLearnerTest() {

    let lmsLoginPage = new LmsLoginPage();
    let lmsGuidedTourPage = new LmsGuidedTourPage();
    let lcmsCoursePlayerPage = new LcmsCoursePlayerPage();
    let lmsMyCoursePage = new LmsMyCoursePage();

    it("Verify login window title", async () => {
        let s = await lmsLoginPage.verifyLmsLoginPageTitle();
        expect(s).toBe(true);
    });

    it("Enter login credentials & submit", async () => {
        let a = await lmsLoginPage.enterCredentialsOnLogin(env.getValue("lms.LearnerUserName"), env.getValue("lms.LearnerPassword"));
        expect(a).toBe(true);
    });

    it("verify Guided tour window title", async () => {
        await lmsGuidedTourPage.verifyLearnerPageTitle();
        let x = await lmsGuidedTourPage.clickToContinue();
        expect(x).toBe(true);
    });


    it("Verify MyCourse screen and launch course", async () => {
        //await lcmsCoursePlayerPage.browserCheckAndModePage();
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

    it("Verify Player Start course on Player", async () => {
        await lcmsCoursePlayerPage.clickNextCourseStart();
    });


    /*it('Click Logout Link', async () => {
          let a = await lmsLoginPage.logoutMe();
          expect(a).toBe(null);
      });*/

});