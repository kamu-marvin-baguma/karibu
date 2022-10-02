const express = require("express")
const workerModel = require("../models/workerModel")

const router = express.Router()

router.get("/worker-list", async(req, res)=> {
  const workers = await workerModel.find()
  res.render("workerList",{
    title: "worker", workers: workers
  })
  
  // res.send("employees")    
})

router.get("/profile", 
(req, res)=> {
    res.render("test")
})

router.get("/worker-form", (req, res)=> {
    res.render("workerForm")
})

//error handling(try...catch)
router.post("/newWorker", async (req,res)=>{
    try{
        const newWorker = new workerModel(req.body)
        await newWorker.save()
        res.redirect("/workers/worker-list")
        console.log(req.body)
   }
   //you redirect to a path and you render a file.
   catch(err){
    res.status(400).render("workerForm")
   }
})

router.get("/worker-list", (req, res)=> {
    res.render("workerList")
    // res.send("employees")
})


// router.get("/employeelist", 
// async(req,res) =>{
//    try{
//        console.log(req.user.firstname)
//         let items = await employeeModel.find()
//         res.render("employeelist",{employees : items, username:req.user.firstname})
//     }
//    catch(err){
//    console.log(err)
//    res.send("could not get employees list")
//    }
//  })

//  //delete route
// // router.post("/employee-list", connectEnsureLogin.ensureLoggedIn(),
// // async(req,res)=>{
// //     try{
// //         await employeeModel.deleteOne({
// //             _id: req.body._id
// //         })
// //         res.redirect("/employee/employee-list")
// //     }
// //     catch(err){
// //         res.status(400).send("Unable to delete items from the database")
// //     }  
// // })

// //edit route
// router.get("/editemployeee/:id", async(req,res) =>{
//     try{
//         const currentWorker = await workerModel.findById({_id:req.params.id})
//         res.render("editemployeee",{employee:currentEmployee})
//      }
//     catch(err){
   
//     }
//   })

//   router.post("/editemployee", async(req,res) =>{
//     try{
//         console.log(req.query,req.body)
//         await employeeModel.findByIdAndUpdate({_id:req.query.id},req.body)
//        res.redirect('/employee-list')
//      }
//     catch(err){
   
//     }
//   })




module.exports = router