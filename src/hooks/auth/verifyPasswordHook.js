import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { verifyPassword } from '../../redux/actions/authAction';

const VerifyPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);

  const OnChangeCode = (e) => {
    const newValue = e.target.value.replace(/\s/g, '');
    setCode(newValue);
  };

  const onSubmit = async () => {
    // if (code === '') {
    //   alert('Enter the code !');
    //   return;
    // }

    // const isNumeric = /^\d+$/.test(code);
    // if (!isNumeric) {
    //   alert('Only numbers allowed');
    //   return;
    // }

    // if (code.length < 6) {
    //   alert('Code is not less than 6 digits');
    //   return;
    // }

    setLoading(true);
    const email = localStorage.getItem('email');
    dispatch(
      verifyPassword({
        email: email,
        resetCode: code,
      }),
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.verifyPassword);

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        if (res.data.validationError) {
          setLoading(true);
          alert(res.data.validationError);
          return;
        }

        if (res.data.status === 'email not found') {
          setLoading(true);
          alert('Email not found');
          setTimeout(() => {
            navigate('/forget-password');
          }, 1500);
        }

        if (res.data.status === 'invalid code') {
          alert('Write valid code');
          setLoading(true);
          return;
        }

        if (res.data.status === 'already verified') {
          alert('Success verified');
          setTimeout(() => {
            navigate('/change-password');
          }, 1500);
        }

        if (res.data.status === 'expired code') {
          setLoading(true);
          alert('Expired code');
          setTimeout(() => {
            navigate('/signin');
          }, 1500);
        }

        if (res.data.status === 'success') {
          setTimeout(() => {
            navigate('/change-password');
          }, 1500);
        }

        if (res.data.status === 'fail') {
          setLoading(true);
          alert('Incorrect code or expired');
          return;
        }
      }
    }
  }, [res.data]);

  return [code, OnChangeCode, onSubmit, loading];
};

export default VerifyPasswordHook;
