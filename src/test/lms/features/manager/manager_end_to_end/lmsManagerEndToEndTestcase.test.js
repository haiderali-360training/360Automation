/**
 * Developed By: Haider Ali
 * @type {any}
 */
const LmsLoginPage = require(process.cwd()+'/src/main/lms/pages/common/lmsLoginPage.js');
const LmsManageUserListPage = require(process.cwd()+'/src/main/lms/pages/manager/addLearners/lmsManageUserListPage.js');
const LmsManageUserAddPage = require(process.cwd()+'/src/main/lms/pages/manager/addLearners/lmsManageUserAddPage.js');
const LmsManageUserGroupPage = require(process.cwd()+'/src/main/lms/pages/manager/addLearners/lmsManageUserGroupPage.js');
const LmsManageUserConfirmationPage = require(process.cwd()+'/src/main/lms/pages/manager/addLearners/lmsManageUserConfirmationPage.js');
const LmsGuidedTourPage = require(process.cwd()+'/src/main/lms/pages/common/lmsGuidedTourPage.js');
const env = require(process.cwd()+'/src/main/lms/pages/utils/environment.js');


describe("Lms Manager End To End Test", function lmsManagerEndToEndTest() {

    var lmsLoginPage = new LmsLoginPage();
    var lmsGuidedTourPage = new LmsGuidedTourPage();
    var lmsManageUserListPage = new LmsManageUserListPage();
    var lmsManageUserAddPage = new LmsManageUserAddPage();
    var lmsManageUserAddPage = new LmsManageUserAddPage();
    var lmsManageUserGroupPage = new LmsManageUserGroupPage();
    var lmsManageUserConfirmationPage = new LmsManageUserConfirmationPage();

    it('Verify login window title', async () => {
        let s = await lmsLoginPage.verifyLmsLoginPageTitle();
        expect(s).toBe(true);
    });

    it('Enter login credentials & submit', async () => {
        let a = await lmsLoginPage.enterCredentialsOnLogin(env.getValue("lms.ManagerUserName"), env.getValue("lms.ManagerPassword"));
        expect(a).toBe(true);
    });

    it('verify Guided tour window title', async () => {
        lmsGuidedTourPage.verifyPageTitle();
        let x = await lmsGuidedTourPage.clickToContinue();
        expect(x).toBe(true);
    });

    it('Verify Manage User Page & click Add User Button ', async () => {
        let s = await lmsManageUserListPage.verifyPageTitle();
        let d = await lmsManageUserListPage.clickToAddUserButton();
        expect(d).toBe(true);
    });


    it('Verify Add User Page & fill-Up form & submit ', async () => {
        let c = await lmsManageUserAddPage.fillAddUserForm();
        expect(c).toBe(true);
    });


    it('Verify Select User Group & submit ', async () => {
        let c = await lmsManageUserGroupPage.clickToAddUserGroup();
        expect(c).toBe(true);
    });

    it('Verify Summary page & finish ', async () => {
        let c = await lmsManageUserConfirmationPage.clickToFinishButton();
        expect(c).toBe(true);
    });

    it('Verify Search Dialog & open ', async () => {
        let c = await lmsManageUserListPage.clickToSearchUserButton();
        expect(c).toBe(true);
    });

    it('Verify Search Dialog fill & find ', async () => {
        let c = await lmsManageUserListPage.fillSearchDialogBox();
        expect(c).toBe(true);
    });



/*
    it('Click Guided tour Page & submit', async () => {
        let a = await lmsGuidedTourPage.clickToContinue();
        expect(a).toBe(true);
    });
*/



  /*it('Click Logout Link', async () => {
        let a = await lmsLoginPage.logoutMe();
        expect(a).toBe(null);
    });*/





});



