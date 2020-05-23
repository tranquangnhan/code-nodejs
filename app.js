require('dotenv').config();
//require dotenv -- biến nội bộ
var express = require("express");
//require thư viện express
var bodyParser = require('body-parser'); //require thu vien body-parser http://expressjs.com/en/4x/api.html#req.body
//get bodyParser ở express
var cookieParser = require('cookie-parser');
//require cookieParser
var userRoute = require('./routers/user.route');
var authRoute = require('./routers/auth.route');
//khai báo sử dụng router, import vào
var products = require('./routers/products.route');
//require product
var cartRoute = require('./routers/cart.route');



//require session
var authMiddleware = require('./middleware/auth.middleware');
//require middleware
var sessionMiddleware = require('./middleware/session.middleware');
//require sessionMiddleware
var app = express();
//set pug  
app.set('view engine', 'pug'); //http://expressjs.com/en/guide/using-template-engines.html
app.set('views', './views');
//set pug

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    //sử dụng css
app.use(cookieParser(process.env.SECTION_SECRET));
//sd cookie // signedCookies
app.use(sessionMiddleware);
//sử dụng session
app.use(express.static('public'));
//sử dụng css



app.get('/', function(req, res) {
    res.render('index', {
        name: 'Tran Van Hoang'
    });
});

app.use('/auth', authRoute)
app.use('/user', authMiddleware.middleware, userRoute);
app.use('', products);
app.use('/cart', cartRoute);
// sử dụng router
app.listen(8000, function() {
    console.log('sever is running in 8000');
});