import { usersServices, cartsServices } from "../Services/main.js"
import { createHas, validateHas, generateToken } from "../utils.js"
import { registerDTO } from "../DTO/DTO.js"
export const createUser = async (req, res) => {
    try {
        const { email, password, ...rest } = req.body
        const user = await usersServices.findUserByEmail(email)
        if (user) return res.status(409).send({ error: 'El usuario ya existe.' });
        const newCart = await cartsServices.createCart()
        const newUser = { email, password: createHas(password), cartId: newCart._id, ...rest }
        const data = new registerDTO(newUser)
        const result = await usersServices.createUser(data)
        if (result) return res.status(201).send({ status: 'Success', message: 'Usuario creado exitosamente.' });
        else return res.status(500).send({ error: 'Ocurrió un error al crear el usuario.' });
    } catch (error) { return res.status(500).send({ error: 'Ocurrió un error en el servidor.' }); }
}
export const validateUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await usersServices.findUserByEmail(email)
        if (!user) return res.send({ user: false })
        if (!validateHas(password, user)) return res.send({ password: false })
        const token = generateToken(user)
        res.cookie("authToken", token, { maxAge: 900000 }).send({ status: 200 })
    } catch (error) { console.error("Error al validar usuario", error.message) }
}
export const getDataUser = async (req, res) => {
    try {
        const { user } = req.user
        const dataUser = await usersServices.findUserByEmail(user.email)
        res.send({ data: dataUser })
    } catch (error) { console.error(error.message) }
}

