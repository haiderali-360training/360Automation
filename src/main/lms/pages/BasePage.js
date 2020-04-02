/**
 * Developed By: Haider Ali
 * @type {any}
 */
const fakers = require('faker');
const Driverwrapper = require(process.cwd()+'/src/main/lms/pages/Driverwrapper.js');
const env = require(process.cwd()+'/src/main/lms/pages/utils/environment.js');
const locator = require(process.cwd()+'/src/main/lms/pages/locator.js');


var driver_= null;
var env_= null;

class BasePage {

    static getDriver(){
        if(this.driver_== null){
            console.info('driver initilization....')
            this.driver_ = new Driverwrapper();
            this.env = env;
         }
        return this.driver_;
    }

    //static faker

   async logoutMe()  {
       await this.driver_.findByTitle(locator.guidedTour.title);
       let a = await this.driver_.findByXpath(locator.guidedTour.logOutXpath);
       return a.click();

   }
}


module.exports = BasePage;
module.exports.faker = fakers;
