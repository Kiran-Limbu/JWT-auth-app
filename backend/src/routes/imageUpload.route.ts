import express, { type Request } from "express";
import multer from "multer";
import path from "path";

const route = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb: any) {
    cb(null, '/uploads')
  },
  filename: function (req, file: any, cb: any) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const fileFilter = (req: Request, file: any, cb: any) =>{
    const filetypes = /jpeg|jpg|png|webp|gif|bmp|svg|tiff|avif/;
   const minetypes = /image\/jpeg|image\/png|image\/webp|image\/gif|image\/bmp|image\/svg\+xml|image\/tiff|image\/avif/;

     const extname = path.extname(file.originalname).toLowerCase();
    const minetype = file.mimetype;

    if (filetypes.test(extname) && minetypes.test(minetype)) {
        cb(null, true);
    } else {
        cb(new Error("Images only"), false);
    }
 
}
const upload = multer({ storage, fileFilter });
const uploadSingleImage = upload.single("image");


route.post("/", async (req, res) =>{
    uploadSingleImage(req, res, (err) =>{
        if(err){
            res.status(400).send({message: err.message});
        } else if (req.file){
              res.status(201).send({
                message: "Image uploaded sucessfully",
                image: `/${req.file.path}`
            });
        } else{
            res.status(400).send({message: "No image provided"});
        }
    })
})

export default route;