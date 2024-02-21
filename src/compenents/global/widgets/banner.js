import React from 'react';
import { Container } from 'react-bootstrap';

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
        <div>{txt}</div>
      </Container>
    </div>
  );
}
export default Banner;
