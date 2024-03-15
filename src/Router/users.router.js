import { Router } from "express";
import { createUser } from "../Controller/user.controller.js"

const router = Router()
router.post("/register", createUser)
export default router