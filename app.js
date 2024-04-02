const express = require("express");

const authRouter = require("./route/authRout");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "This is from rest",
  });
});

//Routespath

app.use("/api/auth", authRouter);
app.use("*", (req, res, next) => {
  res.status(404).json({
    status: "Fail",
    message: "Error not found",
  });
});

app.listen(port, () => {
  console.log(`the server is running on http://127.0.0.1:${port}`);
});
