import { Products } from "../DAO/factory.js";
import productRepository from "./products.repository.js";

export const productServices = new productRepository(new Products())