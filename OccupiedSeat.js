const mongoose = require("mongoose")
const {SeatModel}=require("./MongSchema")
const {url}=require("./MongSchema")


let occupiedSeat=(async(req,res)=>{
    try {
        await mongoose.connect(url) 
        const result = await SeatModel.find({ "_id": "63ae9288db1be9222fc607f9" })
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
})

module.exports=occupiedSeat