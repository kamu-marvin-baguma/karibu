const express = require("express")
// const workerModel = require("../models/workerModel")
const multer = require('multer');
const imageModel = require("../models/imageModel")
const router = express.Router()

// Generate a random number to name
const name = ()=> Math.floor(Math.random()*10000);


// Working with multer diskStorage method
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'images/');
   },
    filename: function(req, file, cb){
        cb(null, name() + file.originalname);
       //  console.log(file);
    }
});

const fileFilter = (req, file, cb)=>{
    //reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 7},
    fileFilter: fileFilter
});

router.get("/managerDash",(req,res)=>{
    res.render("managerDash")
})
router.get("/directorDash",(req,res)=>{
    res.render("directorDash")
})

router.get("/gallery", async(req,res)=>{
    try{
        const images = await imagesModel.find()
        res.render("gallery",{images})
    }catch(error){

    }
})
router.get("/uploads",(req,res)=>{
    res.render("uploads")
})

router.post("/uploads",upload.single("image"),
(req,res) => {
    console.log(req.file)
    imageModel.create({image:req.file.path})
    res.redirect("/gallery")
})




module.exports = router