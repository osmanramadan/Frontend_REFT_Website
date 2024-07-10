import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Banner({ txt }) {
  return (
    <div
      style={{
        fontSize: '16px',
        fontWeight: 'medium',
        backgroundColor: '#eef4fa',
        height: '70px',
      }}
      className="d-flex align-items-center"
    >
      <Container>
        <Row>
          <Col xs="12" sm="6">
            <div>{txt}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Banner;
