const mongoose = require('mongoose')


const customerSchema = mongoose.Schema({
    customerName:{require: true, type:String},
    customerMobileNum:{ type:String},
    createdAt: {
        type: Date,
        default: Date.now
      }
})




module.exports = mongoose.model('Customer', customerSchema)