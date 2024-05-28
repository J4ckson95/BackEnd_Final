import { Router } from "express";
import { PaymentIntent } from "../Controller/stripePayment.controller.js";

const router = Router()
router.post("/create-payment-intent", PaymentIntent)
export default router
