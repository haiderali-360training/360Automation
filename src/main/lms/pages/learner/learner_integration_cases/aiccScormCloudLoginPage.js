/**
 * Created by asadullah.qazi
 * On 7/23/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");

class AiccScormCloudLoginPage {

    constructor() {
        this.driver_ = bp.getDriver();
    }


    async openUrl(url){
        await this.driver_.visit(url);
        return true;
    }


    async enterCredentialsOnLogin (userName, password){
        await this.driver_.findTextBoxAndWrite(locator.scormCloud.scormCloudUserNameField, userName);
        await this.driver_.findTextBoxAndWrite(locator.scormCloud.scormCloudPasswordField, password);
        await this.driver_.findElementAndClick_Css(locator.scormCloud.scormCloudSubmitButton);
    }

}
module.exports = new AiccScormCloudLoginPage();