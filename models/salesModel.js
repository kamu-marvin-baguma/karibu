const mongoose = require("mongoose")
//the name of the input must be the same as the schema
//schema and model
const salesSchema =  mongoose.Schema({
    produceName:String,
    branch:String,
    salesAgent:String,
    AmountPaid:Number,
    tonnage: Number,
    Date: Date,
    time: String,
    nameOfDealer:String,
})

module.exports = mongoose.model("sales", salesSchema)  
// module.exports = produceModel 