import express from "express";
import jsonwebtoken from "jsonwebtoken";
import User from '../models/User.js';

const accessTokenSecret = 'sdklajdklasjdklsajdkal';
const router = express.Router();

// login = www.example.com/auth/login
router.post('/login', (req, res) => {
    const { username, password } = req.body
    
    User.findOne({username: username}, (err, user) => {
        if(err) {
            res.status(401).json(`${err}`)
        }
        if(!user) {
            res.status(200).json('User does not exists, please create an account')
        }

        user.comparePassword(password, (err, isMatch) => {
            if(err) {
                console.log(err)
            }

            if(isMatch) {
                const accessToken = jwt.sign(
                    { username: user.username, id: user._id }, // token
                    accessTokenSecret, // secret used to sign the token
                    { expiresIn: '120m' } //tokenDetails
                )
                res.json(accessToken)
            }
        })

    })


})

// sign up
router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    // if username already exists, prompt user to login
    // else create user
})


//logout - remove refresh token from the server
router.post('/logout', (req, res) => {
    // write the code to remove the token
})


export default router;