module.exports = function(app) {
    var nodemailer = require("nodemailer");

    var smtpTransport = nodemailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: "****",
            pass: "****"
        }
    });

    app.get('/contactus', function(req, res) {
        res.render("contactus");
    });

    app.post('/contactus', function(req, res, next) {
        var mailOptions = {
            from: req.body.senderEmail,
            to: "lepinay@gmail.com",
            subject: "Demande de contact",
            text: req.body.message,
            html: req.body.message
        }

        smtpTransport.sendMail(mailOptions, function(error, response) {
            if(error) {
                console.log(error);
            } else {
                console.log("Message sent: " + response.message);
            }
        });

        res.end();
    });
};