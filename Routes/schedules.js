const express = require("express");
const scheduleController = require("../Controller/schedules");

const router = express.Router();

router.post("/add-schedule", scheduleController.addNewSchedule);
router.get("/get-all-schedules", scheduleController.getAllSchedules);
router.delete("/delete-schedule/:id", scheduleController.deleteSchedule);

module.exports = router;
