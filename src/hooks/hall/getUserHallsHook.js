import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserHalls } from '../../redux/actions/hallAction';
import ProtectedRouteHook from '../auth/protectedRoutedHook';

const GetUserHallsHook = () => {
  const dispatch = useDispatch();
  const [_isuser, _isadmin, userData] = ProtectedRouteHook();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const res = useSelector((state) => state.hallReducer.getUserHalls);

  useEffect(() => {
    setLoading(true);
    userData.id ? dispatch(getUserHalls(userData.id)) : '';
    setLoading(false);
  }, [userData]);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);

      if (res.status) {
        if (res.status === 'success') {
          setData(res.data);
        }
        if (res.data.validationError) {
          window.location.href = '/'
        }
      }
    }
  }, [res.data]);

  return [data, loading];
};

export default GetUserHallsHook;
