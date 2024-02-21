import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function MidTitle({ txt, arrow }) {
  return (
    <div>
      {arrow ? (
        <Row
          style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '38px' }}
          className="d-flex justify-content-center mb-2 mt-4"
        >
          <Col xs="1">
            <Link className="link" to={'/places'}>
              <FontAwesomeIcon icon={faLongArrowAltLeft} />
            </Link>
          </Col>

          <Col xs="11" className="text-center">
            <div>{txt}</div>
          </Col>
        </Row>
      ) : (
        <Row
          style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '38px' }}
          className={'d-flex justify-content-center mb-2 mt-4'}
        >
          <Col xs="1"> </Col>

          <Col xs="11" className="text-center">
            <div>{txt}</div>
          </Col>
        </Row>
      )}
    </div>
  );
}
export default MidTitle;
