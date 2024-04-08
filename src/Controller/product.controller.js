import { productsServices } from "../Services/main.js";

export const getProducts = async (req, res) => {
    try {
        const { limit = 5, page = 1, query = {}, sort = "desc" } = req.query;
        const sortOrder = sort === "asc" ? 1 : -1;
        const search = { limit, page, query, sortOrder }
        const data = await productsServices.getProducts(search)
        const { docs: payload, page: pageM, hasPrevPage, prevPage, hasNextPage, nextPage, totalPages } = data;
        res.send({
            status: "Success",
            payload,
            totalPages,
            prevPage,
            nextPage,
            page: pageM,
            hasPrevPage,
            hasNextPage,
            prevLink: hasPrevPage ? `/api/products/?page=${prevPage}&limit=${limit}&sort=${sort}` : null,
            nextLink: hasNextPage ? `/api/products/?page=${nextPage}&limit=${limit}&sort=${sort}` : null,
        });
    } catch (error) { res.json({ status: "Error", message: error.message }) }
}
export const findProductById = async (req, res) => {
    try {
        const { pid } = req.params
        const product = await productsServices.getProductById(pid)
        if (product) return res.json({ status: "Success", payload: product })
    } catch (error) { console.error("No se pudo encontrar producto", error.message); }
}
export const addProduct = async (req, res) => {
    try {
        const newProduct = req.body
        const response = await productsServices.addProduct(newProduct)
        if (response) return res.json({ status: "Succes" })
    } catch (error) { console.error(`No se puedo añadir prodocto. Error: ${error.message}`) }
}
export const updateProduct = async (req, res) => {
    try {
        const { pid } = req.params
        const newData = req.body
        const response = await productsServices.updateProduct(pid, newData)
        if (response) return res.json({ status: "Succes" })
    } catch (error) { console.error(`Error no se puedo actualizar producto con id: ${pid}. Error: ${error.message}`) }
}
export const deleteProduct = async (req, res) => {
    try {
        const { pid } = req.params
        const response = await productsServices.deleteProduct(pid)
        if (response) return res.json({ status: "Success" })
    } catch (error) { console.error(``) }
}