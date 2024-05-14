import { useEffect, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';



const ReservHallIntervalDaysHook = () => {



  const today = new Date().toISOString().split('T')[0];
  
  const [dateone, setDateOne]  = useState('');
  const [datetwo, setDateTwo]  = useState('');
  const [hourdays, setHourDays]  = useState('9:00');
  const [data,setData]=useState()
  // const [day, setDay]  = useState('');
  // const [month, setMonth]  = useState('');
  // const [year, setYear]  = useState('');

  
  function getDates(startDate, endDate) {

    const dates = [];
    let currentDate = new Date(startDate);
  
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate).toLocaleDateString('en-EG', { timeZone: 'Africa/Cairo' }));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return dates;
  }

  
 
  useEffect(() => {
    const startDate = new Date(dateone);
    const endDate = new Date(datetwo);
  

    const datesBetween = getDates(startDate, endDate);
    console.log(datesBetween);

    setData(datesBetween);
    console.log(data,'data')
}, [dateone, datetwo]);


  const onChangeDateOne=(e) => {
      setDateOne(e.target.value)
  }

  const onChangeDateTwo=(e) => {
    setDateTwo(e.target.value)
}

const onChangeDaysHour = (e) => {
  console.log(e.target.value,'.<><------------------------?')
  setHourDays(e.target.value);
};


  return [onChangeDateOne,onChangeDateTwo,dateone,datetwo,onChangeDaysHour,hourdays];
};

export default ReservHallIntervalDaysHook;
