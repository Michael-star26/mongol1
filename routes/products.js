const express=require('express')
const router=express.Router()
const productsController=require('../controllers/productController')

// create a new product
router.post('/products',productsController.createProduct)

// retrieve all products
router.get('/products',productsController.getProducts)

// retrieve a single product
router.get('/products/:id',productsController.getProductById)

// update a single product
router.put('/products/:id',productsController.updateProduct)

// delete a sinle product
router.delete('/products/:id',productsController.deleteProduct)

// delete all products
router.delete('/products',productsController.deleteAllProducts)

// find products by condition
router.post('/products/search',productsController.findProductsByCondition)

module.exports=router