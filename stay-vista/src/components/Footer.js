import React from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4" style={{ backgroundImage: 'linear-gradient(to right top, #4F86ED, #F58575)'}}>
      <Container>
        {/* First Section with 4 Rows */}
        
        <Row>
          <Col className=''>
            <h5>Top location</h5>
            <p className='small mb-1 '> Lonavla </p>
            <p className='small mb-1 '>Alibaug</p>
            <p className='small mb-1'>Karjat</p>
            <p className='small mb-1'> Kasauli</p>
            <p className='small mb-1'>Mahabaleshwar</p>
            <p className='small mb-1'>Nashik</p>
            <p className='small mb-1'>Goa</p>
            <p className='small mb-1'>Shimla</p>
          </Col>
          <Col>
            <h5>Top Collection</h5>
            <p className='small mb-1'>Luxaryvistas</p>
            <p className='small mb-1'>Festive Favourites</p>
            <p className='small mb-1'>Heated Pool Collection</p>
            <p className='small mb-1'>Pet-FriendlyVistas</p>
            <p className='small mb-1'>Impeccable View Vistas</p>
            <p className='small mb-1'>Corporate offsite vistas</p>
            <p className='small mb-1'>kid-Friendly vistas</p>
            <p className='small mb-1'>off for your Get-aways</p>
            <p className='small mb-1'>Handpicked Vistas</p>
            <p className='small mb-1'>Beach Vistas</p>
            <p className='small mb-1'>Celebrity choice vistas</p>
            <p className='small mb-1'>Stay Access Collection</p>
          </Col>
          <Col>
            <h5>About StayVista</h5>
            <p className='small mb-1'>our story</p>
            <p className='small mb-1'>list your property </p>
            <p className='small mb-1'> Offers</p>
            <p className='small mb-1'>Plan an offsite</p>
            <p className='small mb-1'>Events and Experiences</p>
            <p className='small mb-1'>FAQS</p>
            <p className='small mb-1'>Gift Card - flat 5% offsite</p>
            <p className='small mb-1'>Blogs</p>
            <p className='small mb-1'>Careers</p>
            <p className='small mb-1'>Covid Policy</p>
            <p className='small mb-1'>StayVista Design Services</p>
            <p className='small mb-1'>Why Choose us</p>
            
          </Col>
          <Col>
            <h5>Support</h5>
            <p className='small mb-1'>Contact us </p>
            <p className='small mb-1'> Cancellation Policy</p>
            <p className='small mb-1'>Refund Policy</p>
          </Col>
          
        </Row>
        <hr style={{marginLeft:40, marginRight:40}}/>

        <h5 className='text-center'>POPULAR DESTINATION TO RENT A HOLIDAY HOME IN INDIA</h5>

        {/* Second Section Spanning 2 Columns */}
        <Row>
          <Col >
            <h5>Bungalows </h5>
            <p className='small mb-1'>Bungalows in Lonavla</p>
            <p className='small mb-1'>Bungalows in Igatpuri</p>
            <p className='small mb-1'>Bungalows Alibaug</p>
            <p className='small mb-1'>Bungalows in Karjat</p>
            <p className='small mb-1'>Bungalows in Ahmedabad</p>
          </Col>
          <Col >
            <h5>Cottages</h5>
            <p className='small mb-1'>Cottages in Manali</p>
            <p className='small mb-1'>Cottages in Mussoorie</p>
            <p className='small mb-1'>Cottages in Shimla </p>
            <p className='small mb-1'>Cottages in Coorg</p>
            <p className='small mb-1'>Cottages in Wayanand</p>
          </Col>
          <Col >
            <h5>Luxary Villas </h5>
            <p className='small mb-1'>Luxary Villas in Bangalore</p>
            <p className='small mb-1'>Luxary Villas in Kochi</p>
            <p className='small mb-1'>Luxary Villas in Goa</p>
            <p className='small mb-1'>Luxary Villas in Chennai</p>
            <p className='small mb-1'>Luxary Villas in Kasauli</p>
           
          </Col>
          <Col>
            <h5>Homestay</h5>
            <p className='small mb-1'>Homestay in Ooty</p>
            <p className='small mb-1'>Homestay in Kodaikanal</p>
            <p className='small mb-1'>Homestay in Jaipur</p>
            <p className='small mb-1'>Homestay in Udaipur</p>
            <p className='small mb-1'>Homestay in Gangtok</p>
          </Col>
        </Row>
        <div className='d-flex justify-content-end align-items-center mt-3 mr-10'>
      <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-2 justify-end" />
      <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-2" />
      <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2" />
      {/* Add more icons as needed */}
    </div>
      </Container>
    </footer>
  );
}

export default Footer;
