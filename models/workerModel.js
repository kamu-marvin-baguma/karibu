const mongoose = require("mongoose")
//the name of the input must be the same as the schema
//schema and model
const workerSchema =  mongoose.Schema({
    name: String,
    age: Number,
    branch: String,
    field: String,
    salary: Number,
})

module.exports = mongoose.model("worker", workerSchema)   