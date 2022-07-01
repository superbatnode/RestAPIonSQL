const multer = require("multer");
const path = require("path");
const savePhoto = require("../../model/crud/savePhoto");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../../uploads"))
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString() + "-" + file.originalname)
    }
  });
const upload = multer({storage})
module.exports = {
    upload,
    photoUpload : async (req,res,next)=>{
        if(!req.file)
        return next("couldn't upload file this time");
        console.log(req.data); 
        try{
            await savePhoto(req.data.username, req.file.path);
            res.json({FileUpladed:true});
        }catch(e){
            console.log(e); 
            return next("Unable to save image");
        }
    }
};