const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./public");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/customers/", (req, res) => {
    res.render("customers/index");
})

app.get("/customers/customer/", (req, res) => {
    res.render("customers/customer/customer");
})

app.get("/products/", (req, res) => {
    res.render("products/index");
})
app.get("/products/product/", (req, res) => {
    res.render("products/product/product");
})


app.listen(8000);
console.log("Listening on port 8000");

