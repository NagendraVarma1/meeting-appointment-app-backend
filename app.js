const express = require("express");
const sequelize = require("./util/database");

const app = express();

app.use("/", (req, res, next) => {
  res.send("<h1>This is for testing</h1>");
  console.log(1 + 1);
});

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
