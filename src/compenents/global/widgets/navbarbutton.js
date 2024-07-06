import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function NavBarButton() {
  const [show, setShow] = useState(false);
  const { t, i18n } = useTranslation();

  const handleMenuClick = () => {
    setShow(!show);
  };

  return (
    <div>
     <Dropdown onClick={handleMenuClick}>
    <Row
    className="d-flex align-items-center justify-content-center mt-3"
    style={{ color: 'white' }}
  >
    <Col className="text-center d-flex align-items-center">
      
        {/* <button className="btn-navbar" onClick={() => (location.href = '/signup')}>
          {t('navbar.signup')}
       </button> */}
    </Col>
    <Col xs="3">
      <Dropdown.Toggle
        id="dropdown-autoclose-true"
        style={{ backgroundColor: '#1C1E53', border: 'none' }}
      ></Dropdown.Toggle>
    </Col>
  </Row>
  <Dropdown.Menu
          className={`d-flex flex-column justify-content-between text-center  ${
            show ? 'd-none' : 'show'
          }`}
          style={{
            backgroundColor: '#1C1E53',
            color: 'white',
            height: '100px',
            width: '210px',
            padding: '7px',
            marginTop: '17px',
            borderColor: 'white',
            borderWidth: '3px',
            fontFamily: i18n.language === 'en' ? 'Poppins' : 'Cairo' 
          }}
        >
        
          <Link  className="nav-link  mt-2 mb-3" >
            <div  onClick={() => (location.href = '/signup')}>
               {t('navbar.signup')}
            </div>
          </Link>
          <Link className="nav-link mb-5 mt-1">
            <div  onClick={() => (location.href = '/signin')}>
              {t('navbar.signin')} 
            </div>
          </Link>

        </Dropdown.Menu>
  
    </Dropdown>
    </div>
  );
}

export default NavBarButton;


// import React from 'react';
// import { useTranslation } from 'react-i18next';

// function NavBarButton() {
//   const { t } = useTranslation();

//   return (
//     <button className="btn-navbar" onClick={() => (location.href = '/signup')}>
//       {t('navbar.signup')}
//     </button>
//   );
// }

// export default NavBarButton;