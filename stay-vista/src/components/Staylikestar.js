import React from 'react';
import Slider from 'react-slick';
import { Container, Card, Button } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  const cardData = [
    { id: 1, name: 'MS Dhoni', location: 'Stayed at: Shimla Manor', image: 'https://img.vistarooms.com/cdn-cgi/image/width=520px,quality=90/https://images.prismic.io/stay-vista/83d683bf-9302-4cea-91f3-9150e248a1d3_Dhoni+%40Whispering+Pines.jpeg?auto=compress,format' },
    { id: 2, name: 'Vijay Devargonda', location: 'Stayed at: Waterwillow', image: 'https://img.vistarooms.com/cdn-cgi/image/width=520px,quality=90/https://images.prismic.io/stay-vista/5df28611-b092-43c8-a982-ee96a36b9658_WhatsApp+Image+2023-04-26+at+1.12.28+PM.jpeg?auto=compress,format' },
    { id: 3, name: 'Ananya Panday', location: 'Stayed at : Villa Amarillo', image: 'https://img.vistarooms.com/cdn-cgi/image/width=520px,quality=90/https://images.prismic.io/stay-vista/3fdfa100-482b-43a9-bdc0-7ba46c515a88_Ananya+Panday.jpeg?auto=compress,format' },
    { id: 4, name: 'Sara Ali Khan', location: 'Stayed at: Geometric', image: 'https://img.vistarooms.com/cdn-cgi/image/width=520px,quality=90/https://images.prismic.io/stay-vista/2331a9e9-099a-4225-bf31-af28b964e1d9_Soha+Ali+Khan.jpg?auto=compress,format' },
    { id: 5, name: 'Surya Kumar Yadav', location: 'Stayed at: The Barn', image: 'https://img.vistarooms.com/cdn-cgi/image/width=520px,quality=90/https://images.prismic.io/stay-vista/a62290a9-0181-4976-883a-45bf7076a8ec_image00007.jpg?auto=compress,format' },
    { id: 6, name: 'Vijay Devargonda', location: 'Stayed at: Waterwillow', image: 'https://img.vistarooms.com/cdn-cgi/image/width=520px,quality=90/https://images.prismic.io/stay-vista/5df28611-b092-43c8-a982-ee96a36b9658_WhatsApp+Image+2023-04-26+at+1.12.28+PM.jpeg?auto=compress,format' },
    { id: 7, name: 'Ananya Panday', location: 'Stayed at : Villa Amarillo', image: 'https://img.vistarooms.com/cdn-cgi/image/width=520px,quality=90/https://images.prismic.io/stay-vista/3fdfa100-482b-43a9-bdc0-7ba46c515a88_Ananya+Panday.jpeg?auto=compress,format' },
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of slides to show on a desktop view
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // tablet view
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // mobile view
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container >
        <h4>STAY LIKE THE STARS</h4>
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id}>
            <Card style={{ width: '15rem', margin: '10px' }}>
              <Card.Img variant="top" src={card.image} style={{height:238, width:238}} />
              <Card.Body>
                <Card.Title >{card.name}</Card.Title>
                <Card.Text class="small">{card.location}</Card.Text>
                <button type="button" class="btn btn-outline-dark">View</button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default CardSlider;
