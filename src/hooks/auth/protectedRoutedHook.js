// import { useState, useEffect } from 'react';
// // import CryptoJS from 'crypto-js';

// const ProtectedRouteHook = () => {

//   const [userData, setUserData] = useState([]);
//   const [error, setError] = useState(true);


//   useEffect(() => {

//     const storedUserData = localStorage.getItem('user');
//     // var userData={}
//     // var userData = CryptoJS.AES.decrypt(storedUserData,process.env.REACT_APP_ENCRYPT_KEY).toString(CryptoJS.enc.Utf8);

//     if (storedUserData) {

//       try {
        
//         const parsedUserData = JSON.parse(storedUserData);

//         if (parsedUserData) {

//           setUserData(parsedUserData);
//           setError(false);
          
//         } else {
//           setError(true);
//         }

//       } catch (error) {
//         setError(true);
//       }

//     }
//   }, []);

//   return [

//     error?undefined:userData.role   === 'OWNER' || userData.role === 'TEACHER', //  isUser
//     error ?undefined: userData.role === process.env.REACT_APP_ADMIN_CODE, //  isAdmin
//     userData,
//   ];
// };

// export default ProtectedRouteHook;

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../../redux/actions/authAction';

const ProtectedRouteHook = () => {

  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.authReducer.verifyuser);
  
  useEffect(() => {
    setLoading(true);
    dispatch(verifyUser());
    setLoading(false);
  }, []);


  useEffect(() => {

    if (loading === false) {

      if (res.data) {

        setLoading(true)
        // if status is success set error false because ,this meaning the user trying to log is exist
        if (res.status === 'success') {
          localStorage.setItem('user',JSON.stringify(res.data))
          setUserData(res.data)
          setError(false)
        }
        // if status is fail set error true or not do any action ,this meaning there is problem in conn
        if (res.status === 'fail') {
          setError(true)
        }
        // if syatus is forbidden set error false ,meaning that there is confilct in JWT
        if (res.data.status === 'forbidden') {
          setError(false)
        }
      }
    }
  }, [res.data]);

  return [
    error?undefined:userData.role  === 'OWNER' || userData.role === 'TEACHER', //  isUser
    error?undefined:userData.role === process.env.REACT_APP_ADMIN_CODE, //  isAdmin
    userData,
    loading
  ];
};

export default ProtectedRouteHook;



