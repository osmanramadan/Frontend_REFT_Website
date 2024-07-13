import React from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import Banner from '../../compenents/global/widgets/banner';
import { Row, Col, Container } from 'react-bootstrap';
import MidTitle from '../../compenents/global/widgets/midtitle';
import {  useLocation, useNavigate } from 'react-router-dom';




function MessDetails() {
  
  const location = useLocation();
  const nav = useNavigate();

  let messData;

  try {
    messData = location.state.messData;
  } catch (v) {
    nav('/admin-messages');
    return;
  }

  return (
    <div>
      <NavBar />
      <Banner txt={'Home > Admin > Message  Details'} />

      <MidTitle txt={'Message  Details'} arrow={false} />

      <Container className="mb-5">
        <Row className="d-flex justify-content-center mx-5">
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
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
              {messData.name}
            </span>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mx-5">
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            Email :
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="text-center mx-1"
            >
              {messData.email}
            </span>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mx-5">
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
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
              {messData.phone}
            </span>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mx-5">
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            Message :
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="text-center mx-1"
            >
              {messData.message}
            </span>
          </Col>
        </Row>

        {/* *********************** */}
      </Container>

      <Footer />
    </div>
  );
}
export default MessDetails;
