const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        productName:{type:String, require: true},
        productCode:{type:String, require: true},
        category:{type:String, require: true},
        Price:{type:String, require: true},
        Discount:{type: String, require: true},
        netPrice:{type:String, require: true},
    },
    {
        versionKey:false,
        timeStamp:true,
    }
)

const ProductsModel = mongoose.model('products',DataSchema);

module.exports=ProductsModel;