/**
 * Developed By: Haider Ali
 * @type {any}
 */

const driverWrapper = require(__basedir+"/src/main/lms/pages/Driverwrapper.js");

class BasePage {

    static getDriver(){
        if(this.driver_== null){
            console.info("driver initialization....");
            this.driver_ = new driverWrapper();
         }
        return this.driver_;
    }

}
module.exports = BasePage;
