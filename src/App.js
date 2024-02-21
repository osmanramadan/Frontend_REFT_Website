import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './compenents/auth/protectedRoute';
import ProtectedRouteHook from './hooks/auth/protectedRoutedHook';
import HomePage from './pages/HomePage';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import ForgetPassword from './pages/auth/ForgetPassword';
import SendCode from './pages/auth/SendCode';
import ChangePassword from './pages/auth/ChangePassword';
import Halls from './pages/hall/halls';
import HallDetails from './pages/hall/HallDetails';
import HallAdd from './pages/hall/HallAdd';
import Profile from './pages/user/UserProfile';
import UserPlaces from './pages/user/UserPlaces';
import AboutUs from './pages/aboutus/AboutUs';
import ContactUs from './pages/contactus/ContactUs';

function App() {
  const [isUser, isAdmin, _userData] = ProtectedRouteHook();

  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/about-us" element={<AboutUs/>} />
        <Route exact path="/contact-us" element={<ContactUs/>} />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="/change-password" element={<ChangePassword />} />
        <Route exact path="/verify-code" element={<SendCode />} />
        <Route exact path="/hall-details" element={<HallDetails />} />
        <Route exact path="/hall-add" element={<HallAdd />} />
        <Route exact path="/places" element={<Halls />} />

        {/* <Route element={<ProtectedRoute auth={isUser} />}> */}
        <Route exact path="/user-profile" element={<Profile />} />
        <Route exact path="/user-places" element={<UserPlaces />} />
        
        {/* </Route> */}

        <Route element={<ProtectedRoute auth={isAdmin} />}>
          {/* <Route exact path="/admin/allproducts" element={<Allproducts />} /> */}
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
