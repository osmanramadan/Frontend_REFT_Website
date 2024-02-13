import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

function CityDropdown({city,onChange}) {
  const [isActive, setIsActive] = useState(false);


  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const changeCity = (city) => {
    onChange(city)
    setIsActive(!isActive);
  };

  return (
    <div onClick={toggleDropdown} className="role-dropdown">
      <p className="dropdown-btn">
        <Row className="d-flex justify-content-between">
          
          <Col className="text-start">{city}</Col>

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
        <div className="item" onClick={(e) => changeCity(e.target.textContent)}>
          Cairo
        </div>
        <div className="item" onClick={(e) => changeCity(e.target.textContent)}>
          Alexandria
        </div>
        <div className="item" onClick={(e) => changeCity(e.target.textContent)}>
          Giza
        </div>
        <div className="item" onClick={(e) => changeCity(e.target.textContent)}>
          Port Said
        </div>
        <div className="item" onClick={(e) => changeCity(e.target.textContent)}>
          Luxor
        </div>
      </div>
    </div>
  );
}

export default CityDropdown;
