const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const cors = require("cors");


const app = express();

// require("dotenv").config();
app.use(cors());
app.use(express.json());
const MONGO_URL = "mongodb+srv://abdul:abdul@cluster0.nlkxtlp.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL);

app.use("/api/product", productRoute);

app.get("/", (req,res)=>{
    res.send("my new website");
})

app.listen(9000, ()=>{
    console.log("backend is running");
})