/**
 * Created by asadullah.qazi
 * On 7/28/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");
const lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js");


class MailinatorHomePage {

    constructor() {
        this.driver_ = bp.getDriver();
    }

    async verifyMailinatorMainPage(){
        let mailinatorInboxField = await this.driver_.findById(locator.mailinator.mailinatorInboxTextField);
        return mailinatorInboxField.isDisplayed();
    }

    async enterEmailIdAndClickGoButton(learnerEmailId){
        let inboxField = await this.driver_.findById(locator.mailinator.mailinatorInboxTextField);
        inboxField.clear();
        inboxField.sendKeys(learnerEmailId);

        let goButton = await this.driver_.findById(locator.mailinator.mailinatorGoButton);
        goButton.click();
    }
}
module.exports = new MailinatorHomePage();
