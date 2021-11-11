const mongoose = require("mongoose")
const mobileSchema = mongoose.Schema({
    name: String,
    type: String,
    cost: Number
})

module.exports = mongoose.model("Mobile", mobileSchema)