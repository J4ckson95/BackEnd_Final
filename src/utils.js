import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import config from "./Config/config.js"

export const createHas = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
export const validateHas = (password, user) => {
    return bcrypt.compareSync(password, user.password)
}
export const generateToken = (user) => {
    const token = jwt.sign({ user }, config.PRIVATE_KEY, { expiresIn: "24h" })
    return token
}
export const descripToken = (token) => {
    const user = jwt.verify(token, config.PRIVATE_KEY)
    return user
}