/*

describe("Lms Manager End To End Test", function lmsManagerEndToEndTest() {
    this.timeout(120000);    


    //Page Object Classes
    var lmsLoginPage = new LmsLoginPage(driver);
    var lmsGuidedTourPage = new LmsGuidedTourPage(driver);
    var lmsManageUserPage = new LmsManageUserPage(driver);
    var lmsAddNewUserRegistrationPage = new LmsAddNewUserRegistrationPage(driver);
    var lmsUserGroupPage = new LmsUserGroupPage(driver);
    var lmsAddNewUserConfirmationPage = new LmsAddNewUserConfirmationPage(driver);
    var lmsManagerPageHeadersPage = new LmsManagerPageHeadersPage(driver);
    var lmsEnrollPage = new LmsEnrollPage(driver);
    var lmsEnrollmentWizardPage = new LmsEnrollmentWizardPage(driver);
    var lmsCommonActionPage = new LmsCommonActionPage(driver);
    var lmsBrowserCheckPage = new LmsBrowserCheckPage(driver);
    var lmsLicenseAgreementPage = new LmsLicenseAgreementPage(driver);
    var lmsCommonButtons = new LmsCommonButtons(driver);
    var lmsMyCoursePage = new LmsMyCoursePage(driver);
    var lcmsCoursePlayerPage = new LcmsCoursePlayerPage(driver);
    var lcmsCoursePlayerAcknowledgmentPage = new LcmsCoursePlayerAcknowledgmentPage(driver);
    var lcmsCoursePlayerTermsOfUsePage = new LcmsCoursePlayerTermsOfUsePage(driver);
    var lcmsCoursePlayerScenesPage = new LcmsCoursePlayerScenesPage(driver);
    var lcmsCoursePlayerFinalExamPage = new LcmsCoursePlayerFinalExamPage(driver);
    var lcmsCoursePlayerReviewAnswerPage = new LcmsCoursePlayerReviewAnswerPage(driver);
    var lcmsCoursePlayerAssessmentScoreSummaryPage = new LcmsCoursePlayerAssessmentScoreSummaryPage(driver);
    var lcmsCoursePlayerClosePage = new LcmsCoursePlayerClosePage(driver);
    var lmsCourseCertificatePage = new LmsCourseCertificatePage(driver);


    


    it("Open LMS Application and Login as Manager", function launchLmsAndLoginAsManager(done)
    {
        lmsLoginPage.open();
        lmsLoginPage.verifyLmsLoginPageTitle(function(){
            lmsLoginPage.enterLoginCredentials(function(){
                lmsLoginPage.clickLoginButton(done);
            });
        });
    });//1 IT close


    it("Verify Manager Login and Click Continue Button", function verifyLoginAndClickCOntinue(done)
    {
        lmsGuidedTourPage.verifyGuidedTourPageTitle(function(){
            lmsGuidedTourPage.clickContinueButton(done);
        });
    });// 2 IT close


    it("Verify Manage User Page and Click Add User Button", function verifyManageUserPageAndClickAddUserButton(done)
    {
        lmsManageUserPage.verifyManageUserPage(function(){
            lmsManageUserPage.clickAddUserButton(done);
        });        
    });//3 IT Close


    it("Verify User Registration Page and Add New User", function verfiyUserRegistrationPageAndRegisterNewUser(done)
    {
        lmsAddNewUserRegistrationPage.verifyUserRegistrationPageTitle(function(){
            lmsAddNewUserRegistrationPage.enterNewUserInformation(function(uName){
                gUserName = uName;
                lmsAddNewUserRegistrationPage.clickNextButtonInAddUserPage(done);
            });
        });
    });//4 IT Close


    it("Verify Select Groups in Add New User Page and Click Next", function verifySelectGroupsPageAndClickNextButton(done)
    {
        lmsUserGroupPage.verifySelectGroupsOnAddNewUserPage(function(){
            lmsUserGroupPage.checkOrganizationGroupCheckbox(function(){
                lmsUserGroupPage.clickNextButtonInAddGroupsPage(done);
            });
        });
    });//5 IT Close


    it("Verify Add New User Confirmation Page and Click Finish", function verifyAddNewUserConfirmationPageAndClickFinishButton(done)
    {
        lmsAddNewUserConfirmationPage.verifyAddNewUserConfirmationPageAndPageTitle(function(){
            lmsAddNewUserConfirmationPage.clickFinishButtonInAddNewUserConfirmationPage(done);
            });
    });//6 IT Close


    it("Verify Confirm User Added Successfully", function verifyConfirmUserAddedSuccessfully(done)
    {
        lmsManageUserPage.verifyManageUserPage(function(){
            lmsManageUserPage.confirmUserAddedSuccessfully(gUserName, done);
        });
    });//7 IT Close


    it("Verify Manager Page Headers Menu And Click Plan Enroll Button", function verifyManagerPageHeadersMenuAndClickPlanEnrollButton(done)
    {
        lmsManagerPageHeadersPage.verifyManagerHeaders(function(){
            lmsManagerPageHeadersPage.clickPlanAndEnrollIcon(done);
        });
    });//8 IT Close



    it("Verify Plan Enroll Page and Click Enroll Users By Course", function verifyPlanEnrollPageAndClickEnrollUsersByCourse(done)
    {
        lmsEnrollPage.verifyEnrollPage(function(){
            lmsEnrollPage.clickEnrollUsersByCourse(done);
        });
    });//9 IT Close



    it("Verify Enrollment Wizard and Select Enroll By Users Method and Complete Enrollment", function verifyEnrollmentWizardPageAndSelectEnrollByUsersMethod(done)
    {
        lmsEnrollmentWizardPage.verifyEnrollmentWizardPage(function(){
            lmsEnrollmentWizardPage.selectEnrollByUsersMethod(function(){
                lmsEnrollmentWizardPage.clickNextButton("NEXT", function(){  
                    lmsEnrollmentWizardPage.verifySelectLearnerPage(function(){
                        lmsEnrollmentWizardPage.searchLearner(gUserName, function(){
                            lmsEnrollmentWizardPage.selectLearnerFromSearchedResult(gUserName, function(){
                                */
