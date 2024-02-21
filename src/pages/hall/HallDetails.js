import React from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import Banner from '../../compenents/global/widgets/banner';
import Carousel from 'react-bootstrap/Carousel';
import Place from '../../assets/images/place.png';
import { Row, Col, Container } from 'react-bootstrap';
import MidTitle from '../../compenents/global/widgets/midtitle';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';

function HallDetails() {
  const [isuser, isadmin, data] = ProtectedRouteHook();
  return (
    <div>
      <NavBar />
      <Banner
        txt={isuser ? 'Home > Place  Details' : 'Home  > Admin > Place Details'}
      />
      <Row className="d-flex justify-content-center">
        <Col xs="12" sm="12" md="8" lg="8">
          <Carousel className="mt-0 mb-1">
            <Carousel.Item style={{ height: '100%', width: '100%' }}>
              <div className="d-flex flex-row justify-content-center">
                <img
                  style={{ height: '20%', width: '70%', borderRadius: '60px' }}
                  src={Place}
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item style={{ height: '100%', width: '100%' }}>
              <div className="d-flex flex-row justify-content-center">
                <img
                  style={{ height: '30%', width: '70%', borderRadius: '60px' }}
                  src={Place}
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <MidTitle txt={'Hall Owner'} arrow={false} />

      <Container>
        <Row className="d-flex justify-content-center mx-5">
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            // className='text-center'
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            Name :
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="text-center mx-1"
            >
              Osman
            </span>
          </Col>

          <Col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            // className='text-center'
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            City :
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="text-center mx-1"
            >
              Damietta
            </span>
          </Col>
        </Row>

        {/* *********************** */}

        <Row className="d-flex justify-content-center mx-5">
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            // className='text-center'
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            Phone :
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="text-center mx-1"
            >
              010288888
            </span>
          </Col>

          <Col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            // className='text-center'
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            <span className="text-start">Email :</span>
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="text-center"
            >
              Osman@osman.com
            </span>
          </Col>
        </Row>
      </Container>

      <MidTitle txt={'Hall Info'} />
      {/* ***************************** */}
      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className="mx-5"
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall Name :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            Osmanramadan
          </span>
        </Col>
      </Row>

      {/*  */}

      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className="mx-5"
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall Details :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore m
          </span>
        </Col>
      </Row>

      {/*  */}

      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className="mx-5"
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall City :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            Cairo
          </span>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className="mx-5"
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall location :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            mid city/ streeet 4
          </span>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className="mx-5"
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hour Price:
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            20$
          </span>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className="mx-5"
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall Capacity :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            100 students
          </span>
        </Col>
      </Row>

      <MidTitle txt={'Hall Video'} />
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="12" lg="8" className="text-center">
          <div style={{ borderRadius: '60px' }}>
            <iframe
              style={{ borderRadius: '30px' }}
              width="80%"
              height="350px"
              src="https://www.youtube.com/embed/l1Qp67Z6kfg?si=0p_oYWJOm9_9vsAX"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
export default HallDetails;
