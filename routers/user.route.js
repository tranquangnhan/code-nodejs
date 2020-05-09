var express = require("express"); //require thư viện express
var router = express.Router();
// gọi hàm Router() trong ex press để chia thư mục
var validate = require('../validate/user.validate');
//require validate

var controller = require('../controllers/user.controller');
//require controller

// router.get('/search', function(req, res) {
//     res.render('user/index');
// });

//render ra khung tìm kiếm
router.get("/search", controller.search);
//render search
router.get('/', controller.index);
//render tran van hoang
router.get('/cookie', function(req, res, next) {
    res.cookie('user-id', 1234);
    res.send('hello');
});
//test cookie
router.get('/post', controller.post);
//render user/post
router.post('/post', validate.createPost, controller.createPost);
//render user/post
//ứng dụng view
router.get("/:id", controller.get);
//get dữ liệu show viewer


module.exports = router