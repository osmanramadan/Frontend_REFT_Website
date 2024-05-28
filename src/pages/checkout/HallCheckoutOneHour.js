import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import PayPalButton from '../../compenents/hall/PaypalButton';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';



const HallCheckoutOneHour = () => {
  const location = useLocation();
  const nav = useNavigate();

  let data = null;
  let amount = null;
  let userdata =null

  try {
    data = location.state;
    amount = data.info.price;
    const [_isUser,_isAdmin,userinfo]=ProtectedRouteHook()
    userdata = userinfo

  } catch (error) {
    alert('مشكله فى عمليه الدفع')
    nav('/');
    return null; 
  }
  try{
   
  }catch(e){
     alert('مشكله فى عملية الدفع')
     return;
  }

    console.log(data)
  return (
    <div style={{ backgroundColor: "#1C1E53" }}>
      <NavBar />
      <Container className="app-container" style={{ zIndex: "-1200000000000" }}>
        <Row>
          <Col className="mb-4">
            <div className="checkout">
              <div className="checkout-container">
                <Row className='text-end'>
                  <h3 style={{ color: "#FCD980" }}>{data.info.price} EGP</h3>
                </Row>
                <Row className='text-center'>
                  <h3>Checkout{userdata.id}</h3>
                </Row>
                <Row>
                  <Col xs="12" sm="6">
                    <Input label="Hall's Name" value={data.name} type="text" name="name" />
                  </Col>
                  <Col xs="12" sm="6">
                    <Input label="Hall's Hour" value={data.hour} type="text" name="hour" />
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="6">
                    <Input label="Hall's Date" value={data.date} type="text" name="date" />
                  </Col>
                </Row>
                <Row className='mt-5'>
                  <Col xs='4' className='justify-content-end d-flex'>
                    <div style={{ width: "50%" }}>
                      <PayPalButton amount={amount} data={{'dashboardinfo':{'type':'onehour','userid':userdata.id,'amount':amount,'halluserid':data.info.userid,'hallid':data.id,
                      'date':data.date,'hour':data.hour,'price':amount},'type':'onehour','hallid':data.id,'userid':data.info.userid,'year':new Date(data.date).getFullYear(),'month':new Date(data.date).getMonth()+1,'day':new Date(data.date).getDate(),'date':data.date,'hour':data.hour,'price':amount}}/>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

const Input = (props) => {
  return (
    <div className="input">
      <label>{props.label}</label>
      <div className="input-field">
        <input type={props.type} name={props.name} readOnly value={props.value} />
        {props.imgSrc && <img src={props.imgSrc} alt="Card Brand" />}
      </div>
    </div>
  );
};

export default HallCheckoutOneHour;
