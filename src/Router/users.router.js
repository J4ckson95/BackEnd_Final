import { Router } from "express";
import { createUser, validateUser, getDataUser } from "../Controller/user.controller.js"
import { cookieExtractor } from "../Middlewares/middlewares.js";
import { loginGoogle } from "../Controller/loginGoogle.controller.js"
import passport from "passport";

const router = Router()
router.post("/register", createUser)
router.post("/login", validateUser)
router.get(
    "/login/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
)
router.get(
    "/login/google/callback",
    passport.authenticate("google"),
    loginGoogle
)
router.get("/getuser", cookieExtractor, getDataUser)
export default router