import axios from 'axios';

function giphy() {

    const apiKey = 'bS07LFfS4YxZqE5wTrcPGMTJfPTO2LxP';
    const res = axios.get(`https://api.giphy.com/v1/gifs/trending&api_key=${apiKey}&rating=g&limit=5`);
    console.log(res.data.data)  
}

export default giphy