import { useEffect, useState } from 'react';
import { Formik } from 'formik';
// import jsonwebtoken from "jsonwebtoken";
import GifViewer from './GifViewer';
import axios from 'axios';

// We will need some css to style this
function GifSearch() {
    const apiKey = 'bS07LFfS4YxZqE5wTrcPGMTJfPTO2LxP';
    const [input, setInput] = useState('');
    const [gifs, setGifs] = useState([]);
    const [savedGifs, setSavedGifs] = useState([]);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdsaW5kZW1hbjUiLCJpZCI6IjYyOTlmOGUzNWFiN2E4MzViYmUwNTdiZiIsImlhdCI6MTY1NTIzNzE1NCwiZXhwIjoxNjU1MjQ0MzU0fQ.5k5PyliXnxzkFq-z2PCIK98MoUtQeebEoY5s4o7yvb4';
    const accessTokenSecret = 'sdklajdklasjdklsajdkal';


    
    useEffect(() => {
    
    }, [])

    const search = async (event) => {
        event.preventDefault();
        if (!input) return;

        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?&q=${input}&api_key=${apiKey}&rating=g&limit=10`);
        console.log(res.data.data)
        setGifs(res.data.data)
    }

    const save = (gif_url) => {
        // create object we want to send
        /*
        *    {
        *        "url": "https://media2.giphy.com/media/JFjDf7Yp4KyGsZtVua/giphy.gif?cid=df05885d4fb91z3fyrqja18ukszg1ouhlzmsj386em6ykmqm&rid=giphy.gif&ct=g",
        *        "user": {
        *            "id": "6299f8e35ab7a835bbe057bf"
        *        }
        *    }
        */
       const gifToPost = {
        "url": gif_url,
        "user": {
            "id": localStorage.getItem('user')
        }
       }
       axios.post('gifs', gifToPost).then((res) => {
        console.log(res)
       })
    }

    return (
        <div>
            <div>
                <h3>Search for Gifs</h3>
                <form onSubmit={search}>
                    <input value={input} onChange={(event) => setInput(event.target.value)} />
                    <button>Search</button>
                </form>
            </div>

            <div>
                <GifViewer
                    gifs={gifs}
                    buttonAction={save}
                    buttonText={'Save'}
                />
            </div>

        </div>
    )
}

export default GifSearch;