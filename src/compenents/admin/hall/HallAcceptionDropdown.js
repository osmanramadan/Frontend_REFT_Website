import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

function HallAcceptionDropdown({ status, onChange }) {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const changeStatus = (status) => {
    onChange(status);
    setIsActive(!isActive);
  };

  return (
    <div onClick={toggleDropdown} className={'inputfield-hallacception'}>
      <p>
        <Row>
          <Col className="text-end">{status}</Col>

          <Col className="text-end">
            <FontAwesomeIcon icon={faCaretUp} flip="vertical" />{' '}
          </Col>
        </Row>
      </p>

      <div
        className="auth-dropdown-content"
        style={{
          display: isActive ? 'block' : 'none',
          fontWeight: 'bold',
          fontSize: '20px',
          color: '#282938',
        }}
      >
        <div className="item" onClick={(e) => changeStatus('true')}>
          Accept
        </div>
        <div className="item" onClick={(e) => changeStatus('false')}>
          Refuse
        </div>
      </div>
    </div>
  );
}

export default HallAcceptionDropdown;
