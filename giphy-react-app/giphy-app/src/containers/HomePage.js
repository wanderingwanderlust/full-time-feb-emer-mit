import CarouselStrap from "../components/partials/CarouselStrap";
// import 'dotenv/config';
import { useEffect, useState } from 'react';
import CardStrap from "../components/partials/CardStrap";
import axios from "axios";

function HomePage() {

    
    // const db_user = {
    //     api_key: process.env.GIPHY_API_KEY ,
    //     secret:
    // }

    // console.log('env keys')
    // console.log(process.env.GIPHY_API_KEY)

    const [homeImages, setHomeImages] = useState([]);
    useEffect( () => {
       getDBItems()
    }, [])

    // async function getImages() {
    //     const res = await axios.get(`https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}&rating=g&limit=5`);
    //     console.log(res)
    //     setHomeImages(res)
    // }


    async function getDBItems() {
        const res = await axios.get('http://localhost:3001/gifs');
        console.log(res)
        setHomeImages(res)
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