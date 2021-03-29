const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    productName:{require: true, type:String},
    productPrice:{require: true, type:String},
    createdAt: {
        type: Date,
        default: Date.now
      }
})




module.exports = mongoose.model('Product', productSchema)