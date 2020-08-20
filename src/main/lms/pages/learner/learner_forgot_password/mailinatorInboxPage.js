/**
 * Created by asadullah.qazi
 * On 8/18/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");
const lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js");


class MailinatorInboxPage {

    constructor() {
        this.driver_ = bp.getDriver();
    }

    async verifyMailinatorInboxPage(){
        let inboxEmailField = await this.driver_.findById(locator.mailinator.mailinatorEmailField);
        return inboxEmailField.isDisplayed();
    }

    async verifyEmailMessagePane(){
        let emailMessagePane = await this.driver_.findById(locator.mailinator.mailinatorInboxPane);
        return emailMessagePane.isDisplayed();
    }

    async verifyForgotPasswordEmailReceived(emailSubject){
        return lmsCommonUtilsPage.findMatchingItemAndClicks(locator.mailinator.mailinatorEmailMessages, emailSubject, false);
    }

    async clickForgotPasswordEmailToOpen(emailSubject){
       await lmsCommonUtilsPage.findMatchingItemAndClicks(locator.mailinator.mailinatorEmailMessages, emailSubject, true);
       await lmsCommonUtilsPage.customWaitFunctionInMilliSeconds(500);
    }

    async verifyForgotPasswordEmailContent(emailSubject){
        return lmsCommonUtilsPage.findMatchingItemAndClicks(locator.mailinator.mailinatorEmailMessageSubject, emailSubject, false);
    }

    async clickOnResitPasswordLink(){
        await this.driver_.switchToFrame(locator.mailinator.mailinatorInboxFrame);
        let resitLinkElement = await this.driver_.findElementByCss(locator.mailinator.mailinatorResitLink);
        await resitLinkElement.click();
    }

    async switchToLmsResitPasswordPage(){
        await this.driver_.switchToWindow();
    }

}
module.exports = new MailinatorInboxPage();