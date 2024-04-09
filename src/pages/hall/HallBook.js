import React, { useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import MidTitle from '../../compenents/global/widgets/midtitle';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';

const HallBook = () => {
  const location = useLocation();
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
  
  const handleClick = (e) => {
    const buttonData = JSON.parse(e.target.getAttribute('data'));
    nav(`/hall-checkout`, { state:{id:id,info:{price:price,userid:userid},data:buttonData}});
  }



  const [year] = useState(new Date().getFullYear()); // Default to current year
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // Default to current month

  // Function to get the number of days in a month
  const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate();

  // Function to generate an array of days for the current month and year
  const generateMonthDays = () => {
    const today = new Date(
      new Date().toLocaleString('en-eg', { timeZone: 'Africa/Cairo' }),
    );
    const daysInMonth = getDaysInMonth(currentMonth, year);
    const filteredDays = Array.from(
      { length: daysInMonth },
      (_, i) => i + 1,
    ).filter((day) => new Date(year, currentMonth - 1, day) >= today);
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

  // Function to get the name of the day
  const getDayName = (date) => {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return daysOfWeek[date.getDay()];
  };

  // Function to render the calendar table
  const renderCalendar = () => {
    const monthName = new Date(year, currentMonth - 1, 1).toLocaleDateString(
      'en-US',
      { month: 'long' },
    );
    const daysInMonth = generateMonthDays();
    const firstDayOfMonth = new Date(year, currentMonth - 1, 1);
    const startingDay = firstDayOfMonth.getDay();

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
              <tr key={day}>
                <td>{`${day} (${getDayName(
                  new Date(year, currentMonth - 1, day),
                )})`}</td>
                {generateHours().map((hour) => (
                  <td key={hour}>
                
                    <button

                      data={`{"year":${year},"time":${JSON.stringify(hour)},"dayname":"${getDayName(
                        new Date(year, currentMonth - 1, day),
                      )}","daynum":${day},"monthname":"${monthName}","monthnum":${currentMonth}}`}

                      style={{ height: '30px' }}

                      onClick={handleClick}
                    >
                      Book
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
