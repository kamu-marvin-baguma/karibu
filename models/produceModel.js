const mongoose = require("mongoose")
//the name of the input must be the same as the schema
//schema and model
const produceSchema =  mongoose.Schema({
    produceName: String,
    produceType : Number,
    nameOfDealer:String,
    sellingPrice:Number,
    costOfProduce:Number,
     tonnage: Number,
    date: Date,
    time: String,
    contactNumber:String,
    branchName:String,
})

module.exports = mongoose.model("produces", produceSchema)  
// module.exports = produceModel 