const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

require("dotenv/config");

//middleware through body-parser
app.use(bodyParser.json());

//importing the routes
const postsRoute = require("./routes/posts");

//adding the middleware for the routes
app.use("/posts", postsRoute);

//homepage
app.get("/", (req, res) => {
  res.send("This is the Homepage");
});

//connecting to the database
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to DB!")
);

//listening to the server
PORT = 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
