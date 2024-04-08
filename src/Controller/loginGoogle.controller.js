import { generateToken } from "../utils.js"
export const loginGoogle = (req, res) => {
    const token = generateToken(req.user)
    res.cookie("authToken", token, { maxAge: 900000 }).redirect("http://localhost:5173/")
}