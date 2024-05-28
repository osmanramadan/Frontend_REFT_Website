import React from 'react';
import { Carousel, Col, Row, Figure } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import osman from '../../assets/images/osman.png';
import ahmed from '../../assets/images/ahmed.jpg';
import mona from '../../assets/images/mona.jpg';

function HomepageTestimonial() {
  const { t ,i18n} = useTranslation();

  const testimonialData = [
    { 
      id: '1',
      quote: t('homepageTestimonial.osman.quote'),
      name: t('homepageTestimonial.osman.name'),
      role: t('homepageTestimonial.osman.role'),
      image: osman
    },
    {
      id: '2',
      quote: t('homepageTestimonial.ahmed.quote'),
      name: t('homepageTestimonial.ahmed.name'),
      role: t('homepageTestimonial.ahmed.role'),
      image: ahmed
    },
    {
      id: '3',
      quote: t('homepageTestimonial.mona.quote'),
      name: t('homepageTestimonial.mona.name'),
      role: t('homepageTestimonial.mona.role'),
      image: mona
    }
  ];

  return (
    <Carousel data-bs-theme="dark"  style={{'fontFamily':i18n.language==='en'?'Poppins':'Cairo', position: 'relative' }}>
      {testimonialData.map((item, index) => (
        <Carousel.Item
          key={index}
          style={{
            height: 'auto',
            color: '#282938',
            backgroundColor: '#eef4fa',
            borderRadius: '15px'
          }}
          className="mb-4"
        >
          <Row className="d-flex justify-content-center mt-5">
            <Col
              xs="8"
              style={{
                fontSize: '20px',
                fontWeight: 'medium',
                lineHeight: '140%',
                letterSpacing: '0.5%'
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
                  src={item.image}
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
                  fontSize: '17px',
                  color: '#282938'
                }}
              >
                {item.name}
              </div>
              <div
                style={{
                  fontWeight: 'medium',
                  fontSize: '14px',
                  color: '#282938'
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
