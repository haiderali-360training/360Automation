/**
 * Developed By: Haider Ali
 * @type {any}
 */

const fakers = require("faker");
const NodeCache = require( "node-cache" );
const driverWrapper = require(__basedir+"/src/main/lms/pages/Driverwrapper.js");
const env = require(__basedir+"/src/main/lms/pages/utils/environment.js");
const locator = require(__basedir+"/src/main/lms/pages/locator.js");
const cache = new NodeCache();


class BasePage {

    static getDriver(){
        if(this.driver_== null){
            console.info("driver initialization....");
            this.driver_ = new driverWrapper();
            this.env = env;
         }
        return this.driver_;
    }

    static async logoutMe()  {
       await this.driver_.findByTitle(locator.guidedTour.title);
       let a = await this.driver_.findByXpath(locator.guidedTour.logOutXpath);
       return a.click();
   }

   //Header menu bar
   static  async headerIconsClick(id)  {
       let a = await this.driver_.findById(id);
       return a.click();
   }

   static async formatDate(date)  {
       let d = new Date(date),
           month = "" + (d.getUTCMonth() + 1),
           day = "" + (d.getUTCDate()),
           year = d.getUTCFullYear();
       if (month.length < 2) month = "0" + month;
       if (day.length < 2) day = "0" + day;
       //return [year, month, day].join("-");
       return [month, day, year].join("/");
   }

}


module.exports = BasePage;
module.exports.faker = fakers;
module.exports.cache = cache;
