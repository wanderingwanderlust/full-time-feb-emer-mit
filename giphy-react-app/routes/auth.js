import express from "express";
import jsonwebtoken from "jsonwebtoken";
import User from '../models/User.js';

const accessTokenSecret = 'sdklajdklasjdklsajdkal';
const refreshTokenSecret = 'fdksfjsdklfjsdklfj';
let refreshTokens = [];
const router = express.Router();

// login = www.example.com/auth/login
router.post('/login', (req, res) => {
    const { username, password } = req.body
    console.log(username)
    console.log(password)
    
    User.findOne({username: username}, (err, user) => {
        if(err) {
            res.status(401).json(`${err}`)
        }
        if(!user) {
            res.status(200).json('User does not exists, please create an account')
        }

        user.comparePassword(password, (err, isMatch) => {
            if(err) {
                console.log('test')
                console.log(err)
            }

            if(isMatch) {
                const accessToken = jsonwebtoken.sign(
                    { username: user.username, id: user._id }, // token
                    accessTokenSecret, // secret used to sign the token
                    { expiresIn: '120m' } //tokenDetails
                )
                const refreshToken = jsonwebtoken.sign({ username: user.username, id: user._id  }, refreshTokenSecret);
                
                
                const decodedUser = jsonwebtoken.verify(accessToken, accessTokenSecret)
                console.log('is this the user?')
                console.log(decodedUser)
                
                
                refreshTokens.push(refreshToken)
                console.log(accessToken)
                console.log(refreshToken)
                res.json({accessToken, refreshToken, decodedUser})
            }
        })

    })


})

// sign up
router.post('/signup', (req, res) => {
    const { username, password } = req.body;

    User.findOne({username: username}, (err, user) => {
        if(user) {
            res.send(200).send('Username Already Exisits')
        } else {
            User.create({
                username: username,
                password: password
            }, (userErr, user) => {
                if(userErr) {
                    console.log(userErr)
                    res.status(404).send(userErr)
                } else {
                    res.send('success')
                }
            })
        }
    })

})


//logout - remove refresh token from the server
router.post('/logout', (req, res) => {
    // write the code to remove the token
})


export default router;