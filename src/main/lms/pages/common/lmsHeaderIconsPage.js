/**
 * Developed By: Haider Ali
 * @type {any}
 */

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
        await bp.headerIconsClick(locator.header.planAndEnroll);
        return true;
    }

    async clickUserAndGroup() {
        await bp.headerIconsClick(locator.header.userAndGroups);
        return true;
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
}



module.exports = new LmsHeaderIconsPage();