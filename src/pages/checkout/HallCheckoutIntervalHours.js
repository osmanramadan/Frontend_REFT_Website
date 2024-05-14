import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import PayPalButton from '../hall/Paypal';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import ReservHallHook from '../../hooks/book/reservHallByHourHook';

const HallCheckoutIntervalHours= () => {
  
  
  const location = useLocation();
  const nav = useNavigate();


  let data;
  let amount;

  try {
    data = location.state;
    amount =data.info.price
    
  } catch (error) {
    nav('/');
    return null; 
  }
  
  return (
    <div style={{ backgroundColor: "#1C1E53" }}>
      <NavBar />
      <Container className="app-container" style={{zIndex:"-1200000000000"}}>
        <Row>
          
          <Col className="mb-4">
          <div className="checkout">
      <div className="checkout-container">
        <Row className='text-end'><h3 style={{color:"#FCD980"}}>{data.info.price} EGP</h3></Row>
        <Row className='text-center'><h3>Checkout </h3></Row>
        <Row>
           <Col xs="12" sm="6">
               <Input label="Hall's Name" value={data.name} type="text" name="name" />
           </Col>
           <Col xs="12" sm="6">
               <Input label="Hall's Date" value={data.datehours} type="text" name="name" />
           </Col>
        </Row>
        <Row>
           <Col xs="12" sm="6">
               <Input label="Hall's Hour From" value={data.hourfrom} type="text" name="name" />
           </Col>
           <Col xs="12" sm="6">
               <Input label="Hall's Hour To" value={data.hourto} type="text" name="name" />
           </Col>
 
        </Row>


        <Row className='mt-5 text-center' >
        <PayPalButton amount={amount} />
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

// const Item = (props) => {
//   return (
//     <div className="item-container">
//       <div className="item-image">
//         {/* <Row>
//           <Col>
//             <img src={`data:image/*;base64,${props.img}`} alt={props.name} />
//           </Col>
//         </Row> */}
//         <div className="item-details">
//           <h3 className="item-name">{props.name}</h3>
//           <h2 className="item-price">{props.price}</h2>
//         </div>
//       </div>
//     </div>
//   );
// };


        {/* <Row className="mb-2">
          <Col>
            <Input label="Expiration Date" type="month" name="exp_date" />
          </Col>
          <Col>
            <Input label="CVV" type="number" name="cvv" />
          </Col>
        </Row> */}

const Input = (props) => {
  return (
    <div className="input">
      <label>{props.label}</label>
      <div className="input-field">
        <input type={props.type} name={props.name} readOnly value={props.value}/>
        {props.imgSrc && <img src={props.imgSrc} alt="Card Brand" />}
      </div>
    </div>
  );
};


export default HallCheckoutIntervalHours;
