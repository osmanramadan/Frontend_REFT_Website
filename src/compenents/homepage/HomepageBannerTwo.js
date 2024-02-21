import React from 'react';
import { Col, Row } from 'react-bootstrap';
import banner from '../../../src/assets/images/bannertwo.png';

function HomepageBannerTwo() {
  return (
    <Row className="mb-3">
      <Col xs="12" md="12" lg="6" className="text-start d-flex align-items-end">
        <div className="mb-1 mb-md-5">
          <div
            style={{
              fontSize: '37px',
              fontWeight: 'bold',
              letterSpacing: '0.8%',
              lineHeight: '150%',
              marginBottom: '20px',
            }}
          >
            Education first , Teacher first
          </div>

          <div
            style={{
              fontSize: '20px',
              width: '90%',
              fontWeight: '400',
              color: '#28293899',
              marginBottom: '30px',
            }}
          >
            The intended system aims to help the teacher find the appropriate
            place for him to give educational lessons by controlling the area of
            the place, the capacity of students, the cost of rent, and the
            appropriate location
          </div>
        </div>
      </Col>

      <Col
        xs="12"
        md="12"
        lg="6"
        className="text-lg-end text-sm-start text-start"
      >
        <div style={{ width: '100%', height: '100%' }}>
          <img
            alt="image"
            src={banner}
            style={{ height: '90%', width: '95%', borderRadius: '7px' }}
          />
        </div>
      </Col>
    </Row>
  );
}

export default HomepageBannerTwo;
