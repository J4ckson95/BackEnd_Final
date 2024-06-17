import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import config from "./Config/config.js"

export const createHas = async (password) => {
    return await bcrypt.hash(password, bcrypt.genSaltSync(10))
}
export const validateHas = async (password, user) => {
    return bcrypt.compare(password, user.password)
}
export const generateToken = (user) => {
    const token = jwt.sign({ user }, config.PRIVATE_KEY, { expiresIn: "24h" })
    return token
}
export const descripToken = (token) => {
    const user = jwt.verify(token, config.PRIVATE_KEY)
    return user
}