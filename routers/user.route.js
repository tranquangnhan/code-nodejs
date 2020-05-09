var express = require("express"); //require thư viện express
var router = express.Router();
// gọi hàm Router() trong ex press để chia thư mục
var validate = require('../validate/user.validate');
//require validate

var controller = require('../controllers/user.controller');
//require controller

var authMiddleware = require('../middlewares/auth.middleware');
//require middleware

//render ra khung tìm kiếm
router.get("/search", authMiddleware.middleware, controller.search);
//render search
router.get('/', authMiddleware.middleware, controller.index);
//render tran van hoang
router.get('/post', authMiddleware.middleware, controller.post);
//render user/post
router.post('/post', authMiddleware.middleware, validate.createPost, controller.createPost);
//render user/post
//ứng dụng view
router.get("/:id", authMiddleware.middleware, controller.get);
//get dữ liệu show viewer


module.exports = router