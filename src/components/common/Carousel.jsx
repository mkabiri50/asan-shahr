import React from "react";
import {Carousel} from 'react-bootstrap'
import image1 from "../../assets/images/p-1.jpg"


const CarouselPic = (props) => {
  let images=props.images
  if (props.images.length===0){
    images=[{name:"fake-image", path:image1}]
  }
  return (
    <Carousel>
 {   images.map(image=>
            <Carousel.Item
            key={image.name}>
            <img
            style={props.style}
              className="d-block w-100"
              src={image.path}
              alt="First slide"
            />
           
          </Carousel.Item>
      )}

 
  </Carousel>
  );
};

export default CarouselPic;
