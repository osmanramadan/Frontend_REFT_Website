import { useState, useEffect } from 'react';
// import CryptoJS from 'crypto-js';

const ProtectedRouteHook = () => {

  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(true);


  useEffect(() => {

    const storedUserData = localStorage.getItem('user');
    // var userData={}
    // var userData = CryptoJS.AES.decrypt(storedUserData,process.env.REACT_APP_ENCRYPT_KEY).toString(CryptoJS.enc.Utf8);

    if (storedUserData) {

      try {
        
        const parsedUserData = JSON.parse(storedUserData);

        if (parsedUserData) {

          setUserData(parsedUserData);
          setError(false);
          
        } else {
          setError(true);
        }

      } catch (error) {
        setError(true);
      }

    }
  }, []);

  return [

    error?undefined:userData.role   === 'OWNER' || userData.role === 'TEACHER', //  isUser
    error ?undefined: userData.role === process.env.REACT_APP_ADMIN_CODE, //  isAdmin
    userData,
  ];
  // return [
  //   // true, //  isUser
  //   error? undefined: userData.role === 'OWNER' || userData.role === 'TEACHER', //  isUser
  //   error ? undefined : userData.role === , //  isAdmin
  //   error ? undefined: userData.role === 'TEACHER', // ISTEACHER
  //   error ? undefined :userData.role ==='OWNER', // ISOWNER
  //   userData,
  // ];
};

export default ProtectedRouteHook;
