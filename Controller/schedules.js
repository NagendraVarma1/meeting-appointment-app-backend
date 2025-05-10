const Schedules = require("../Models/schedules");
const Slots = require('../Models/slots')

exports.addNewSchedule = async (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const slot = req.body.slotTime;

    const data = await Schedules.create({
      name: name,
      email: email,
      slot: slot,
    });
    //here we have to update the available slots in slot table
    res.status(202).json({ newUser: data });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllSchedules = (req, res, next) => {
  Schedules.findAll()
    .then((data) => {
      res.status(202).json({ allSchedules: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteSchedule = async (req, res, next) => {
    try{
        let id = req.params.id
        await Schedules.destroy({
            where : {
                id: id
            }
        })
        res.sendStatus(202)
    }
    catch(err){
        console.log(err)
    }
}
