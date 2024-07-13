import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teacherbookinginfo } from '../../redux/actions/bookAction';
import ProtectedRouteHook from '../auth/protectedRoutedHook';


const TeacherBookingInfoHook = () => {
  
  const [_isuser, _isadmin, userData] = ProtectedRouteHook()


  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const res = useSelector((state) => state.bookReducer.teacherbookinginfo);

  useEffect(() => {
    setLoading(true);
    userData.id?dispatch(teacherbookinginfo(userData.id)):'';
    setLoading(false);
  }, [userData]);

  const searchforbookingplaceowner = (search) => {
    // Check if res and res.data are defined
    if (res && res.data) {
      const filteredUsers = res.data.filter((v) =>
        v.placeownerbyid.email.toLowerCase().includes(search.toLowerCase()),
      );
      setData(filteredUsers);
    }
  };


  useEffect(() => {

    if (loading === false) {
      
      setLoading(true);

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

  return [data, loading, searchforbookingplaceowner];
};

export default TeacherBookingInfoHook;
