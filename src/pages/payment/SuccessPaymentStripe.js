import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CheckOrderCompleteStripeHook from '../../hooks/checkout/CheckOrderCompleteStripeHook';

const SuccessPaymentStripe = () => {
  const [loading, CheckOrderCompleteStripe] = CheckOrderCompleteStripeHook();

  useEffect(() => {
    CheckOrderCompleteStripe();
  }, []);

  return (
    <Container>
      <Row>
        {loading === false ? (
          <span
            style={{ fontSize: '20px', fontWeight: 'bold' }}
            className="d-flex justify-content-center align-items-center"
          >
            loading...
          </span>
        ) : (
          <Col
            style={{ fontSize: '20px', fontWeight: 'bold' }}
            className="d-flex justify-content-center align-items-center"
          >
            Payment Processing
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SuccessPaymentStripe;
