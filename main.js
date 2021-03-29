const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/products");
const Customer = require('./models/customers');
const productRouter = require("./routs/products");
const customerRouter = require("./routs/customers");



mongoose.connect("mongodb://localhost/test2",{useNewUrlParser: true,useUnifiedTopology: true });
app.set("view engine", "ejs");
app.set("views", "./public");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))


app.get("/", (req, res) => {
    res.render("index.ejs");
})



app.use("/products",productRouter)

app.use("/customers",customerRouter)



app.listen(8000);
console.log("Listening on port 8000");

