import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

function RoleDropDown({ role, onChange }) {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const changeRole = (role) => {
    onChange(role);
    setIsActive(!isActive);
  };

  return (
    <div onClick={toggleDropdown} className="role-dropdown">
      <p className="dropdown-btn">
        <Row className="d-flex justify-content-between">
          <Col className="text-start">{role}</Col>

          <Col className="text-end mx-2">
            <FontAwesomeIcon
              style={{ color: '#FCD980' }}
              icon={faCaretUp}
              flip="vertical"
            />{' '}
          </Col>
        </Row>
      </p>

      <div
        className="role-dropdown-content"
        style={{
          display: isActive ? 'block' : 'none',
        }}
      >
        <div className="item" onClick={(e) => changeRole(e.target.textContent)}>
          OWNER
        </div>
        <div className="item" onClick={(e) => changeRole(e.target.textContent)}>
          TEACHER
        </div>
      </div>
    </div>
  );
}

export default RoleDropDown;
