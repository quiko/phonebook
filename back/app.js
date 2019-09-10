const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const keys = require("./config/keys");
const contactsRouter = require("./routes/contacts");
const app = express();

// Allow use of env vars in .env file
require("dotenv/config");

//connect to db
mongoose.Promise = global.Promise;
mongoose.connect(
  keys.mongodb.dbUrl,
  { useNewUrlParser: true, useCreateIndex: true },
  error => {
    error === null ? console.log("connected to db") : error;
  }
);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

//routes
app.use("/contacts", contactsRouter);

//disable caching
app.disable("etag");


//start server
const port = process.env.PORT || 5000;
const server= app.listen(port);
console.log(`Server listening at ${port}`);

module.exports = server
