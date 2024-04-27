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
  };

  const dt=['520244259:00','5202442511:00','5202442512:00','5202442510:00','5202442514:00']

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
        <Modal show={show} onHide={handleClose} style={{direction: 'rtl',left:"-10px",top: '35px', zIndex: '100000' }}>
          <Modal.Header className='d-flex justify-content-center'>
            <Modal.Title style={{ fontFamily: 'cairo', backgroundColor: '#F9F9F9' }}>
              Reservation Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#f6f8f7" }}>
            <Tabs activeKey={selectedTab} onSelect={handleChangeTab}  className="mb-3  d-flex justify-content-center">
              
              <Tab eventKey="book hour" title="book hour">
                <Row className='px-3 d-flex justify-content-center'>
                  <Col xs="6">
                    <Row>
                      <Col xs="12"><input data={date} onChange={onChangeDate} value={date}  min={today} style={{ width: "100%" }} type='date' /></Col>
                      <Col xs="12"><select style={{ width: "100%" }} className='mt-3'>
                        {generateHours().map((hour) => (
                          <option key={hour} value={hour}>{hour}</option>
                        ))}
                      </select>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div className='d-flex justify-content-center mt-3'>
                  <Button type="button" onClick={handleCheckout}>
                    continue
                  </Button>
                </div>
              </Tab>

              <Tab eventKey="book interval days" title="book interval days">
                <Row className='px-3 d-flex justify-content-center'>
                

           <Col xs="12" className='text-center'>
               <Row>
                  <Col className='text-start'> <input value={date} onChange={onChangeDate} style={{ width: "100%" }} min={today}  type='date' /></Col>
                  <Col>: From</Col>
               </Row>
          </Col>
          <Col xs="12" className='text-center mt-3'>
            <Row>
                 <Col className='text-start'> <input  onChange={onChangeDate} style={{ width: "100%" }} min={today}  type='date' /></Col>
                 <Col >: To</Col>
            </Row>
          </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-3'>
                    <Col xs="6"><select style={{ width: "100%" }}>
                      {generateHours().map((hour) => (
                        <option key={hour} value={hour}>{hour}</option>
                      ))}
                    </select></Col>
                  </Row>
                <div className='d-flex justify-content-center mt-3'>
                  <Button type="button" onClick={handleCheckout}>
                    continue
                  </Button>
                </div>
              </Tab>

              <Tab eventKey="book interval hours & days" title="book interval hours & days">
                  <Row className='d-flex justify-content-center'>

                      <Col xs="12" className='text-center'>
                        <Row>
                           <Col className='text-start'> <input  onChange={onChangeDate} style={{ width: "100%" }} min={today}  type='date' /></Col>
                           <Col>: From</Col>
                        </Row>
                      </Col>
                      <Col xs="12" className='text-center mt-3'>
                        <Row>
                           <Col className='text-start'> <input  onChange={onChangeDate} style={{ width: "100%" }} min={today}  type='date' /></Col>
                           <Col >: To</Col>
                        </Row>
                      </Col>

                  </Row>
                 <Row>
                     
                 <Col xs="12" className='text-center mt-3'>
                        
                           <Row>
                           <Col className='text-start'><select style={{ width: "100%" }}>
                      {generateHours().map((hour) => (
                        <option key={hour} value={hour}>{hour}</option>
                      ))}
                    </select></Col>
                           <Col>: From</Col>
                           </Row>
                        
                      </Col>
                      <Col xs="12" className='text-center mt-3'>
                        <Row>
                            
                           <Col className='text-start'> <select style={{ width: "100%" }}>
                      {generateHours().map((hour) => (
                        <option key={hour} value={hour}>{hour}</option>
                      ))}
                    </select></Col>
                           <Col >: To</Col>
                        </Row>
                      
                      </Col>
                 </Row>
              
          
            <div className='d-flex justify-content-center mt-3'>
              <Button type="button"  onClick={handleClose}>
                continue
              </Button>
            </div>
          </Tab>

          <Tab eventKey="book interval hours" title="book interval hours">
                  <Row className='d-flex justify-content-center'>

                      <Col xs="12" className='text-center'>
                        <Row>
                           <Col className='text-start'> <input  onChange={onChangeDate} style={{ width: "100%" }} min={today}  type='date' /></Col>
                           <Col>:</Col>
                        </Row>
                      </Col>
  

                  </Row>
                 <Row>
                     
                 <Col xs="12" className='text-center mt-3'>
                        
                           <Row>
                           <Col className='text-start'><select style={{ width: "100%" }}>
                      {generateHours().map((hour) => (
                        <option key={hour} value={hour}>{hour}</option>
                      ))}
                    </select></Col>
                           <Col>: From</Col>
                           </Row>
                        
                      </Col>
                      <Col xs="12" className='text-center mt-3'>
                        <Row>
                            
                           <Col className='text-start'> <select style={{ width: "100%" }}>
                      {generateHours().map((hour) => (
                        <option key={hour} value={hour}>{hour}</option>
                      ))}
                    </select></Col>
                           <Col >: To</Col>
                        </Row>
                      
                      </Col>
                 </Row>
              
          
            <div className='d-flex justify-content-center mt-3'>
              <Button type="button"  onClick={handleClose}>
                continue
              </Button>
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <Button style={{
              backgroundColor: '#fcd980',
              borderRadius: '10px',
              color: 'black',
              height: '50px',
              fontSize: '20px',
              fontWeight: 'bold',
              border:"none"
            }} onClick={handleClose}>
          cancel
        </Button>
      </Modal.Footer>
    </Modal>
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
                <td>{`${day-1} (${getDayName(
                  new Date(year, currentMonth - 1, day),
                )})`}</td>
                {generateHours().map((hour) => (
                  <td key={hour}>
                
                    <button
                          data={`{"year":${year},"time":${JSON.stringify(hour)},"dayname":"${getDayName(
                                    new Date(year, currentMonth - 1, day)
                               )}","daynum":${day},"monthname":"${monthName}","monthnum":${currentMonth}}`}
                               style={{ height: "30px", 
                               borderWidth:dt.some(dtValue => dtValue === `${id}${year}${currentMonth}${day-1}${hour}`) ?('none'):'1px', backgroundColor:dt.some(dtValue => dtValue === `${id}${year}${currentMonth}${day-1}${hour}`) ?('#fcd980'):'',border: dt.some(dtValue => dtValue === `${id}${year}${currentMonth}${day-1}${hour}`) ?('none'):'2px double black'}}
                                onClick={
                                   dt.some(dtValue => dtValue === `${id}${year}${currentMonth}${day-1}${hour}`)?()=>{}:handleShow
                                  }
                               >
                              {
                                 dt.some(dtValue => dtValue === `${id}${year}${currentMonth}${day-1}${hour}`) ? (
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
