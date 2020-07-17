/**
 * Created by asadullah.qazi
 * On 7/12/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");

class LmsLicenseAgreementPage {

    constructor() {
        this.driver_ = bp.getDriver();
    }


    async verifyLicenseAgreementPage(){
        let licenseAgreementPageHeading = await this.driver_.findById(locator.licenseAgreementPage.licenseAgreementPageHeading);
        return licenseAgreementPageHeading.getText();
    }

    async clickButtonIAgree(){
        await this.driver_.findButtonAndClick_span(locator.licenseAgreementPage.licenseAgreementBtnText);
    }

}
module.exports = new LmsLicenseAgreementPage();