
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
    { id: 1, name: "Cairo-القاهرة"},
    { id: 2, name: "Giza-الجيزة" },
    { id: 3, name: "Qalyubia-القليوبية" },
    { id: 4, name: "Monufia-المنوفية" },
    { id: 5, name: "Sharqia-الشرقية"},
    { id: 6, name: "Dakahlia-الدقهلية"},
    { id: 7, name: "Beheira-البحيرة" },
    { id: 8, name: "Kafr ElSheikh-كفر الشيخ" },
    { id: 9, name: "Gharbia-الغربية" },
    { id: 10, name: "Alexandria-الاسكندرية"},
    { id: 11, name: "Matrouh-مطروح"},
    { id: 12, name: "Damietta-دمياط" },
    { id: 13, name: "Port Said-بورسعيد" },
    { id: 14, name: "Ismailia-الاسماعيلية" },
    { id: 15, name: "Suez-السويس"},
    { id: 16, name: "Red Sea-البحر الاحمر" },
    { id: 17, name: "North Sinai-شمال سيناء" },
    { id: 18, name: "South Sinai-جنوب سيناء" },
    { id: 19, name: "New Valley-الوادي الجديد"},
    { id: 20, name: "Fayoum-الفيوم" },
    { id: 21, name: "Beni Suef-بني سويف" },
    { id: 22, name: "Assiut-أسيوط" },
    { id: 23, name: "Minya-المنيا"},
    { id: 24, name: "Qena-قنا"},
    { id: 25, name: "Sohag-سوهاج" },
    { id: 26, name: "Luxor-الاقصر" },
    { id: 27, name: "Aswan-أسوان" },
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
        {data && data.length && data.map((city, index) => (
          <div className="item" key={city.id} onClick={() => changeCity(city.name)}>
            {city.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityDropdown;
