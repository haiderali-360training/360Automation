/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");

class LmsLoginPage {

    constructor(){ this.driver_ = bp.getDriver(); }

    verifyUrl(url){
        this.driver_.visit(url);
        return true;
    }

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


    userLoginUsingProvidedCredentials(uName, password){
        this.driver_.findTextBoxAndWrite(locator.loginPage.usernameId, uName);
        this.driver_.findTextBoxAndWrite(locator.loginPage.password, password);
        this.driver_.findButtonAndClick(locator.loginPage.btnLogin);
    }


    verifyLoginErrorMessageForBlankCredentials(){
        console.info("Trying LMS Login with blank \"Username\" and blank \"Password\"");

        return this.driver_.findErrorMessageAndGet(locator.errorMessages.errorMessageElement);


        /*let ele = this.driver_.findByXpath(locator.errorMessages.errorMessageElement);
        let x = ele.getText().trim();
        console.info(x);*/

    }
}

module.exports = new LmsLoginPage();
