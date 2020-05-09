var shortid = require('shortid');
//require shortid in lowdb

var db = require('../db');
//require database lowdb
module.exports.index = function(req, res) {
        res.render('user/index', {
            user: db.get('user').value()
        });
    }
    //controller index
module.exports.search = function(req, res) {
        var q = req.query.q;
        var matchedUser = db.get('user').write().filter(function(us) { //fiter lọc tên
            return us.name.indexOf(q) !== -1; //trả về tên gần đúng
        });
        res.render("user/index", {
            user: matchedUser
        });
    }
    //controller search
module.exports.post = function(req, res) {
        res.render('user/post');
    }
    //controller post
module.exports.createPost = function(req, res) {
        req.body.id = shortid.generate();
        db.get('user').push(req.body).write();
        res.redirect('/user');
    }
    //controller create createPost
module.exports.get = function(req, res) {
        var id = req.params.id;
        var user = db.get('user').find({ id: id }).value();
        res.render('user/viewuser', {
            user: user
        });
    }
    //controller get