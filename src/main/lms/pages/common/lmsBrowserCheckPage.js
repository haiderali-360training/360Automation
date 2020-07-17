/**
 * Created by asadullah.qazi
 * On 7/12/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");

class LmsBrowserCheckPage{

    constructor() {
        this.driver_ = bp.getDriver();
    }


    async verifyBrowserCheckPage(){
        let browserCheckPageHeading = await this.driver_.findById(locator.browserCheckScreen.browserCheckPageHeading);
        return browserCheckPageHeading.getText();
    }

    async clickToContinue(){
        await this.driver_.findButtonAndClick_className(locator.browserCheckScreen.browserCheckBtnContinue);
    }

}
module.exports = new LmsBrowserCheckPage();