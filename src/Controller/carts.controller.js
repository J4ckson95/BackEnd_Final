import { cartsServices } from "../Services/main.js"

export const addProduct = async (req, res) => {
    const { pid } = req.params
    const { user } = req.user
    try {
        const result = await cartsServices.addProductToCart(user.cartId, pid)
        if (result) return res.send({ status: "Success" })
    } catch (error) { console.error(error.message); }
}
export const getCart = async (req, res) => {
    const { user } = req.user
    try {
        const query = await cartsServices.getCart(user.cartId)
        res.send({ payload: query })
    } catch (error) { console.error(error.message); }
}