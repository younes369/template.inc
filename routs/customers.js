const express = require('express')
const router = express.Router()
const Customer = require("../models/customers");







router.get("/", async (req, res) => {
    const customers = await Customer.find().sort({ createdAt: 'desc' })
    res.render("customers/index.ejs",{customers : customers})
})


router.get("/new", (req,res)=>{
    res.render("customers/new.ejs");
})

router.post("/new", (req, res)=>{
    let customer = new Customer()
    customer.customerName = req.body.name
    customer.customerMobileNum = req.body.mobileNumber
    customer.save().then(()=>{
        res.redirect('/customers')
    })
    .catch((e)=>{
        console.log(e)
    })

    
})

//TODO: serve data to ejs from db
router.get("/:id", async(req, res) => {
    const customer = await Customer.findById(req.params.id)
    res.render("customers/customer.ejs", {customer : customer});
})


module.exports = router