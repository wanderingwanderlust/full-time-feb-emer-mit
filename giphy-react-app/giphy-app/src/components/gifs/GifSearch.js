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

    const save = (gif) => {
        console.log('saving gif')
       console.log(gif)
    }

    const remove = (index) => {
        const newArray = savedGifs.filter((gif, key) => key !== index);
        setSavedGifs(newArray);
        localStorage.setItem('savedGifs', JSON.stringify(newArray));
    }

    return (
        <div>
            <h3>Saved Gifs</h3>
            <GifViewer
                gifs={savedGifs}
                buttonAction={remove}
                buttonText={'delete'}
            />
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
                    buttonText={'save'}
                />
            </div>

        </div>
    )
}

export default GifSearch;