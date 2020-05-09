var express = require("express"); //require thư viện express
//get body
var bodyParser = require('body-parser'); //require thu vien body-parser http://expressjs.com/en/4x/api.html#req.body
//get bodyParser ở express
var userRoute = require('./routers/user.route');
var authRoute = require('./routers/auth.route')
    //khai báo sử dụng router, import vào

var authMiddleware = require('./middlewares/auth.middleware');
//require middleware
var app = express();
//set pug  
app.set('view engine', 'pug') //http://expressjs.com/en/guide/using-template-engines.html
app.set('views', './views')
    //set pug
    //sử dụng css
app.use(express.static('public'));
//sử dụng css
var cookieParser = require('cookie-parser');
//require cookie
app.use(cookieParser());
//sd cookie


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
    res.render('index', {
        name: 'Tran Van Hoang'
    });
});

app.use('/auth', authRoute)
app.use('/user', authMiddleware.middleware, userRoute);
// sử dụng router
app.listen(8000, function() {
    console.log('sever is running in 8000');
});