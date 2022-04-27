import { Carousel } from 'react-bootstrap';
import {useState} from 'react'

function CarouselStrap(props) {

  const [carouselImage, setCarouselImage] = useState(props.images)
  const propImages = []

  console.log('state')
  console.log(carouselImage)

  console.log('props')
  console.log(propImages)

  return (
    
    <Carousel>
      { 
      propImages.map((image) => {
      return (<Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/123/1200/600"
          alt="First slide"
       />
       <Carousel.Caption>
         <h3>First slide label</h3>
         <p></p>
       </Carousel.Caption>
     </Carousel.Item>
      )})
    }
      
    </Carousel>
  )

}

export default CarouselStrap;