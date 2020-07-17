const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");


class LmsCommonActionPage {

    constructor() {
        this.driver_ = bp.getDriver();
    }

    async verifyPageHeading(){
        let pageHeadingElement = await this.driver_.findById(locator.commonElements.commonPageHeadingId);
        return pageHeadingElement.getText();
    }


    async findMatchingItemAndClick(locator, stringToMatch, doClick){

        let elementList = await this.driver_.findElementsList(locator);
        console.info(elementList.length);

        for (let i = 0; i < elementList.length; i++) {
            let txt = await elementList[i].getText();
            if (txt.match(stringToMatch)) {
                if (doClick) {
                    console.info("clicking on course name: " + txt);
                    //TODO Genrnalize
                    await this.driver_.myexec("document.querySelector(\"#scrollable\").scrollTo(0,document.querySelector(\"#scrollable\").scrollHeight)");
                    await elementList[i].click();
                }
                else {
                    return true;
                }
                break;
            }
            else {
                if(i === elementList.length - 1) //this condition ensures that elements have been checked
                    return false;
            }
        }
    }




    async findMatchingItemAndClickChildItemOrReturnElement(parentLocator, childLocator, stringToMatch, doClick) {
        let elementList = await this.driver_.findElementsList(parentLocator);
        console.info(elementList.length);

        for (let i = 0; i < elementList.length; i++) {
            let txt = await elementList[i].getText();
            if (txt.match(stringToMatch)) {
                let childWebElement = await this.driver_.findElementWithInElementByXpath(childLocator, elementList[i]);
                if (doClick) {
                    console.info("clicking on link: " + txt);
                    await this.driver_.myexec("document.querySelector(\"#scrollable\").scrollTo(0,document.querySelector(\"#scrollable\").scrollHeight)");
                    await childWebElement.click();
                }
                else {
                    return childWebElement;
                }
                break;
            }
            else {
                if(i === elementList.length - 1) //this condition ensures that elements have been checked
                    return false;
            }
        }
    }




    async findMatchingItemAndClicks(locator, stringToMatch, doClick){

        let elementList = await this.driver_.findElementsList(locator);
        console.info("Total element length " + elementList.length);
        console.info("String to match " + stringToMatch);

        for (let i = 0; i < elementList.length; i++) {
            let txt = await elementList[i].getText();
            if (txt.match(stringToMatch)) {
                if (doClick) {
                    console.info("clicking on course name: " + txt);
                    await elementList[i].click();
                }
                else {
                    return true;
                }
                break;
            }
            else {
                if(i === elementList.length - 1) //this condition ensures that elements have been checked
                    return false;
            }
        }
    }


    //This method return length of login user header icon and help to recongnise the user
    async verifyLoginUserHeaderIcons(iconsLocator){
        let headerIcons =  await this.driver_.findElementsList(iconsLocator);
        return headerIcons.length;
    }


    async enrollmentDateRange(){
        let currentDate = new Date();
        let startDate = await currentDate.toLocaleDateString("en-US");

        let curentDate = new Date();
        let currentDatePlus100Days = 10;
        curentDate.setTime(currentDate.getTime() + (currentDatePlus100Days * 24 *60 * 60 * 1000));
        let endDate = await curentDate.toLocaleDateString("en-US");

        return {
            startDate, endDate
        };
    }



    async lmsUserLogout() {
        await this.driver_.findElementAndClick_Css(locator.userLogout.learnerLogoutCssElement);
    }

    async verifyUserLogoutSuccessfully(){
        return this.driver_.findByTitle(locator.userLogout.afterLogoutPageTitle);
    }
}

module.exports = new LmsCommonActionPage();
