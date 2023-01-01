const mongoose = require("mongoose")
const {NexBusModel}=require("./MongSchema")
const {url}=require("./MongSchema")


const login = (async (req, res) => {
    try {
        await mongoose.connect(url)
        const email = await NexBusModel.find({ email: req.body.email })
        const pass = await NexBusModel.find({ password: req.body.password })

        if (email.length !== 0 && pass.length !== 0) {
            return (res.send({
                message: "Welcome" + " " + email[0].name,
                name: email[0].name,
                email: email[0].email,
                password: email[0].password
            }))
        }
        res.send("Wrong Credentials")
    }
    catch (error) {
        console.log(error);
    }
});

module.exports=login