const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");


class LmsCommonActionPage {

    constructor() {
        this.driver_ = bp.getDriver();
    }

    async lmsUserLogout() {
        await this.driver_.findElementAndClick_Css(locator.userLogout.learnerLogoutCssElement);
    }

    async verifyUserLogoutSuccessfully(){
        return this.driver_.findByTitle(locator.userLogout.afterLogoutPageTitle);
    }
}

module.exports = new LmsCommonActionPage();
