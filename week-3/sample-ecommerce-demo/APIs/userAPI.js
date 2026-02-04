import exp from 'express'
import { hash } from "bcryptjs"
import { UserModel } from '../Models/UserModel.js'
import { ProductModel } from '../Models/ProductModel.js'
export const userRouter = exp.Router()

//Create User
userRouter.post("/users", async (req, res) => {
    //get req body
    let newUser = req.body
    //run validator
    await new UserModel(newUser).validate()
    //hash the password
    let hashedPassword = await hash(newUser.password, 12)
    //replace the plain psw with hash
    newUser.password = hashedPassword
    //create user document
    let newUserDoc = new UserModel(newUser)
    //save in db
    await newUserDoc.save({ validateBeforeSave: false })//validateBeforeSave:false as we are validating in line no.12
    //send res
    res.status(201).json({ message: "user created" })
})

//Add product to user's cart
// userRouter.put("/user-cart/user-id/:uid/product-id/:pid",async(req,res)=>{
//     //read uid and pid from url parameters
//     let {uid,pid}=req.params; //{uid:"",pid:""}
//     //check user
//     let user=await UserModel.findById(uid)
//     if(!user){
//         return res.status(401).json({message:"User not found"})
//     }
//     //check product
//     let product=await ProductModel.findById(pid)
//     if(!product){
//         return res.status(401).json({message:"Product not found"})
//     }
//     //perform update
//     let modifiedUser=await UserModel.findByIdAndUpdate(
//         uid,
//         {$push:{cart:{product:pid}}},
//         {new:true}).populate("cart.product","productName price brand")
//     //res
//     res.status(200).json({message:"Product added to cart",payload:modifiedUser})
// })

userRouter.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res) => {
    //read uid and pid
    let { uid, pid } = req.params
    //check user
    let user = await UserModel.findById(uid)
    if (!user) {
        return res.status(401).json({ message: "user not found" })
    }
    //check product
    let product = await ProductModel.findById(pid)
    if (!product) {
        return res.status(401).json({ message: "Product not found" })
    }

    //check if product exists in the cart
    //let existingCartItem = user.cart.find(item => item.product.toString() === pid)
    // console.log("quantity:",qty)
    // console.log("existing cart item:",existingCartItem.quantity)
    let modifiedUser;
    if (product._id.equals(pid)) { //pid.equals(product._id) pid==product._id
        modifiedUser = await UserModel.findOneAndUpdate({ "cart.product": pid }, { $inc: { quantity: 1 } }, { new: true }).populate("cart.product", "productName price brand")
    } else {
        modifiedUser = await UserModel.findByIdAndUpdate(uid, { $push: { cart: { product: pid, quantity: 1 } } }, { new: true }).populate("cart.product", "productName price brand")
    }
    //perform update
    //res
    res.status(200).json({ message: "Product added to cart", payload: modifiedUser })
})

//Read User by id
userRouter.get("/users/:uid", async (req, res) => {
    //get
    let { uid } = req.params;
    //find user
    let userObj = await UserModel.findById(uid).populate("cart.product", "productName price brand");
    if (!userObj) {
        return res.status(401).json({ message: "User not found" })
    }
    res.status(200).json({ message: "User", payload: userObj })
})