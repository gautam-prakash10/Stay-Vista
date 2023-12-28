import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import './Bestratedfilter';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BestRated = () => {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [sliderKey, setSliderKey] = useState(0);

  const bestRatedData = [
    {
      id: 1,
      name: 'Moksh Villa',
      imageUrl: 'https://img.vistarooms.com/cdn-cgi/image/width=900px,quality=90/https://img.vistarooms.com/gallery/moksh-villa-f6b31e.jpg',
      location: 'Lonavla',
      features: 'Upto 12 guest + 4 Rooms + 4 Baths',
      price: '₹53,500',
      additionalcharges: 'For per Night + Taxes'
    },
    {
      id: 2,
      name: 'Gatsby House',
      imageUrl: 'https://img.vistarooms.com/cdn-cgi/image/width=900px,quality=90/https://img.vistarooms.com/gallery/nzsxkuir1x48qq5l5m9w.jpg',
      location: 'Goa',
      features: 'Upto 12 guest + 4 Rooms + 4 Baths',
      price: '₹46320',
      additionalcharges: 'For per Night + Taxes'
    },
    {
      id: 3,
      name: 'Amara Villa',
      imageUrl: 'https://img.vistarooms.com/cdn-cgi/image/width=900px,quality=90/https://img.vistarooms.com/gallery/amara-villa-14fdfd.jpg',
      location: 'Coorg',
      features: 'Upto 12 guest + 4 Rooms + 4 Baths',
      price: '₹60000',
      additionalcharges: 'For per Night + Taxes'
    },
    {
      id: 4,
      name: 'Amara Villa',
      imageUrl: 'https://img.vistarooms.com/cdn-cgi/image/width=900px,quality=90/https://img.vistarooms.com/gallery/amara-villa-14fdfd.jpg',
      location: 'Alibaug',
      features: 'Upto 12 guest + 4 Rooms + 4 Baths',
      price: '₹60000',
      additionalcharges: 'For per Night + Taxes'
    },
    {
      id: 5,
      name: 'Amara Villa',
      imageUrl: 'https://img.vistarooms.com/cdn-cgi/image/width=900px,quality=90/https://img.vistarooms.com/gallery/amara-villa-14fdfd.jpg',
      location: ' shimla',
      features: 'Upto 12 guest + 4 Rooms + 4 Baths',
      price: '₹60000',
      additionalcharges: 'For per Night + Taxes'
    },
    {
      id: 6,
      name: 'Amara Villa',
      imageUrl: 'https://img.vistarooms.com/cdn-cgi/image/width=900px,quality=90/https://img.vistarooms.com/gallery/amara-villa-14fdfd.jpg',
      location: ' Manali',
      features: 'Upto 12 guest + 4 Rooms + 4 Baths',
      price: '₹60000',
      additionalcharges: 'For per Night + Taxes'
    },
    {
      id: 7,
      name: 'Moksh Villa',
      imageUrl: 'https://img.vistarooms.com/cdn-cgi/image/width=900px,quality=90/https://img.vistarooms.com/gallery/moksh-villa-f6b31e.jpg',
      location: 'Lonavla',
      features: 'Upto 12 guest + 4 Rooms + 4 Baths',
      price: '₹53,500',
      additionalcharges: 'For per Night + Taxes'
    },
    {
      id: 8,
      name: 'Gatsby House',
      imageUrl: 'https://img.vistarooms.com/cdn-cgi/image/width=900px,quality=90/https://img.vistarooms.com/gallery/nzsxkuir1x48qq5l5m9w.jpg',
      location: 'Goa',
      features: 'Upto 12 guest + 4 Rooms + 4 Baths',
      price: '₹46320',
      additionalcharges: 'For per Night + Taxes'
    },
    {
      id: 9,
      name: 'Amara Villa',
      imageUrl: 'https://img.vistarooms.com/cdn-cgi/image/width=900px,quality=90/https://img.vistarooms.com/gallery/amara-villa-14fdfd.jpg',
      location: 'Coorg',
      features: 'Upto 12 guest + 4 Rooms + 4 Baths',
      price: '₹60000',
      additionalcharges: 'For per Night + Taxes'
    },
    {
      id: 10,
      name: 'Amara Villa',
      imageUrl: 'https://img.vistarooms.com/cdn-cgi/image/width=900px,quality=90/https://img.vistarooms.com/gallery/amara-villa-14fdfd.jpg',
      location: 'Alibaug',
      features: 'Upto 12 guest + 4 Rooms + 4 Baths',
      price: '₹60000',
      additionalcharges: 'For per Night + Taxes'
    },
    {
      id: 11,
      name: 'Amara Villa',
      imageUrl: 'https://img.vistarooms.com/cdn-cgi/image/width=900px,quality=90/https://img.vistarooms.com/gallery/amara-villa-14fdfd.jpg',
      location: ' shimla',
      features: 'Upto 12 guest + 4 Rooms + 4 Baths',
      price: '₹60000',
      additionalcharges: 'For per Night + Taxes'
    },
    {
      id: 12,
      name: 'Amara Villa',
      imageUrl: 'https://img.vistarooms.com/cdn-cgi/image/width=900px,quality=90/https://img.vistarooms.com/gallery/amara-villa-14fdfd.jpg',
      location: ' Manali',
      features: 'Upto 12 guest + 4 Rooms + 4 Baths',
      price: '₹60000',
      additionalcharges: 'For per Night + Taxes'
    }
  ];

  const filteredData = selectedLocation === 'All'
    ? bestRatedData
    : bestRatedData.filter(item => item.location.toLowerCase() === selectedLocation.toLowerCase());

  const handleButtonClick = (location) => {
    setSelectedLocation(location);
    // Reset the slider key to force a re-render
    setSliderKey((prevKey) => prevKey + 1);
  };

  const textStyle = {
    fontWeight: 'bold',
  };

  const settings = {
    key: sliderKey, // Key prop for resetting the slider
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust the number of slides to display on different screen sizes
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className='best_rated' style={{ marginBottom: 100 }}>
      <div className='heading'>
          <h2>Best Rated</h2>
        </div>
      <div className="d-flex overflow-auto">
        <button
          type="button"
          className={`btn btn-outline-info ml-2 ${selectedLocation === 'All' ? 'active' : ''}`}
          onClick={() => handleButtonClick('All')}
          style={{ marginBottom: 20, marginTop: 20,width:70 }}
        >
          All
        </button>
        {['Lonavla', 'Alibaug', 'Goa', 'Shimla', 'Manali', 'Coorg','Explore more'].map(location => (
          <button
            key={location}
            type="button"
            className={`btn btn-outline-info ml-2 ${selectedLocation === location ? 'active' : ''}`}
            onClick={() => handleButtonClick(location)}
            style={{ marginLeft: 10, marginBottom: 20, marginTop: 20 , }}
          >
            {location}
          </button>
        ))}
      </div>

      <Slider key={sliderKey} {...settings}>
        {filteredData.map((item) => (
          <div key={item.id} class='mb-4'>
            <Card class='Card rounded-3 ' style={{ height: 350, width: 300 }}>
            <div class='card'>
              <img
                src={item.imageUrl}
                alt={`Image for ${item.name}`}
                class='card-img-top '

              />
              <div class='card_body'>
                <h5 class='card_title mt-3 ' style={{ marginLeft: 20 }}>{item.name}</h5>
                <div class='main_container d-flex flex-row '>
                  <img
                    class='location_pin flex-1'
                    style={{ marginLeft: 20 }}
                    src="https://stay-vista.cdn.prismic.io/stay-vista/67a7c84f-b3f3-4120-9742-206ec314759a_Location.svg"
                    alt="Location Pin"
                    width="18px"
                    height="16px"
                  />
                  <p class='visit_location flex-1 mb-0' style={{ textStyle }}>
                    {' '}
                    {item.location}
                  </p>
                </div>
                <p class="feature mb-1" style={{ marginLeft: 20, fontSize: 10, ...textStyle }}>
                  {item.features}
                </p>
                <hr class="mb-0" style={{ marginLeft: 20, marginRight: 20 }} />
                <p class='prices mb-0' style={{ paddingLeft: 20 }}>
                  {item.price}
                </p>
                <p class='additionalcharges' style={{ marginLeft: 20, fontSize: 15, ...textStyle }}>
                  {item.additionalcharges}
                </p>
              </div>
            </div>
          </Card>
        
          </div>
        ))}
      </Slider>
      <Card className="border-3 mt-5" style={{ backgroundImage: 'url("https://stay-vista.cdn.prismic.io/stay-vista/35c78ec1-1708-4a33-90f6-462c858229a2_Desk.svg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="d-flex flex-column flex-md-row align-items-md-center">
          <img
            src="https://stay-vista.cdn.prismic.io/stay-vista/a4ee3b2d-8f86-48c1-9dce-0577db94443a_StayVista+x+Homes+%26+Villas-01.svg"
            alt="StayVista Logo"
            className="flex-1 mx-auto my-4 mx-md-0 p-5"
            style={{ height: 'auto', maxWidth: '300px' }}
          />
          <div className="d-flex flex-column p-2 flex-1 mx-md-3">
            <h3 className="flex-1 mb-3 text-center text-md-left">Collaboration that’s making waves</h3>
            <p className="flex-1 mb-3 text-center text-md-left">
              Offering exceptional and holistic getaways in India, to discerning guests from all over the world.
            </p>
          </div>
          <button type="button" className="btn btn-dark mt-3 mx-auto mx-md-0 " style={{ height: '50px', width: '150px' }}>
            Read more
          </button>
        </div>
      </Card>
    </Container>
  );
};

export default BestRated;
