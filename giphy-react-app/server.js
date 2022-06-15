import express from 'express';
import bodyParser from 'body-parser'
import * as graph from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import 'dotenv/config';
import cors from 'cors';
import { graphql } from 'graphql';
import mongoose from 'mongoose';

import gifRouter from './routes/gifs.js'
import authRouter from './routes/auth.js'

const app = express();
const c = cors;
const port = 3001;
const mongoUrl = 'mongodb+srv://glindeman:test@giphy.wpgyorv.mongodb.net/?retryWrites=true&w=majority';

console.log(process.env.SECRET)

// connect to mongoose db

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect(mongoUrl)

app.use(express.urlencoded({extended: false}))
app.use(c());


// Graphql
const QueryRoot = new graph.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        test: {
            type: graph.GraphQLString,
            resolve: () => "I love you all!"
        }
    })
})

const schema = new graph.GraphQLSchema({query: QueryRoot});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));


app.get('/', (req, res) => {
    res.send('<html><body><h1>Hello</h1></body></html>')
})

// app.get('/gifs', (req, res) => {
//     res.json(db.gifs)
// })


app.post('/users', (req, res) => {
    res.json(req.body)
})

app.use('/auth', authRouter)

app.use('/gifs', gifRouter)



app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})