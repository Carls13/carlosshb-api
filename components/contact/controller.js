const { sendMail } = require("./mail");

const sendEmail = (name, email, subject, message) => {
    return new Promise((resolve, reject) => {
        sendMail(name, email, subject, message).then(() => {
            resolve('Email sent successfully.')
        }).catch((error) => {
            reject(error);
        })
    });
};

module.exports = {
    sendEmail
};