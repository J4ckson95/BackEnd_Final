import { Products, Users, Carts } from "../DAO/factory.js";
import productRepository from "./products.repository.js";
import usersRepository from "./users.repository.js"
import cartRepository from "./carts.repository.js";

export const productsServices = new productRepository(new Products())
export const usersServices = new usersRepository(new Users())
export const cartsServices = new cartRepository(new Carts())