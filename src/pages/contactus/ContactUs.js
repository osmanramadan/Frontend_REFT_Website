import React from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col,Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';



function ContactUs() {
  return (
    <div >
        <NavBar/> 
             
                 <Row className='d-flex justify-content-center' style={{backgroundColor:"#1c1e53",color:"white",height:"100vh"}}>
                  
              
                      <Col xs="12" sm="12"  md="8" className='mt-5'>
                          <div className='text-center' style={{ width:"100%",height:"auto",borderRadius: '70px', borderWidth: '2px', borderColor: 'white', borderStyle: 'solid', padding: '10px' }}>
                                   <span className='px-3 py-2' style={{fontWeight:"bold",fontSize:"52px"}}>GET IN TOUCH</span>
                                   <Row  className='d-flex justify-content-center mt-5'>
                                      <Col xs="12" sm="12" md="12" lg="9">
                                          <FontAwesomeIcon className='mx-3' style={{height:"30px",width:"40px"}} icon={faPhone} />
                                          <span  className='mx-2' style={{opacity:"0.8",color:"#F2EFFF",fontSize:"26px",fontWeight:"400"}}>Phone</span>
                                          <span  className='mx-5' style={{fontSize:"18px",lineHeight:"28%",color:"#80819e",fontWeight:"300"}}>
                                            987654345667
                                          </span>
                                      </Col>
                                   
                                   </Row>

                                   <Row  className='d-flex justify-content-center mt-5'>
                                      <Col xs="12" sm="12" md="12" lg="9">
                                          <FontAwesomeIcon className='mx-3' style={{height:"30px",width:"40px"}} icon={faEnvelope} />
                                          <span  className='mx-2' style={{opacity:"0.8",color:"#F2EFFF",fontSize:"26px",fontWeight:"400"}}>Email</span>
                                          <span  className='mx-5' style={{fontSize:"18px",lineHeight:"28%",color:"#80819e",fontWeight:"300"}}>
                                            osman@osman.com
                                          </span>
                                      </Col>
                                   
                                   </Row>
                                   <Row  className='d-flex justify-content-center mt-5 mb-4'>
                                      <Col xs="12" sm="12" md="12" lg="9">
                                          <FontAwesomeIcon className='mx-3' style={{height:"30px",width:"40px"}} icon={faMapMarkerAlt} />
                                          <span  className='mx-2' style={{opacity:"0.8",color:"#F2EFFF",fontSize:"26px",fontWeight:"400"}}>Phone</span>
                                          <span  className='mx-5' style={{fontSize:"18px",lineHeight:"28%",color:"#80819e",fontWeight:"300"}}>
                                          Damietta/ Elsaidy street 22
                                          </span>
                                      </Col>
                                   
                                   </Row>
                         </div>


                         <Row  className='d-flex justify-content-center' style={{marginTop:"90px"}} >
                          
                                <Col lg="6">
                                     <input className='inputfield' placeholder='Your name'/>
                                </Col>

                                <Col lg="8">
                                <textarea
                                  rows={6}
                                  className="inputfield"
                                  placeholder="Your message"
                                  style={{ width: '100%', height: '200px' }}
                                  cols={70}
                                />
                                </Col>

                                

                         </Row>
                      </Col>

                 </Row>
      
        <Footer/>
    </div>
  );
}
export default ContactUs;
