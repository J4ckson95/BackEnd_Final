import { Router } from "express";
import { addProduct, getCart, updateProducts } from "../Controller/carts.controller.js"
import { cookieExtractor } from "../Middlewares/middlewares.js"

const router = Router()

router.patch("/product/:pid", cookieExtractor, addProduct)
router.get("/", cookieExtractor, getCart)
router.patch("/updatecart/:pid/:quantity", cookieExtractor, updateProducts)

export default router