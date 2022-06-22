import GifSearch from "./GifSearch"

const GifViewer = ({gifs, buttonAction, buttonText}) => (
    <div className="gif-container">
        {gifs.map((gif, key) => {
            return(
                <div key={key} className='gif-container'>
                    <img src={buttonText === "Save" ? 
                                gif.images.fixed_width.url
                                : gif.url
                                }  alt={gif.title} 
                    />
                    <button onClick={() => buttonAction(buttonText === 'Save' 
                            ?  gif.images.fixed_width.url 
                            : gif._id)}
                    >
                        {buttonText}
                    </button>
                </div>
            )
        })}
    </div>
)

export default GifViewer