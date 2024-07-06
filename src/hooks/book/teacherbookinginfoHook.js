import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {teacherbookinginfo} from '../../redux/actions/bookAction';


const TeacherBookingInfoHook = () => {

  try{
    
    if (localStorage.getItem('user') !== null) {
      var user = JSON.parse(localStorage.getItem('user'));
    } else {
      window.location.href = '/signin';
      return; 
    }
  }catch(e){
    window.location.href = '/signin';
    return; 
  }

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);



  const res = useSelector((state) => state.bookReducer.teacherbookinginfo);


  useEffect(() => {
    setLoading(true);
    if(user.id)
      dispatch(teacherbookinginfo(user.id));
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

//   const searchforbookingteacher = (search) => {
//     // Check if res and res.data are defined
//     if (res && res.data) {
//       const filteredUsers = res.data.filter((v) =>
//         v.userbyid.email.toLowerCase().includes(search.toLowerCase())
//       );
//       setData(filteredUsers);
//     }
//   };

 
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

  return [data,loading,searchforbookingplaceowner];
//   return [data,loading,searchforbookingplaceowner,searchforbookingteacher];
};

export default TeacherBookingInfoHook;



