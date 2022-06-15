//jshint esversion:11

const express = require('express')
const app = express();
const {products, people} = require('./data')

app.get('/',(req,res)=>{
	res.send('Hello World');
})

app.get('/api/products/:productID', (req,res)=>{

	const {productID} = req.params;
	const singleProduct = products.find((product)=>product.id === Number(productID))

	if(!singleProduct){
		res.status(200).json({success:true, data:[]})
	}

	res.status(200).send(singleProduct);
})


app.get('/api/v1/query',(req,res)=>{

	const {search, limit} = req.query;

	let sortedProduct = [...products];

	if(search){
		sortedProduct=sortedProduct.filter((product)=>{
			return product.name.startsWith(search)
		})
	}

	if(limit){
		sortedProduct=sortedProduct.slice(0, Number(slice))

	}

	if(sortedProduct.length<1){
		res.status(200).json({success:true, data:[]})
	}

	res.json(sortedProduct)
})

app.listen(3000, ()=>{
	console.log('Server started on port 3000 ... ')
})