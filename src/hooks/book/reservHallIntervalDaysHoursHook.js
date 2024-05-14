import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reservHallByHour  } from '../../redux/actions/hallAction';
// import { reservHallByInterval  } from '../../redux/actions/hallAction';

const ReservHallIntervalDaysHoursHook = () => {


  const dispatch         = useDispatch();

  const [dateonemix, setDateOneMix]  = useState('');
  const [datetwomix, setDateTwoMix]  = useState('');
  const [hourfrommix, setHourFromMix]  = useState('9:00');
  const [hourtomix, setHourToMix]  = useState('9:00');


  



  // const reservbydays= useSelector((state) => state.bookReducer.reservHallByIntervalDays)
 

  const onChangeDateOneMix=(e) => {
      setDateOneMix(e.target.value)
  }

  const onChangeDateTwoMix=(e) => {
    setDateTwoMix(e.target.value)
  }


  const onChangeHoursFromMix = (e) => {
    console.log(e.target.value)
    setHourFromMix(e.target.value)
  };
  const onChangeHoursToMix = (e) => {
    console.log(e.target.value,'ssssss')
    setHourToMix(e.target.value);
  };



  return [onChangeDateOneMix,onChangeDateTwoMix,onChangeHoursFromMix,onChangeHoursToMix,dateonemix,datetwomix,hourfrommix,hourtomix];
};

export default ReservHallIntervalDaysHoursHook;
