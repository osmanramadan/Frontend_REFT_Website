import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMessage } from '../../../redux/actions/messAction';

const AddMessageHook = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.messReducer.addMessage);

  const onChangeUsername = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const validationValues = () => {
    const egyptianPhoneRegex = /^(01)[0-9]{9}$/;
    if (!egyptianPhoneRegex.test(phone)) {
      return 'Invalid egyptian number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Enter valid email';
    }

    return ''; // No validation error
  };

  const OnSubmit = async () => {
    if (localStorage.getItem('user') !== null) {
      var user = JSON.parse(localStorage.getItem('user'));
    } else {
      window.location.href = '/signin';
      return;
    }

    if ((name === '', email === '', phone === '', message === '')) {
      alert('Complete All fields');
      return;
    }
    const validationError = validationValues();

    if (validationError) {
      alert(validationError, 'error');
      return;
    }

    setLoading(true);
    dispatch(
      addNewMessage({
        name: name,
        email: email,
        phone: phone,
        message: message,
        user_id: user.id,
      }),
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        if (res.data.status === 'success') {
          setName('');
          setEmail('');
          setMessage('');
          setPhone('');
          alert('Message Sent Successfully');
          return;
        } else {
          alert('Message Not Sent');
          return;
        }
      }
    }
  }, [res.data]);

  return [
    name,
    email,
    phone,
    message,
    loading,
    onChangeUsername,
    onChangeEmail,
    onChangePhone,
    onChangeMessage,
    OnSubmit,
  ];
};

export default AddMessageHook;
