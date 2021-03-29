const express = require('express')
const router = express.Router()
const Product = require("../models/products");


router.get("/", async (req, res) => {
    const products = await Product.find().sort("-1")
    res.render("products/index.ejs",{products : products})
})


router.get("/new", (req,res)=>{
    res.render("products/new.ejs");
})

router.post("/new", (req, res)=>{
    let product = new Product()
    product.productName = req.body.name
    product.productPrice = req.body.price
    product.save().then(()=>{
        res.redirect('/products')
    })
    .catch((e)=>{
        console.log(e)
    })

    
})

//TODO: serve data to ejs from db
router.get("/:id", async(req, res) => {
    const product = await Product.findById(req.params.id)
    res.render("products/product.ejs", {product : product});
})



module.exports = router