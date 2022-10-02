const mongoose = require("mongoose")
//the name of the input must be the same as the schema
//schema and model
const imageSchema =  mongoose.Schema({
    image: String,
    
})

module.exports = mongoose.model("image", imageSchema)   