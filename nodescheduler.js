
/**
 * Haider Ali
 * @Date:
 * @type {{schedule: (function(string, Function, Object): ScheduledTask), validate: validate}}
 */

const log4js = require("log4js");
const crons = require("node-cron");
const nodemailer = require("nodemailer");
const fs = require("fs");

log4js.configure({
    appenders: { scheduler: { type: "file", filename: "scheduler.log" } },
            categories: { default: { appenders: ["scheduler"], level: "ALL" } }
});
const logger = log4js.getLogger("scheduler");


let tran = {
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "asadullah.qazi@360training.com",
        pass: "360Training.com",
    },
};

let opt = {
    from: "asadullah.qazi@360training.com",
    to: "haider.ali@360training.com",
    subject: "Learner Mode - LMS Learner Mode ATC Report "+(new Date()).toDateString(),
    html: "Learner Mode - LMS Learner Mode ATC Report: ",
    attachments: {
        filename: "tests-report.html",
        path: "./html-report/tests-report.html"
    },
};
let mailSent=false;

let task = crons.schedule("* * * * *", function() {

    logger.info("scheduler Started." );
    let reportName = "./html-report/tests-report.html";
    try {
        if (fs.existsSync(reportName)) {

            let transporter = nodemailer.createTransport(tran);
            let info = transporter.sendMail(opt, function () {

                let reportPathName = reportName+"_"+Date.now();

                //rename generated file.
                fs.renameSync(reportName, reportPathName);
                logger.debug("Report rename to :"+reportPathName);
                mailSent=true;

            });
        }else {
            if(mailSent){
                task.stop();
                logger.debug("scheduler stopped." );
            }else {
                logger.debug("scheduler running:  report not found...");
            }
        }

    } catch(err) {
        task.stop();
        logger.error(err);
    }

});
