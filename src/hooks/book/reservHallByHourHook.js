import { useState } from 'react';

const ReservHallByHourHook = () => {
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('9:00');

  const onChangeDateByHour = (e) => {
    setDate(e.target.value);
  };

  const onChangeHour = (e) => {
    setHour(e.target.value);
  };

  return [onChangeDateByHour, date, onChangeHour, hour];
};

export default ReservHallByHourHook;
