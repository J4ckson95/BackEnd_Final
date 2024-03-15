import { usersServices, cartsServices } from "../Services/main.js"
import { createHas, validateHas } from "../utils.js"

export const createUser = async (req, res) => {
    try {
        const { email, password, ...rest } = req.body
        const user = await usersServices.findUserByEmail(email)
        if (user) return res.send(false)
        const newCart = await cartsServices.createCart()
        const newUser = { email, password: createHas(password), cartId: newCart._id, ...rest }
        console.log(newUser);
    } catch (error) { console.error("Error al crear usuario", error); }
}
export const validateUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await usersServices.findUserByEmail(email)
        if (!user) return res.send({ user: false })
        if (!validateHas(password, user)) return res.send({ password: false })


    } catch (error) { console.error("Error al validar usuario", error.message) }
}