import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const RegisterHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('City');
  const [role, setRole] = useState('Role');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.authReducer.createUser);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangeRole = (value) => {
    setRole(value);
  };

  const onChangeCity = (value) => {
    setCity(value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validationValues = () => {
    if (username === '' || username.length < 5) {
      return 'Enter username at least five !';
    }

    if (role === '' || role === 'Role') {
      return 'Enter role !';
    }

    // Validate if phone is an Egyptian number
    const egyptianPhoneRegex = /^(01)[0-9]{9}$/;
    if (!egyptianPhoneRegex.test(phone)) {
      return 'Invalid egyptian number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Enter valid email';
    }

    if (password.length < 8) {
      return 'Password length shouldnt less 8';
    }

    if (password !== confirmPassword) {
      return 'Confirm password!';
    }

    if (city === '' || city === 'City') {
      return 'Enter City !';
    }

    return ''; // No validation error
  };

  const validationQuery = () => {
    if (res.data.error) {
      if (res.data.error === 'Email already exist') {
        return 'Email already exist';
      }

      if (res.data.error === 'Phone already exist') {
        return 'Phone already exist';
      }

      return ''; 
    }
  };

  const OnSubmit = async () => {
    const validationError = validationValues();

    if (validationError) {
      alert(validationError, 'error');
      return;
    }

    setLoading(true);
    try {
      dispatch(
        createNewUser({
          email,
          username,
          city,
          role,
          password,
          confirmPassword,
          phone,
        }),
      );
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          localStorage.removeItem('user');

          setTimeout(() => {
            navigate('/signin');
          }, 2000);
        }

        if (res.data.validationError) {
          setLoading(true);
          alert(res.data.validationError);
          return;
        }

        const validationError = validationQuery();
        if (validationError) {
          setLoading(true);
          alert(validationError);
          return;
        }
      }
    }
  }, [res.data]);

  return [
    username,
    email,
    phone,
    password,
    confirmPassword,
    city,
    role,
    loading,
    onChangeUsername,
    onChangeEmail,
    onChangePhone,
    onChangeCity,
    onChangeRole,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ];
};

export default RegisterHook;
