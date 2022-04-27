import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import GifViewer from './GifViewer';
import axios from 'axios';

// We will need some css to style this
function GifSearch() {
    const apiKey = 'bS07LFfS4YxZqE5wTrcPGMTJfPTO2LxP';
    const [input, setInput] = useState('');
    const [gifs, setGifs] = useState([]);
    const [savedGifs, setSavedGifs] = useState([]);
    useEffect(() => {
        const savedGifs = localStorage.getItem('savedGifs');
        if(savedGifs) setSavedGifs(JSON.parse(savedGifs));
    }, [])

    const search = async (event) => {
        event.preventDefault();
        if (!input) return;

        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?&q=${input}&api_key=${apiKey}&rating=g&limit=10`);
        console.log(res.data.data)
        setGifs(res.data.data)
    }

    const save = (gif) => {
        const newArray = [...savedGifs, gif];
        console.log('checking the new array')
        console.log(newArray)
        setSavedGifs(newArray);
        console.log('----------')
        console.log(JSON.stringify(newArray))
        localStorage.setItem('savedGifs', JSON.stringify(newArray));
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



            <h4>Search GIFS with the power of Formik</h4>


            <Formik
                initialValues={{ input: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.input === '' || !values.input === null) {
                    errors.input = 'Required';
                    }
                    return errors;
                }}
                onSubmit={({ search })}
            >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         onSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={onSubmit}>
           <input
             type="input"
             name="input"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.input}
           />
           {errors.input && touched.input && errors.input}
    

           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>




                {/* Create a form with */}
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