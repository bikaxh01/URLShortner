import express from "express";
//import bodyParser from "body-parser";
import mongoose from "mongoose";
const PORT = 8000;
const app = express();
import route  from "./Routes/index.js";
import bodyParser from "body-parser";

mongoose.connect(
  "mongodb+srv://bikashi:bikash123@cluster0.4f5lmam.mongodb.net/urlshortner"
);
app.use(express.json())
//app.use(bodyParser())

app.use("/api", route);

app.listen(PORT, () => console.log("Running"));
