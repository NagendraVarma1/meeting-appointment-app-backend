const Slots = require('../Models/slots')

const defaultSlots = ['9:00', '10:00', '11:00', '12:00'];

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