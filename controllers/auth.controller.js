var db = require('../db');
//require database lowdb
module.exports.login = function(req, res) {
    res.render('auth/login');
}
module.exports.postLogin = function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var user = db.get('user').find({ email: email }).value();
    if (!user) {
        res.render('auth/login', {
            errors: ['user does not exits.']
        })
    }
    if (password !== user.password) {
        res.render('auth/login', {
            errors: ['wrong password!']
        })
    }
    res.redirect('/user');
}