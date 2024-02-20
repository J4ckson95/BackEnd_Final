import { productServices } from "../Services/main.js";

export const getProducts = async (req, res) => {
    try {
        const { limit = 6, page = 1, query = {}, sort = "desc" } = req.query;
        const sortOrder = sort === "asc" ? 1 : -1;
        const search = { limit, page, query, sortOrder }
        const data = await productServices.getProducts(search)
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