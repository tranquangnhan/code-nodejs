var express = require("express"); //require thư viện express
var router = express.Router();


var controller = require('../controllers/cart.controller');
//require controller

router.get("/add/:productId", controller.addToCart);

module.exports = router;