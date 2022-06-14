//jshint esversion:11

const express = require('express')
const app = express()
const {products, people}=require('./data')

app.get('/',(req, res)=>{
    res.send('<h1> Home Page </h1> <a href="/api/products">Products</a>') // serves our data
})

app.get('/api/products/:productID', (req, res)=>{

    const {productID} = req.params;
    const singleProduct = products.find((product)=> product.id === Number(productID))
    if(!singleProduct){
        res.send('Product not found')
    }

    res.json(singleProduct)
})

app.listen(5000, ()=>{
    console.log('Server started on port 5000 ...');
})
