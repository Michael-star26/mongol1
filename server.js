const express=require('express')
const bodyParser=require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://michael:michael1234@cluster1.kj0gz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
const db=mongoose.connection
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

app.use(express.static('public'));  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})
app.post('/products',urlencodedParser,productRoutes,(req,res)=>{
    response={
        name:req.body.name,
        description:req.body.description,
        price:req.body.price
    }
    res.send(JSON.stringify(response))
})



app.listen(app.get('port'),()=>{
    console.log("App running on http://localhost:"+app.get('port')+" Press ctrl+c to stop")
})