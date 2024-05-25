import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import i18n from '../../i18n';

function RoleDropDown({ role, onChange }) {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const changeRole = (role) => {
    onChange(role=='صاحب مكان'||role=='OWNER'?'OWNER':'TEACHER');
    setIsActive(!isActive);
  };

  return (
    <div onClick={toggleDropdown} className="auth-dropdown">
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
        className="auth-dropdown-content"
        style={{
          display: isActive ? 'block' : 'none',
        }}
      >
        <div className="item"  onClick={(e) => changeRole(e.target.textContent)}>
          {/* {i18n.language == 'en'?OWNER:'صاحب مكان'} */}
          OWNER
        </div>
        <div className="item"  onClick={(e) => changeRole(e.target.textContent)}>
          TEACHER
           {/* {i18n.language == 'en'?TEACHER:'مدرس'} */}
        </div>
      </div>
    </div>
  );
}

export default RoleDropDown;
