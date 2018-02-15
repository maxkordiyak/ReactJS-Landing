var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const { email } = req.body;

    return new Promise((resolve, reject) => {
        // if (!email) { res.status(500).send({ error: 'Please enter your email' }); return reject; }

        const api_key = '';
        const domain = '';
        const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

        const data = {
            from: 'Website <support@mg.zannadubska.com>',
            to: 'mkordiyak@innvationlab.com',
            subject: 'You have a new subscription',
            text: `Hello! User ${email} wants to subscribe to your news feed.`
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