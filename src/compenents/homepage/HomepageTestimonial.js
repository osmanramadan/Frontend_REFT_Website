import Carousel from 'react-bootstrap/Carousel';
import { Col, Row } from 'react-bootstrap';
import React from 'react';
import { Figure } from 'react-bootstrap';
import osman from '../../assets/images/osman.png';
import ahmed from '../../assets/images/ahmed.jpg';
import mona from '../../assets/images/mona.jpg';


function HomepageTestimonial() {
  // Define an array of objects representing Carousel items
  const testimonialData = [
    { 
      id:'1',
      quote: "As a teacher, managing budgets can be challenging, especially when it comes to finding affordable spaces for classes and tutoring sessions. That's where [website name] comes in. This platform has been a game-changer for me. Instead of committing to long-term leases or expensive rentals, I can now book spaces by the hour, which significantly reduces my overhead costs.",
      name: "Osman",
      role: "Arbic teacher",
      image:{osman}
    },
    {
      id:'2',
      quote: "The process is seamless and convenient. I simply log in, browse through the available spaces in my area, and book the ones that suit my schedule. Whether I need a classroom for group lessons or a quiet space for one-on-one tutoring, [website name] has a variety of options to choose from.",
      name: "ahmed",
      role: "English teacher",
      image:{ahmed}
    },
    {
      id:'3',
      quote: "By renting spaces through reft, I can offer more competitive rates without sacrificing the quality of my teaching. This not only makes my lessons more accessible to a wider range of students but also alleviates some of the financial burden on their families.",
      name: "mona",
      role: "Science teacher",
      image:{mona}
    },
    
  ];

  return (
    <Carousel data-bs-theme="dark" style={{ position: 'relative' }}>
      {/* Map over testimonialData array to generate Carousel items dynamically */}
      {testimonialData.map((item, index) => (
        <Carousel.Item
          key={index} // Use index as key (you can use a unique identifier if available)
          style={{
            height: 'auto',
            color: '#282938',
            backgroundColor: '#eef4fa',
            borderRadius: '5px',
          }}
          className="mb-4"
        >
          <Row className="d-flex justify-content-center mt-5">
            <Col
              xs="8"
              style={{
                fontSize: '26px',
                fontWeight: 'medium',
                lineHeight: '140%',
                letterSpacing: '0.5%',
              }}
            >
              {item.quote}
            </Col>
          </Row>
          <Row xs="8" className="d-flex justify-content-center mt-5 mb-2">
            <Col
              xs="4"
              sm="2"
              md="2"
              lg="1"
              className="text-center d-flex justify-content-center"
            >
              <Figure>
                <Figure.Image
                  width={70}
                  height={70}
                  alt="Profile Image"
                  src={
                
                      item.id === '1' ? osman : item.id === '2' ? ahmed:mona
             
                    
                  }
                  roundedCircle
                />
              </Figure>
            </Col>
  
            <Col
              xs="4"
              sm="3"
              md="3"
              lg="2"
              style={{ marginLeft: '-20px' }}
              className="mt-1"
            >
              <div
                style={{
                  fontWeight: 'medium',
                  fontSize: '18px',
                  color: '#282938',
                }}
              >
                {item.name}
              </div>
              <div
                style={{
                  fontWeight: 'medium',
                  fontSize: '12px',
                  color: '#282938',
                }}
              >
                {item.role}
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomepageTestimonial;
