const nodemailer = require('nodemailer');
let testAccountTransporter;

function createTestAccount() {
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });
        console.log(transporter);
        //console.log(transporter.options.auth);
        testAccountTransporter = transporter;
        console.log(testAccountTransporter);
    });
}

//createTestAccount();

function testEmail() {
    //console.log(testAccountTransporter);
    //if(!testAccountTransporter) createTestAccount();
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'ehuj6cocbsu4w4ei@ethereal.email',
            pass: 'bEenPgfTEYtFvUKa9y'
        }
    });
    let message = {
        from: 'kitsueki17@gmail.com',
        to: transporter.options.auth.user,
        subject: 'Test',
        text: 'This is an email',
        html: '<span>This is an email</span>'
    };
    transporter.sendMail(message, function(err) {
       if(err) {
           console.log('Error!');
       } else {
           console.log('Success!');
       }
    });
}

testEmail();