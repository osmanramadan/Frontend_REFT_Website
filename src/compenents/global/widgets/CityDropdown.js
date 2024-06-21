import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function CityDropdown({ addhall, city, onChangeCity, onChangePlaceCityId }) {
  const [isActive, setIsActive] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const changeCity = (selectedCity) => {
    onChangeCity(selectedCity.name);
    if (onChangePlaceCityId) {
      onChangePlaceCityId(selectedCity.id);
    }
    setIsActive(false);
  };

  const data = [
    { id: 1, name: "Cairo-القاهرة" },
    { id: 2, name: "Giza-الجيزة" },
    { id: 3, name: "Qalyubia-القليوبية" },
    { id: 4, name: "Monufia-المنوفية" },
    { id: 5, name: "Sharqia-الشرقية" },
    { id: 6, name: "Dakahlia-الدقهلية" },
    { id: 7, name: "Beheira-البحيرة" },
    { id: 8, name: "Kafr ElSheikh-كفر الشيخ" },
    { id: 9, name: "Gharbia-الغربية" },
    { id: 10, name: "Alexandria-الاسكندرية" },
    { id: 11, name: "Matrouh-مطروح" },
    { id: 12, name: "Damietta-دمياط" },
    { id: 13, name: "Port Said-بورسعيد" },
    { id: 14, name: "Ismailia-الاسماعيلية" },
    { id: 15, name: "Suez-السويس" },
    { id: 16, name: "Red Sea-البحر الاحمر" },
    { id: 17, name: "North Sinai-شمال سيناء" },
    { id: 18, name: "South Sinai-جنوب سيناء" },
    { id: 19, name: "New Valley-الوادي الجديد" },
    { id: 20, name: "Fayoum-الفيوم" },
    { id: 21, name: "Beni Suef-بني سويف" },
    { id: 22, name: "Assiut-أسيوط" },
    { id: 23, name: "Minya-المنيا" },
    { id: 24, name: "Qena-قنا" },
    { id: 25, name: "Sohag-سوهاج" },
    { id: 26, name: "Luxor-الاقصر" },
    { id: 27, name: "Aswan-أسوان" },
  ];

  return (
    <div onClick={toggleDropdown} className={addhall ? 'inputfield-hall' : 'auth-dropdown'}>
      <p className="dropdown-btn px-2">
        <Row
          className="d-flex justify-content-between"
          style={{
            fontWeight: "400",
            color: "#8E8EA0",
            fontSize: "20px",
            fontFamily: "cairo",
            direction: i18n.language === 'en' ? 'ltr' : 'rtl'
          }}
        >
          <Col className={i18n.language === 'en' ? 'text-start' : 'text-end'} style={{ fontFamily: 'cairo' }}>
            {city ? (i18n.language === 'en' ? city.split('-')[0] : city.split('-')[1]) : (i18n.language === 'en' ? 'Select City' : 'اختر محافظتك')}
          </Col>
          <Col className={i18n.language === 'en' ? 'text-end mx-2' : 'text-start mx-2'}>
            <FontAwesomeIcon
              style={{ color: addhall ? '#D0D0D0' : '#FCD980' }}
              icon={faCaretUp}
              flip="vertical"
            />
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
          <div className="item" style={{ fontFamily: 'cairo' }} key={city.id} onClick={() => changeCity(city)}>
            {i18n.language === 'en' ? city.name.split('-')[0] : city.name.split('-')[1]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityDropdown;
