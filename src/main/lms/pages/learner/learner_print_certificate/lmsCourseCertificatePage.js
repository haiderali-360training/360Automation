/**
 * Created by asadullah.qazi
 * On 7/6/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");


class LmsCourseCertificatePage{

    constructor() {
        this.driver_ = bp.getDriver();
    }


    async switchToCourseCertificateWindow(){
        await this.driver_.switchToWindow();
    }

    async verifyCourseCompletionCertificate(){
        let currentUrl = await this.driver_.findAndGetCurrentUrl();
        let findCourseName = currentUrl.split("/").pop().split("#")[0].split("?")[0];
        console.info(findCourseName);
        return findCourseName;
    }


    async closeCourseCertificateWindow(){
        await this.driver_.switchMainWindow();
    }






}
module.exports = new LmsCourseCertificatePage();