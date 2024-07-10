import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ auth, children }) => {
  if (auth === undefined) {
    console.log('Auth is undefined, loading...');
    return null; // Or a loading spinner
  }

  if (!auth) {
    console.log('Auth failed, redirecting to sign-in');
    return <Navigate to="/signin" replace={true} />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;

// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = ({ auth, children }) => {

//   if (auth === undefined) {
//     return null;
//   }

//   return auth ? children || <Outlet /> : <Navigate to="/signin" replace={true} />;

// };

// export default ProtectedRoute;

// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = () => {
//   const token = localStorage.getItem('token')

//   return token ? <Outlet /> : <Navigate to="/signin"  replace={true} />;
// };

// export default ProtectedRoute;
