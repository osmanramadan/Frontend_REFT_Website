import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';
import ProtectedRouteHook from '../../../hooks/auth/protectedRoutedHook';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbardropdown({ isUser }) {
  const [isuser, _isadmin, userData] = ProtectedRouteHook();

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
        {isUser ? (
          <Row
            className="d-flex align-items-center mt-3"
            style={{ color: 'white' }}
          >
            <Row className="d-flex justify-content-center">
              <Col xs="3" className="text-center d-flex align-items-center">
                {userData && userData.profile_img ? (
                  <Figure>
                    <Figure.Image
                      width={125}
                      height={125}
                      alt="Profile Image"
                      src={`data:image/*;base64,${userData.profile_img}`}
                      roundedCircle
                    />
                  </Figure>
                ) : (
                  <FontAwesomeIcon
                    style={{
                      marginRight: '3px',
                      color: '#fcd980',
                      height: '35px',
                      width: '35px',
                    }}
                    icon={faCircleUser}
                  />
                )}
              </Col>
              <Col xs="6">
                <div style={{ fontWeight: 'medium', fontSize: '14px' }}>
                  {userData ? userData.name : ''}
                </div>
                <div
                  style={{
                    fontWeight: 'regular',
                    fontSize: '12px',
                    color: '#b1b2c4',
                  }}
                >
                  {userData ? userData.role : ''}
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
            className="d-flex align-items-center justify-content-center mt-3"
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
          className={`d-flex flex-column justify-content-between text-center  ${
            show ? 'd-none' : 'show'
          }`}
          style={{
            backgroundColor: '#1C1E53',
            color: 'white',
            height: '110px',
            width: '210px',
            padding: '10px',
            marginTop: '17px',
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
            <div>
              <Link className="link mt-2 mb-1" to="/admin-places">
                {' '}
                Admin
              </Link>
              <Link className="link d-block mt-2 mb-1" to="/admin-messages">
                {' '}
                Messages
              </Link>
            </div>
          )}

          <Link className="link  mt-1 mb-2">
            <div onClick={Logout}>Log out</div>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
export default Navbardropdown;
