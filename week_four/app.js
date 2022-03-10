

// grab the html gifContainer
const gifContainer = document.getElementById('gif-container');

async function fetchGifs() {
    gifContainer.innerHTML = '';
    
    const query = document.getElementById('gif-input').value;

    if(query) {
        const response = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=jy3V7h0N1DJje2cGCU65S1WR51I8Lv6o&q=${query}`);
        console.log(response)

        if(!response.ok) {
            alert('something went wrong');
        }

        const responseJson = await response.json();
        console.log('json is here')
        console.log(responseJson);
        // display the gifs
        renderGifs(responseJson.data)
    }


    function renderGifs(gifs) {
        gifs.forEach((gif) => {
            const newImage = document.createElement('img');
            console.log(gif)
            newImage.setAttribute('src', gif.images.original.url);
            // newImage.setAttribute('alt-src', gif.image.original_still.url)
            newImage.setAttribute('alt', gif.title)

            // newImage.onClick = () => {
            //     const currentUrl = newImage.getAttribute('src');
            //     const altUrl = newImage.getAttribute('alt-src');
                
            //     newImage.setAttribute('src', altUrl)
            //     newImage.setAttribute('alt-src', currentUrl)
            // }

            gifContainer.append(newImage)

        })
    }

}