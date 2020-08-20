/**
 * Created by asadullah.qazi
 * On 7/27/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");
const lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js");


class LmsLearnerForgotPasswordPage {

    constructor() {
        this.driver_ = bp.getDriver();
    }


    async clickForgotPasswordButton(){
        let forgotPasswordButtonELement = await this.driver_.findByClassName(locator.forgotPassword.forgotPasswordButton);
        forgotPasswordButtonELement.click();
    }

    async verifyRadioOptionIDontKnowMyPasswordVisible(){
        let radioOptionVisibleElement = await this.driver_.findById(locator.forgotPassword.radioIDontKnowMyPassword);
        return radioOptionVisibleElement.isDisplayed();
    }

    async selectRadioOptionIDontKnowMyPassword(){
        let iDontKnowMyPasswordElement = await this.driver_.findById(locator.forgotPassword.radioIDontKnowMyPassword);
        iDontKnowMyPasswordElement.click();
    }

    async clickButton(buttonVisibleText){
        await this.driver_.findButtonAndClick_span(buttonVisibleText);
    }

    async verifyRadioOptionEnterYourEmailAddressVisible(){
        let radioOptionVisibleElement = await this.driver_.findById(locator.forgotPassword.radioEnterYourEmailAddress);
        return radioOptionVisibleElement.isDisplayed();
    }

    async selectRadioOptionEnterYourEmailAddress(){
        let enterYourEmailAddressElement = await this.driver_.findById(locator.forgotPassword.radioEnterYourEmailAddress);
        enterYourEmailAddressElement.click();
    }

    async typeEmailAddressInEmailTextbox(learnerEmailForForgotPassword){
        let emailTextboxElement = await this.driver_.findElementByCss(locator.forgotPassword.enterYourEmailAddressTextbox);
        emailTextboxElement.clear();
        emailTextboxElement.sendKeys(learnerEmailForForgotPassword);
        console.info("learner use for forgot password: " + learnerEmailForForgotPassword);
    }

    async verifyEmailWithLoginCredentialsSentMessageScreen(){
        let successMessage = await this.driver_.findById(locator.forgotPassword.successMessageTextElement);

        if (successMessage.isDisplayed()){
            let successMessageText = await successMessage.getText();
            return successMessageText.startsWith(locator.forgotPassword.successMessageFirstLineText);
        }
    }

}
module.exports = new LmsLearnerForgotPasswordPage();