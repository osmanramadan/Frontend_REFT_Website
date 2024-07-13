import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/authAction';

const ResetPasswordHook = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(true);

  const OnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const OnChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const validationValues = () => {
    if (password.length < 8) {
      return 'Password length shouldnt less 8';
    }

    if (password !== passwordConfirm) {
      return 'Confirm the password!';
    }

    return ''; // No validation error
  };
  const onSubmit = async () => {
    const validationError = validationValues();

    if (validationError) {
      alert(validationError);
      return;
    }

    setLoading(true);
    const email = localStorage.getItem('email');

    dispatch(
      resetPassword({
        confirmPassword: passwordConfirm,
        newpassword: password,
        email: email,
      }),
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.resetPassword);

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        if (res.data.validationError) {
          setLoading(true);
          alert(res.data.validationError);
          return;
        }

        if (res.data.status === 'success') {
          localStorage.setItem('token', res.data.token);
          localStorage.removeItem('email');
          setTimeout(() => {
            navigate('/signin');
          }, 1500);
        }
        if (res.data.status === 'fail') {
          alert('Ask for new code');
          setTimeout(() => {
            navigate('/forget-password');
          }, 1500);
        }
        if (res.data.status === 'unupdated') {
          alert('Try again');
          return;
        }
      }
    }
  }, [res.data]);

  return [
    password,
    OnChangePassword,
    passwordConfirm,
    OnChangePasswordConfirm,
    onSubmit,
    loading,
  ];
};

export default ResetPasswordHook;
