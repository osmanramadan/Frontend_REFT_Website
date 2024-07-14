import { Link } from 'react-router-dom';

function Teachertabs() {
  return (
    <div
      className="d-flex flex-column justify-content-center user-left-tab"
      style={{ backgroundColor: '#eef4fa', height: '100vh' }}
    >
      <Link to="/teacher-profile" className="link">
        <div className="user-tab-item border-bottom">profile</div>
      </Link>

      <Link to="/user-booking" className="link mt-2">
        <div className="user-tab-item border-bottom">Booking</div>
      </Link>
    </div>
  );
}

export default Teachertabs;
