import React, { useState } from 'react';
import { Col, Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';
import Navbardropdown from './widgets/navbardropdown';
import NavBarButton from './widgets/navbarbutton';
import logo from '../../assets/images/logo.png';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook


function NavBar() {
  const { t, i18n } = useTranslation(); // Initialize useTranslation hook

  const [isUser, isAdmin, _data] = ProtectedRouteHook();
  const [expanded, setExpanded] = useState(false);


  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" expanded={expanded}>
      <Container>
        <Link to="/">
          <img
            style={{ height: '80px', width: '100px' }}
            alt="image"
            src={logo}
          />
        </Link>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          style={{ color: 'white', backgroundColor: 'white' }}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Col
            xs={6}
            md={6}
            className={`d-flex justify-content-end justify-content-xs-center mb-2 mb-md-0 ${
              i18n.language === 'ar' ? 'rtl' : '' // Add RTL class for Arabic
            }`}
            style={{ marginLeft: '100px' }}
          >
            <Nav className="d-flex justify-content-center">
              <Nav.Link href="/" className="link mx-md-3">
                {t('navbar.home')}
              </Nav.Link>
              <Nav.Link href="/about-us" className="link mx-lg-3">
                {t('navbar.aboutUs')}
              </Nav.Link>
              <Nav.Link href="/places" className="link mx-lg-3">
                {t('navbar.ourPlaces')}
              </Nav.Link>
              <Nav.Link href="/hall-add" className="link mx-lg-3">
                {t('navbar.addPlace')}
              </Nav.Link>
            </Nav>
          </Col>

          <Col
            xs={9}
            md={6}
            className="d-flex justify-content-center px-xs-4 px-md-4"
            style={{ marginRight: '-40px' }}
          >
            {isUser || isAdmin ? (
              <Navbardropdown isUser={isUser} />
            ) : (
              <NavBarButton />
            )}
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

