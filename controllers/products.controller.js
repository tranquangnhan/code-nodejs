var db = require('../db');
module.exports.products = function(req, res) {
    var page = parseInt(req.query.page) || 1; //lấy query nếu k có thì bằng 1
    var perPage = 8; //mỗi trang 8 sản phẩm
    var start = (page - 1) * perPage; //phần tử bắt đầu
    var end = page * perPage; //phần tử kết thúc
    var drop = (page - 1) * perPage;
    res.render('products/index', {
        // products: db.get('products').value().slice(start, end) //lấy phần tử
        products: db.get('products').drop(drop).take(perPage).value()
    });
}