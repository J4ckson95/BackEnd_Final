import Express from "express";
import productsRouter from "./Router/products.router.js"
import config from "./Config/config.js"
import cors from "cors"

const app = Express()
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cors())
app.use("/api/products", productsRouter)

app.listen(config.PORT, () => console.log("Running Server ..!"))