import { Carousel } from 'react-bootstrap';

function CarouselStrap(props) {

  const propImages = props.images

  console.log(props)
  console.log('props')
  console.log(propImages)

  return (
    
    <Carousel>
      { 
      propImages.map((image, key) => {
      return (
      <Carousel.Item>
        <div key={key}>
        <img
          className="d-block w-100"
          src={image.images.downsized_medium.url}
          alt="First slide"
       />
       <Carousel.Caption>
         <h3>{image.title}</h3>
         <p></p>
       </Carousel.Caption>
       </div>
     </Carousel.Item>
      )})
    }
    </Carousel>
  )

}

export default CarouselStrap;