const express = require("express")
const purchaseModel = require("../models/salesModel")

const router = express.Router()


    router.get("/profile",(req, res)=> {
        res.render("test")
    })

router.get("/purchase-form", (req, res)=> {
    res.render("purchaseForm")
})
router.get("/purchase-list",async (req, res) => {
    const purchases = await purchaseModel.find()
    res.render("/purchaseList", {
        title: "purchaseList", purchases: purchases 
    })
})
// router.post("/sales-list",async (req, res) => {
//     console.log(req.body)
//     res.redirect("/create-sales")
// })
router.post("/newPurchase",
    async (req, res) => {
        try {
            const newPurchase = new purchaseModel(req.body)
            await newPurchase.save()
            res.redirect("/purchase/purchase-form")
            console.log(req.body)
        }
        catch (err) {
            res.status(400).render("/purchaseForm")
        }
    })

   


module.exports = router