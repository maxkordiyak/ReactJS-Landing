// var express = require('express');
// var router = express.Router();
// var jsonfile = require('jsonfile')
//
// router.post('/', function(req, res) {
//
//     return new Promise((resolve, reject) => {
//         jsonfile.writeFile("tmp/articles.json", req.body, {spaces: 2}, function(error) {
//             if (error) {
//                 console.warn(error);
//                 res.status(500).send({error: error});
//                 return reject;
//             }
//             else {
//                 res.json({success: true });
//                 resolve();
//             }
//         });
//     });
// });
//
// module.exports = router;
//
