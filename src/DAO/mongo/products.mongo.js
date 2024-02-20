import productModel from "./model/products.model.js";

export default class products {
    async getProducts({ limit, page, query, sortOrder }) {
        try {
            return await productModel.paginate(query, { limit, page, sort: { price: sortOrder }, lean: true })
        } catch (error) { console.error("Error en getProducts:", error.message); }
    }
    async getProductById(pid) {
        try {
            const product = await productModel.findById(pid);
            if (!product) throw new Error("Producto no encontrado");
            return product;
        } catch (error) { console.error("Error en getProductById:", error.message); }
    }
    async createProduct(product) {
        try {
            return productModel.create(product)
        } catch (error) { console.error("Error en createProduct:", error.message); }
    }
    async updateProduct(id, newData) {
        try {
            return productModel.updateOne({ _id: id }, { $set: newData })
        } catch (error) { console.error("Error en updateProduct:", error.message); }
    }
    async deleteProduct(id) {
        try {
            return productModel.deleteOne({ _id: id })
        } catch (error) { console.error("Error en deleteProduct:", error.message); }
    }
}