import React, { useRef } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';

const Input = (props) => {
  return (
    <div className="input">
      <label>{props.label}</label>
      <div className="input-field">
        <input type={props.type} style={{ color: '#1C1E53' }} name={props.name} readOnly value={props.value} />
        {props.imgSrc && <img src={props.imgSrc} alt="Card Brand" />}
      </div>
    </div>
  );
};

const BookingInfo = ({ data }) => {
  const componentRef = useRef();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Col className="mb-4" xs="12" sm="12" md="6" lg="6">
      <div className="checkout-container px-3" style={{ height:'320px',overflow:'scroll',backgroundColor: '#EEF4FA', borderRadius: '20px' }} ref={componentRef}>
      <Row className='text-end'>
          <Col xs='12' sm='12'><h3 style={{ color: "black", fontWeight: 'bold', opacity: '0.7' }}>{data.bookinglist.amount} EGP</h3></Col>
        </Row>
        <Row className='text-center'>
          <h3 style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }}>Secret Code:</h3>
        </Row>
        <Row >
            <Col xs="12" sm="12" md='12'>
              <Input value={data.bookinglist.secretcode}  type="text" name="secretcode" />
            </Col>
        </Row>
        <Row className='text-center'>
          <h3 style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }}>Book Info</h3>
        </Row>
        {data.bookinglist.type === 'onehour' && (
          <Row style={{ color: '#474B50' }}>
            <Col xs="12" sm="6" md='6'>
              <Input label="Hall's Hour" value={data.bookinglist.onehour} type="text" name="hour" />
            </Col>
            <Col xs="12" sm="6" md='6'>
              <Input label="Hall's Date" value={formatDate(data.bookinglist.date)} type="text" name="date" />
            </Col>
          </Row>
        )}
        {data.bookinglist.type === 'hourdays' && (
          <Row style={{ color: '#474B50' }}>
            <Col xs="12" sm="6" md='6'>
              <Input label="Hall's Hour" value={data.bookinglist.onehour} type="text" name="hour" />
            </Col>
            <Col xs="12" sm="6" md='6'>
              <Input label="Hall's Date from" value={formatDate(data.bookinglist.datefrom)} type="text" name="date" />
            </Col>
            <Col xs="12" sm="6" md='6'>
              <Input label="Hall's Date to" value={formatDate(data.bookinglist.dateto)} type="text" name="date" />
            </Col>
          </Row>
        )}
        {data.bookinglist.type === 'dayshours' && (
          <Row style={{ color: '#474B50' }}>
            <Col xs="12" sm="6" md='6'>
              <Input label="Hall's Hour from" value={data.bookinglist.hourfrom} type="text" name="hour" />
            </Col>
            <Col xs="12" sm="6" md='6'>
              <Input label="Hall's Hour to" value={data.bookinglist.hourto} type="text" name="hour" />
            </Col>
            <Col xs="12" sm="6" md='6'>
              <Input label="Hall's Date from" value={formatDate(data.bookinglist.datefrom)} type="text" name="date" />
            </Col>
            <Col xs="12" sm="6" md='6'>
              <Input label="Hall's Date to" value={formatDate(data.bookinglist.dateto)} type="text" name="date" />
            </Col>
          </Row>
        )}
        {data.bookinglist.type === 'dayhours' && (
          <Row style={{ color: '#474B50' }}>
            <Col xs="12" sm="6" md='6'>
              <Input label="Hall's Hour from" value={data.bookinglist.hourfrom} type="text" name="hour" />
            </Col>
            <Col xs="12" sm="6" md='6'>
              <Input label="Hall's Hour to" value={data.bookinglist.hourto} type="text" name="hour" />
            </Col>
            <Col xs="12" sm="6" md='6'>
              <Input label="Hall's Date " value={formatDate(data.bookinglist.date)} type="text" name="date" />
            </Col>
          </Row>
        )}
        <Row className='text-center'>
          <h3 style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }}>Hall Info</h3>
        </Row>
        <Row style={{ color: '#474B50' }}>
          <Col xs="12" sm="6">
            <Input label="Hall's Name" value={data.hallinfo.name} type="text" name="name" />
          </Col>
          <Col xs="12" sm="6">
            <Input label="Hall's City" value={data.hallinfo.city} type="text" name="hour" />
          </Col>
        </Row>
        <Row style={{ color: '#474B50' }}>
          <Col xs="12" sm="6">
            <Input label="Hall's Location" value={data.hallinfo.location} type="text" name="name" />
          </Col>
        </Row>
        <Row className='text-center'>
          <h3 style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }}>Who Reserv Hall </h3>
        </Row>
        <Row style={{ color: '#474B50' }}>
          <Col xs="12" sm="6">
            <Input label="Email" value={data.userbyid.email} type="text" name="name" />
          </Col>
          <Col xs="12" sm="6">
            <Input label="Phone" value={data.userbyid.phone} type="text" name="name" />
          </Col>
          <Col xs="12" sm="6">
            <Input label="City" value={data.userbyid.city} type="text" name="name" />
          </Col>
          <Col xs="12" sm="6">
            <Input label="Name" value={data.userbyid.name} type="text" name="name" />
          </Col>
          
        </Row>

        <Row className='text-center'>
          <h3 style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }}>Who Hall Owner </h3>
        </Row>
        <Row style={{ color: '#474B50' }}>
          <Col xs="12" sm="6">
            <Input label="Email" value={data.placeownerbyid.email} type="text" name="name" />
          </Col>
          <Col xs="12" sm="6">
            <Input label="Phone" value={data.placeownerbyid.phone} type="text" name="name" />
          </Col>
          <Col xs="12" sm="6">
            <Input label="City" value={data.placeownerbyid.city} type="text" name="name" />
          </Col>
          <Col xs="12" sm="6">
            <Input label="Name" value={data.placeownerbyid.name} type="text" name="name" />
          </Col>
          
        </Row>
        <Row className="text-center mt-3">
          <Button onClick={handlePrint}>Print as PDF</Button>
        </Row>
      </div>
    </Col>
  );
};

export default BookingInfo;
