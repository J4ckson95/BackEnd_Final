import { Products, Users } from "../DAO/factory.js";
import productRepository from "./products.repository.js";
import { usersRepository } from "./users.repository.js"

export const productServices = new productRepository(new Products())
export const usersServices = new usersRepository(new Users())