import bcrypt from "bcrypt"

export const createHas = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
export const validateHas = (password, user) => {
    return bcrypt.compareSync(password, user.password)
}