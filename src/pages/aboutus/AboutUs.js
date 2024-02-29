import React from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col, Container, Row } from 'react-bootstrap';
import aboutus from '../../assets/images/aboutus.png';

function AboutUs({ txt, onClick }) {
  return (
    <div>
      <NavBar />
      <Container>
        <Row style={{ marginTop: '100px' }}>
          <Col
            xs="12"
            sm="12"
            md="7"
            lg="6"
            style={{
              fontSize: '65px',
              lineHeight: '140%',
              fontWeight: '400',
              letterSpacing: '0.5%',
              fontFamily: 'Racing Sans One',
              color: '#282938',
            }}
          >
            <div className="mb-5">
              We Build Bridge Between Teacher and Place Owner
            </div>
          </Col>
          <Col
            xs="12"
            sm="12"
            md="5"
            lg="6"
            className="d-flex text-start justify-content-center align-items-center"
            style={{
              opacity: '0.9',
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '170%',
              fontWeight: '400',
              letterSpacing: '0%',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            <div>
              Allow the owner to publish his hall on our website with the needed
              information, such as the location, pictures of the place, the
              rental price and contact after that Teacher can find its
              appropriate hall according to his location
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <img
              src={aboutus}
              style={{ height: '93%', width: '100%', borderRadius: '50px' }}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default AboutUs;
