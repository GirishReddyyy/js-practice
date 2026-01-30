//create HTTP Server
//Import express module
import exp from 'express';
import { userApp } from './APIs/UserAPI.js';
import { productApp } from './APIs/ProductAPI.js';

//Create server
const app = exp()
//Assign port number
app.listen(3000, () => console.log('HTTP Server listening on port number 3000'))

//body parsing middleware
app.use(exp.json()) //in built middleware by express

//forward re to userApp when path starts with '/user-api'
app.use('/user-api',userApp)
app.use('/product-api',productApp)


























// //create a custom middleware
// function middleware1(req, res, next) {
//     console.log("middleware 1 executed")
//     //send res
//     //res.json({message:"res from middleware"})

//     //forward req to the next middleware
//     next()
// }
// function middleware2(req, res, next) {
//     console.log("middleware 2 executed")
//     //send res
//     //res.json({message:"res from middleware"})

//     //forward req to the next middleware
//     next()
// }

// //to execute for every incoming req
// app.use(middleware1)

// //Test local in-memory data
// let users = [];

// //Create USER API (req handlers - route )

// //get req handling route(read user)
// app.get('/users',middleware1, (req, res) => {
//     //send users data in response
//     res.status(200).json({ message: "all users data", payload: users }) //message,payload
// })

// //post req handling route(create user)
// app.post('/users', middleware2,(req, res) => {
//     //get user resource from req
//     let newUser = req.body
//     // console.log("newUser",newUser)
//     //insert new user into users array
//     users.push(newUser)
//     //send res
//     res.status(201).json({ message: "user created", payload: newUser })


// })

// //put req handling route(update user)
// app.put('/users', (req, res) => {
//     //get modified user from req
//     let modifiedUser = req.body
//     //console.log(modifiedUser)

//     //find the user with id exists in array
//     //let userObj=users.find(user=>user.id===modifiedUser.id)
//     let userIndex = users.findIndex(userObj => userObj.id === modifiedUser.id)

//     //if user not found,send res as "user not found"
//     if (userIndex === -1) {
//         return res.status(404).json({ message: "User not found" })
//     }

//     //if user found,then modify the user
//     let deletedUser = users.splice(userIndex, 1, modifiedUser)

//     //send res as "User modified"
//     res.status(200).json({ message: "User modified", payload: modifiedUser })
// })


// //read user by id
// // : before id make it a parameter
// app.get('/users/:id', (req, res) => {

//     //console.log(req.params)
//     //read id form url parameter
//     //let userId=req.params.id
//     let userId = Number(req.params.id) //return obj {id: 100}
//     //read user by this id
//     let user = users.find(userObj => userObj.id === userId)
//     if (!user) {
//         return res.status(404).json({ message: "user not found" })
//     }
//     //send res
//     res.status(200).json({ message: "user", payload: user })
// })


// //delete req handling route(delete user)
// app.delete('/users/:id', (req, res) => {
//     let userId = Number(req.params.id)
//     let user = users.findIndex(userObj => userObj.id === userId)
//     if (user === -1) {
//         return res.status(404).json({ message: "user not found" })
//     }
//     let deletedUser = users.splice(user, 1)
//     res.status(200).json({ message: "user deleted", payload: deletedUser })
// })

// //----------------------------------------------------------------------------------------------------------------------------------------//

// let products=[];

// //get req handling route(read user)
// app.get('/products',(req,res)=>{

//     res.status(200).json({message:"products",payload:products})
// })

// //get req handling route(read user) by id
// app.get('/products-id/:id',(req,res)=>{
//     let productsId=Number(req.params.id)
//     let product=find(proObj => proObj.productId===productsId)
//     if(!product){
//         return res.status(404).json({message:"product not found"})
//     }
//     res.status(200).json({message:"product",payload:product})
// })

// //get req handling route by brand
// app.get('product-name/:brand',(req,res)=>{
//     let productName=String(req.params.brand)
//     let product=find(proObj => proObj.name===productName)
//     if(!product){
//         return res.status(404).json({message:"product not found"})
//     }
//     res.status(200).json({message:"product",payload:product})

// })

// //post req handling route
// app.post('/products',(req,res)=>{

//     let newProduct = req.body
//     //insert new product into products array
//     products.push(newProduct)
//     //send res
//     res.status(201).json({ message: "product created", payload: newProduct })
// })

// //put req handling route
// app.put('/products/:id',(req,res)=>{
//     //get modified product from req
//     let modifiedProduct = req.body

//     //find the product with id exists in array
//     let productIndex = users.findIndex(productObj => productObj.productId === modifiedProduct.productId)

//     //if product not found,send res as "product not found"
//     if (productIndex === -1) {
//         return res.status(404).json({ message: "product not found" })
//     }

//     //if product found,then modify the user
//     let deletedProduct = users.splice(productIndex, 1, modifiedProduct)

//     //send res as "product modified"
//     res.status(200).json({ message: "product modified", payload: modifiedProduct })
// })

// //
// app.delete('/product/:id',(req,res)=>{
//     let productsId=Number(req.params.id)

//     let productIndex=products.findIndex(proObj => proObj.productId===productsId)
//     if(productIndex===-1){
//         return res.status(404).json({message:"product not found"})
//     }
//     let deletedProduct=products.splice(productsId,1)
//     res.status(200).json({message:"product deleted",payload:deletedProduct})
// })