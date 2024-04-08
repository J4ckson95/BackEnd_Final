import { Router } from "express";
import { addProduct, getCart } from "../Controller/carts.controller.js"
import { cookieExtractor } from "../Middlewares/middlewares.js"

const router = Router()

router.patch("/product/:pid", cookieExtractor, addProduct)
router.get("/", cookieExtractor, getCart)

export default router