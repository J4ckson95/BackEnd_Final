export default class cartRepository {
    constructor(dao) {
        this.dao = dao
    }
    async createCart() { return this.dao.createCart() }
    async addProductToCart(cid, pid) {
        const cart = await this.dao.findCartById(cid)
        if (cart) {
            const indexProduct = cart.products.findIndex(element => element._id.toString() === pid)
            if (indexProduct === -1) cart.products.push({ _id: pid, quantity: 1 })
            else cart.products[indexProduct].quantity += 1
        }
        return await this.dao.updateCart(cid, cart)
    }
    async findCart(cid) {
        return this.dao.findCartById(cid)
    }
    async getCart(cid) {
        return this.dao.getCart(cid)
    }
}