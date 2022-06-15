const GifViewer = ({gifs, buttonAction, buttonText}) => (
    <div className="gif-container">
        {gifs.map((gif, key) => {
            return(
                <div key={key} className='gif-container'>
                    <img src={gif.images.fixed_width.url}  alt={gif.title} />
                    <button onClick={() => buttonAction(gif.images.fixed_width.url)}>{buttonText}</button>
                </div>
            )
        })}
    </div>
)

export default GifViewer