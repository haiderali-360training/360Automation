const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");


class LmsCommonActionPage {

    constructor() {
        this.driver_ = bp.getDriver();
    }

    /*
    * Common Page Titles
    * */
    async verifyTitle(pageTitle){
        return this.driver_.findByTitle(pageTitle);
    }


    /*
    * Common Page Headings
    * */
    async verifyPageHeading(){
        let pageHeadingElement = await this.driver_.findById(locator.commonElements.commonPageHeadingId);
        return pageHeadingElement.getText();
    }



    /*
    * Common Looping on My Course Page and Some Other Pages
    * */
    async findMatchingItemAndClick(locator, stringToMatch, doClick){

        let elementList = await this.driver_.findElementsList(locator);
        console.info("Total number of Elements found: " + elementList.length);

        for (let i = 0; i < elementList.length; i++) {
            let txt = await elementList[i].getText();
            console.info("Found text this: " + txt + "compare text is: " + stringToMatch);
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




    /*
    * Special Common Looping on Child Elements
    * */
    async findMatchingItemAndClickChildItemOrReturnElement(parentLocator, childLocator, stringToMatch, doClick) {
        let elementList = await this.driver_.findElementsList(parentLocator);
        console.info(elementList.length);

        for (let i = 0; i < elementList.length; i++) {
            let txt = await elementList[i].getText();
            console.info("Found text this: " + txt + " compare text is: " + stringToMatch);
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



    /*
    * Common loop to cover most of the looping needs
    * */
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





    async compareMatchingItemAndClickChildItemOrReturnElement(parentLocator, childLocator, stringToMatch, doClick) {
        let elementList = await this.driver_.findElementsList(parentLocator);
        console.info(elementList.length);

        for (let i = 0; i < elementList.length; i++) {
            let txt = await elementList[i].getText();
            console.info("Found text this: " + txt + " compare text is: " + stringToMatch);
            if (txt.includes(stringToMatch)) {
                /*let childWebElement = await this.driver_.findElementWithInElementByXpath(childLocator, elementList[i]);
                if (doClick) {
                    console.info("clicking on link: " + txt);
                    await this.driver_.myexec("document.querySelector(\"#scrollable\").scrollTo(0,document.querySelector(\"#scrollable\").scrollHeight)");
                    await childWebElement.click();
                }
                else {
                    return childWebElement;
                }*/
                return true;
                //break;
            }
            else {
                if(i === elementList.length - 1) //this condition ensures that elements have been checked
                    return false;
            }
        }
    }





    async customWaitFunctionInMilliSeconds(waitMilliSeconds){

        console.time("Before SetTime Start");

        await new Promise(resolve => {

            setTimeout(() => {

                console.info("resolve.....");

                resolve();

            }, waitMilliSeconds);
        });
        console.timeEnd("Before SetTime Start");
    }




    /*
    * Common Date Function
    * */
    enrollmentDateRange(){
        let currentDate = new Date();
        let startDate = this.formatDate(currentDate).toString();

        let currentDatePlus100Days = 10;
        currentDate.setTime(currentDate.getTime() + (currentDatePlus100Days * 24 *60 * 60 * 1000));
        let endDate = this.formatDate(currentDate).toString();

        return {
            startDate, endDate
        };
    }


    formatDate(date)  {
        let d = new Date(date),
            month = "" + (d.getUTCMonth() + 1),
            day = "" + (d.getUTCDate()),
            year = d.getUTCFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        //return [year, month, day].join("-");
        return [month, day, year].join("/");
    }


    async closeDriver(){
        await this.driver_.closeWindow();
    }


    async quitWindow(){
        await this.driver_.quitWindowDriver();
    }



    /*
    * Common Logout
    * */
    async lmsUserLogout() {
        await this.driver_.findElementAndClick_Css(locator.userLogout.learnerLogoutCssElement);
    }

    async verifyUserLogoutSuccessfully(){
        return this.driver_.findByTitle(locator.userLogout.afterLogoutPageTitle);
    }
}

module.exports = new LmsCommonActionPage();
