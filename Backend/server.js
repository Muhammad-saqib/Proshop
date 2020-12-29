import express  from "express"
import products from "./data/products.js"
import  dotenv from "dotenv"

const app= express()
dotenv.config()

app.get('/',(req,res)=>{
     console.log('api is running')
})
app.get('/api/products',(req,res)=>{
 //    throw new Error('some error')
     res.send(products);
})

app.get('/api/product/:id',(req,res)=>{
    const product=products.find(x=>x._id=== req.params.id);
    res.send(product);
});
const PORT=process.env.PORT||5000


app.listen(PORT,console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`))
