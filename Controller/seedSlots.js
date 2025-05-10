const Slots = require('../Models/slots')

const defaultSlots = ['9:00 A.M', '10:00 A.M', '11:00 A.M', '12:00 P.M'];

const seedSlot = async () => {
    for(const time of defaultSlots){
        await Slots.findOrCreate({
            where: {
                slotTime: time
            },
            defaults: {availableSlots: 4}
        })
    }
}
module.exports = seedSlot;