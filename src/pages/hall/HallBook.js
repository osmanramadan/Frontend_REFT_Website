import React, { useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import MidTitle from '../../compenents/global/widgets/midtitle';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import ReservHallHook from '../../hooks/book/reservHallByHourHook';
import { Modal, Button, Tab, Tabs } from 'react-bootstrap';

const HallBook = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState('book hour'); // State to manage the selected tab
  const  [show,handleShow,handleClose,onChangeDate,setDate,date] =ReservHallHook()
  const nav = useNavigate();

  let id;
  let price;
  let userid;
  // {id:hallData.id,price:hallData.price_hour,userid:hallData.userData.id} 
  try {
    id = location.state.id;
    price=location.state.price;
    userid=location.state.userid;
  } catch (v) {
    nav('/');
    return;
  }
  



  const [year] = useState(new Date().getFullYear()); // Default to current year
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // Default to current month
  const today = new Date().toISOString().split('T')[0];

  // Function to get the number of days in a month
  const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate();

  const handleChangeTab = (tabKey) => {
    setSelectedTab(tabKey);
  };

  // Function to generate an array of days for the current month and year
  const generateMonthDays = () => {
    const today = new Date(
      new Date().toLocaleString('en-eg', { timeZone: 'Africa/Cairo' }),
    );
    const todayInEgypt = new Date(today);
    
    const daysInMonth = getDaysInMonth(currentMonth, year);
    const filteredDays = Array.from(
      { length: daysInMonth },
      (_, i) => i + 1,
    ).filter((day) => new Date(year, currentMonth - 1, day) >= todayInEgypt);
    return filteredDays;
  };

  // Function to generate hours from 9 am to 9 pm
  const generateHours = () => {
    const hours = [];
    for (let i = 9; i <= 21; i++) {
      hours.push(`${i}:00`);
    }
    return hours;
  };
  const handleCheckout = (e) => {
    nav(`/hall-checkout`, { state:{id:id,info:{price:price,userid:userid},date:date}});
  }



  // Function to get the name of the day
  const getDayName = (date) => {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    return daysOfWeek[date.getDay()-1];
  }

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };


  const months = {
    1: 31,
    2: isLeapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  };
  const checkMonthCompleteness=()=>{

  }

  const dt=['7202442911:00','720244289:00','920244299:00','9202442911:00','9202442912:00','92024519:00','9202443011:00','920245111:00',
,'920245112:00','920245113:00','1020244309:00','10202443011:00']

  // Function to render the calendar table
  const renderCalendar = () => {
    const monthName = new Date(year, currentMonth - 1, 1).toLocaleDateString(
      'en-US',
      { month: 'long' },
    );
    const daysInMonth = generateMonthDays();
    const firstDayOfMonth = new Date(year, currentMonth - 1, 1);
    // const startingDay = firstDayOfMonth.getDay();

    return (
      <div>
        <h2>
          {currentMonth} ({monthName})
        </h2>

        <Table responsive>
          <thead>
            <tr>
              <th>Day</th>
              {generateHours().map((hour) => (
                <th key={hour}>{hour}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {daysInMonth.map((day) => (
              <tr key={day-1}>
                <td>
                {`${day - 1 ? day - 1 : months[currentMonth-1]} (${

        getDayName(new Date(year, currentMonth - 1, day))
          ? getDayName(new Date(year, currentMonth - 1, day))
          : "Saturday"
      })`}

                </td>
                {generateHours().map((hour) => (
                  <td key={hour}>
                
                    <button
                          data={`{"year":${year},"time":${JSON.stringify(hour)},"dayname":"${getDayName(
                                    new Date(year, currentMonth - 1, day)
                               )}","daynum":${day-1?currentMonth:currentMonth-1}},"monthname":"${monthName}","monthnum":${day-1?currentMonth:currentMonth-1}}`}
                               style={{ height: "30px", 
                               borderWidth:dt.some(dtValue => dtValue === `${id}${year}${day-1?currentMonth:currentMonth-1}${day-1?day-1:months[currentMonth-1]}${hour}`) ?('none'):'1px', backgroundColor:dt.some(dtValue => dtValue === `${id}${year}${day-1?currentMonth:currentMonth-1}${day-1?day-1:months[currentMonth-1]}${hour}`) ?('#fcd980'):'',border: dt.some(dtValue => dtValue === `${id}${year}${day-1?currentMonth:currentMonth-1}${day-1?day-1:months[currentMonth-1]}${hour}`) ?('none'):'2px double black'}}
                                onClick={
                                  
                                  ()=>console.log(`${id}${year}${day-1?currentMonth:currentMonth-1}${day-1?day-1:months[currentMonth-1]}${hour}`)
                                  
                                  //  dt.some(dtValue => dtValue === `${id}${year}${currentMonth}${day-1}${hour}`)?()=>{}:handleShow
                                  }
                               >
                              {
                                 dt.some(dtValue => dtValue === `${id}${year}${day-1?currentMonth:currentMonth-1}${day-1?day-1:months[currentMonth-1]}${hour}`) ? (
                                  "blocked"
                                ) : (
                                  "available"
                                )}
                    </button>

                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

  // Function to handle next month button click
  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 12 ? 12 : prevMonth + 1));
  };

  // Function to handle previous month button click
  const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 1 ? 1 : prevMonth - 1));
  };

  return (
    <div>
      <NavBar />
      <Row className="d-flex justify-content-center align-items-center">
        <Col>
          <MidTitle txt={`Year Calendar ${year} ${id}`} />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mb-1 mt-1">
        <Col
          onClick={handlePreviousMonth}
          xs={8}
          sm={6}
          md={4}
          lg={3}
          className="mt-1 mx-1 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: '#fcd980',
            borderRadius: '10px',
            color: 'black',
            height: '50px',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          Previous Month
        </Col>
      </Row>
      <div className="px-3">{renderCalendar()}</div>
      <Row className="d-flex justify-content-center mb-2 mt-1">
        <Col
          onClick={handleNextMonth}
          xs={6}
          sm={6}
          md={4}
          lg={3}
          className="mt-3 mx-1 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: '#fcd980',
            borderRadius: '10px',
            color: 'black',
            height: '50px',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          Next Month
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default HallBook;






// function HallCheckout() {

    // const location = useLocation();
    // const nav = useNavigate();
    // // {id:id,data:buttonData,price:price,userid:userid}
    // let data;
  
    // try {
    //   data = location.state;
    //   // console.log(data.info)
    //   // price =location.state.price;
    //   // userid =location.state.userid;
    // } catch (v) {
    //   nav('/');
    //   return;
    // }
  
    
//   return (
//     <div>
//         <NavBar/>
//       <Container className='mt-5 mb-5'>
      
//         <Row className='d-flex justify-content-center'>
//           <Col xs="12" sm="6" className='text-center'>
//           price: {data.info.price}<br/>
//           Hall userid: {data.info.userid}<br/>
//           Hall id: {data.id}<br/>
//           hall date:{data.date}<br/>
//           hall hour:{data.hour}
            
//           </Col>
//         </Row>
//         {/* Hall year: {data.data.year}<br/> */}
//         {/* Hall dayname: {data.data.dayname}<br/> */}
//         {/* Hall daynum: {data.data.daynum}<br/> */}
//         {/* Hall monthname: {data.data.monthname}<br/> */}
//         {/* Hall monthnumber: {data.data.monthnum}<br/> */}
//         {/* Hall hour: {data.data.time}<br/> */}
//         {/* date: {data.data.daynum}/{data.data.monthnum}/{data.data.year}<br/> */}
//         {/* Code : {data.id}{data.data.year}{data.data.monthnum}{data.data.daynum}{data.data.time}<br/> */}
     
//       </Container>
//       <Footer/>
//     </div>
//   );
// }
// export default HallCheckout;