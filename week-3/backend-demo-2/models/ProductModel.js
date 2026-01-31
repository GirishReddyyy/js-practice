import {Schema,model} from 'mongoose'

//create product schema (pid,productName,price)
const productSchema = new Schema({

    pid: {
        type: Number,
        required: [true, "product is required"],
    },
    productName: {
        type: String,
        required: [true, "product name is required"],
        maxLength: [10, "Max length exceeded"]
    },
    price: {
        type: Number,
        required: [true, "product price is required"]
    }
}, {
    strict: "throw"
})

//create productmodel with the schema
export const ProductModel = model("product", productSchema)