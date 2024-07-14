import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Notfound from '../../assets/images/404.png';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container>
      <Row className="d-flex  text-center">
        <Col>
          <Link to="/" className="link">
            {' '}
            <img src={Notfound} style={{ height: '70%', width: '70%' }} />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
export default NotFound;
