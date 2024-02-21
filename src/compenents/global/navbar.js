import React, { useState } from 'react';
import { Col, Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';
import NavBarButton from './widgets/navbarbutton';
import Navbardropdown from './widgets/navbardropdown';
import logo from '../../assets/images/logo.png';

function NavBar() {
  const [isUser, isAdmin, _data] = ProtectedRouteHook();
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar collapseOnSelect expand="md" className="navbar" expanded={expanded}>
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
            className="d-flex justify-content-end justify-content-xs-center  mb-2 mb-md-0"
            style={{ marginLeft: '100px' }}
          >
            <Nav className="d-flex justify-content-center">
              <Nav.Link href="/" className="link mx-md-4">
                HOME
              </Nav.Link>
              <Nav.Link href="/about-us" className="link mx-lg-4">
                About us
              </Nav.Link>
              <Nav.Link href="/contact-us" className="link mx-lg-4">
                Contact us
              </Nav.Link>
              <Nav.Link href="/hall-add" className="link mx-lg-4">
                Add hall
              </Nav.Link>
            </Nav>
          </Col>

          <Col
            xs={9}
            md={6}
            className="d-flex justify-content-center px-xs-3 px-md-3"
            style={{ marginRight: '-40px' }}
          >
            {/* isUser || isAdmin ? (<Navbardropdown isUser={isUser} />):(<NavBarButton/>)  */}
            {<Navbardropdown isUser={isUser} />}
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
