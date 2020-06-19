/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");

class LmsLoginPage {

    constructor(){ this.driver_ = bp.getDriver(); }

    verifyLmsLoginPageTitle (){
        this.driver_.visit(__lmsUrl);
        return this.driver_.findByTitle(locator.loginPage.title );
    }

    enterCredentialsOnLogin (userName, password){
        this.driver_.findTextBoxAndWrite(locator.loginPage.usernameId, userName);
        this.driver_.findTextBoxAndWrite(locator.loginPage.password, password);
        this.driver_.findButtonAndClick(locator.loginPage.btnLogin);
        return true;
    }
}

module.exports = new LmsLoginPage();
