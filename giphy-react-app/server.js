import express from 'express';
import 'dotenv/config';

const app = express();
const port = 3001;

console.log(process.env.SECRET)

app.use(express.urlencoded({extended: false}))

const db = {
    gifs: [
        {
            image: 'test.png',
            description: 'fjdsklfjksdlfjk'
        },
        {
            image: 'test_2.png',
            description: 'fjdsklfjksdlfjk'
        },
    ],
    users: [
        {
            username: 'greg',
            password: 'notencryptedyet'
        }
    ]
}

app.get('/', (req, res) => {
    res.send('<html><body><h1>Hello</h1></body></html>')
})

app.get('/gifs', (req, res) => {
    res.json(db.gifs)
})


app.post('/users', (req, res) => {
    res.json(req.body)
})



app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})