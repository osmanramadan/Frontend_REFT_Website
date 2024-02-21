import React from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col, Row } from 'react-bootstrap';
import UserTabs from '../../compenents/user/UserTap';
import MidTitle from '../../compenents/global/widgets/midtitle';
import ImageChooser from '../../compenents/user/ImageChooser';
import osman from '../../assets/images/24.png';

function Profile() {
  return (
    <div>
      <NavBar />
      <div>
        <Row>
          <Col xs="0" sm="0" md="5" lg="4" className="user-one-tabs">
            <UserTabs />
          </Col>

          <Col xs="12" sm="12" md="7" lg="8" style={{ direction: 'rtl' }}>
            <Row className="d-flex justify-content-center text-center mt-5">
              <Col xs="6">
                <MidTitle txt={'My Profile'} />
              </Col>
            </Row>

            <Row className="d-flex justify-content-center text-center">
              <Col xs="6">
                <ImageChooser img={osman} handleSelect={() => {}} />
              </Col>
            </Row>
            <Row className="d-flex justify-content-center text-center">
              <Col
                xs="6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '16px',
                  fontWeight: 'medium',
                  color: 'white',
                  height: '47px',
                  width: '154px',
                  backgroundColor: '#2405f2',
                }}
              >
                <div>Teacher</div>
              </Col>
            </Row>

            <Row className="d-flex justify-content-center text-center  mt-5">
              <Col
                xs="6"
                sm="5"
                className="d-flex justify-content-center align-items-center"
              >
                <input
                  className="inputfield-userprofile"
                  placeholder="osman"
                  readOnly
                />
              </Col>
              <Col
                xs="1"
                sm="2"
                className="d-flex justify-content-start align-items-start py-2"
                style={{
                  lineHeight: '160%',
                  fontWeight: 'bold',
                  fontSize: '45',
                  color: '#282938',
                }}
              >
                Name
              </Col>
            </Row>

            <Row className="d-flex justify-content-center text-center  mt-0">
              <Col
                xs="6"
                sm="5"
                className="d-flex justify-content-center align-items-center"
              >
                <input
                  className="inputfield-userprofile"
                  placeholder="osman@osman"
                  readOnly
                />
              </Col>
              <Col
                xs="1"
                sm="2"
                className="d-flex justify-content-start align-items-start py-2"
                style={{
                  lineHeight: '160%',
                  fontWeight: 'bold',
                  fontSize: '45',
                  color: '#282938',
                }}
              >
                Email
              </Col>
            </Row>

            <Row className="d-flex justify-content-center text-center  mt-0">
              <Col
                xs="6"
                sm="5"
                className="d-flex justify-content-center align-items-center"
              >
                <input
                  className="inputfield-userprofile"
                  placeholder="22098898"
                  readOnly
                />
              </Col>
              <Col
                xs="1"
                sm="2"
                className="d-flex justify-content-start align-items-start py-2"
                style={{
                  lineHeight: '160%',
                  fontWeight: 'bold',
                  fontSize: '45',
                  color: '#282938',
                }}
              >
                phone
              </Col>
            </Row>
            <Row className="d-flex justify-content-center text-center  mt-0">
              <Col
                xs="6"
                sm="5"
                className="d-flex justify-content-center align-items-center"
              >
                <input
                  className="inputfield-userprofile"
                  placeholder="cairo"
                  readOnly
                />
              </Col>
              <Col
                xs="1"
                sm="2"
                className="d-flex justify-content-start align-items-start py-2"
                style={{
                  lineHeight: '160%',
                  fontWeight: 'bold',
                  fontSize: '45',
                  color: '#282938',
                }}
              >
                City
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
export default Profile;
