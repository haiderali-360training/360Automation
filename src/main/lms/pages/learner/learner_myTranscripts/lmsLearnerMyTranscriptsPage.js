/**
 * Created by asadullah.qazi
 * On 6/29/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");

class LmsLearnerMyTranscriptsPage {

    constructor() {
        this.driver_ = bp.getDriver();
    }


    async clickOnReportNameInLeftNavigationMenu(reportName) {
        let myTranscriptsMenuList = await this.driver_.findAllWebElements(locator.learnerMyTranscriptsReports.learnerMyTranscriptsLeftMenu);

        console.info(myTranscriptsMenuList.length);

        for (let i = 0; i <= myTranscriptsMenuList.length; i++) {
            let txt = await myTranscriptsMenuList[i].getAttribute("title");
            //console.info(txt);
            if (txt.includes(reportName)) {
                console.info("Clicking the report: " + txt);
                await myTranscriptsMenuList[i].click();
                break;
            }
        }
    }


    async verifyDisplayingReportTitlePage(){
        let reportTitle = await this.driver_.findById(locator.commonElements.commonPageHeadingId);
        return reportTitle.getText();
    }



    async clickExecuteReportButton(){
        let runReportButton = await this.driver_.findByClassName(locator.learnerMyTranscriptsReports.learnerExecuteReportButton);
        runReportButton.click();
    }


    async verifyPerformanceByCourseReportGridDisplayed(){
        let performanceByCourseReportGrid = await this.driver_.findById(locator.learnerMyTranscriptsReports.learnerPerformanceByCourseReportGrid);
        return performanceByCourseReportGrid.isDisplayed();
    }


    async verifyReport(){
        let performanceByCourseReportColumns = await this.driver_.findAllWebElements(locator.learnerMyTranscriptsReports.learnerPerformanceByCourseReportColumns);
        return (performanceByCourseReportColumns.length === 10);
    }

}
module.exports = new LmsLearnerMyTranscriptsPage();