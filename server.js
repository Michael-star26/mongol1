const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://michael:michael1234@cluster1.kj0gz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
const db=mongoose.connection
const productsController=require('./controllers/productController')
const productRoutes=require('./routes/products')
const app=express()
db.on('error',console.error.bind(console,'connection error'))
db.once('open',function(){
    console.log('connected to mongodb database')
})
app.set('port',process.env.PORT||3000)

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.post('/products',productRoutes,(req,res)=>{
    // response={
    //     name:req.body.name,
    //     description:req.body.description,
    //     price:req.body.price
    // }
    res.send([
        {"name":"Samsung"},
        {"description":"A 2024 s24 ultra"},
        {"price":5000}
    ])
    // res.send(JSON.stringify(response))
})

app.post('/products/search',productRoutes,(req,res)=>{
    res.send('products found')
})


app.listen(app.get('port'),()=>{
    console.log("App running on http://localhost:"+app.get('port')+" Press ctrl+c to stop")
})