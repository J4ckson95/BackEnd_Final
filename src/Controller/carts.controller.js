import { cartsServices } from "../Services/main.js"

export const addProduct = async (req, res) => {
    const { pid } = req.params
    const { user } = req.user
    try {
        const cart = await cartsServices.findCart(user.cartId)
        if (cart) {
            const indexProduct = cart.products.findIndex(element => element.product.toString() === pid)
            if (indexProduct === -1) cart.products.push({ product: pid, quantity: 1 })
            else cart.products[indexProduct].quantity += 1
        }
        const result = await cartsServices.updateCart(user.cartId, cart)
        if (result) return res.send({ status: "Success" })
    } catch (error) { console.error(error.message); }
}
export const getCart = async (req, res) => {
    const { user } = req.user
    try {
        const query = await cartsServices.getCart(user.cartId)
        res.send({ payload: query.products })
    } catch (error) { console.error(error.message); }
}
export const updateProducts = async (req, res) => {
    try {
        const { pid, quantity } = req.params
        const { user } = req.user
        const cart = await cartsServices.findCart(user.cartId)
        if (cart) {
            const indexProduct = cart.products.findIndex(element => element.product.toString() === pid)
            cart.products[indexProduct].quantity = quantity
        }
        const result = await cartsServices.updateCart(user.cartId, cart)
        if (result) res.send({ status: 200 })
    } catch (error) { console.error(error.message); }
}