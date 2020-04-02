
/**
 * Developed By: Haider Ali
 * @type {any}
 */

var PropertiesReader = require('properties-reader');
var dotenv = require('dotenv').config();
var env = process.env.APP_ENV;
var targetUrl = process.env[process.env.APP_ENV];

var property = function () {
    let properties = PropertiesReader('src/resources/testdata/'+env+'/lms-test-data-'+env+'.properties');
    properties.append('src/resources/testdata/'+env+'/user-credentials-'+env+'.properties');
    return properties
};

var property = property ();
module.exports.getValue =  async function (key){
    return property.get(key);
};

module.exports.getLmsUrl = function (){
    return targetUrl;
};