/*   HOW TO CALL FUNCTION TO ANOTHER FUNCTION OF SAME CLASS   *//*

                                lmsEnrollmentWizardPage.clickNextBtn("NEXT", function(){
                                    lmsEnrollmentWizardPage.searchAndSelectCourse(lmsCourse, function(){
                                        lmsEnrollmentWizardPage.clickNext("NEXT", function(){
                                            lmsEnrollmentWizardPage.selectCourseEnrollmentDates(function(){
                                                lmsEnrollmentWizardPage.clickNextButon("NEXT", function(){
                                                    lmsEnrollmentWizardPage.configureEnrollmentSettings(function(){
                                                        lmsEnrollmentWizardPage.clickNextB("FINISH", function(){
                                                            lmsEnrollmentWizardPage.verifyNumberOfEnrollmentAndClickOkButton(done);
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });//10 IT Close


    it("Verify Enroll Page and Logout LMS Manager", function verifyEnrollPageAndLogoutLmsManager(done)
    {
        lmsEnrollPage.verifyEnrollPage(function(){
            lmsCommonActionPage.lmsUserLogout(done);
        });
    });//11 IT Close



    it("Verify Login Page and Login Learner", function verifyLoginPageAndLoginLearner(done)
    {
        lmsLoginPage.verifyLmsLoginPageTitle(function(){
            lmsCommonActionPage.lmsUserLoginUsingProvidedCredentials(gUserName, done);
        });
    });//12 IT Close


    it("Verify Browser Page and Click Continue", function verifyBrowserPageAndClickContinue(done)
    {
        lmsBrowserCheckPage.verifyBrowserCheckPageAndClickContinueButton(done);
    });//13 IT Close



    it("Verify Guided Tour Page and Click Continue", function verifyGuidedTourPageAndClickContinue(done)
    {
        lmsGuidedTourPage.verifyGuidedTourPageForLearner(function(){
            lmsGuidedTourPage.clickContinueButton(done);
        });
    });//14 IT Close



    it("Verify License Agreement Page and Click Agree Button", function verifyLicenseAgreementPageAndClickAgreeButton(done)
    {
        lmsLicenseAgreementPage.verifyLicenseAgreementPage(done ,function(done){
            lmsCommonButtons.clickAgreeButton("I AGREE", done);
        });                
    });//15 IT Close



    it("Verify My Course Page and Launch Course", function verifyMyCoursePageAndLaunchCourse(done)
    {
        lmsMyCoursePage.verifyMyCoursePage(lmsCourse, function(){
            lmsMyCoursePage.clickCourseNameToLaunchCoursePlayer(function(pwindow){
                parentWindow = pwindow;
                done();
                //lmsMyCoursePage.confirmCoursePlayerLaunched(done);
            });
        });                
    });//16 IT Close



    it("Accept Acknowledgment On Course Player Page", function acceptAcknowledgmentOnCoursePlayerPage(done)
    {
        //setTimeout(lcmsCoursePlayerPage.acceptAcknowledgment(done), 40000);
        lcmsCoursePlayerAcknowledgmentPage.verifyAcknowledgementPageDisplayedAndAcceptAcknowledgement(done);
    });//17 IT Close



    it("Agree Terms Of Use On Course Player Page", function agreeTermsOfUseOnCoursePlayerPage(done)
    {        
        lcmsCoursePlayerTermsOfUsePage.verifyTermOfUsePageDisplayedAndClickAgreeAndContinueButton(done);
    });//18 IT Close



    it("Verify Course Name On Start Screen Page and Click Next", function verifyCourseNameOnStartScreenPageAndClickNext(done)
    {
        lcmsCoursePlayerPage.verifyCourseNameOnStartScreenAndClickNext(lmsCourse, done);
    });//19 IT Close



    it("Start And Complete Scenes On Lcms Course Player Page", function startAndCompleteScenesCourseOnLcmsCoursePlayerPage(done)
    {
        lcmsCoursePlayerScenesPage.startAndCompleteScenesCourseOnLcmsCoursePlayer(done);
    });//20 IT Close




    it("Start And Complete Final Exam On Lcms Course Player Page", function startAndCompleteFinalExamOnLcmsCoursePlayerPage(done)
    {
        lcmsCoursePlayerFinalExamPage.verifyBeginFinalExamPage(function(){
            lcmsCoursePlayerFinalExamPage.attemptFinalExam(function(){
                lcmsCoursePlayerFinalExamPage.clickNextButton(done);
            });
        });
            
    });//21 IT Close



    it("Review Answers On Lcms Course Player Page", function reviewAnswersOnLcmsCoursePlayerPage(done)
    {
        //this.timeout(2000);
        lcmsCoursePlayerReviewAnswerPage.verifyCoursePlayerReviewAnswerPage(function(){
            lcmsCoursePlayerReviewAnswerPage.clickNextButton(done);
        });
    });//22 IT Close




    it("Assessment Score Summary On Lcms Course Player Page", function assessmentScoreSummaryOnLcmsCoursePlayerPage(done)
    {
        //this.timeout(2000); 
        lcmsCoursePlayerAssessmentScoreSummaryPage.verifyCoursePlayerAssessmentScoreSummaryPage(done);
        */
