export default class cartRepository {
    constructor(dao) {
        this.dao = dao
    }
    async createCart() { return this.dao.createCart() }
}