const express = require("express");
const mongoose = require("mongoose");

const app = express();

require("dotenv/config");

//routes
app.get("/", (req, res) => {
  res.send("Homepage");
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
