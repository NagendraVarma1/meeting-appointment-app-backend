const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./util/database");
const scheduleRoutes = require("./Routes/schedules");
const seedSlot = require("./Controller/seedSlots");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/", scheduleRoutes);

sequelize
  .sync({alter: true})
  .then( async() => {
    await seedSlot()
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
