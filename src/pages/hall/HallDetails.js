import React, { useState } from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import Banner from '../../compenents/global/widgets/banner';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Container} from 'react-bootstrap';
import MidTitle from '../../compenents/global/widgets/midtitle';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';
import HallAcceptionDropdown from '../../compenents/admin/hall/HallAcceptionDropdown';
import ChangeHallStatusHook from '../../hooks/admin/hall/changeHallStatusHook';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import ReservHallHook from '../../hooks/book/reservHallByHourHook';
import { Modal, Button, Tab, Tabs } from 'react-bootstrap';





function HallDetails() {
  const [isuser, isadmin, _data] = ProtectedRouteHook();
  const [onSubmit, status, onChangeStatus, _loading] = ChangeHallStatusHook();
  const [selectedTab, setSelectedTab] = useState('book hour'); 

  const  [show,handleShow,handleClose,onChangeDate,date,setHour,hour] =ReservHallHook()

  const today = new Date().toISOString().split('T')[0];

  const handleChangeTab = (tabKey) => {
    setSelectedTab(tabKey);
  };

 



  const location = useLocation();
  const nav = useNavigate();

  let hallData;

  try {
    hallData = location.state.hallData;
  } catch (v) {
    nav('/places');
    return;
  }
  const handleSubmit = () => {
    onSubmit(hallData.id);
  };

  const handleClick = () => {
    nav(`/book-hall`, { state:{id:hallData.id,price:hallData.price_hour,userid:hallData.userData.id}});
  };
  const handleCheckout = (e) => {
    nav(`/hall-checkout`, { state:{id:hallData.id,info:{price:hallData.price_hour,userid:hallData.userData.id},hour:hour,date:date}});
  }



  const generateHours = () => {
    const hours = [];
    for (let i = 9; i <= 21; i++) {
      hours.push(`${i}:00`);
    }
    return hours;
  };

  return (
    <div>
      <NavBar />
      <Banner
      txt={isuser ? 'Home > Place  Details' : 'Home  > Admin > Place Details'} />
      <Row className="d-flex justify-content-center">
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
                      <Col xs="12">
                        <select style={{ width: "100%" }} onChange={(e)=>{setHour(e.target.value)}} className='mt-3'>
                         {generateHours().map((hou) => (
                           <option  key={hour} value={hour}>{hou}</option>
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
    <Col xs="12" sm="12" md="8" lg="8">
        <Carousel className="mt-2">
          {hallData.imagesData &&
            hallData.imagesData.map((v, i) => {
              return (
                <Carousel.Item key={i} style={{ height: '100%', width: '100%' }}>
                  <div className="d-flex flex-row justify-content-center">
                    <img
                      style={{
                        height: '20%',
                        width: '70%',
                        borderRadius: '60px',
                      }}
                      src={`data:image/*;base64,${v}`} />
                  </div>
                </Carousel.Item>
              );
            })}
        </Carousel>
      </Col>
      </Row>

      <MidTitle txt={'Hall Owner'} arrow={false} />

      <Container>
        <Row className="d-flex justify-content-center mx-5">
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            // className='text-center'
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            Name :
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="text-center mx-1"
            >
              {hallData.userData.name}
            </span>
          </Col>

          <Col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            // className='text-center'
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            City :
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="text-center mx-1"
            >
              {hallData.userData.city}
            </span>
          </Col>
        </Row>

        {/* *********************** */}

        <Row className="d-flex justify-content-center mx-5">
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            // className='text-center'
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            Phone :
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="text-center mx-1"
            >
              {hallData.userData.phone}
            </span>
          </Col>

          <Col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            // className='text-center'
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            <span className="text-start">Email :</span>
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="text-center"
            >
              {hallData.userData.email}
            </span>
          </Col>
        </Row>
      </Container>

      <MidTitle txt={'Hall Info'} />
      {/* ***************************** */}

      {hallData.checked === 'false' ? (
        <Row className="d-flex justify-content-center mx-5">
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            className="mx-5"
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            Admin Confirm :
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="mx-1"
            >
              <FontAwesomeIcon
                style={{
                  height: '40px',
                  fontWeight: '800',
                  width: '50px',
                  color: '#fcd980',
                }}
                icon={faHourglass}
              />
            </span>
          </Col>
        </Row>
      ) : (
        ''
      )}

      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className="mx-5"
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall Details :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            {hallData.details}
          </span>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className="mx-5"
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall Name :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            {hallData.name}
          </span>
        </Col>
      </Row>

      {/*  */}

      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className="mx-5"
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall Details :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            {hallData.details}
          </span>
        </Col>
      </Row>

      {/*  */}

      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className="mx-5"
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall City :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            {hallData.city}
          </span>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className="mx-5"
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall location :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            {hallData.location}
          </span>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className="mx-5"
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hour Price:
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            {hallData.price_hour}$
          </span>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className="mx-5"
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall Capacity :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            {hallData.capacity} students
          </span>
        </Col>
      </Row>

      <MidTitle txt={'Hall Video'} />
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="12" lg="8" className="text-center">
          <div style={{ borderRadius: '60px' }}>
            <iframe
              style={{ borderRadius: '30px' }}
              width="80%"
              height="350px"
              src={`http://localhost:300400/api/v1/halls/video/${hallData.video}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>
      {isadmin ? <MidTitle txt={'Hall Property'} /> : null}
      {isadmin ? (
        <Row className="d-flex justify-content-center">
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            className="d-flex justify-content-center"
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            <div>
              <Link
                className="link"
                style={{
                  fontSize: '30px',
                  fontWeight: '400',
                  color: '#282938',
                }}
                to={`http://localhost:3004/api/v1/halls/pdf/${hallData.pdf}`}
              >
                Clik Here
              </Link>
            </div>
          </Col>
        </Row>
      ) : null}

      {isadmin ? (
        <Row className="d-flex justify-content-center mt-5">
          <Col xs="4" sm="3" md="3" lg="1">
            <div>
              <button
                style={{
                  backgroundColor: '#fcd980',
                  color: '#4f4a46',
                  fontSize: '20px',
                  borderColor: 'black',
                  fontWeight: 'bold',
                  borderWidth: '2px',
                  height: '52px',
                  width: '100%',
                }}
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </Col>
          <Col xs="7" sm="5" md="5" lg="5">
            <HallAcceptionDropdown status={status} onChange={onChangeStatus} />
          </Col>
        </Row>
      ) : null}
           {isuser ? (
        <Row className="d-flex justify-content-center mb-3 mt-3">
          <Col
            onClick={handleClick}
            // onClick={handleShow}
            xs="12" sm='6'
            className="mt-1  mx-1 d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: '#fcd980',
              borderRadius: '10px',
              color: 'black',
              height: '50px',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Show Availablity
          </Col>

        </Row>
      ) : (
        ''
      )}

      {isuser ? (
        <Row className="d-flex justify-content-center mb-3 mt-3">
          <Col
            // onClick={handleClick}
            onClick={handleShow}
            xs="12" sm='6'
            className="mt-1  mx-1 d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: '#fcd980',
              borderRadius: '10px',
              color: 'black',
              height: '50px',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            BOOK NOW
          </Col>

        </Row>
      ) : (
        ''
      )}

      <Footer />
    </div>
  );
}
export default HallDetails;


