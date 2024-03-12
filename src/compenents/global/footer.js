import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row
          style={{
            fontFamily: 'Poppins',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          REFT
        </Row>
        <Row
          style={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: 'medium',
          }}
        >
          Rate your place in the right place
        </Row>

        <Row className="d-flex  justify-content-center  mt-3">
          <Col xs="12" sm="6" md="2">
            <Link to={'/contact-us'} className="link mx-1 mb-xs-1">
              Contact Us
            </Link>
          </Col>
          <Col xs="12" sm="6" md="2">
            <Link to={'/about-us'} className="link mx-2 mb-xs-1">
              About Us
            </Link>
          </Col>
          <Col xs="12" sm="6" md="2">
            <Link to={'/places'} className="link mx-1 mb-xs-1">
              Our Places
            </Link>
          </Col>
          {/* <Col xs="12" sm="6" md="2">
            <Link to={"/hall-add"} className="link mx-1 mb-xs-1">Add Place</Link>
          </Col> */}
          <Col xs="12" sm="6" md="2">
            <Link className="link mx-2 mb-xs-1">Terms and Conditions</Link>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs="12" sm="12" md="6" lg="6">
            <div
              className="footer-contact"
              style={{
                backgroundColor: '#fcd980',
                width: '360px',
                height: 'auto',
                padding: '6px',
                borderRadius: '5px',
              }}
            >
              <Row>
                <Col
                  xs="6"
                  className="mt-1 mx-1 text-start"
                  style={{
                    color: '#282938',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  Email
                </Col>
                <Col
                  className="mt-1  text-start"
                  style={{
                    color: '#282938',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  Telephone
                </Col>
              </Row>

              <Row>
                <Col
                  xs="6"
                  className="mb-2 mx-1"
                  style={{
                    color: '#282938',
                    fontSize: '16',
                    fontFamily: 'Poppins',
                    fontWeight: 'medium',
                  }}
                >
                  osman@osman.com
                </Col>
                <Col
                  className="mb-2"
                  style={{
                    color: '#282938',
                    fontSize: '16',
                    fontFamily: 'Poppins',
                    fontWeight: 'medium',
                  }}
                >
                  010898898887
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6">
            <Row className="text-start mx-4 mt-4">
              <Col xs="6" md="3">
                {' '}
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="mb-xs-2 mx-3"
                  style={{ color: 'white', height: '50px', width: '50px' }}
                />
              </Col>
              <Col xs="6" md="3">
                {' '}
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="mb-xs-2 mx-3"
                  style={{
                    color: '#1C1E53',
                    borderRadius: '50%',
                    height: '50px',
                    width: '50px',
                    backgroundColor: 'white',
                  }}
                />
              </Col>
              <Col xs="6" md="3">
                {' '}
                <FontAwesomeIcon
                  className="mb-xs-2 mx-3"
                  icon={faTwitter}
                  style={{ color: 'white', height: '50px', width: '50px' }}
                />
              </Col>
              <Col xs="6" md="3">
                {' '}
                <FontAwesomeIcon
                  className="mb-xs-2 mx-3"
                  icon={faLinkedinIn}
                  style={{
                    color: '#1C1E53',
                    height: '50px',
                    width: '50px',
                    backgroundColor: 'white',
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
