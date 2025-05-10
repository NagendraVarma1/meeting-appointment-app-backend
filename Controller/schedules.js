const Schedules = require("../Models/schedules");
const Slots = require("../Models/slots");
const {Op} = require('sequelize')

exports.addNewSchedule = async (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const slotTime = req.body.slotTime;

    const data = await Schedules.create({
      name: name,
      email: email,
      slotTime: slotTime,
    });
    const slot = await Slots.findOne({
      where: { slotTime: slotTime },
    });

    const availSlots = slot.availableSlots;

    await Slots.update({
      availableSlots: availSlots - 1,
    },{
        where: {
            slotTime: slotTime,
            availableSlots : {
                [Op.gt]: 0
            }
        }
    });
    res.status(202).json({ newUser: data });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllSchedules = async (req, res, next) => {
    const slotsData = await Slots.findAll()
  Schedules.findAll()
    .then((data) => {
      res.status(202).json({ allSchedules: data, allSlotsData: slotsData });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteSchedule = async (req, res, next) => {
  try {
    let id = req.params.id;

    const slot = await Schedules.findOne({
      where: { id: id },
    });

    const deletedSlotTime = slot.slotTime;

    const deletedSlot = await Slots.findOne({
      where: { slotTime: deletedSlotTime },
    });

    const availSlots = deletedSlot.availableSlots;

    await Slots.update({
      availableSlots: availSlots + 1,
    },{
        where: {
            slotTime: deletedSlotTime
        }
    });
    
    await Schedules.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(202);
  } catch (err) {
    console.log(err);
  }
};
