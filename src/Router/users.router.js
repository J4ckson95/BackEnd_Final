import { Router } from "express";
import { createUser, validateUser } from "../Controller/user.controller.js"

const router = Router()
router.post("/register", createUser)
router.get("/login", validateUser)
export default router