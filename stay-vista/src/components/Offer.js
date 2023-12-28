import React from 'react';
import Slider from 'react-slick';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => (
  <div {...props} className="slick-arrow slick-next">
    <i className="fas fa-chevron-right" style={{ color:'black'  }}></i>
  </div>
);

// Define PrevArrow component
const PrevArrow = (props) => (
  <div {...props} className="slick-arrow slick-prev">
    <i className="fas fa-chevron-left" style={{ color: 'black' }}></i>
  </div>
);

const Offer = () => {
  const offer = [
    {
      id: 1,
      image: 'https://www.stayvista.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fstay-vista%2F5f29284c-efba-4fea-bcf5-0867965255d2_Group%2B33608.png%3Fauto%3Dcompress%2Cformat&w=48&q=75',
      description: 'Use code NYE15 and get 15% off on your next gateway.',
      date: 'Date',
      code: 'NYE15',
    },
    {
      id: 2,
      image: 'https://www.stayvista.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fstay-vista%2F5f29284c-efba-4fea-bcf5-0867965255d2_Group%2B33608.png%3Fauto%3Dcompress%2Cformat&w=48&q=75',
      description: 'Use code NYE15 and get 15% off on your next gateway.',
      date: 'Date',
      code: 'NYE15',
    },
    {
      id: 3,
      image: 'https://www.stayvista.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fstay-vista%2F5f29284c-efba-4fea-bcf5-0867965255d2_Group%2B33608.png%3Fauto%3Dcompress%2Cformat&w=48&q=75',
      description: 'Use code NYE15 and get 15% off on your next gateway.',
      date: 'Date',
      code: 'NYE15',
    },
    {
      id: 4,
      image: 'https://www.stayvista.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fstay-vista%2F5f29284c-efba-4fea-bcf5-0867965255d2_Group%2B33608.png%3Fauto%3Dcompress%2Cformat&w=48&q=75',
      description: 'Use code NYE15 and get 15% off on your next gateway.',
      date: 'Date',
      code: 'NYE15',
    },
    {
      id: 5,
      image: 'https://www.stayvista.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fstay-vista%2F5f29284c-efba-4fea-bcf5-0867965255d2_Group%2B33608.png%3Fauto%3Dcompress%2Cformat&w=48&q=75',
      description: 'Use code NYE15 and get 15% off on your next gateway.',
      date: 'Date',
      code: 'NYE15',
    },
    {
      id: 6,
      image: 'https://www.stayvista.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fstay-vista%2F5f29284c-efba-4fea-bcf5-0867965255d2_Group%2B33608.png%3Fauto%3Dcompress%2Cformat&w=48&q=75',
      description: 'Use code NYE15 and get 15% off on your next gateway.',
      date: 'Date',
      code: 'NYE15',
    },
    // Add more offers as needed
  ];
  // ... your existing code ...

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

 
  return (
    <Container>
      <div>
        <h3 style={{marginLeft:10}}>OFFERS FOR YOU</h3>
      </div>
      <Row>
        <Slider {...settings}>
          {offer.map((offer) => (
            <Col key={offer.id} xs={12} md={6} lg={4} className="mb-4">
              <div style={{ margin: '10px 10px' }}>
            <Card className="rounded">
              <Card.Img src={offer.image}   style={{height:50, width:50, marginLeft:10, marginTop:10}} />
              <Card.Body>
                <Card.Text>{offer.description}</Card.Text>
                <p className="Date">{offer.date}</p>
                <div className="d-flex">
                  <Button className="flex-1 btn-outline-dark" style={{marginLeft:10, width:150,height:50}} type="button">
                    {offer.code}
                  </Button>
                  <Button className="flex-1 ml-2 btn-dark" style={{marginLeft:10, marginRight:10, width:150,height:50}} type="button">
                    Copy code
                  </Button>
                </div>
              </Card.Body>
            </Card>
            </div>
          </Col>
            // ... your existing code ...
          ))}
        </Slider>
      </Row>
      <div className="text-center mb-5 d-flex flex-column align-items-center">
  <p className="mb-3 mt-5 small ">You can add an offer during checkout</p>
  <button type="button" className="btn btn-outline-dark">See All Offers</button>
</div>

<Card className="border-3 mt-5 mb-5" style={{ backgroundImage: 'url("https://stay-vista.cdn.prismic.io/stay-vista/35c78ec1-1708-4a33-90f6-462c858229a2_Desk.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="d-flex flex-column flex-md-row align-items-md-center">
         
          <div className="d-flex flex-column p-2 flex-1 mx-md-3">
            <h3 className="flex-1 mb-3 text-md-leftr">LIST YOUR PROPERTY WITH US!</h3>
            <p className="flex-1 mb-3 text-center text-md-left">
            Join our network of 500+ happy owners and turn your property into a high-revenue holiday destination!
            </p>
          </div>
          <div className='flex-1 p-5'>
          <button type="button" className="btn btn-dark mt-3 mx-auto mx-md-0" style={{ height: '50px', width: '150px' }}>
            List Now
          </button>
          </div>
        </div>
      </Card>

    
    </Container>
  );
};

export default Offer;
