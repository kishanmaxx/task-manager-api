const sgMail = require('@sendgrid/mail');
const sendGridApiKey = 'process.env.SENDGRID_API_KEY';
sgMail.setApiKey(sendGridApiKey);
// sgMail.send({
//     to:'recipient@example.com',
//     from:'sender@example.com',
//     subject:'Test Email',
//     text:'This is a test email.'
// });
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'test@max1.com',
        subject: 'Welcome to the Task Manager App!',
        text: `Hello ${name}, welcome to the Task Manager App! We're glad to have you on board.`
    });
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'test@max1.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye ${name}, we're sorry to see you leave the Task Manager App. If you have any feedback, please let us know.`
    });
}


module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}