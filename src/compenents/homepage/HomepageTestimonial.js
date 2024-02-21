import Carousel from 'react-bootstrap/Carousel';
import { Col, Row } from 'react-bootstrap';
import React from 'react';
import { Figure } from 'react-bootstrap';
import osman from '../../assets/images/24.png';

function HomepageTestimonial() {
  return (
    <Carousel data-bs-theme="dark" style={{ position: 'relative' }}>
      <Carousel.Item
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nis"
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
                src={osman}
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
              Osman
            </div>
            <div
              style={{
                fontWeight: 'medium',
                fontSize: '12px',
                color: '#282938',
              }}
            >
              Arbic teacher
            </div>
          </Col>
        </Row>
      </Carousel.Item>

      <Carousel.Item
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nis"
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
                src={osman}
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
              Osman
            </div>
            <div
              style={{
                fontWeight: 'medium',
                fontSize: '12px',
                color: '#282938',
              }}
            >
              Arbic teacher
            </div>
          </Col>
        </Row>
      </Carousel.Item>

      <Carousel.Item
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nis"
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
                src={osman}
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
              Osman
            </div>
            <div
              style={{
                fontWeight: 'medium',
                fontSize: '12px',
                color: '#282938',
              }}
            >
              Arbic teacher
            </div>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomepageTestimonial;
