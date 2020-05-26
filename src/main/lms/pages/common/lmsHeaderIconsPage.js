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
}



module.exports = LmsHeaderIconsPage;