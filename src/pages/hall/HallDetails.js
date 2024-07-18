import React, { useEffect, useState } from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import Banner from '../../compenents/global/widgets/banner';
import { Row, Col, Container, Spinner, Carousel } from 'react-bootstrap';
import MidTitle from '../../compenents/global/widgets/midtitle';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';
import HallAcceptionDropdown from '../../compenents/admin/hall/HallAcceptionDropdown';
import ChangeHallStatusHook from '../../hooks/admin/hall/changeHallStatusHook';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import ReservHallByHourHook from '../../hooks/book/reservHallByHourHook';
import ReservHallByIntervalDays from '../../hooks/book/reservHallIntervalDaysHook';
import ReservHallIntervalHoursHook from '../../hooks/book/reservHallIntervalHoursHook';
import ReservHallIntervalDaysHoursHook from '../../hooks/book/reservHallIntervalDaysHoursHook';
import { Modal, Button, Tab, Tabs } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import GetHallCodesHook from '../../hooks/hall/GetHallCodeHook';
import AddHallRateHook from '../../hooks/hall/addHallRateHook';
import Hallrating from '../../compenents/global/widgets/hallrating';

function HallDetails() {
  const [isuser, isadmin, _data, loading] = ProtectedRouteHook();

  const location = useLocation();
  const nav = useNavigate();

  let hallData;

  try {
    hallData = location.state.hallData;
  } catch (v) {
    nav('/places');
    return;
  }

  const [onSubmit, status, onChangeStatus, _load] = ChangeHallStatusHook();
  const { i18n } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('book hour');
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [_loading, GetHallCodes, data] = GetHallCodesHook();
  const [load, checkuserrate, onSend, onChangeHallId] = AddHallRateHook();

  const [onChangeDateByHour, date, onChangeHour, hour] = ReservHallByHourHook();
  const [
    onChangeDateOne,
    onChangeDateTwo,
    dateone,
    datetwo,
    onChangeDaysHour,
    hourdays,
  ] = ReservHallByIntervalDays();
  const [
    onChangeDateHours,
    datehours,
    onChangeHoursFrom,
    hourfrom,
    onChangeHoursTo,
    hourto,
  ] = ReservHallIntervalHoursHook();
  const [
    onChangeDateOneMix,
    onChangeDateTwoMix,
    onChangeHoursFromMix,
    onChangeHoursToMix,
    dateonemix,
    datetwomix,
    hourfrommix,
    hourtomix,
  ] = ReservHallIntervalDaysHoursHook();

  const today = new Date().toISOString().split('T')[0];

  const handleChangeTab = (tabKey) => {
    setSelectedTab(tabKey);
  };

  useEffect(() => {
    GetHallCodes({ id: hallData.id });
  }, [hallData]);

  useEffect(() => {
    onChangeHallId(hallData.id);
  }, [hallData]);

  const handleSubmit = () => {
    onSubmit(hallData.id);
  };

  const handleClick = () => {
    nav(`/book-hall`, {
      state: {
        id: hallData.id,
        price: hallData.price_hour,
        userid: hallData.userData.id,
      },
    });
  };

  const handleCheckoutHour = (e) => {
    if (date == '' || date == null) {
      alert('Choose date');
      return;
    }

    if (hour == '' || hour == null) {
      alert('Choose hour');
      return;
    }
    const code = `${hallData.id}${new Date(date).getFullYear()}${new Date(date).getMonth() + 1}${new Date(date).getDate()}${hour}`;

    if (data.some((dtValue) => dtValue === code)) {
      alert('هذا المكان غير متاح');
      return;
    }

    nav(`/checkout-hour`, {
      state: {
        id: hallData.id,
        info: { price: hallData.price_hour, userid: hallData.userData.id },
        name: hallData.name,
        image: hallData.imagesData[0],
        hour: hour,
        date: date,
      },
    });
  };

  const handleCheckoutDays = (e) => {
    if (hourdays == '' || hourdays == null) {
      alert(`Choose hour ${hourdays}`);
      return;
    }
    if (dateone == '' || dateone == null) {
      alert('Choose date From');
      return;
    }
    if (datetwo == '' || datetwo == null) {
      alert('Choose date To');
      return;
    }
    if (dateone > datetwo) {
      alert('Choose suitable increase date');
      return;
    }

    if (datetwo == dateone) {
      alert('Date should be different');
      return;
    }

    function getDates(startDate, endDate) {
      const bookinfo = [];
      let currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        let code = `${hallData.id}${currentDate.getFullYear()}${currentDate.getMonth() + 1}${currentDate.getDate()}${hourdays}`;
        if (data.some((dtValue) => dtValue == code)) {
          alert(`يوم  ${currentDate.getDate()} الساعه ${hourdays} غير متاح`);
          return false;
        } else {
          bookinfo.push({
            code: `${hallData.id}${currentDate.getFullYear()}${currentDate.getMonth() + 1}${currentDate.getDate()}${hourdays}`,
            userid: hallData.userData.id,
            hallid: hallData.id,
            date: `${new Date(currentDate).getFullYear()}-${new Date(currentDate).getMonth() + 1}-${new Date(currentDate).getDate()}`,
            month: new Date(currentDate).getMonth() + 1,
            year: new Date(currentDate).getFullYear(),
            day: currentDate.getDate(),
            hour: hourdays,
            price: hallData.price_hour,
          });
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
      return bookinfo;
    }

    const startDate = new Date(dateone);
    const endDate = new Date(datetwo);

    const bookinfo = getDates(startDate, endDate);

    if (bookinfo) {
      nav(`/checkout-days`, {
        state: {
          bookinfo: bookinfo,
          id: hallData.id,
          info: { price: hallData.price_hour, userid: hallData.userData.id },
          name: hallData.name,
          image: hallData.imagesData[0],
          hour: hourdays,
          datefrom: dateone,
          dateto: datetwo,
        },
      });
    }
  };
  const handleCheckoutHours = (e) => {
    if (datehours === '') {
      alert('Choose Date');
      return;
    }

    if (hourfrom == '' || hourfrom == null) {
      alert('Choose hour from');
      return;
    }

    if (hourto == '' || hourto == null) {
      alert('Choose hour to');
      return;
    }

    if (hourto < hourfrom) {
      alert('Choose suitable increase time');
      return;
    }

    if (hourto === hourfrom) {
      alert('Hours should be different');
      return;
    }

    const getDatesHours = (startDate, endDate, startHour, endHour) => {
      const bookinfo = [];
      let currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        for (let hour = startHour; hour <= endHour; hour++) {
          let code = `${hallData.id}${currentDate.getFullYear()}${currentDate.getMonth() + 1}${currentDate.getDate()}${hour}:00`;
          if (data.some((dtValue) => dtValue === code)) {
            alert(`${currentDate.getDate()} في الساعة ${hour}:00 غير متاح`);
            return false;
          } else {
            bookinfo.push({
              code: code,
              userid: hallData.userData.id,
              hallid: hallData.id,
              date: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`,
              month: currentDate.getMonth() + 1,
              year: currentDate.getFullYear(),
              day: currentDate.getDate(),
              hour: hour + ':00',
              price: hallData.price_hour,
            });
          }
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return bookinfo;
    };

    const startDate = new Date(datehours);
    const endDate = new Date(datehours);
    const startHour = parseInt(hourfrom, 10);
    const endHour = parseInt(hourto, 10);

    const bookinfo = getDatesHours(startDate, endDate, startHour, endHour);
    if (bookinfo !== false) {
      nav(`/checkout-hours`, {
        state: {
          bookinfo: bookinfo,
          id: hallData.id,
          info: { price: hallData.price_hour, userid: hallData.userData.id },
          name: hallData.name,
          image: hallData.imagesData[0],
          hourfrom: hourfrom,
          hourto: hourto,
          datehours: datehours,
        },
      });
    }
  };

  const handleCheckoutHoursDays = (e) => {
    const isEmpty = (value) => value === '' || value === null;

    if (isEmpty(hourfrommix)) {
      alert('Choose hour from');
      return;
    }

    if (isEmpty(hourtomix)) {
      alert('Choose hour to');
      return;
    }

    if (isEmpty(dateonemix)) {
      alert('Choose date from');
      return;
    }

    if (isEmpty(datetwomix)) {
      alert('Choose date to');
      return;
    }

    if (dateonemix === datetwomix) {
      alert('The start and end dates should be different');
      return;
    }

    if (hourfrommix === hourtomix) {
      alert('The start and end hours should be different');
      return;
    }

    if (new Date(dateonemix) > new Date(datetwomix)) {
      alert('The start date should be before the end date');
      return;
    }

    if (parseInt(hourtomix, 10) < parseInt(hourfrommix, 10)) {
      alert('The start hour should be before the end hour');
      return;
    }

    const getDatesHours = (startDate, endDate, startHour, endHour) => {
      const bookinfo = [];
      let currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        for (let hour = startHour; hour <= endHour; hour++) {
          let code = `${hallData.id}${currentDate.getFullYear()}${currentDate.getMonth() + 1}${currentDate.getDate()}${hour}:00`;
          if (data.some((dtValue) => dtValue === code)) {
            alert(`يوم ${currentDate.getDate()} في الساعة ${hour}:00 غير متاح`);
            return false;
          } else {
            bookinfo.push({
              code: code,
              userid: hallData.userData.id,
              hallid: hallData.id,
              date: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`,
              month: currentDate.getMonth() + 1,
              year: currentDate.getFullYear(),
              day: currentDate.getDate(),
              hour: hour + ':00',
              price: hallData.price_hour,
            });
          }
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return bookinfo;
    };

    const startDate = new Date(dateonemix);
    const endDate = new Date(datetwomix);
    const startHour = parseInt(hourfrommix, 10);
    const endHour = parseInt(hourtomix, 10);

    const bookinfo = getDatesHours(startDate, endDate, startHour, endHour);

    if (bookinfo !== false) {
      nav(`/checkout-hours-days`, {
        state: {
          bookinfo: bookinfo,
          id: hallData.id,
          info: { price: hallData.price_hour, userid: hallData.userData.id },
          name: hallData.name,
          image: hallData.imagesData[0],
          hourfrom: hourfrommix,
          hourto: hourtomix,
          dateonemix: dateonemix,
          datetwomix: datetwomix,
        },
      });
    }
  };

  const generateHours = () => {
    const hours = [];
    for (let i = 9; i <= 21; i++) {
      hours.push(`${i}:00`);
    }
    return hours;
  };

  return load === true ? (
    <div className="d-flex justify-content-center mb-2">
      <Spinner
        style={{ color: '#fcd980', marginLeft: '5px' }}
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />

      <Spinner
        style={{ color: '#fcd980', marginLeft: '5px' }}
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />

      <Spinner
        style={{ color: '#fcd980', marginLeft: '5px' }}
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    </div>
  ) : (
    <div style={{ overflow: 'scroll', fontFamily: 'cairo' }}>
      <NavBar />
      <Banner
        txt={isuser ? 'Home > Place  Details' : 'Home  > Admin > Place Details'}
      />

      <Row className="d-flex justify-content-center mt-2 mb-1">
        <Col xs="6" sm="6" md="2">
          {checkuserrate ? (
            load && checkuserrate ? (
              'loading'
            ) : null
          ) : (
            <Hallrating onsend={onSend} />
          )}
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        <Modal
          show={show}
          onHide={handleClose}
          style={{ direction: 'rtl', top: '5px', zIndex: '100000' }}
        >
          <Modal.Header className="d-flex justify-content-center">
            <Modal.Title
              style={{ fontFamily: 'cairo', backgroundColor: '#F9F9F9' }}
            >
              Reservation Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: '#f6f8f7' }}>
            <Tabs
              activeKey={selectedTab}
              onSelect={handleChangeTab}
              className="mb-3  d-flex justify-content-center"
            >
              <Tab eventKey="book hour" title="book hour">
                <Row className="px-3 d-flex justify-content-center">
                  <Col xs="8" sm="9" md="6">
                    <Row>
                      <Col xs="12">
                        <input
                          data={date}
                          onChange={onChangeDateByHour}
                          value={date}
                          min={today}
                          style={{ width: '100%' }}
                          type="date"
                        />
                      </Col>
                      <Col xs="12">
                        <select
                          style={{ width: '100%' }}
                          onChange={onChangeHour}
                          key={hour}
                          value={hour}
                          className="mt-3"
                        >
                          {generateHours().map((hou) => (
                            <option
                              key={hou}
                              style={{ width: '50px', height: '50px' }}
                            >
                              {hou}
                            </option>
                          ))}
                        </select>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center mt-3">
                  <Button type="button" onClick={handleCheckoutHour}>
                    continue
                  </Button>
                </div>
              </Tab>

              <Tab eventKey="book interval days" title="book interval days">
                <Row className="px-3 d-flex justify-content-center">
                  <Col xs="12" className="text-center">
                    <Row>
                      <Col className="text-start">
                        {' '}
                        <input
                          value={dateone}
                          onChange={onChangeDateOne}
                          style={{ width: '100%' }}
                          min={today}
                          type="date"
                        />
                      </Col>
                      <Col>: From</Col>
                    </Row>
                  </Col>
                  <Col xs="12" className="text-center mt-3">
                    <Row>
                      <Col className="text-start">
                        {' '}
                        <input
                          value={datetwo}
                          onChange={onChangeDateTwo}
                          style={{ width: '100%' }}
                          min={today}
                          type="date"
                        />
                      </Col>
                      <Col>: To</Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center mt-3">
                  <Col xs="6">
                    <select
                      style={{ width: '100%' }}
                      key={hourdays}
                      value={hourdays}
                      onChange={onChangeDaysHour}
                    >
                      {generateHours().map((hour) => (
                        <option key={hour}>{hour}</option>
                      ))}
                    </select>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center mt-3">
                  <Button type="button" onClick={handleCheckoutDays}>
                    continue
                  </Button>
                </div>
              </Tab>

              <Tab
                eventKey="book interval hours & days"
                title="book interval hours & days"
              >
                <Row className="d-flex justify-content-center">
                  <Col xs="12" className="text-center">
                    <Row>
                      <Col className="text-start">
                        {' '}
                        <input
                          value={dateonemix}
                          onChange={onChangeDateOneMix}
                          style={{ width: '100%' }}
                          min={today}
                          type="date"
                        />
                      </Col>
                      <Col>: From</Col>
                    </Row>
                  </Col>
                  <Col xs="12" className="text-center mt-3">
                    <Row>
                      <Col className="text-start">
                        {' '}
                        <input
                          value={datetwomix}
                          onChange={onChangeDateTwoMix}
                          style={{ width: '100%' }}
                          min={today}
                          type="date"
                        />
                      </Col>
                      <Col>: To</Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" className="text-center mt-3">
                    <Row>
                      <Col className="text-start">
                        <select
                          onChange={onChangeHoursFromMix}
                          key={hourfrommix}
                          value={hourfrommix}
                          style={{ width: '100%' }}
                        >
                          {generateHours().map((hour) => (
                            <option key={hour}>{hour}</option>
                          ))}
                        </select>
                      </Col>
                      <Col>: From</Col>
                    </Row>
                  </Col>
                  <Col xs="12" className="text-center mt-3">
                    <Row>
                      <Col className="text-start">
                        {' '}
                        <select
                          onChange={onChangeHoursToMix}
                          key={hourtomix}
                          value={hourtomix}
                          style={{ width: '100%' }}
                        >
                          {generateHours().map((hour) => (
                            <option key={hour}>{hour}</option>
                          ))}
                        </select>
                      </Col>
                      <Col>: To</Col>
                    </Row>
                  </Col>
                </Row>

                <div className="d-flex justify-content-center mt-3">
                  <Button type="button" onClick={handleCheckoutHoursDays}>
                    continue
                  </Button>
                </div>
              </Tab>

              <Tab eventKey="book interval hours" title="book interval hours">
                <Row className="d-flex justify-content-center">
                  <Col xs="12" className="text-center">
                    <Row>
                      <Col className="text-start">
                        {' '}
                        <input
                          onChange={onChangeDateHours}
                          value={datehours}
                          style={{ width: '100%' }}
                          min={today}
                          type="date"
                        />
                      </Col>
                      <Col>:</Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" className="text-center mt-3">
                    <Row>
                      <Col className="text-start">
                        <select
                          style={{ width: '100%' }}
                          key={hourfrom}
                          value={hourfrom}
                          onChange={onChangeHoursFrom}
                        >
                          {generateHours().map((hour) => (
                            <option key={hour}>{hour}</option>
                          ))}
                        </select>
                      </Col>
                      <Col>: From</Col>
                    </Row>
                  </Col>
                  <Col xs="12" className="text-center mt-3">
                    <Row>
                      <Col className="text-start">
                        <select
                          style={{ width: '100%' }}
                          key={hourto}
                          value={hourto}
                          onChange={onChangeHoursTo}
                        >
                          {generateHours().map((hour) => (
                            <option key={hour}>{hour}</option>
                          ))}
                        </select>
                      </Col>
                      <Col>: To</Col>
                    </Row>
                  </Col>
                </Row>

                <div className="d-flex justify-content-center mt-3">
                  <Button type="button" onClick={handleCheckoutHours}>
                    continue
                  </Button>
                </div>
              </Tab>
            </Tabs>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button
              style={{
                backgroundColor: '#fcd980',
                borderRadius: '10px',
                color: 'black',
                height: '50px',
                fontSize: '20px',
                fontWeight: 'bold',
                border: 'none',
              }}
              onClick={handleClose}
            >
              cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Col xs="12" sm="12" md="8" lg="8">
          <Carousel className="mt-2">
            {hallData.imagesData &&
              hallData.imagesData.map((v, i) => {
                return (
                  <Carousel.Item
                    key={i}
                    style={{ height: '100%', width: '100%' }}
                  >
                    <div className="d-flex flex-row justify-content-center">
                      <img
                        style={{
                          height: '20%',
                          width: '70%',
                          borderRadius: '60px',
                        }}
                        src={`data:image/*;base64,${v}`}
                      />
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
              {hallData.userData.city
                ? i18n.language === 'en'
                  ? hallData.userData.city.split('-')[0]
                  : hallData.userData.city.split('-')[1]
                : ''}
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
            {hallData.city
              ? i18n.language === 'en'
                ? hallData.city.split('-')[0]
                : hallData.city.split('-')[1]
              : ''}
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
            {hallData.location
              ? i18n.language === 'en'
                ? hallData.location.split('/')[0]
                : hallData.location.split('/')[1]
              : ''}
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
            {hallData.price_hour} egy
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
              src={`${process.env.REACT_APP_NODE_ENV=='dev'?process.env.REACT_APP_DEV_VIDEO_API:process.env.REACT_APP_PROD_VIDEO_API}/${hallData.video}`}
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
                to={`${process.env.REACT_APP_NODE_ENV=='dev'?process.env.REACT_APP_DEV_PDF_API:process.env.REACT_APP_PROD_PDF_API}/${hallData.pdf}`}
                target="_blank"
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
            xs="12"
            sm="6"
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
            onClick={handleShow}
            xs="12"
            sm="6"
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
