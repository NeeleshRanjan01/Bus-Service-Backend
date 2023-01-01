
const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json())

const data = require("./Data")
const registration =require("./Registration")
const login=require("./Login")
const result=require("./OccupiedSeat")


app.post("/data", data)
app.post("/reg", registration)
app.post("/login", login)
app.get("/occupied_seats", result)


app.listen(4000)