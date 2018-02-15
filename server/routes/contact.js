var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const { name, email, message } = req.body;

    return new Promise((resolve, reject) => {
        const api_key = '';
        const domain = '';
        const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

        const data = {
            from: 'Website <support>',
            to: '',
            subject: 'You have a new message',
            html: `<div>Hello! You have a message sent from your website from user <u>${name}</u>. Email: ${email} . Message:<br /><i>${message}</i></div>`
        };


        mailgun.messages().send(data, function (error, body) {
            if (error) {
                console.warn(error);
                res.status(500).send({error: error});
                return reject;
            }
            else {
                res.json({success: true });
                resolve();
            }
        });
    });
});

module.exports = router;