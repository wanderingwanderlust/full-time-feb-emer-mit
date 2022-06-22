import express from "express";
import Gif from "../models/Gif.js";
import axios from "axios";

const router = express.Router();
const apiKey = 'bS07LFfS4YxZqE5wTrcPGMTJfPTO2LxP';

// GET - Grabs all the User's Gifs
// Param: User_Id
// Response: Json_Obj -> GifSchema
router.get('/', (req, res) => {
    console.log('this is inside the gif model')
    const user = JSON.parse(req.query.user);
    const userId = user.id
    
    
    Gif.find({user: userId}, (err, gifs) => {
        if(err) {
            console.log(err)
            res.send('error')
        }else {
            res.send(gifs)
        }
    })
})


router.post('/', (req, res) => {

    // write code that will verify our user

    Gif.create( {url: req.body.url, user: req.body.user.id }, (err, gif) => {
        if(err) {
            console.log(err)
            res.send('error')
        }else {
            res.send('success')
        }
    })
})

router.put('/update/:id', (req,res) => {
    Gif.findByIdAndUpdate(req.params.id, {url: req.body.url}, (err, result) => {
        if(err) {
            console.log(err)
            res.send('error')
        } else {
            console.log(result)
            res.send('successfully updated')
        }
    })
})

router.delete('/delete/:id', (req,res) => {
    Gif.findByIdAndDelete(req.params.id, (err, result) => {
        if(err) {
            console.log(err)
            res.send('error')
        } else {
            console.log(result)
            res.send('successfully deleted')
        }
    })
});


router.get('/search', async (req, res) => {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?&q=${req.query.input}&api_key=${apiKey}&rating=g&limit=10`);
    res.send(response.data.data)

})



export default router;