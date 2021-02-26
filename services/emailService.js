const mailer = require('nodemailer')

async function sendMail({from, to,subject,text,html}){
    let transporter = mailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        secure:false,
        auth: {
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        }

    });


    let info = await transporter.sendMail({
        from:`FileShare<${from}>`,
        to:to ,
        subject: subject,
        text:text,
        html:html
    })

}



module.exports  = sendMail