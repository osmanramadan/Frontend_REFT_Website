import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOutdent, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Admintabs({ icon }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return icon ? (
    <div className="mt-4">
      <Button variant="primary" className="cart-action" onClick={handleShow}>
        <FontAwesomeIcon color="black" icon={faOutdent} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Body>
          <div className="d-flex flex-column user-left-tabs pt-5">
            <div
              style={{
                marginBottom: '5px',
                marginTop: '55px',
                textAlign: 'center',
              }}
            >
              <Button className="cart-action" onClick={handleClose}>
                <FontAwesomeIcon color="black" icon={faArrowRight} />
              </Button>
            </div>
            <div
              className="d-flex flex-column justify-content-center user-left-tab"
              style={{ backgroundColor: '#eef4fa', height: '100vh' }}
            >
              <Link to="/user-profile" className="link">
                <div className="user-tab-item border-bottom">Dashboard</div>
              </Link>
              <Link to="/user-places" className="link mt-3">
                <div className="user-tab-item border-bottom">My Places</div>
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  ) : (
    <div
      className="d-flex flex-column justify-content-center user-left-tab"
      style={{ backgroundColor: '#eef4fa', height: '100vh' }}
    >
      <Link to="/user-profile" className="link">
        <div className="user-tab-item border-bottom">Dashboard</div>
      </Link>
      <Link to="/user-places" className="link mt-3">
        <div className="user-tab-item border-bottom">My Places</div>
      </Link>
    </div>
  );
}

export default Admintabs;
