const mongoose = require("mongoose")
const express = require("express")
const route = require("./routes/route.js")
const app = express();

app.use(express.json())

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Rajnagwanshi:abhishek1410@cluster0.qlrpwrw.mongodb.net/Company_Assignment",
{ useNewUrlParser: true }) 

.then(() => console.log("MongoDB is connected"))
.catch(err => console.log(err))

app.use("/", route)

app.listen(3000, function(){
    console.log("Express port is running on "+3000)})

    

