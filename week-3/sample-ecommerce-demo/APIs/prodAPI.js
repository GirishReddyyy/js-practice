import exp from 'express'
import { ProductModel } from '../Models/ProductModel.js'
export const prodRouter=exp.Router()

//route to create new product
prodRouter.post("/products",async(req,res)=>{
    //get product from req
    let productObj=req.body
    //create product document
    let productDocument=new ProductModel(productObj)
    //save
    await productDocument.save()
    //send res
    res.status(201).json({message:"product created"})
})

//get the products route
prodRouter.get('/products',async(req,res)=>{
    //get the products
    let productList = await ProductModel.find()
    //send res
    res.status(200).json({message:"all products",payload:productList})
})
