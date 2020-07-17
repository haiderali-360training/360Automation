/**
 * Created by asadullah.qazi
 * On 7/14/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");


class LmsCoursesStatisticsPage {

    constructor() {
        this.driver_ = bp.getDriver();
    }


    async verifyCourseStatisticsPage(){
        let courseNameOnCourseStats = await this.driver_.findByClassName(locator.moreDetailsCourseStats.courseNameOnCourseStatistics);
        return courseNameOnCourseStats.getText();
    }

    async verifySummaryAndDetailedStatisticsSectionHeadings(){
        let summaryStatisticHeading = await this.driver_.findAllWebElements(locator.moreDetailsCourseStats.summaryAndDetailedStatisticsSectionHeadings);
        return summaryStatisticHeading[0].isDisplayed() && summaryStatisticHeading[1].isDisplayed();
    }

    async verifyLastAccessedDateIsDisplayingInCourseStatisticsPage(){
        let lastAccessedDateElement = await this.driver_.findByXpath(locator.moreDetailsCourseStats.detailedStatisticsLastAccessedCourseDate);
        let lastAccessedDateString = await lastAccessedDateElement.getText();
        return lastAccessedDateString.substring(0,13);
    }

    async verifyCourseStatusIsDisplayingInCourseStatisticsPage(){
        let courseStatus = await this.driver_.findByXpath(locator.moreDetailsCourseStats.moreDetailsCompletedStatus);
        let courseStatusString = await courseStatus.getText();
        return courseStatusString.substring(0,13);
    }

    async backToMyCoursesPage(){
        await this.driver_.findButtonAndClick(locator.moreDetailsCourseStats.moreDetailsBackToCoursesBtnText);
    }


}
module.exports = new LmsCoursesStatisticsPage();