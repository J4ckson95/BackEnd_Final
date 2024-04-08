import passport from "passport";
import config from "./config.js";
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { usersServices, cartsServices } from "../Services/main.js";
import userModel from "../DAO/mongo/model/user.model.js";


const initializedPassport = () => {
    passport.serializeUser((user, done) => {
        done(null, user._id)
    })
    passport.deserializeUser(async (id, done) => {
        const user = await userModel.findById(id)
        done(null, user)
    })
    passport.use("google", new GoogleStrategy({
        clientID: config.clientID,
        clientSecret: config.clientSecret,
        callbackURL: "http://localhost:8080/api/users/login/google/callback"
    }, async (req, accessToken, refreshToken, profile, done) => {
        try {
            let user = await usersServices.findUserByEmail(profile.email)
            if (user) return done(null, user)
            const newCart = await cartsServices.createCart()
            const newUser = await usersServices.createUser({
                first_name: profile.given_name,
                last_name: profile.family_name,
                email: profile.email,
                cartId: newCart._id
            })
            return done(null, newUser)
        } catch (error) { res.json({ status: "Error", message: error.message }) }
        return done(null, newUser)
    }))

}
export default initializedPassport