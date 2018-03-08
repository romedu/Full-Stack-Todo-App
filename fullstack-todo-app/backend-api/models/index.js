const mongoose = require("mongoose"),
      Todo     = require("./todo");

mongoose.set("debug", true);
mongoose.connect(process.env.DBURL);
mongoose.Promise = Promise;

exports.Todo = Todo;

module.exports = exports;