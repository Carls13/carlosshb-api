const nodemailer = require("nodemailer");
const config = require("../../config");

async function sendMail(name, email, subject, message) {
    const transporter = nodemailer.createTransport({
        pool: true,
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: config.email,
            pass: config.password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: 'Carlangas<charlesshb98@gmail.com>',
        to: 'devcarlosshb98@gmail.com',
        subject: `${name} te ha dejado un nuevo mensaje`,
        html: `<p>Hola, estimado Carlos. Te han dejado un nuevo mensaje a través de <b>carlosshb.com</b>:</p>
        
        <span><b>Nombre:</b> ${name}</span><br/>
        <span><b>Correo:</b> ${email}</span><br/>
        <span><b>Asunto:</b> ${subject}</span><br/>
        <span><b>Mensaje:</b> ${message}</span><br/>

        <p>Por favor, ponte en contacto con ${name} lo más pronto posible. Ten un gran día. </p>
        `
    };

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
            return info;
        }
    });
}

module.exports = {
    sendMail
};