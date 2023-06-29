const mongoose = require("mongoose");
require("dotenv").config();

var mongoURL = process.env.MONGOURL;

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("mongoose connection successfully connected");
});

db.on("error", () => {
  console.log("mongoose connection failed");
});

module.exports = mongoose;
