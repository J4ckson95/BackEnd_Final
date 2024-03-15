import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const createHas = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
export const validateHas = (password, user) => {
    return bcrypt.compareSync(password, user.password)
}
export const generateToken = (user) => {

}