const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const PaymentModel = require("./models/Payment")
const nodemailer = require("nodemailer");

const app = express()
app.use(express.json())
app.use(cors())

let distance, price, carType, startLoc, endLoc;

mongoose.connect("mongodb://127.0.0.1:27017/flashycabs")

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "vishwapoco@gmail.com",
        pass: "dswr njff rxvv vczc"
    }
});

app.post('/payment', (req, res) => {

    PaymentModel.create(req.body)
        .then(payments => {
            res.json(payments)

            if (req.body.cardName) {
                const mailOptions = {
                    from: "vishwapoco@gmail.com",
                    to: req.body.email,
                    subject: "Your FlashyCabs Adventure Awaits! 🌟 Confirmation & Details Inside!",
                    html: `<div style="background-color: #202020; padding: 2rem; color: white; border-radius: 10px"><p style="font-size: 24px;color: #fe5da0"><b>Dear ${req.body.cardName}</b>,</p>
                    <p style="font-size: 16px;">Congratulations on your booking with FlashyCab! 🎉<br>Get ready to embark on an unforgettable journey! You've secured a stylish ${carType} for just ${price} rupees. 🚗✨<br>Your adventure awaits with a total travel distance of ${distance} units. 🌟<br>Wishing you a thrilling and safe journey ahead!</p>
                    <p style="font-size: 16px;">Warm regards,<br>Vishwa</p></div>`
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Email sent: " + info.response);
                    }
                });

                const mailOptionsforManager = {
                    from: "vishwapoco@gmail.com",
                    to: "vishwapoco@gmail.com",
                    subject: "Reservation Confirmation and Payment Receipt",
                    html: `<div style="background-color: #202020; padding: 2rem; color: white; border-radius: 10px"><p style="font-size: 24px;color:#fe5da0"><b>Dear FlashyCabs Members,</b></p><p style="font-size: 16px;">I trust this message finds you well. I am writing to officially confirm the reservation made by ${req.body.cardName} for an upcoming journey with FlashyCabs. Please find the details of the reservation below:<br><br></p><p style="font-size: 16px;"><b>Starting Point: ${startLoc}<br>Destination Point: ${endLoc}<br>Vehicle Type: ${carType}<br>Total Travel Distance: ${distance} units<br>Total Cost: ${price} ruppees.</b></p></div>`
                };

                transporter.sendMail(mailOptionsforManager, (error, info) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Email sent: " + info.response);
                    }
                });

            }
            else {
                carType = req.body.carType
                distance = (req.body.distance).toFixed(2)
                price = (req.body.price).toFixed(2)
                startLoc = req.body.startLoc
                endLoc = req.body.endLoc
                console.log("waiting to Payment Process")
            }

        }).catch(err => res.json(err))
})

app.listen(3000, () => {
    console.log("Server is Running")
})