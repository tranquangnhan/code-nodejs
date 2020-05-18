var shortid = require('shortid');
var db = require('../db');
module.exports = function(req, res, next) {
    var sessionId = shortid.generate(); //tạo ra shortid
    if (!req.signedCookies.sessionId) { //kiểm tra xem có cookie k 
        res.cookie('session', sessionId, { //xét cookie bằng shortid
            singed: true
        });
    }
    db.get('session').push({
        id: sessionId
    })
    next();
}