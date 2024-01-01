require("dotenv").config();

const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("welcome to h0me");
});

app.get("/twitter", (req, res) => {
  res.send("welcome to twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Welcome to Login Page</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`example app listning on port ${port}`);
});
