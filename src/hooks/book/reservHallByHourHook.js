import { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
// import { reservHallByHour  } from '../../redux/actions/hallAction';
// import { reservHallByInterval  } from '../../redux/actions/hallAction';

const ReservHallByHourHook = () => {


  const dispatch         = useDispatch();

  const [date, setDate]  = useState('');
  const [hour, setHour]  = useState('9:00');
  const [day, setDay]  = useState('');
  const [month, setMonth]  = useState('');
  const [year, setYear]  = useState('');



  // const reservbyhour= useSelector((state) => state.bookReducer.reservHallByHour);
  // const reservbyinterval = useSelector((state) => state.hallReducer.reservHallByInterval);

  const onChangeDateByHour=(e) => {

      setDate(e.target.value)
      // const selectedDate = new Date(e.target.value);
      // const day          = selectedDate.getDate();
      // const month        = selectedDate.getMonth() + 1;
      // const year         = selectedDate.getFullYear();
      // // console.log("Day:", day, "Month:", month, "Year:", year,selectedDate);
  }

  const onChangeHour = (e) => {
    setHour(e.target.value);
    // console.log(e.target.value)
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

  return [onChangeDateByHour,date,onChangeHour,hour];
};

export default ReservHallByHourHook
