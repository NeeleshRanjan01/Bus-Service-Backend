const mongoose = require("mongoose")
const url = "mongodb+srv://user:user@clusternexradio.i5rekcu.mongodb.net/?retryWrites=true&w=majority";
const Schema = mongoose.Schema

const NexBusSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

const SeatSchema = new Schema({
    occupiedSeat: {
        type: Array
    }
})

const SeatModel = mongoose.model("Occupied_Seats", SeatSchema)
const NexBusModel = mongoose.model("Registration", NexBusSchema)

module.exports.SeatModel=SeatModel;
module.exports.NexBusModel=NexBusModel;
module.exports.url=url;


