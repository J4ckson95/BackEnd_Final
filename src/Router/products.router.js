import { Router } from "express";
import { getProducts, findProductById, addProduct, updateProduct, deleteProduct } from "../Controller/product.controller.js";
import { cookieExtractor, authUser } from "../Middlewares/middlewares.js";


const router = Router()
router.get("/", getProducts)
router.get("/:pid", findProductById)
router.post("/", cookieExtractor, authUser(["admin"]), addProduct)
router.patch("/:pid", updateProduct)
router.delete("/:pid", deleteProduct)
export default router