/* lcmsCoursePlayerAssessmentScoreSummaryPage.verifyCoursePlayerAssessmentScoreSummaryPage(function(){
            lcmsCoursePlayerAssessmentScoreSummaryPage.clickNextButton(function(){
                lcmsCoursePlayerAssessmentScoreSummaryPage.checkIfErrorDisplayedThenAgainClickNext(done);
            });
        }); *//*

    });//23 IT Close




    */
/* it("Close Course Player Page and Switch Back to Lms", function closeCoursePlayerPageAndSwitchBackToLms(done)
    {
        //this.timeout(5000);
        lcmsCoursePlayerClosePage.verifyCoursePlayerClosePage(function(){
            lcmsCoursePlayerClosePage.clickCloseButton(done);
        });
    });//24 IT Close *//*





    it("Close Course Player Page and Switch Back to Lms", function closeCoursePlayerPageAndSwitchBackToLms(done)
    {
        //this.timeout(5000);
        lcmsCoursePlayerClosePage.closeChildWindowAndSwitchParentWindow(parentWindow, function(){
                lcmsCoursePlayerClosePage.verifyMyCoursePage(done);
        });
    });//25 IT Close *//*




    it("Verify My Course Page and Print Certificate", function verifyMyCoursePageAndPrintCertificate(done)
    {
        //this.timeout(5000);
        lmsMyCoursePage.clickOnMyCourseHeadersMenu(function(){
            lmsMyCoursePage.verifyCourseCompletionStatusAndClickPrintCertificate(function(){
                lmsCourseCertificatePage.closeCourseCertificateWindowAndSwitchParentWindow(parentWindow, function(){
                    done();
                });
            });
        });
    });//26 IT Close *//*





    it("Logout User From LMS", function lmsUserLogout(done)
    {
        lmsCommonActionPage.lmsUserLogout(done);

    });//27 IT Close *//*



    
});//describe block END
*/
