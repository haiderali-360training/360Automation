/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");

class LmsLoginPage {

    constructor(){ this.driver_ = bp.getDriver(); }

    async openUrl(url){
        await this.driver_.visit(url);
        return true;
    }

    verifyLmsLoginPageTitle (){
        this.driver_.visit(__lmsUrl);
        return this.driver_.findByTitle(locator.loginPage.title );
    }

    async enterCredentialsOnLogin (userName, password){
        await this.driver_.findTextBoxAndWrite(locator.loginPage.usernameId, userName);
        await this.driver_.findTextBoxAndWrite(locator.loginPage.password, password);
        await this.driver_.findButtonAndClick(locator.loginPage.btnLogin);
        return true;
    }


    async verifyLoginErrorMessageForBlankCredentials(){
        console.info("Trying LMS Login with blank \"Username\" and blank \"Password\"");
        let errorTextForBlankElement = await this.driver_.findErrorMessageAndGet(locator.errorMessages.errorMessageElement);
        return errorTextForBlankElement.getText();
    }


    async verifyLmsLoginErrorMessageForSomeUserNameAndBlankPassword(){
        console.info("Trying LMS Login with random \"Username\" and blank \"Password\"");
        let errorTextForBlankPasswordElement = await this.driver_.findErrorMessageAndGet(locator.errorMessages.errorMessageElement);
        return errorTextForBlankPasswordElement.getText();
    }


    async verifyLmsLoginErrorMessageForBlankUserNameAndRandomPassword(){
        console.info("Trying LMS Login with Blank \"Username\" and Random \"Password\"");
        let errorTextForBlankUserNameElement = await this.driver_.findErrorMessageAndGet(locator.errorMessages.errorMessageElement);
        return errorTextForBlankUserNameElement.getText();
    }
}

module.exports = new LmsLoginPage();
