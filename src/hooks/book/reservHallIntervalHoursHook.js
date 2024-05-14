import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { reservHallByHour  } from '../../redux/actions/hallAction';
// import { reservHallByInterval  } from '../../redux/actions/hallAction';

const ReservHallIntervalHoursHook = () => {


  const dispatch         = useDispatch();

  const [datehours, setDateHours]  = useState('');
  const [hourfrom, setHourFrom]  = useState('9:00');
  const [hourto, setHourTo]  = useState('9:00');
  // const [day, setDay]  = useState('');
  // const [month, setMonth]  = useState('');
  // const [year, setYear]  = useState('');



  // const reservbyhour= useSelector((state) => state.hallReducer.reservHallByHour);
  // const reservbyinterval = useSelector((state) => state.hallReducer.reservHallByInterval);

  const onChangeDateHours=(e) => {

      setDateHours(e.target.value)
  }

  const onChangeHoursFrom = (e) => {
    setHourFrom(e.target.value)
    console.log(e.target.value)
  };
  const onChangeHoursTo = (e) => {
    setHourTo(e.target.value);
    console.log(e.target.value)
  };

  // const reservHallByHour=()=>{
  //     dispatch(reservHallByHour())   
  //     console.log("------------------------------------------------------------>>>>>>>>>>>>>>>>>")
  //     console.log("------------------------------------------------------------>>>>>>>>>>>>>>>>>")
  //     console.log("----------------------------osman osman-------------------------------->>>>>>>>>>>>>>>>>")
  // } 

//   const reservHallByInterval=()=>{
//     dispatch(reservHallByInterval())   
// } 

  // useEffect(() => {
  //   if (loading === false) {
  //     setLoading(true);

  //     if (res.status) {
  //       if (res.status === 'success') {
  //         // setData(res.data);
  //       }
  //     }
  //   }
  // }, [reservbyhour.data]);

  return [onChangeDateHours,datehours,onChangeHoursFrom,hourfrom,onChangeHoursTo,hourto];
};

export default ReservHallIntervalHoursHook;
