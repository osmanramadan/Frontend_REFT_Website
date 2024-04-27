import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reservHallByHour  } from '../../redux/actions/hallAction';
// import { reservHallByInterval  } from '../../redux/actions/hallAction';

const ReservHallHook = () => {


  const dispatch         = useDispatch();
  const [show, setShow]  = useState(false);
  const [date, setDate]  = useState('');
  const [hour, setHour]  = useState('11');
  const handleShow  = () => setShow(true);
  const handleClose = () => setShow(false);


  const reservbyhour= useSelector((state) => state.hallReducer.reservHallByHour);
  // const reservbyinterval = useSelector((state) => state.hallReducer.reservHallByInterval);

  const onChangeDate=(e) => {
      setDate(e.target.value)
      const selectedDate = new Date(e.target.value);

      const day = selectedDate.getDate();
      const month = selectedDate.getMonth() + 1;
      const year = selectedDate.getFullYear();
      console.log("Day:", day, "Month:", month, "Year:", year);
  }

  const onChangeHour = (event) => {
    console.log(event.target.value)
    setHour(event.target.value);
  };

  const reservHallByHour=()=>{
      dispatch(reservHallByHour())   
  } 

//   const reservHallByInterval=()=>{
//     dispatch(reservHallByInterval())   
// } 

//   useEffect(() => {
//     if (loading === false) {
//       setLoading(true);

//       if (res.status) {
//         if (res.status === 'success') {
//           setData(res.data);
//         }
//       }
//     }
//   }, [res.data]);

  return [show,handleShow,handleClose,onChangeDate,date,setHour,hour];
};

export default ReservHallHook;
