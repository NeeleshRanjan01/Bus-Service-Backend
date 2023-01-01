const mongoose = require("mongoose")
const {SeatModel}=require("./MongSchema")
const {url}=require("./MongSchema")


let data = (async (req, res) => {
    try {
        await mongoose.connect(url)
        await SeatModel.updateOne(
            { "_id": "63ae9288db1be9222fc607f9" },
            { $set: { occupiedSeat : req.body.occupiedSeat} })
        res.send("Seat Booked")
    }
    catch (error) {
        console.log(error);
    }
})



module.exports = data;