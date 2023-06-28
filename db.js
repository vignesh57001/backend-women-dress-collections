const mongoose = require("mongoose");
require("dotenv").config();

var mongoURL =
  "mongodb+srv://vigneshmenon:Vicky123@cluster0.gtbk9wo.mongodb.net/mern-dress";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("mongoose connection successfully connected");
});

db.on("error", () => {
  console.log("mongoose connection failed");
});

module.exports = mongoose;
