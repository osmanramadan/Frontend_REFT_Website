import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import Profile from './pages/user/TeacherProfile';
import UserPlaces from './pages/user/UserPlaces';
import AboutUs from './pages/aboutus/AboutUs';
import ContactUs from './pages/contactus/ContactUs';
import AdminHalls from './pages/admin/halls';
import AdminMessages from './pages/admin/messages';
import MessDetails from './pages/admin/messageDetails';
import NotFound from './compenents/global/notfound';
import HallBook from './pages/hall/HallBook';
import HallCheckoutDays from './pages/checkout/HallCheckoutIntervalDays';
import HallCheckoutHours from './pages/checkout/HallCheckoutIntervalHours';
import HallCheckoutHoursDays from './pages/checkout/HallCheckoutDaysHours';
import './i18n';
import HallCheckoutOneHour from './pages/checkout/HallCheckoutOneHour';
import UserTermsAndCondition from './pages/user/UserTermsAndCondition';
import SuccessPayment from './pages/payment/SuccessPayment';
import FailPayment from './pages/payment/FailPayment';
import AdminBooking from './pages/admin/booking';
import UserBooking from './pages/user/UserBooking';
import OwnerBooking from './pages/user/OwnerBooking';
import OwnerPlacesBooking from './pages/user/OwnerPlacesBooking';
import OwnerProfile from './pages/user/OwnerProfile';
import TeacherProfile from './pages/user/TeacherProfile';
import { useTranslation } from 'react-i18next';

function App() {
  const [isUser, isAdmin, _userData] = ProtectedRouteHook();
  const { t, i18n } = useTranslation()
{
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n])
}

  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/"  element={<HomePage />} />
        <Route exact path="*"  element={<NotFound />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/hall-details" element={<HallDetails />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/contact-us"    element={<ContactUs />} />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="/change-password" element={<ChangePassword />} />
        <Route exact path="/verify-code" element={<SendCode />} />
        <Route exact path="/places" element={<Halls />} />
        {/* <Route exact path="/hall-add" element={<HallAdd />} /> */}
  
        {/* <Route exact path="/checkout-hour" element={<HallCheckoutOneHour />} />
        <Route exact path="/checkout-hours" element={<HallCheckoutHours />} />
        <Route exact path="/checkout-days" element={<HallCheckoutDays />} />
        <Route exact path="/checkout-hours-days" element={<HallCheckoutHoursDays />} /> */}
        <Route exact path="/terms" element={<UserTermsAndCondition/>} />

        

        <Route errorElement={<Navigate to='signin'/>} element={<ProtectedRoute auth={isUser} />}>
          {/* <Route exact path="/hall-details"   element={<HallDetails />} /> */}
          <Route exact path="/checkout-hour" element={<HallCheckoutOneHour />} />
          <Route exact path="/checkout-hours" element={<HallCheckoutHours />} />
          <Route exact path="/checkout-days" element={<HallCheckoutDays />} />
          <Route exact path="/checkout-hours-days" element={<HallCheckoutHoursDays />} />
          <Route exact path="/hall-add" element={<HallAdd />} />
          <Route exact path="/owner-profile"   element={<OwnerProfile/>} />
          <Route exact path="/teacher-profile"   element={<TeacherProfile/>} />
          <Route exact path="/user-booking"   element={<UserBooking />} />
          <Route exact path="/owner-booking"  element={<OwnerPlacesBooking />} />
          <Route exact path="/owner-places-booking"  element={<OwnerBooking />} />
          <Route exact path="/user-places"           element={<UserPlaces />} />

          <Route exact path="/processing-payment"    element={<SuccessPayment />} />
          <Route exact path="/fail-payment"          element={<FailPayment />} />
          <Route exact path="/book-hall" element={<HallBook />} />
        </Route>

        <Route  element={<ProtectedRoute auth={isAdmin}/>}>
          <Route exact path="/admin-places"    element={<AdminHalls />} />
          {/* <Route exact path="/hall-details"    element={<HallDetails />} /> */}
          <Route exact path="/admin-booking"   element={<AdminBooking />} />
          <Route exact path="/admin-messages"  element={<AdminMessages />} />
          <Route exact path="/message-details" element={<MessDetails />} />
        </Route>
        
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
