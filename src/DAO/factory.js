import config from "../Config/config.js";
import mongoose from "mongoose";

export let Products
export let Carts
export let Users
export let Tickets

switch (config.PERSISTENCE) {
    case "MONGO":
        await mongoose.connect(config.MONGOURL, { dbName: config.DBNAME })
            .then(() => console.log("DataBase Connected"))
        const { default: ProductsMongo } = await import("./mongo/products.mongo.js")
        const { default: CartsMongo } = await import("./mongo/carts.mongo.js")
        const { default: UsersMongo } = await import("./mongo/user.mongo.js")
        const { default: TicketsMongo } = await import("./mongo/ticket.mongo.js")
        Products = ProductsMongo
        Carts = CartsMongo
        Users = UsersMongo
        Tickets = TicketsMongo
        break;
    default:
        break;
}