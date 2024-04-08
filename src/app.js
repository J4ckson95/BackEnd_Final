import Express from "express";
import cookieParser from "cookie-parser";
import config from "./Config/config.js"
import cors from "cors"
import productsRouter from "./Router/products.router.js"
import userRouter from "./Router/users.router.js"
import cartRouter from "./Router/carts.router.js"
import initializedPassport from "./Config/authGoogle.config.js";
import passport from "passport";
import session from "express-session"

const app = Express()

app.use(cookieParser())
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}))
initializedPassport()
app.use(passport.initialize())
app.use(passport.session())
app.use("/api/products", productsRouter)
app.use("/api/users", userRouter)
app.use("/api/carts", cartRouter)

app.listen(config.PORT, () => console.log("Running Server ..!"))