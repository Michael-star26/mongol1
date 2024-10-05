const Product=require('../models/products')

// create product
exports.createProduct=async(req,res)=>{
    try{
        const product=new Product(req.body)
        await product.save()
        res.status(201).json(product)
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:'Server error'})
    }
}

// retrieve products (with some conditon)
exports.getProducts=async(req,res)=>{
    try{
        const products=await Product.find(req.query)
        res.status(200).json(products)
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Server error"})
    }
}

// retrieve a single object
exports.getProductById=async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
    if(!product){
        res.status(404).json({message:'Product not found'})
    }
    res.status(200).json(product)
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Server error"})
    }
}

// update an object
exports.updateProduct=async(req,res)=>{
    try{
        const product=await Product.findByIdAndUpdate(req.params.id,req.params.body,{
            new:true,
            runValidators:true
        });
        if(!product){
            res.status(404).json({message:"Product not found"})
        }
        res.status(200).json(product)
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Server error"})
    }
}

// delete an object
exports.deleteProduct=async(req,res)=>{
    try{
        const product=await Product.findByIdAndDelete(req.params.id)
        if(!product){
            res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product deleted successfully"})
    }
    catch(error){
        console.error(error)
        req.status(500).json({message:"server error"})
    }
}

// delete all objects
exports.deleteAllProducts=async(req,res)=>{
    try{
        const result=await Product.deleteMany()
        res.status(200).json({message:`${result.deletedCount} products deleted successfully`})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}

// find all objects by condition
exports.findProductsByCondition=async(req,res)=>{
    try{
        const products=await Product.find(req.body)
        res.status(200).json(products)
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Server error"})
    }
}