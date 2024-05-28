import { useState } from 'react';






const ReservHallIntervalHoursHook = () => {


  const [datehours, setDateHours]  = useState('');
  const [hourfrom, setHourFrom]  = useState('9:00');
  const [hourto, setHourTo]  = useState('9:00');


  const onChangeDateHours=(e) => {

      setDateHours(e.target.value)
  }

  const onChangeHoursFrom = (e) => {
    setHourFrom(e.target.value)
  };
  const onChangeHoursTo = (e) => {
    setHourTo(e.target.value);
  
  };


 

  return [onChangeDateHours,datehours,onChangeHoursFrom,hourfrom,onChangeHoursTo,hourto];
};

export default ReservHallIntervalHoursHook;
