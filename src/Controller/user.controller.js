import { usersServices } from "../Services/main.js"

export const createUser = async (req, res) => {
    try {
        const { email, password, ...rest } = req.body
        const user = await usersServices.findUserByEmail(email)
        if (user) return res.send(false)
    } catch (error) { console.error("Error al crear usuario", error); }


}