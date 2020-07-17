module.exports.cacheKey = {
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    enrolledCourseName: "enrolledCourseName",
    enrolledCourseBusinessKey: "enrolledCourseBusinessKey"
};


module.exports.commonElements = {
    commonPageHeadingId: "page-heading"
};


module.exports.addNewUser = {
    firstName: "firstName",
    lastName: "lastName",
    email: "emailAddress",
    userName: "userName",
    passwordField: "password",
    confirmPasswordField: "confirmPassword"
};

module.exports.userPrefix = {
    learner: "ATC-L-",
    customer: "ATC-C-",
    reseller: "ATC-R-",
    domain: "@mailinator.com"
};

module.exports.header = {
    learnerHeaderIcons: "#learner-header #table-icons",
    learnerMyProfile: "learner-my-profile",
    myTranscriptsIcon: "learner-my-transcripts",
    planAndEnroll: "manager-plan-enroll",
    userAndGroups: "manager-users-groups",
    manageAndReports: "manager-reports",
    manageAndTool: "manager-tools",
    manageAndProfile: "manager-profile",
    headerIcons: "#header #table-icons"
};

///////// page Objects constant /////////////////
module.exports.loginPage = {
    title: "Learner-My Courses Login",
    usernameId: "username",
    password: "password",
    btnLogin: "Login"
};

module.exports.browserCheckScreen = {
    browserCheckPageHeading: "b5",
    browserCheckBtnContinue: "btn_normal"
};


module.exports.licenseAgreementPage = {
    licenseAgreementPageHeading: "b5",
    licenseAgreementBtnText: "I AGREE"
};


module.exports.guidedTour = {
    logOutXpath: "//*[@id=\"footer\"]/div[2]/a",
    managerModePageTitle: "LMS - Manager Mode",
    learnerModePageTitle: "LMS - Learner Mode",
    btnContinue: "Continue",
    btnContinueClassName: "btn_normal",
    guidedTourPageHeading: "#content b",
    guidedTourUserType: "#user-type-table img"
};

module.exports.ManageUserList = {
    title: "Manage Users",
    btnAdd_User: "Add User",
    btnSearch: "Search",
    linkFoundFirstLearnerXpath: "//*[@id=\"searchResult\"]/table/tbody/tr[2]/td[2]/a"
};

module.exports.ManageUserAdd = {
    title: "Add New User - Information",
    btnNext: "Next",
    btnLoginAsLearner: "Login as Learner",
    preFixFirstName: "ATC-",
    preFixMiddleName: "X",
    userName: "userName",
    preFixEmail: "ATC-M-",
};

module.exports.ManageUserGroup = {
    title: "Add New User - Groups",
    rootGroupId: "_orgGroup1",
    btnNext: "Next",
    searchResultGrid: "#searchResult .row_1"
};

module.exports.ManageUserConfirmation = {
    title: "Add New User - Confirmation",
    btnFinish: "Finish"
};

module.exports.planAndEnroll = {
    title: "LMS - Manager Mode",
    pageHeading: "Add New User - Confirmation",
    pageHeadingClassName: "page-icon",
    btnEnrollUserByCourse: "Enroll Users by Course"
};

module.exports.manageUserLeftMenuItems = {
    manageEnrollmentMenu: "manageEnrollments"
};

module.exports.manageEnrollmentPage = {
    viewEnrollmentLink: ".row_1 a",
    searchResultGrid: "#searchResult .row_1"
};


