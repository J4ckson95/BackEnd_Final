import { usersServices, cartsServices } from "../Services/main.js"
import { createHas, validateHas, generateToken } from "../utils.js"
import { registerDTO } from "../DTO/DTO.js"
export const createUser = async (req, res) => {
    try {
        const { email, password, ...rest } = req.body
        const user = await usersServices.findUserByEmail(email)
        if (user) return res.send(false)
        const newCart = await cartsServices.createCart()
        const newUser = { email, password: createHas(password), cartId: newCart._id, ...rest }
        const data = new registerDTO(newUser)
        const result = await usersServices.createUser(data)
        if (result) return res.send({ status: "Success" })
    } catch (error) { console.error("Error al crear usuario", error); }
}
export const validateUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await usersServices.findUserByEmail(email)
        if (!user) return res.send({ user: false })
        if (!validateHas(password, user)) return res.send({ password: false })
        const token = generateToken(user)
        return res.cookie("authToken", token)
    } catch (error) { console.error("Error al validar usuario", error.message) }
}

