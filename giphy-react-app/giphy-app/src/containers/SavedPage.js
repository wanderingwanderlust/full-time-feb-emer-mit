import axios from "axios"
import {useEffect, useState} from 'react';
import GifViewer from "../components/gifs/GifViewer";


function SavedPage() {

    const [userGifs, setUserGifs] = useState([])

    useEffect(() => {
        fetchGifs();
    }, []);


    const fetchGifs =  async () => {
        const userId = localStorage.getItem('user')

        const res = await axios.get('gifs', {
            params: {
                "user": {
                    "id": userId
                } 
            }
        })
        setUserGifs(res.data)
    }

    const remove = async (id) => {
        console.log(id)
        await axios.delete(`gifs/delete/${id}`,);
        await fetchGifs();
    }

    return (
        <div>
            <h1>Welcome to the Saved Page</h1>
            <GifViewer 
                gifs={userGifs}
                buttonAction={remove}
                buttonText={'Delete'} />
        </div>
    )
}

export default SavedPage;