module.exports.enrollmentWizard = {
    title: "LMS - Manager Mode",
    pageHeading: "Enroll Learners",
    enrollmentMethod_learner: "Learner",
    enrollmentMethod_OrgGroup: "OrgGroup",
    enrollmentMethod_learnerGroup: "LearnerGroup",
    btnNext: "Next",
    btnSearch: "Search",
    btnFinish: "Finish",
    btnOK: "OK",
    firstName: "searchFirstName",
    lastName: "searchLastName",
    emailAddress: "searchEmailAddress",
    firstFoundLearner: "chk1",
    txtSearchCourseName: "formSearchCourseName",
    txtSearchCourseNameValue: "ATC-Smoke",
    txtSearchBusinessKey: "formSearchCourseId",
    txtSearchBusinessKeyValue: "1711",
    firstFoundCourse: "chk0",
    enrollmentStartDate: "allCourseStartDate",
    enrollmentEndDate: "allCourseEndDate"
};

module.exports.myCoursePage = {
    myCoursePageTitle: "LMS - Learner Mode",
    pageHeading: "My Courses",
    //pageHeadingClassName: "page-icon",
    myCoursePageHeading: "page-heading",
    enrolledCourseClassName: "bodycourseTitle-ul",
    enrollCourseClassName: "#content .bodycourseTitle-ul",
    enrolledCourseXpath: "//*[@id=\"course-list-alt\"]/tbody/tr[2]/td[2]/a",
    courseStatus: "text-green",
    printCertificateClassName: "print-certificate",
    //myCoursePageDropdown: "#show option[value='enrolled']",
    myCoursePageDropdown: "#show",
    myCourseMoreDetailLink: "../div/a[starts-with(@href, '/lms/lrn_courseDetails.do')]",
    myCourseLastAccessedDate: "../div/span"
};


module.exports.moreDetailsCourseStats = {
    courseNameOnCourseStatistics: "courseName",
    summaryAndDetailedStatisticsSectionHeadings: "span.headerRow",
    detailedStatisticsLastAccessedCourseDate: "//table[@id='courseDetailCss'][2]//tr[5]/td[2]",
    moreDetailsCompletedStatus: "//td[contains(text(), 'Completed')]",
    moreDetailsBackToCoursesBtnText: "Back To Courses",
    moreDetailScormCourseName: "scomm003 - Are You Really Listening?"
};


module.exports.completedFilter = {
    completedCourseStatus: "../..//span[@id='c23']"
};


module.exports.availableFilter = {
    availableFilterCourseGroupsHeading: "#browse-content-heading .browse-content-table-heading div",
    availableFilterCoursesHeading: "coursegroup-courses-title",
    availableCourseGroups: "#browse-group-name.browse-name",
    availableCourseGroupsCoursesHeading: "//div[contains(text(),'ATC Courses')]",
    availableCourseGroupsCoursesName: "#coursegroup-courses div[id*='course-title-']",
    availableCourseDescription: "../div/div",
    availableCourseDescriptionHeading: "#overlay-header td[nowrap]",
    availableCourseDescriptionPopupClose: "#overlay td>div#overlay-close",
    availableCourseBreadcrumb: "crumb-0"
};


module.exports.expiredFilter = {
    expiredCourseExpiryDate: "font .course-expire"
};

module.exports.recentlyAccessedCourseFilter = {
    emptyGrid: "//td[contains(text(),'You do not have any recently accessed courses')]",
    recentlyAccessedCoursesList: "#content .bodycourseTitle-ul"
};


module.exports.coursePlayerPage = {
    title: "LCMS Course Player",
    scormTitle: "Course Launch",
    scormCourseContentHeading: "html>body>h1",
    courseNameInLeftMenu: ".left-menu.menu-wrapper #coursetitle",
    chkAcknowledge: "Checkbox1",
    //btnNext: "PlaybuttonEnText",
    coursePlayerNextButton: "#PlaybuttonAcknowledgeName #PlaybuttonEnText",
    btnContinue: "Continue",
    btnAgree_Continue: "Agree and Continue",
    //btnPlayButton:"//*[@id=\"PlaybuttonEnText\"]",
    coursePlayerPlayButton: ".btn.ctrl #PlaybuttonEnText",
    btnBeginPostAssessment:"//*[@id=\"BeginPostAssessmentButton\"]",
    btnQuestion:"//*[@id=\"question\"]/div/div[2]/label/span",
    btnQuestionNext:"//*[@id=\"NextQuestionButtonEnText\"]",
    btnReview:"//*[@id=\"AnswerReviewButtons\"]/div/button"
//await this.driver_.findButtonAndClick_xpath("//*[@id=\"NextQuestionButtonEnText\"]");
};

