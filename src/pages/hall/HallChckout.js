import { Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import PayPalButton from './Paypal';



function HallCheckout() {

    const location = useLocation();
    const nav = useNavigate();
    // {id:id,data:buttonData,price:price,userid:userid}
    let data;
  
    try {
      data = location.state;
      // console.log(data.info)
      // price =location.state.price;
      // userid =location.state.userid;
    } catch (v) {
      nav('/');
      return;
    }
  
    
  return (
    <div>
        <NavBar/>
      <Container className='mt-5 mb-5'>
      
        <Row className='d-flex justify-content-center'>
          <Col xs="12" sm="6" className='text-center'>
          price: {data.info.price}<br/>
        Hall userid: {data.info.userid}<br/>
        Hall id: {data.id}<br/>
        hall date:{data.date}<br/>
        hall hour:{data.hou}
        {/* <PayPalScriptProvider options={{ 'client-id': 'AdclrXp4eMBG3Ew9EtTohMKqxTRV0TLCk2CbloyVJ3QrjU5-IQI6TKdGBu6afGHGoa3YamNCuTN2q1-g' }}> */}

        <PayPalButton/>
        {/* </PayPalScriptProvider> */}
          </Col>
        </Row>
        {/* Hall year: {data.data.year}<br/> */}
        {/* Hall dayname: {data.data.dayname}<br/> */}
        {/* Hall daynum: {data.data.daynum}<br/> */}
        {/* Hall monthname: {data.data.monthname}<br/> */}
        {/* Hall monthnumber: {data.data.monthnum}<br/> */}
        {/* Hall hour: {data.data.time}<br/> */}
        {/* date: {data.data.daynum}/{data.data.monthnum}/{data.data.year}<br/> */}
        {/* Code : {data.id}{data.data.year}{data.data.monthnum}{data.data.daynum}{data.data.time}<br/> */}
     
      


      </Container>
      <Footer/>
    </div>
  );
}
export default HallCheckout;
