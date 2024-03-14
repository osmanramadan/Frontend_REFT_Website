import React from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import AddHallButton from '../../compenents/hall/AddHallButton';
import AddMessageHook from '../../hooks/admin/message/addMessageHook';


function ContactUs() {

  const  [
    name,
    email,
    phone,
    message,
    loading,
    onChangeUsername,
    onChangeEmail,
    onChangePhone,
    onChangeMessage,
    OnSubmit,
  ]=AddMessageHook()
  
  return (
    <div>
      <NavBar />

      <Row
        className="d-flex justify-content-center"
        style={{
          backgroundColor: '#1c1e53',
          color: 'white',
        }}
      >
        <Col xs="12" sm="12" md="8" className="mt-5">
          <div
            className="text-center"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '70px',
              borderWidth: '2px',
              borderColor: 'white',
              borderStyle: 'solid',
              padding: '10px',
            }}
          >
            <span
              className="py-2"
              style={{ fontWeight: 'bold', fontSize: '52px' }}
            >
              GET IN TOUCH
            </span>
            <Row className="d-flex justify-content-center mt-5">
              <Col xs="12" sm="12" md="12" lg="9">
                <FontAwesomeIcon
                
                  style={{ height: '30px', width: '40px' }}
                  icon={faPhone}
                />
                <span
                
                  style={{
                    opacity: '0.8',
                    color: '#F2EFFF',
                    fontSize: '26px',
                    fontWeight: '400',
                  }}
                >
                  Phone:
                </span>
                <span
                  
                  style={{
                    fontSize: '18px',
                    lineHeight: '28%',
                    color: '#80819e',
                    fontWeight: '300',
                  }}
                >
                  987654345667
                </span>
              </Col>
            </Row>

            <Row className="d-flex justify-content-center mt-5">
              <Col xs="12" sm="12" md="12" lg="9">
                <FontAwesomeIcon
                  
                  style={{ height: '30px', width: '40px' }}
                  icon={faEnvelope}
                />
                <span
                  
                  style={{
                    opacity: '0.8',
                    color: '#F2EFFF',
                    fontSize: '26px',
                    fontWeight: '400',
                  }}
                >
                  Email:
                </span>
                <span
               
                  style={{
                    fontSize: '18px',
                    lineHeight: '28%',
                    color: '#80819e',
                    fontWeight: '300',
                  }}
                >
                  osman@osman.com
                </span>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center mt-5 mb-4">
              <Col xs="12" sm="12" md="12" lg="9">
                <FontAwesomeIcon
                 
                  style={{ height: '30px', width: '40px' }}
                  icon={faMapMarkerAlt}
                />
                <span
                  
                  style={{
                    opacity: '0.8',
                    color: '#F2EFFF',
                    fontSize: '26px',
                    fontWeight: '400',
                  }}
                >
                  Address:
                </span>
                <span
                 
                  style={{
                    fontSize: '18px',
                    lineHeight: '28%',
                    color: '#80819e',
                    fontWeight: '300',
                  }}
                >
                  Damietta/ Elsaidy street 22
                </span>
              </Col>
            </Row>
          </div>
          <Col
            xs="12"
            sm="12"
            md="12"
            lg="6"
            className="mt-5 p-5 mx-auto" // Add mx-auto class for horizontal centering
          >
            <div
              className="text-center"
              style={{
                height: '100%',
                width: '100%',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Row className="mb-3">
                <Col lg="12">
                  <input
                    className="inputfield-contactus"
                    placeholder="Your name"
                    onChange={onChangeUsername}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg="12">
                  <input
                    className="inputfield-contactus"
                    placeholder="Your email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg="12">
                  <input
                    className="inputfield-contactus"
                    placeholder="Your phone"
                    value={phone}
                    onChange={onChangePhone}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg="12">
                  <textarea
                    className="inputfield-contactus"
                    placeholder="Your message"
                    value={message}
                    onChange={onChangeMessage}
                    style={{ height: '170px' }}
                  />
                </Col>
              </Row>
              <AddHallButton onClick={OnSubmit} txt={'SEND MESSAGE'} />
            </div>
          </Col>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
export default ContactUs;
