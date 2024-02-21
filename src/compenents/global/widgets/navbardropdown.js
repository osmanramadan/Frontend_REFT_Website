import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import osman from '../../../assets/images/24.png';
import { Figure } from 'react-bootstrap';
import ProtectedRouteHook from '../../../hooks/auth/protectedRoutedHook';

function Navbardropdown({ isUser }) {
  const [isuser, isadmin, data] = ProtectedRouteHook();

  const [show, setShow] = useState(false);

  const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('id');

    setTimeout(() => {
      window.location.href = '/signin';
    }, 1000);
  };

  const handleMenuClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <Dropdown onClick={handleMenuClick}>
        {isuser ? (
          <Row
            className="d-flex align-items-center mt-3"
            style={{ color: 'white' }}
          >
            <Row className="d-flex justify-content-center">
              <Col xs="3" className="text-center d-flex align-items-center">
                <Figure>
                  <Figure.Image
                    width={120}
                    height={120}
                    alt="Profile Image"
                    src={osman}
                    roundedCircle
                  />
                </Figure>
              </Col>
              <Col xs="6">
                <div style={{ fontWeight: 'medium', fontSize: '14px' }}>
                  mr/osman
                </div>
                <div
                  style={{
                    fontWeight: 'regular',
                    fontSize: '12px',
                    color: '#b1b2c4',
                  }}
                >
                  Teacher
                </div>
              </Col>
              <Col xs="3">
                <Dropdown.Toggle
                  id="dropdown-autoclose-true"
                  style={{ backgroundColor: '#1C1E53', border: 'none' }}
                ></Dropdown.Toggle>
              </Col>
            </Row>
          </Row>
        ) : (
          <Row
            className="d-flex align-items-center justigy-content-center mt-3"
            style={{ color: 'white' }}
          >
            <Col className="text-center d-flex align-items-center">Admin</Col>
            <Col xs="3">
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                style={{ backgroundColor: '#1C1E53', border: 'none' }}
              ></Dropdown.Toggle>
            </Col>
          </Row>
        )}

        <Dropdown.Menu
          className={`mx-2 d-flex flex-column justify-content-between text-center  ${
            show ? 'd-none' : 'show'
          }`}
          style={{
            backgroundColor: '#1C1E53',
            color: 'white',
            height: '110px',
            width: '210px',
            padding: '10px',
            marginLeft: '-17px',
            marginTop: '10px',
            borderColor: 'white',
            borderWidth: '3px',
          }}
        >
          {isuser ? (
            <Link className="link py-2" to="/user-profile">
              {' '}
              My Profile
            </Link>
          ) : (
            <Link className="link mt-2 mb-1" to="/">
              {' '}
              Admin
            </Link>
          )}

          <Link className="link py-1 mt-1 mb-1">
            <div onClick={Logout}>Log out</div>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
export default Navbardropdown;
