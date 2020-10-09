/**
 * Developed By: Haider Ali
 * @type {any}
 *
 */

const NodeCache = require( "node-cache" );
const fakers = require("faker");
const PropertiesReader = require("properties-reader");
require("dotenv").config();
const env = process.env.APP_ENV;

const userDataProperties = "src/resources/testdata/" + env + "/lms-test-data-" + env + ".properties";
const userCredentialDataProperties = "src/resources/testdata/" + env + "/user-credentials-" + env + ".properties";
const appProperties = PropertiesReader(userDataProperties).append(userCredentialDataProperties);

/* declare global objects */
global.__appProperties=appProperties;
global.__lmsUrl=process.env[process.env.APP_ENV];
global.__faker=fakers;
global.__cache=new NodeCache();




