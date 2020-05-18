var express = require("express");
var router = express.Router();
var controller = require('../controllers/products.controller');
router.get('/products', controller.products);


module.exports = router