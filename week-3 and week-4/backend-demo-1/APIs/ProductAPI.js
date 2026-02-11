import exp from 'express'

//create mini- express(Seperate Route) app
export const productApp=exp.Router()


let products=[];

//get req handling route(read user)
productApp.get('/products',(req,res)=>{
    res.status(200).json({message:"products",payload:products})
})

//get req handling route(read user) by id
productApp.get('/products-id/:id',(req,res)=>{
    let productsId=Number(req.params.id)
    let product=products.find(proObj => proObj.productId===productsId)
    if(!product){
        return res.status(404).json({message:"product not found"})
    }
    res.status(200).json({message:"product with id",payload:product})
})

//get req handling route by brand
productApp.get('/products-brand/:brand',(req,res)=>{
    let productBrand=req.params.brand
    let product=products.find(proObj => proObj.brand===productBrand)
    if(!product){
        return res.status(404).json({message:"product not found"})
    }
    res.status(200).json({message:"product with brand",payload:product})

})

//post req handling route
productApp.post('/products',(req,res)=>{

    let newProduct = req.body
    //insert new product into products array
    products.push(newProduct)
    //send res
    res.status(201).json({ message: "product created", payload: newProduct })
})

//put req handling route
productApp.put('/products/:id',(req,res)=>{
    //get modified product from req
    let modifiedProduct = req.body

    //find the product with id exists in array
    let productIndex = products.findIndex(productObj => productObj.productId === modifiedProduct.productId)

    //if product not found,send res as "product not found"
    if (productIndex === -1) {
        return res.status(404).json({ message: "product not found" })
    }

    //if product found,then modify the user
    let deletedProduct = products.splice(productIndex, 1, modifiedProduct)

    //send res as "product modified"
    res.status(200).json({ message: "product modified", payload: modifiedProduct })
})

//delete req handling route
productApp.delete('/products/:id',(req,res)=>{
    let productsId=Number(req.params.id)

    let productIndex=products.findIndex(proObj => proObj.productId===productsId)
    if(productIndex===-1){
        return res.status(404).json({message:"product not found"})
    }
    let deletedProduct=products.splice(productIndex,1)
    res.status(200).json({message:"product deleted",payload:deletedProduct})
})