import React, { useState } from 'react';
import { Col, Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';
import NavBarButton from './widgets/navbarbutton';
import logo from '../../assets/images/logo.png';

function NavBar() {
  const [isUser, isAdmin, data] = ProtectedRouteHook();
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar collapseOnSelect expand="md" className="navbar" expanded={expanded}>
      <Container fluid>

          <Link to="/">
            <img
              style={{ height: '80px', width: '100px' }}
              className="mx-5"
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
            xs={12}
            md={6}
            className="d-flex justify-content-end justify-content-sm-center mb-2 mb-md-0"
          >
            <Nav className="k d-flex justify-content-start">
              <Nav.Link href="/" className="link mx-lg-4">
                HOME
              </Nav.Link>
              <Nav.Link href="/" className="link mx-lg-4">
                About us
              </Nav.Link>
              <Nav.Link href="/" className="link mx-lg-4">
                Contact us
              </Nav.Link>
              <Nav.Link href="/" className="link mx-lg-4">
                Our places
              </Nav.Link>
            </Nav>
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center justify-content-md-end"
          >
            <NavBarButton />
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
