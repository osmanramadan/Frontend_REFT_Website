import React, { useEffect } from 'react';
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
import SuccessPaymentStripe from './pages/payment/SuccessPaymentStripe';

function App() {
  const [isUser, isAdmin, _userData] = ProtectedRouteHook();
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/hall-details" element={<HallDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/verify-code" element={<SendCode />} />
        <Route path="/places" element={<Halls />} />
        <Route path="/terms" element={<UserTermsAndCondition />} />
        <Route path="/processing-payment" element={<SuccessPayment />} />
        <Route path="/fail-payment" element={<FailPayment />} />

        <Route element={<ProtectedRoute auth={isUser} />}>
          <Route path="/checkout-hour" element={<HallCheckoutOneHour />} />
          <Route path="/checkout-hours" element={<HallCheckoutHours />} />
          <Route path="/checkout-days" element={<HallCheckoutDays />} />
          <Route
            path="/checkout-hours-days"
            element={<HallCheckoutHoursDays />}
          />
          <Route path="/hall-add" element={<HallAdd />} />
          <Route path="/owner-profile" element={<OwnerProfile />} />
          <Route path="/teacher-profile" element={<TeacherProfile />} />
          <Route path="/user-booking" element={<UserBooking />} />
          <Route
            path="/owner-places-booking"
            element={<OwnerPlacesBooking />}
          />
          <Route path="/owner-booking" element={<OwnerBooking />} />
          <Route path="/user-places" element={<UserPlaces />} />
         
          <Route
            path="/processing-stripe-payment"
            element={<SuccessPaymentStripe />}
          />
          <Route path="/book-hall" element={<HallBook />} />
        </Route>

        <Route element={<ProtectedRoute auth={isAdmin} />}>
          <Route path="/admin-places" element={<AdminHalls />} />
          <Route path="/admin-booking" element={<AdminBooking />} />
          <Route path="/admin-messages" element={<AdminMessages />} />
          <Route path="/message-details" element={<MessDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
