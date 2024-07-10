import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CheckOrderCompleteHook from '../../hooks/checkout/CheckOrderCompleteHook';

const SuccessPayment = () => {
  
  const [loading, CheckOrderComplete] = CheckOrderCompleteHook();

  useEffect(() => {
    CheckOrderComplete();
  }, []);

  // const handleBackClick = (e) => {
  //   e.preventDefault();
  //   window.history.go(-3);
  // };

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
            {/* <a 
                  className='mx-5' 
                  style={{ textDecoration: 'none' }}  
                  href='#' 
                  onClick={handleBackClick}
                >
                  back
                </a> */}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SuccessPayment;
