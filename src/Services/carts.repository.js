export default class cartRepository {
    constructor(dao) {
        this.dao = dao
    }
    async createCart() {
        return this.dao.createCart()
    }
    async findCart(cid) {
        return this.dao.findCartById(cid)
    }
    async getCart(cid) {
        return this.dao.getCart(cid)
    }
    async updateCart(cid, newData) {
        return this.dao.updateCart(cid, newData)
    }
}