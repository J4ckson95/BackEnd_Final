import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2"
const productSchema = mongoose.Schema({
    title: { type: String, require: true },
    author: { type: String, require: true },
    category: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    thumbnail: { type: String, require: true },
    code: {
        type: Number,
        require: true,
        unique: true
    },
    stock: { type: Number, require: true }
})
productSchema.plugin(paginate)
const productModel = mongoose.model("products", productSchema)
export default productModel