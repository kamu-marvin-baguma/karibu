const express = require("express")
const produceModel = require("../models/produceModel")
// const connectEnsureLogin = require("connect-ensure-login");
const router = express.Router()

router.get("/produce-list",async (req, res) => {
    const produces = await produceModel.find()
    res.render("produceList", {
        title: "producelist", produces: produces
    })
})

router.get("/produce-form", (req, res)=> {
    res.render("produceForm")
})


router.post("/newProduce", async (req,res)=>{
    try{
        const newProduce = new produceModel(req.body)
        await newProduce.save()
        res.redirect("/produces/produce-form")
        console.log(req.body)
   }
   //you redirect to a path and you render a file.
   catch(err){
    res.status(400).render("produceForm")
   }
})






//error handling(try...catch)
router.post("/newProduce", async (req,res)=>{
    try{
        const newProduce = new ProduceModel(req.body)
        await newProduce.save()
        res.redirect("/produce/produce-form")
        console.log(req.body)
   }
   //you redirect to a path and you render a file.
   catch(err){
    res.status(400).render("produceForm")
   }
})



//this should always be the last line in your routes
module.exports = produceModel
