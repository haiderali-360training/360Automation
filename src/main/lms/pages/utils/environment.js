/*
/!**
 * Developed By: Haider Ali
 * @type {any}
 *!/
const PropertiesReader = require("properties-reader");
const dotenv = require("dotenv").config();
const env = process.env.APP_ENV;

const userDataProperties = "src/resources/testdata/" + env + "/lms-test-data-" + env + ".properties";
const userCredentialDataProperties = "src/resources/testdata/" + env + "/user-credentials-" + env + ".properties";

const appProperties = PropertiesReader(userDataProperties).append(userCredentialDataProperties);

module.exports.getValue =  async function (key){
    return appProperties.get(key);
};

module.exports.getLmsUrl = function (){
    return process.env[process.env.APP_ENV];
};

*/