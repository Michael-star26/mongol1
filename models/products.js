const mongoose=require('mongoose')
const schema=new mongoose.Schema
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{timestamps:true})

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

const Product=mongoose.model('Product',productSchema)
module.exports=Product