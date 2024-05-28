import config from "../Config/config.js";
import stripePackage from "stripe"
export const PaymentIntent = (req, res) => {
    const { payload } = req.body
    const stripe = stripePackage(config.StripeSecrectKey);
    console.log(payload);

}