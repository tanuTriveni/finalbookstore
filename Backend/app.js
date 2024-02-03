const express = require('express')
const mongoose = require('mongoose')
const cors=require("cors")
const app = express();
const router=require("./routes/book-routes")

app.use(express.json());
app.use(cors());  // allow json to pass everywhere to the server 
app.use("/books", router);

mongoose.connect("mongodb+srv://triveniadmin:PZw0Uc1BaQEyOKxI@cluster0.crjhxvq.mongodb.net/?retryWrites=true&w=majority").then(()=> console.log("connected")).then(()=>{
    app.listen(8000);
})
.catch((err)=>console.log(err));
console.log("hello world ")
//PZw0Uc1BaQEyOKxI