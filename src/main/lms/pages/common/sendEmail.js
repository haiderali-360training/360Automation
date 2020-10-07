/**
 * Created by asadullah.qazi
 * On 7/29/2020}
 **/
const bp = require(__basedir + "/src/main/lms/pages/BasePage.js");
const nodemailer = require("nodemailer");
const fs = require("fs");



class SendEmail {
    constructor() {
        this.driver_ = bp.getDriver();
    }

    async sendingEmail() {
        let userEmail;
        let currentEnvironment  = process.env.APP_ENV;
        //let url = await this.driver_.findAndGetCurrentUrl();

        if (currentEnvironment === "prod"){
            userEmail = __appProperties.get("prod.recipients");
        }
        else {
            userEmail = __appProperties.get("qa.recipients");
        }

        let transporter = await nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: __appProperties.get("smtp.user.name"),
                pass: __appProperties.get("smtp.user.password"),
            },
        });

        //let vu= "<img src=data:image/png;base64,"+imgFile+" alt='test'/>";

        let info = await transporter.sendMail({
            from: "asadullah.qazi@360training.com",
            to: userEmail,
            bcc: "asadullah.qazi@360training.com",
            subject: currentEnvironment+" - LMS Learner Mode ATC Report ",
            html: "Unavailable Course Found in the following domain: ",
            attachments: {
                filename: "tests-report.html",
                path: "./html-report/tests-report.html"
            },



        });
        console.info("Message sent: %s", info.messageId);
        console.info("Email has been sent successfully");
    }
}
module.exports = new SendEmail();