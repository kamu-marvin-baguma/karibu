const express = require("express")
const creditModel = require("../models/creditModel")

const router = express.Router()

router.get("/credit-list",async (req, res) => {
    const creditsales = await creditModel.find()
    res.render("creditList", {
        title: "creditlist", creditsales: creditsales
    })
})
router.post("/newCredit", async (req,res)=>{
    try{
        const newCredit = new creditModel(req.body)
        await newCredit.save()
        res.redirect("/credit-form")
        console.log(req.body)
   }
   //you redirect to a path and you render a file.
   catch(err){
    res.status(400).render("creditForm")
   }
})


router.get("/credit-form", (req, res)=> {
    res.render("creditForm")
})

//error handling(try...catch)
router.post("/newCredit", async (req,res)=>{
    try{
        const newCredit = new creditModel(req.body)
        await newCredit.save()
        res.redirect("/credit/credit-form")
        console.log(req.body)
   }
   //you redirect to a path and you render a file.
   catch(err){
    res.status(400).render("creditForm")
   }
})

// router.get("/", (req, res)=> {
//     res.render("creditList")
// })



module.exports = router