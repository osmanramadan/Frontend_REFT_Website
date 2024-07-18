import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ownerbookinginfo } from '../../redux/actions/bookAction';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';

const OwnerBookingInfoHook = () => {

  const [_isuser, _isadmin, userData] = ProtectedRouteHook();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const res = useSelector((state) => state.bookReducer.ownerbookinginfo);

  useEffect(() => {
    setLoading(true);
    userData.id?dispatch(ownerbookinginfo(userData.id)) : '';
    setLoading(false);
  }, [userData]);

  const searchforbookingteacher = (search) => {
    if (res && res.data) {
      const filteredUsers = res.data.filter((v) =>
        v.userbyid.email.toLowerCase().includes(search.toLowerCase()),
      );
      setData(filteredUsers);
    }
  };

  useEffect(() => {
    if (loading === false) {
      setLoading(true);

      if (res.data.validationError) {
        window.location.href='/'
        return;
        // alert(res.data.validationError)
      }
      if (res.status) {
        if (res.status === 'success') {
          setData(res.data);
        }

        if (res.status === 'fail') {
          setData([]);
        }
      }
    }
  }, [res.data]);

  return [data, loading, searchforbookingteacher];
};

export default OwnerBookingInfoHook;
