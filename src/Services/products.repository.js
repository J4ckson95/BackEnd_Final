export default class productRepository {
    constructor(dao) {
        this.dao = dao
    }
    async getProducts(query) { return this.dao.getProducts(query) }
    async getProductById(pid) { return this.dao.getProductById(pid) }
    async addProduct(newProduct) { return this.dao.createProduct(newProduct) }
    async updateProduct(pid, newData) { return this.dao.updateProduct(pid, newData) }
    async deleteProduct(pid) { return this.dao.deleteProduct(pid) }
}