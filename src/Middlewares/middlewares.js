import { descripToken } from "../utils.js"
export const cookieExtractor = (req, res, next) => {
    const token = req?.cookies ? req.cookies["authToken"] : null
    if (token) {
        const user = descripToken(token)
        req.user = user
        return next()
    }
}
export const authUser = (roles) => {
    return (req, res, next) => {
        const { user } = req.user
        if (roles.includes(user.rol)) return next()
        res.json({ authUser: false })
    }
}