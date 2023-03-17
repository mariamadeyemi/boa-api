const dotenv = require ('dotenv')
dotenv.config()
const express = require("express");
const app = express()
// const otpGenerator = require('otp-generator');
const emailVerify = require("./emailOtp");
const generateOTP = require('./generateOTP');
const port = process.env.PORT || 4000


//static data for user

const data = {
    email: "madeyemi117@gmail.com", //same as frontend
    accountType: "Checking",
    name: "Timothy A Roberts",
    otp: generateOTP(),
    balance: 14964.36
}

app.get("/", (req, res)=>{
    res.send("Server is Up");
})


app.get("/api/verify", async(req, res)=>{
    try {
        
        await emailVerify({
            to: data.email,
            OTP: data.otp
        })
        res.status(200).send(data.otp)
    } catch (error) {
        console.log(error.message);
       res.send(error.message)
    }

})

app.post("/transfer", (req, res)=>{
    const amount = req.body.amount
    const result = data.balance - amount
    res.status(200).send(result)
})



app.listen(port, ()=>{console.log("server is running");})