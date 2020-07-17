/**
 * Created by asadullah.qazi
 * On 7/13/2020}
 **/

const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const locator = require(__basedir + "/src/main/lms/pages/locator.js");


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



}
module.exports = new LmsMyProfilePage();