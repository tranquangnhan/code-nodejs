//get data base
var low = require('lowdb'); //https://github.com/typicode/lowdb
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);

//require shortid in lowdb
var shortid = require('shortid');

// Set some defaults (required if your JSON file is empty)
db.defaults({ user: [], sessions: [] })
    .write();
//get data base

module.exports = db;