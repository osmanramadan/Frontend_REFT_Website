import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

function CityDropdown({ addhall, city, onChange }) {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const changeCity = (city) => {
    onChange(city);
    setIsActive(!isActive);
  };

  const data = [
    { id: 1, name: "cairo"},
    { id: 2, name: "Alexandria" },
    { id: 3, name: "Giza" },
    { id: 4, name: "Port Said" },
    { id: 5, name: "Luxor"}
  ];
  

  return (
    <div
      onClick={toggleDropdown}
      className={addhall ? 'inputfield-hall' : 'auth-dropdown'}
    >
      <p className="dropdown-btn">
        <Row className="d-flex justify-content-between">
          <Col className="text-start">{city}</Col>

          <Col className="text-end mx-2">
            <FontAwesomeIcon
              style={{ color: addhall ? '#D0D0D0' : '#FCD980' }}
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

{
  data && data.length && data.map((city, index) => (
    <div className="item" key={city.id} onClick={() => changeCity(city.name)}>
      {city.name}
    </div>
  ))
}




      </div>
    </div>
  );
}

export default CityDropdown;
