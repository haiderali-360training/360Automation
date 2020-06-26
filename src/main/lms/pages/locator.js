module.exports.cacheKey = {
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    enrolledCourseName: "enrolledCourseName",
    enrolledCourseBusinessKey: "enrolledCourseBusinessKey"
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
    planAndEnroll: "manager-plan-enroll",
    userAndGroups: "manager-users-groups",
    manageAndReports: "manager-reports",
    manageAndTool: "manager-tools",
    manageAndProfile: "manager-profile"
};

///////// page Objects constant /////////////////
module.exports.loginPage = {
    title: "Learner-My Courses Login",
    usernameId: "username",
    password: "password",
    btnLogin: "Login"
};

module.exports.guidedTour = {
    logOutXpath: "//*[@id=\"footer\"]/div[2]/a",
    managerModePageTitle: "LMS - Manager Mode",
    learnerModePageTitle: "LMS - Learner Mode",
    btnContinue: "Continue",
    btnContinueClassName: "btn_normal",
    guidedTourPageHeading: "#content b"
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
    btnNext: "Next"
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
    enrolledCourseXpath: "//*[@id=\"course-list-alt\"]/tbody/tr[2]/td[2]/a",
    courseStatus: "text-green",
    printCertificateClassName: "print-certificate",
    myCoursePageDropdown: "#show option[value='enrolled']"
};

module.exports.coursePlayerPage = {
    title: "LCMS Course Player",
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
    errorMessageElement: "//span[contains(text(),'Please type your Username & Password.')]",
    loginScreenBlankCredentialsErrorMessage: "Please type your Username & Password."
};


