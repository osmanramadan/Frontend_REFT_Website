import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import PayPalButton from '../../compenents/hall/PaypalButton';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';
import StripeButton from '../../compenents/hall/StripeButton';

const HallCheckoutIntervalHours = () => {
  const location = useLocation();
  const nav = useNavigate();

  let data;
  let amount;
  let bookinfo;
  let userdata;

  try {
    data = location.state;
    amount = data.info.price;
    bookinfo = location.state.bookinfo;
    const [_isUser, _isAdmin, userinfo] = ProtectedRouteHook();
    userdata = userinfo;
  } catch (error) {
    alert('مشكله فى عمليه الدفع');
    nav('/');
    return null;
  }

  return (
    <div style={{ backgroundColor: '#1C1E53' }}>
      <NavBar />
      <Container className="app-container" style={{ zIndex: '-1200000000000' }}>
        <Row>
          <Col className="mb-4">
            <div className="checkout">
              <div className="checkout-container">
                <Row className="text-end">
                  <h3 style={{ color: '#FCD980' }}>
                    {data.info.price * bookinfo.length} EGP
                  </h3>
                </Row>
                <Row className="text-center">
                  <h3>Checkout </h3>
                </Row>
                <Row>
                  <Col xs="12" sm="6">
                    <Input
                      label="Hall's Name"
                      value={data.name}
                      type="text"
                      name="name"
                    />
                  </Col>
                  <Col xs="12" sm="6">
                    <Input
                      label="Hall's Date"
                      value={data.datehours}
                      type="text"
                      name="name"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="6">
                    <Input
                      label="Hall's Hour From"
                      value={data.hourfrom}
                      type="text"
                      name="name"
                    />
                  </Col>
                  <Col xs="12" sm="6">
                    <Input
                      label="Hall's Hour To"
                      value={data.hourto}
                      type="text"
                      name="name"
                    />
                  </Col>
                </Row>

                <Row className="mt-5 text-center">
                  <StripeButton
                  amount={amount * bookinfo.length}
                  data={{
                    dashboardinfo: {
                      userid: userdata.id,
                      halluserid: data.info.userid,
                      hallid: data.id,
                      type: 'dayhours',
                      userid: userdata.id,
                      amount: amount * bookinfo.length,
                      date: data.datehours,
                      hourfrom: data.hourfrom,
                      hourto: data.hourto,
                    },
                    type: 'dayhours',
                    bookinfo: bookinfo,
                  }}
                  
                  />
                  <PayPalButton
                    amount={amount * bookinfo.length}
                    data={{
                      dashboardinfo: {
                        userid: userdata.id,
                        halluserid: data.info.userid,
                        hallid: data.id,
                        type: 'dayhours',
                        userid: userdata.id,
                        amount: amount * bookinfo.length,
                        date: data.datehours,
                        hourfrom: data.hourfrom,
                        hourto: data.hourto,
                      },
                      type: 'dayhours',
                      bookinfo: bookinfo,
                    }}
                  />
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
        <input
          type={props.type}
          name={props.name}
          readOnly
          value={props.value}
        />
        {props.imgSrc && <img src={props.imgSrc} alt="Card Brand" />}
      </div>
    </div>
  );
};

export default HallCheckoutIntervalHours;
