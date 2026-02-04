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


