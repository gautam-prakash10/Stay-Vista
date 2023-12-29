import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from "../images/img.jpeg"
import img2 from "../images/sbc.jpeg"
import img3 from "../images/abs.jpeg"

import "./CarouselPage.css"
function CarouselPage() {
  return (
    <div> 
    <Carousel>
    <Carousel.Item>
      <img style={{height:"70vh"}}
      className="d block w-100"
      src={img1} alt="first slide"/>
      <Carousel.Caption>
      <h2 className="txt1">AWARDED FOR EXCELLENCE IN HOMESTAYS</h2>
      <button className="btn1">Best Rated Vistas</button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:"70vh"}}
      className="d block w-100"
      src={img2} alt="second slide" />
      <Carousel.Caption>
      <h2 className="txt1">Book Rooms IN Lavish Pool Villas</h2>
          <button className="btn1">Explore Rooms</button>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:"70vh"}}xx
      className="d block w-100"
      src={img3} alt="third slide"/>
      <Carousel.Caption>
      <h2 className="txt1" >Newley Launched Vistas</h2>
     <button className="btn1">View Collection</button>

      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  )
}

export default CarouselPage