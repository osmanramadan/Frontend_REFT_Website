import { Link } from 'react-router-dom';

function Admintabs() {
  //   const [show, setShow] = useState(false);
  //   const [isUser, isAdmin, data] = ProtectedRouteHook();
  return (
    <div
      className="d-flex flex-column justify-content-center user-left-tab"
      style={{ backgroundColor: '#eef4fa', height: '100vh' }}
    >
      <Link to="/admin-places" className="link">
        <div className="user-tab-item border-bottom">Halls</div>
      </Link>
      <Link to="/admin-messages" className="link mt-2">
        <div className="user-tab-item border-bottom">Messages</div>
      </Link>
      <Link to="/admin-booking" className="link mt-2">
        <div className="user-tab-item border-bottom">Booking</div>
      </Link>
    </div>
  );
}

export default Admintabs;
