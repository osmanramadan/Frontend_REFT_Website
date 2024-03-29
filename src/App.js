import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './compenents/auth/protectedRoute';
import ProtectedRouteHook from './hooks/auth/protectedRoutedHook';
import HomePage from './pages/HomePage';

function App() {
  const [isUser, isAdmin, _userData] = ProtectedRouteHook();

  return (
    <div>
   

      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        
       
        <Route element={<ProtectedRoute auth={isUser} />}>
          {/* <Route exact path="/cart" element={<Cart />} /> */}
        </Route>

        <Route element={<ProtectedRoute auth={isAdmin} />}>
          {/* <Route exact path="/admin/allproducts" element={<Allproducts />} /> */} 
        </Route>
      </Routes>

    
    </div>
  );
}

export default App;
