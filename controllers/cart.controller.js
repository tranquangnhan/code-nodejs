var db = require("../db");
module.exports.addToCart = function(req, res, next) {
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;
    console.log(productId);
    if (!sessionId) {
        res.redirect('/products');
        return;
    }
    db.get('sessions')
        .find({ id: sessionId })
        .set('cart.' + productId, 1)
        .write();
    res.redirect('/products');
}