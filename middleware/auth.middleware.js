var db = require('../db'); //require lowdb
module.exports.middleware = function(req, res, next) {
    console.log(req.signedCookies.userid);
    if (!req.signedCookies.userid) { // kiểm tra nếu không có cookie 
        res.redirect('/auth/login'); // chuyển trang đến auth/login
        return;
    }
    var user = db.get('user').find({
        id: req.signedCookies.userid
    }).value();

    // tìm user so sánh id
    if (!user) { //kiểm tra xem có user k                               // ở database và nhâp vào
        res.redirect('/auth/login'); //nếu k có chuyển trang
        return;
    }
    next(); //nếu có thực hiện tiếp các câu lệnh khác
}