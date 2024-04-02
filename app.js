const express = require("express");

const authRouter = require("./route/authRout");
const app = express();

const port = 8080;
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "This is from rest",
  });
});

//Routespath

app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`the server is running on http://127.0.0.1:${port}`);
});
