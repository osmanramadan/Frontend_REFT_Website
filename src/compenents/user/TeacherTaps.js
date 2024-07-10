// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';

// function Admintabs({ admin }) {
//   const [show, setShow] = useState(false);
//   const [isUser, isAdmin, data] = ProtectedRouteHook();

//   useEffect(()=>{
//      console.log(data)
//   },[data])

//   return  (<div
//   className="d-flex flex-column justify-content-center user-left-tab"
//   style={{ backgroundColor: '#eef4fa', height: '100vh' }}
// >
//   <Link to="/user-profile" className="link">
//     <div className="user-tab-item border-bottom">profile</div>
//   </Link>

//   {
//    data.role && data.role==='OWNER'?<Link to="/user-places" className="link mt-3">
//     <div className="user-tab-item border-bottom">My Places</div>
//   </Link>:''
//   }
//   {
//     data.role && data.role==='OWNER'?<Link to="/owner-places-booking" className="link mt-3">
//    <div className="user-tab-item border-bottom">My Booking</div>
//  </Link>:''
//   }

//   {
//    data.role && data.role==='OWNER'?<Link to="/owner-booking" className="link mt-2">
//     <div className="user-tab-item border-bottom">Booking OF My Places</div>
//   </Link>: <Link to="/user-booking" className="link mt-2">
//     <div className="user-tab-item border-bottom">Booking</div>
//   </Link>
//   }
// </div>)
// }

// export default Admintabs;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';

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
