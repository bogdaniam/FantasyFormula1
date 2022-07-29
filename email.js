const nodemailer = require("nodemailer");
const sendMail = (from, to, subject, html) => {

    const transporter = nodemailer.createTransport({
        service:  "gmail",
        secure:false,
        auth : {
            user : process.env.email_user,
            pass : process.env.email_pass
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const options = {
        from,
        to,
        subject,
        html
    }

    transporter.sendMail(options, (error, info) => {
    if(error) console.log(error)
    else {
        console.log(info)
 
    }
})

}

module.exports = sendMail