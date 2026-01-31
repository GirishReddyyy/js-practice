import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'

export const productApp = exp.Router()

//Product API routes

//create product
productApp.post('/products', async (req, res) => {
    //get new product
    let newProduct = req.body

    //create new user document
    let newProductDoc = new ProductModel(newProduct)

    //save in db
    await newProductDoc.save()

    //send res
    res.status(200).json({ message: "product created" })
})

//get product
productApp.get('/products', async (req, res) => {
    //read products from db
    let productList = await ProductModel.find()

    //send res
    res.status(200).json({ message: "products", payload: productList })
})

//get product by pid
productApp.get('/products/:id', async (req, res) => {
    //get id from url param
    let proId = req.params.id
    //find product in db
    let productObj = await ProductModel.findById(proId)
    //send res
    res.status(200).json({ message: "product", payload: productObj })

})

//modify product by id
productApp.put('/products/:id', async (req, res) => {
    //get objId from the url param
    let objId = req.params.id
    //get modified product form the body
    let modifiedObj = req.body
    //make update
    let latestProduct = await ProductModel.findByIdAndUpdate(objId,
        { $set: { ...modifiedObj } },
        { new: true })
    //send res
    res.status(200).json({ message: "product updated", payload: latestProduct })
})