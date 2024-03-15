import Express from "express";
import config from "./Config/config.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import productsRouter from "./Router/products.router.js"
import userRouter from "./Router/users.router.js"

const app = Express()
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use("/api/products", productsRouter)
app.use("/api/users", userRouter)

app.listen(config.PORT, () => console.log("Running Server ..!"))