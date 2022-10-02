const express = require("express")
const salesModel = require("../models/salesModel")
const router = express.Router()

router.get("/sales-list",async (req, res) => {
    const sales = await salesModel.find()
    res.render("salesList", {
        title: "saleslist", sales: sales
    })
})


    router.get("/sales-form", (req, res)=> {
        res.render("salesForm")
    })




router.post("/newSale",async (req, res) => {
        try {
            const newSale = new salesModel(req.body)
            await newSale.save()
            res.redirect("/sales/sales-form")
            console.log(req.body)
        }
        catch (err) {
            res.status(400).render("salesForm")
            console.log(err)
        }
    })

    





module.exports = router