const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");


//Import Route
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connect to db!")
);

//Middlewares
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);
app.listen(3000, () => console.log("Server up and Running."));
