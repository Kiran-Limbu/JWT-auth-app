import http from "http";
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDB from "./src/config/db.ts";
import userRoute from "./src/routes/user.route.ts"
import uploadRoute from "./src/routes/imageUpload.route.ts"
import path from "path";


dotenv.config();
connectToDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users/", userRoute);

//URL for uploaded Image;
app.use("/api/upload/", uploadRoute);

const  __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname +  '/uploads')));

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is listening on PORT ${port}`);
});

