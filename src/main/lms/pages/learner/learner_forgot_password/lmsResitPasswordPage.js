/**
 * Created by asadullah.qazi
 * On 8/18/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");
const lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js");


class LmsResitPasswordPage {

    constructor() {
        this.driver_ = bp.getDriver();
    }

    async verifyResitPasswordPageHeading(){
        let pHeading = await this.driver_.findById(locator.mailinator.lmsResitPasswordPageHeading);
        return pHeading.getText();
    }

    async enterNewPasswordValuesInLMSResitPasswordScreen(){
        let resitPassword = await this.driver_.findById(locator.mailinator.lmsResitPasswordField);

        await resitPassword.clear();
        await resitPassword.sendKeys(locator.mailinator.resitPassword);

        let resitConfirmPassword = await this.driver_.findById(locator.mailinator.lmsResitConfirmPasswordField);

        await resitConfirmPassword.clear();
        await resitConfirmPassword.sendKeys(locator.mailinator.resitPassword);
    }

    async clickContinueButton(){
        await this.driver_.findButtonAndClick_span(locator.mailinator.lmsResitPageContinueButton);
    }

    async verifyChangePasswordSuccessfulMessage(){
        let resitPasswordSuccessMsg = await this.driver_.findElementByCss(locator.mailinator.lmsResitPasswordSuccessful);
        return resitPasswordSuccessMsg.getText();
    }

    async clickContinueToSignInButton(){
        await this.driver_.findButtonAndClick_span(locator.mailinator.lmsResitPasswordPageContinueSignInBtnText);
    }

}
module.exports = new LmsResitPasswordPage();