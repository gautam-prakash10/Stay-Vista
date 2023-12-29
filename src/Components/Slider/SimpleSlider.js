// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import SliderCard from "./SliderCard";
// import { SliderData } from "./SliderData"; // Importing SliderData
// import {
//   Autoplay,
//   Navigation,
//   Pagination,
//   FreeMode,
//   Scrollbar,
//   A11y,
// } from "swiper/modules";

// const SimpleSlider = () => {
//   return (
//     <Swiper
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       Scrollbar={true}
//       modules={[Autoplay, Pagination, Navigation,Scrollbar]}
//       spaceBetween={10}
//       slidesPerView={3}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}
//       breakpoints={{
//         0: {
//           slidesPerView: 1,
//           spaceBetween: 10,
//         },
//         480: {
//           slidesPerView: 1,
//           spaceBetween: 10,
//         },
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 10,
//         },
//         1024: {
//           slidesPerView: 3,
//           spaceBetween: 10,
//         },
//         1440: {
//           slidesPerView: 4,
//           spaceBetween: 10,
//         },
//       }}
//     >
     
//       {SliderData.map((val, index) => {
//         return (
        
//           <SwiperSlide>
//             <SliderCard
//               imgsrc={val.imgscr}
//               dname={val.dname}
//               link={val.links}
//             />
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };

// export default SimpleSlider;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
  const trendingData = [
    {
      id: 1,
      name: 'Casa Simoes-Candolim',
      imageUrl: 'https://img.vistarooms.com/gallery/casa-simoes-9840b9.jpg',
      location: 'Goa, Goa',
      features: 'Upto 7 guests + 3 Rooms + 3 Baths',
      price: '₹62,800',
      additionalcharges:'For per Night + Taxes'
    },
    {
      id:2,
      name: 'Villa Amethyst-Saligao',
      imageUrl: 'https://img.vistarooms.com/gallery/villa-amethyst-b07602.jpg',
      location: 'Goa,Goa',
      features:'Upto 10 guests + 4 Rooms + 4 Baths',
      price: '₹47,350',
      additionalcharges:'For per Night + Taxes'
    },
    {
      id:3,
      name:'Weavers...',
      imageUrl:'https://img.vistarooms.com/gallery/the-farmcation-8654c1.jpg',
      location:'Chandigarh,Punjab',
      features:'Upto 9 guest + 3 Rooms + 4 Baths',
      price:'₹53,500',
      additionalcharges:'For per Night + Taxes'
    },
    {
      id:4,
      name:'Amara Villa',
      imageUrl:'https://img.vistarooms.com/gallery/sidhowal-lodge-f03eb2.jpg',
      location:'Alibaug, Maharashtra',
      features:'Upto 12 guest + 4 Rooms + 4 Baths',
      price:'₹60000',
      additionalcharges:'For per Night + Taxes'
    },
    {
      id:5,
      name:'Amara Villa',
      imageUrl:'https://img.vistarooms.com/cdn-cgi/image/width=900px,quality=90/https://img.vistarooms.com/gallery/amara-villa-14fdfd.jpg',
      location:'Alibaug, Maharashtra',
      features:'Upto 12 guest + 4 Rooms + 4 Baths',
      price:'₹60000',
      additionalcharges:'For per Night + Taxes'
    },
    {
      id:6,
      name:'Amara Villa',
      imageUrl:'https://img.vistarooms.com/cdn-cgi/image/width=900px,quality=90/https://img.vistarooms.com/gallery/amara-villa-14fdfd.jpg',
      location:'Alibaug, Maharashtra',
      features:'Upto 12 guest + 4 Rooms + 4 Baths',
      price:'₹60000',
      additionalcharges:'For per Night + Taxes'
    }
    // Your data here
  ];

  const textStyle = {
    fontWeight: 'bold',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust the number of slides to display on different screen sizes
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // tablet
        settings: {
          slidesToShow: 2,
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
    <Container className='best_rated ' style={{marginBottom:100}}>
      <div>
        <div className='heading'>
          <h2>Trending This Season</h2>
        </div>
        <div className=''>
        <button type="button" className="btn btn-light ml-2 border border-dark col-sm-1 mx-2 mb-2 btn-lg bg-white">All</button>
        
        
  <button type="button" className="btn btn-light ml-2  border border-dark  col-sm-1 mx-2 mb-2 btn-lg bg-white">Lonavla</button>
   
  <button type="button" className="btn btn-light ml-2  border border-dark  col-sm-1 mx-2 mb-2 btn-lg bg-white">Alibaug</button>
  <button type="button" className="btn btn-light  border border-dark  col-sm-1 mx-2 mb-2 btn-lg bg-white" >Goa</button>
  <button type="button" className="btn btn-light  border border-dark  col-sm-1 mx-2 mb-2 btn-lg bg-white">Shimla</button>
  <button type="button" className="btn btn-light  border border-dark  col-sm-1 mx-2 mb-2 btn-lg bg-white">Manali</button>
  <button type="button" className="btn btn-light  border border-dark  col-sm-1 mx-2 mb-2 btn-lg bg-white">Coorg</button>
  <button type="button" className="btn btn-light  border border-dark mx-2 mb-2 btn-lg bg-white">Explore more</button>

  </div>     
        <Slider {...settings}>
          {trendingData.map((item) => (
            <div key={item.id} className='mb-4'>
              <Card className='Card rounded-3 ' style={{height:475,width:310,margin:20}}>
                <div className='card'>
                  <img
                    src={item.imageUrl}
                   // alt={Image for ${item.name}}
                    className='card-img-top'
                   style={{height:300,width:310}}/>
                  <div className='card_body'>
                    <h5 className='card_title' style={{marginLeft:20,margin:10}}>{item.name}</h5>
                    <div className='main_container d-flex flex-row'>
                      <img
                        className='location_pin flex-1'
                        style={{ marginLeft: -310,width:25,height:18,margin:10 }}
                        src="https://stay-vista.cdn.prismic.io/stay-vista/67a7c84f-b3f3-4120-9742-206ec314759a_Location.svg"
                        alt="Location Pin"
                        width="10px"
                        height="12px"
                      />
                      <p className='visit_location flex-1' style={textStyle}>
                        {' '}
                        {item.location}
                      </p>
                    </div>
                    <p className='feature' style={{ marginLeft: 20, fontSize: 15 }}>
                      {item.features}
                    </p>
                    <hr style={{ marginLeft: 20, marginRight: 20 }} />
                    <p className='prices' style={{ paddingLeft: 20}}>
                      {item.price}
                    </p>
                    <p className='additionalcharges' style={{ marginLeft: 20, fontSize: 15, ...textStyle }}>
                      {item.additionalcharges}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default SimpleSlider;