import { Router } from "express";
import { getProducts } from "../Controller/product.controller.js";

const router = Router()
router.get("/", getProducts)

export default router