module.exports.userLogout = {
    learnerLogoutCssElement: ".log .log-out",
    afterLogoutPageTitle: "Learner-My Courses Login"
};


module.exports.errorMessages = {
    //errorMessageElement: "//span[contains(text(),'Please type your Username & Password.')]",
    errorMessageElement: "#errorMessage>span",
    loginScreenBlankCredentialsErrorMessage: "Please type your Username & Password."
};


module.exports.learnerMyTranscriptsReports = {
    //learnerMyTranscriptsLeftMenu: ".band_text>div"
    learnerMyTranscriptsLeftMenu: "#left-navigation [title]",
    learnerExecuteReportButton: "btn_normal",
    learnerPerformanceByCourseReportGrid: "reportDataContainer",
    learnerPerformanceByCourseReportColumns: ".row_1",
    PerformanceByCourseReportName: "Performance by Course",
    PerformanceByCourseTranscriptReportName: "Performance by Course (Transcript)",
    PerformanceByTrainingPlanReportName: "Performance by Training Plan",
    PerformanceSummaryAllCourseGroupsReportName: "Performance Summary (All Course Groups)",
    PerformanceSummaryAllCoursesReportName: "Performance Summary (All Courses)",
    PerformanceSummaryAllTrainingPlansReportName: "Performance Summary (All Training Plans)",
    PerformanceSummaryByCourseGroup: "Performance Summary by Course Group"
};

module.exports.learnerMyProfile = {
    learnerFirstName: "[name='vu360User.firstName']",
    learnerLastName: "[name='vu360User.lastName']",
    learnerAddress: "[name='vu360User.learner.learnerProfile.learnerAddress.streetAddress']",
    learnerCity: "city1",
    learnerUpdateProfileSuccessMsg: "img[src*=\"success.jpg\"]",
    profileSaveBtnText: "Save",
    profileCloseMessageBox: "#message_box_saved #close_message",
    firstAndLastNameUpdateWarningPop: "alert_message_box_text",
    firstAndLastNameUpdateWarningMessage: "The history associated with a learner account is very important from a reporting and certificate standpoint.",
    closeWarningPop: ".buttons .yes.button",
    profilePasswordTextBox: "[name='password']",
    profileConfirmPasswordTextBox: "[name='confirmpassword']",
    profileLeftMenu: "#table-bands #manageUsers",
    profileLeftMenuMyPreferences: "My Preferences"
};

module.exports.myPreferences = {
    myPreferencesHeadingText: "Preferences",
    myPreferencesRegistrationEmailYes: "input[type='radio'][value='true'][name='RegistrationEmial']",
    myPreferencesRegistrationEmailNo: "input[type='radio'][value='false'][name='RegistrationEmial']",
    myPreferencesEnrollmentEmailYes: "input[type='radio'][value='true'][name='EnrollmentEmail']",
    myPreferencesEnrollmentEmailNo: "input[type='radio'][value='false'][name='EnrollmentEmail']",
    myPreferencesCourseCompletionEmailYes: "input[type='radio'][value='true'][name='CertificateEmail']",
    myPreferencesCourseCompletionEmailNo: "input[type='radio'][value='false'][name='CertificateEmail']",
    myPreferencesRadioButtons: "div.btn_radio3",
    myPreferencesClickRadioButton: ".btn_radio3>input",
    myPreferencesSaveButton: "Save"
};


module.exports.printCertificate = {
    printCertificateTitle: "atc_smoke",
    printCertificateLink: "../div/a[starts-with(@href, 'javascript:printCertificate')]"
};


