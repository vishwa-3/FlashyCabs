const mongoose = require("mongoose")

const PaymentSchema = new mongoose.Schema(
    {
        cardName: String,
        email: String,
        cardNumber: String,
        cvv: String,
        expireDate: String,
        distance : Number,
        price : Number,
        carType : String,
        startLoc : String,
        endLoc : String,
    }
)

const PaymentModel = mongoose.model("payments", PaymentSchema)
module.exports = PaymentModel
