import React, { useState ,useEffect} from 'react';
import { Col, Nav, Navbar, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';
import Navbardropdown from './widgets/navbardropdown';
import NavBarButton from './widgets/navbarbutton';
import logo from '../../assets/images/logo.png';
import { useTranslation } from 'react-i18next'; 

function NavBar() {

  const { t, i18n } = useTranslation();
  const [isUser, isAdmin, data, loading] = ProtectedRouteHook();
  const [expanded, setExpanded] = useState(false);
  

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language',newLanguage);
  };
  

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);


  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" expanded={expanded}>
      <Container>
     
        <Link to="/" className="navbar-brand">
          <img style={{ height: '80px', width: '100px' }} alt="logo" src={logo} />
        </Link>

        <Form.Check
          type="switch"
          id="language-switch"
          label={i18n.language === 'en' ? 'ع' : 'EN'}
          className="mx-2"
          style={{ color: 'white' }}
          onChange={toggleLanguage}
        />

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          style={{ color: 'white', backgroundColor: 'white', marginLeft: 'auto' }}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Col
            xs={6}
            md={6}
            className={`d-flex justify-content-end mb-2 mb-md-0 ${i18n.language === 'ar' ? 'rtl' : ''}`}
            style={{ marginLeft: '100px' }}
          >
            <Nav className="d-flex justify-content-center">
              <Nav.Link href="/" className="link mx-md-3" style={{ fontFamily: i18n.language === 'en' ? 'Poppins' : 'Cairo' }}>
                {t('navbar.home')}
              </Nav.Link>
              <Nav.Link href="/about-us" className="link mx-lg-3" style={{ fontFamily: i18n.language === 'en' ? 'Poppins' : 'Cairo' }}>
                {t('navbar.aboutUs')}
              </Nav.Link>
              <Nav.Link href="/places" className="link mx-lg-3" style={{ fontFamily: i18n.language === 'en' ? 'Poppins' : 'Cairo' }}>
                {t('navbar.ourPlaces')}
              </Nav.Link>
              {data.role === 'OWNER' && (
                <Nav.Link href="/hall-add" className="link mx-lg-3" style={{ fontFamily: i18n.language === 'en' ? 'Poppins' : 'Cairo' }}>
                  {t('navbar.addPlace')}
                </Nav.Link>
              )}
              
            </Nav>
          </Col>
        
          <Col
            xs={6}
            md={6}
            className="d-flex justify-content-center px-xs-4 px-md-4"
            style={{ marginRight: '-40px' }}
          >
 
           {isUser || isAdmin? (
              isUser || isAdmin ? <Navbardropdown isUser={isUser} /> : null
            ) : (
              !isUser || !isAdmin ? <NavBarButton /> : null
           )}

          
        
          
            
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
