/**
 * Developed By: Haider Ali
 * @type {any}
 */

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");


class LmsHeaderIconsPage {

    constructor() {
        this.driver_ = bp.getDriver();
    }

    async clickPlanAndEnroll() {
        let planAndEnrollButton = await this.driver_.findById(locator.header.planAndEnroll);
        planAndEnrollButton.click();
    }

    async clickUserAndGroup() {
        let userAndGroupButton = await this.driver_.findById(locator.header.userAndGroups);
        userAndGroupButton.click();
    }

    async verifyHeaderIcons(headerIconName){
        let headerIcons = await this.driver_.findAllHeaderIcons(locator.header.learnerHeaderIcons);
        const iterator = headerIcons.values();
        for (let val of iterator) {
            let menuName = await val.getText();
            if (menuName.match(headerIconName)){
                console.info(menuName);
                return menuName;
            }
        }
    }

    async clickMyTranscriptsIcon(){
        await this.driver_.findByIdChecked(locator.header.myTranscriptsIcon);
    }

    async clickMyProfile(){
        let myProfileButton = await this.driver_.findById(locator.header.learnerMyProfile);
        myProfileButton.click();
    }



}



module.exports = new LmsHeaderIconsPage();