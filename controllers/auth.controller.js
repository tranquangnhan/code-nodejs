var md5 = require('md5');
var db = require('../db');
//require database lowdb
module.exports.login = function(req, res) {
    res.render('auth/login'); // đầu tiên render ra trang login
}
module.exports.postLogin = function(req, res) {
    var email = req.body.email; //lấy email nhập vào
    var password = req.body.password; // lấy password nhập vào
    var user = db.get('user').find({ email: email }).value(); // tìm kiếm user
    if (!user) { //nếu k có 
        res.render('auth/login', { //render
            errors: ['user does not exits.'], //kiểm tra nếu không có thì trả về lỗi 
            values: req.body //giữ lại giá trị nhập vào
        })
    }
    var hashpassword = md5(password);
    if (hashpassword !== user.password) { //so sánh password nếu k bằng thì loại 
        res.render('auth/login', {
            errors: ['wrong password!'], //kiểm tra nếu không có thì trả về lỗi 
            values: req.body //giữ lại giá trị nhập vào
        })
    }
    res.cookie('userid', user.id, {
        signed: true
    }); //gán cookie nếu nhập đúng email, mk
    res.redirect('/user'); //nếu đúng hết thì chuyển vào user
}