var express = require("express"); //require thư viện express
var router = express.Router();
// gọi hàm Router() trong ex press để chia thư mục
var multer = require('multer');
//require multer để đọc file
var upload = multer({ dest: './public/uploads/' });
//tạo ra một cái object giống express
var validate = require('../validate/user.validate');
//require validate

var controller = require('../controllers/user.controller');
//require controller

//render ra khung tìm kiếm
router.get("/search", controller.search);
//render search
router.get('/', controller.index);
//render tran van hoang
router.get('/post', controller.post);
//render user/post
router.post('/post',
    upload.single('avatar'),
    validate.createPost,
    controller.createPost
);
//render user/post
//ứng dụng view
router.get("/:id", controller.get);
//get dữ liệu show viewer


module.exports = router