import exp from 'express'
import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js'
import { connect } from 'mongoose'
const app=exp()
const port=4000

//connect to db server
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/anuragdb2")
        console.log("DB Connection success")
        //Assign port
        app.listen(port,()=>console.log("server listening on port 4000..."))
    }catch(err){
        console.log("Err is DB connection:",err)
    }
    
}

connectDB()

//body parser middlerware
app.use(exp.json())

//if path starts with /user-api, forawrd req to userApp
app.use('/user-api',userApp)

//if path starts with product-api, forawrd req to productApp
app.use('/product-api',productApp)


//error handling middleware
function errorHandler(err,req,res){
    res.json({message:"error",reason:err.message})
}
app.use(errorHandler)



