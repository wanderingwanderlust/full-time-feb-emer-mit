import CarouselStrap from "../components/partials/CarouselStrap";
// import 'dotenv/config';
import { useEffect, useState } from 'react';
import CardStrap from "../components/partials/CardStrap";
import axios from "axios";

function HomePage() {
    const apiKey = 'bS07LFfS4YxZqE5wTrcPGMTJfPTO2LxP'

    const [homeImages, setHomeImages] = useState([]);
    const [dbGifs, setDBGifs] = useState([]);
   
    useEffect( () => {
       getDBItems()
       getImages()
    }, [])

    async function getImages() {
        // if(homeImages.length === 0) {
            const res = await axios.get(`https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}&rating=g&limit=5`);
            setHomeImages(res.data.data)
        // }
    }


    async function getDBItems() {
        const res = await axios.get('http://localhost:3001/gifs');
        console.log('db items')
        console.log(res.data)
        setDBGifs(res.data)
        console.log('dbgifs')
        console.log(dbGifs[0].description)
        // setHomeImages(res)
    }
    



    return (
        <div className="container">
            <h1>Welcome to the Giphy App</h1>
            <CarouselStrap images={homeImages} />
            <div className="row">
                <CardStrap />
            </div>

        </div>
    )
}


export default HomePage;