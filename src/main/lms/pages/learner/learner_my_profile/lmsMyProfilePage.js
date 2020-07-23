/**
 * Created by asadullah.qazi
 * On 7/13/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");
const lmsCommonUtilsPage = require(__basedir + "/src/main/lms/pages/common/commonUtilsPage.js");


class LmsMyProfilePage {

    constructor() {
        this.driver_ = bp.getDriver();
    }


    async verifyFirstNameFieldShouldBeDisabled(){
        let learnerFN = await this.driver_.findElementByCss(locator.learnerMyProfile.learnerFirstName);
        return learnerFN.isEnabled();
    }

    async verifyLastNameFieldShouldBeDisabled(){
        let learnerLN = await this.driver_.findElementByCss(locator.learnerMyProfile.learnerLastName);
        return learnerLN.isEnabled();
    }

    async updateLearnerAddressAndCityAndVerifySuccessfulUpdateMessage(){
        let learnerAddressElement = await this.driver_.findElementByCss(locator.learnerMyProfile.learnerAddress);
        learnerAddressElement.clear();
        await learnerAddressElement.sendKeys(__faker.address.streetAddress("###"));

        let learnerCityElement = await this.driver_.findById(locator.learnerMyProfile.learnerCity);
        learnerCityElement.clear();
        await learnerCityElement.sendKeys(__faker.address.city(2));

        await this.driver_.findButtonAndClick(locator.learnerMyProfile.profileSaveBtnText);

        let verifySuccessMsg = await this.driver_.findElementByCss(locator.learnerMyProfile.learnerUpdateProfileSuccessMsg);
        return verifySuccessMsg.isDisplayed();
    }


    async verifySuccessMessageAfterUpdateLearnerFirstAndLastName(){
        let SuccessMsg = await this.driver_.findElementByCss(locator.learnerMyProfile.learnerUpdateProfileSuccessMsg);
        return SuccessMsg.isDisplayed();
    }


    async enterFirstNameAndLastNameAndClickSave(){
        let learnerFirstName = await this.driver_.findElementByCss(locator.learnerMyProfile.learnerFirstName);
        learnerFirstName.clear();
        await learnerFirstName.sendKeys(__faker.name.firstName());

        let learnerLastName = await this.driver_.findElementByCss(locator.learnerMyProfile.learnerLastName);
        learnerLastName.clear();
        await learnerLastName.sendKeys(__faker.name.lastName());

        await this.driver_.findButtonAndClick(locator.learnerMyProfile.profileSaveBtnText);
    }


    async verifyWarningMessageOnUpdatingFirstNameAndLastName(){
        let warningPop = await this.driver_.findByClassName(locator.learnerMyProfile.firstAndLastNameUpdateWarningPop);
        return  warningPop.getText();
    }

    async clickContinueToCloseConfirmationDialog(){
        await this.driver_.findElementAndClick_Css(locator.learnerMyProfile.closeWarningPop);
    }

    async enterPasswordAndConfirmPasswordValuesAndClickSave(){
        let passwordTextBox = await this.driver_.findElementByCss(locator.learnerMyProfile.profilePasswordTextBox);
        passwordTextBox.clear();
        await passwordTextBox.sendKeys("password2");

        let confirmPasswordTextBox = await this.driver_.findElementByCss(locator.learnerMyProfile.profileConfirmPasswordTextBox);
        confirmPasswordTextBox.clear();
        await confirmPasswordTextBox.sendKeys("password2");

        await this.driver_.findButtonAndClick(locator.learnerMyProfile.profileSaveBtnText);
    }


    async verifyReportingFieldsAreDisplaying(dateReportingField){
        return lmsCommonUtilsPage.findMatchingItemAndClicks(locator.learnerMyProfile.profileReportingFields, dateReportingField, false);
    }

    async updateDateReportingField(reportingFieldDateLabel){
        let dateReportingFieldElement = await lmsCommonUtilsPage.findMatchingItemAndClickChildItemOrReturnElement(locator.learnerMyProfile.profileReportingFields, locator.learnerMyProfile.dateReportingFieldTextBox, reportingFieldDateLabel, false);
        let currentValue = await dateReportingFieldElement.getAttribute("value");

        let dateValues = lmsCommonUtilsPage.enrollmentDateRange();


        if (!currentValue.match(dateValues.startDate)){
            await dateReportingFieldElement.clear();
            await dateReportingFieldElement.sendKeys(dateValues.startDate);
            console.info("New Entered Date is: " + dateValues.startDate);
        }

        else {
            await dateReportingFieldElement.clear();
            await dateReportingFieldElement.sendKeys(dateValues.endDate);
            console.info("New Entered Date from Else block is: " + dateValues.endDate);
        }
        return currentValue;
    }

    async updateSocialSecurityNumberReportingField(reportingFieldSSNLabel){
        let SSNReportingFieldElement = await lmsCommonUtilsPage.findMatchingItemAndClickChildItemOrReturnElement(locator.learnerMyProfile.profileReportingFields, locator.learnerMyProfile.SSNReportingFieldTextBox, reportingFieldSSNLabel, false);
        let currentValue = await SSNReportingFieldElement.getAttribute("value");

        if (currentValue.toString().match("222-22-2222")){
        await SSNReportingFieldElement.clear();
        await SSNReportingFieldElement.sendKeys("333-33-3333");
            console.info("SSN entered from if block: ");
        }
        else {
            await SSNReportingFieldElement.clear();
            await SSNReportingFieldElement.sendKeys("222-22-2222");
            console.info("SSN entered from else block: ");
        }
        return currentValue;
    }

    async clickSaveButton(){
        await this.driver_.findButtonAndClick(locator.learnerMyProfile.profileSaveBtnText);
    }


    async updateMenuToChooseReportingField(){
        let chooseMenuElementList = await this.driver_.findAllWebElements(locator.learnerMyProfile.chooseMenuReportingFieldTextBox);

        if (chooseMenuElementList[0].isSelected()){
            console.info("Menu To Choose: Select Second Option from MultiSelect");
            await chooseMenuElementList[1].click();
        }

        else {
            console.info("Menu To Choose: Select first option from MultiSelect");
            await chooseMenuElementList[0].click();
        }
    }


   async verifyUpdatedDateField(previousDateValue){
        let dateFieldTextBoxElement = await this.driver_.findById(locator.learnerMyProfile.dateReportingField);
        let currentDateFieldValue = await dateFieldTextBoxElement.getAttribute("value");
        if (currentDateFieldValue.match(previousDateValue)){
            console.info("Date Reporting Field NOT Updated: " + currentDateFieldValue);
            return false;
        }
        else {
            return true;
        }
    }


    async verifyUpdatedSSNField(previousSSNValue){
        let ssnFieldTextBoxElement = await this.driver_.findById(locator.learnerMyProfile.SSNReportingField);
        let currentSSNFieldValue = await ssnFieldTextBoxElement.getAttribute("value");
        if (currentSSNFieldValue.match(previousSSNValue)){
            console.info("SSN Reporting Field NOT Updated: " + currentSSNFieldValue);
            return false;
        }
        else {
            return true;
        }
    }

    async verifySavedChangesSuccessfulMessage(){
        let successMsg = await this.driver_.findElementByCss(locator.learnerMyProfile.learnerUpdateProfileSuccessMsg);
        return successMsg.isDisplayed();
    }



}
module.exports = new LmsMyProfilePage();