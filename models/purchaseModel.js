const mongoose = require("mongoose")
//the name of the input must be the same as the schema
//schema and model
const purchaseSchema =  mongoose.Schema({
    name:String,
    typeOfProduce:String,
    nameOfBuyer:String,
    PurchasedOn:String,
    tonnage: Number,
    price: Number,
    Costprice:Number,
    dealer: String,
    contact:Number,
    Selling:Number
})

module.exports = mongoose.model("purchase", purchaseSchema)  
// module.exports = produceModel 
