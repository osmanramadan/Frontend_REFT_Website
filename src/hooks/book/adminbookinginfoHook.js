import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {adminbookinginfo} from '../../redux/actions/bookAction';


const AdminBookingInfoHook = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);



  const res = useSelector((state) => state.bookReducer.adminbookinginfo);


  useEffect(() => {
    setLoading(true);
    dispatch(adminbookinginfo());
    setLoading(false);
  }, []);

  const searchforbookingplaceowner = (search) => {
    // Check if res and res.data are defined
    if (res && res.data) {
      const filteredUsers = res.data.filter((v) =>
        v.placeownerbyid.email.toLowerCase().includes(search.toLowerCase())
      );
      setData(filteredUsers);
    }
  };

  const searchforbookingteacher = (search) => {
    // Check if res and res.data are defined
    if (res && res.data) {
      const filteredUsers = res.data.filter((v) =>
        v.userbyid.email.toLowerCase().includes(search.toLowerCase())
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
      }
    }
  }, [res.data]);

  return [data,loading,searchforbookingplaceowner,searchforbookingteacher];
};

export default AdminBookingInfoHook;



