import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    age: { type: Number, require: true },
    email: { type: String, unique: true },
    password: String,
    cartId: { type: mongoose.Schema.Types.ObjectId, ref: 'carts' },
    rol: { type: String, default: "user" }
})
const userModel = mongoose.model("users", userSchema)
export default userModel