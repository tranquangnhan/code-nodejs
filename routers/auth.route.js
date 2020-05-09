var express = require("express"); //require thư viện express
var router = express.Router();
// gọi hàm Router() trong ex press để chia thư mục

var controller = require('../controllers/auth.controller');
//require controller

router.get("/login", controller.login);

router.post("/login", controller.postLogin);

module.exports = router;