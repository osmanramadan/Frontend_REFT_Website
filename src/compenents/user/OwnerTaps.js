import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';

function Ownertabs({ admin }) {
  const [show, setShow] = useState(false);
  const [isUser, isAdmin, data] = ProtectedRouteHook();

  return (
    <div
      className="d-flex flex-column justify-content-center user-left-tab"
      style={{ backgroundColor: '#eef4fa', height: '100vh' }}
    >
      <Link to="/owner-profile" className="link">
        <div className="user-tab-item border-bottom">profile</div>
      </Link>

      <Link to="/user-places" className="link mt-3">
        <div className="user-tab-item border-bottom">My Places</div>
      </Link>
      <Link to="/owner-booking" className="link mt-3">
        <div className="user-tab-item border-bottom">My Booking</div>
      </Link>

      <Link to="/owner-places-booking" className="link mt-2">
        <div className="user-tab-item border-bottom">Booking OF My Places</div>
      </Link>
    </div>
  );
}

export default Ownertabs;
