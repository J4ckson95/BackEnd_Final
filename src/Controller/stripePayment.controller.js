import config from "../Config/config.js";
import stripePackage from "stripe"

const stripe = stripePackage(config.StripeSecrectKey);

export const PaymentIntent = async (req, res) => {
    const { totalPrice } = req.body
    const paymentIntent = await stripe.paymentIntents.create({
        amount: totalPrice,
        currency: "usd",
        automatic_payment_methods: {
            enabled: true
        }
    })
    res.send({ clientSecret: paymentIntent.client_secret })
}