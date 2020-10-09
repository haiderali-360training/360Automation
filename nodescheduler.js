
/**
 * Haider Ali
 * @type {{schedule: (function(string, Function, Object): ScheduledTask), validate: validate}}
 */

const crons = require("node-cron");
const nodemailer = require("nodemailer");
const fs = require("fs");


crons.schedule("* * * * *", function() {

    let path = "./html-report/tests-report.html";

    try {
        if (fs.existsSync(path)) {

            let transporter =  nodemailer.createTransport({
                host: "smtp-mail.outlook.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: "asadullah.qazi@360training.com",
                    pass: "360Training.com",
                },
            });

            //let vu= "<img src=data:image/png;base64,"+imgFile+" alt='test'/>";

            let info =  transporter.sendMail({
                from: "asadullah.qazi@360training.com",
                to: "haider.ali@360training.com",
                bcc: "asadullah.qazi@360training.com",
                subject: "Learner Mode - LMS Learner Mode ATC Report ",
                html: "Unavailable Course Found in the following domain: ",
                attachments: {
                    filename: "tests-report.html",
                    path: "./html-report/tests-report.html"
                },
            });
        }

    } catch(err) {
        console.error(err);
    }

    fs.renameSync(path, path+".").then(function() {
        console.info("done");
    });



 /*   fs.access(path, fs.F_OK, (err) => {
        if(err) {
            console.error(err);
        }else {

            let transporter =  nodemailer.createTransport({
                host: "smtp-mail.outlook.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: "asadullah.qazi@360training.com",
                    pass: "360Training.com",
                },
            });

            //let vu= "<img src=data:image/png;base64,"+imgFile+" alt='test'/>";

            let info =  transporter.sendMail({
                from: "asadullah.qazi@360training.com",
                to: "haider.ali@360training.com",
                bcc: "asadullah.qazi@360training.com",
                subject: "Learner Mode - LMS Learner Mode ATC Report ",
                html: "Unavailable Course Found in the following domain: ",
                attachments: {
                    filename: "tests-report.html",
                    path: "./html-report/tests-report.html"
                },

            });


            fs.rename(path, path+".", () => {
                if ( err ) console.log("ERROR: " + err);
            });


            }

    });*/

});

//app.listen(3000);