require('dotenv').config()
const nodemailer = require("nodemailer");

const mailSenderFunction = async () => {
    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORT,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });

    let info = await transporter.sendMail({
        from: '"Fred Foo " <testadmin@mail.com>',
        to: "tecetib777@altcen.com",
        subject: "Hello ✔",
        text: "Hello world?",
        html: "<b>Hello world? nodeMailer</b>",
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

mailSenderFunction()
    .then((res) => {
        console.log("res", res);
    })
    .catch((err) => {
        console.log("err", err);
    });
