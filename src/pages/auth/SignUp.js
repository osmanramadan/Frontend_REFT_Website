import React, { useState } from 'react';
import { Row, Container, Col, Button ,Spinner } from 'react-bootstrap';
import signup from "../../assets/images/signup.png"
import AcessHeader from '../../compenents/auth/AccessHeader';
// import RegisterHook from '../../hooks/auth/registerHook';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function SignUp() {


  return (
    <div>
        <Row  className='access'>

          <Col xs="2" md='6' className='access-img'>
             <img src={signup} alt="image" />
          </Col>


          <Col xs="10" md='6' className='access-inputs d-flex justify-content-center'>
         
            <div>
                <AcessHeader txt="Sign up"/>
                 {/* <div> */}

                    <input
                      className="inputfield"
                      placeholder="Name"
                                      
                    >
                   </input>
                   
                   <input
                      className="inputfield"
                      placeholder="Phone"             
                    >
                    </input>
                      
                   <input
                      className="inputfield"
                      placeholder="Email"             
                    >
                   </input>

                   <input
                      className="inputfield"
                      placeholder="Role"             
                    >
                   </input>

                   <input
                      className="inputfield"
                      placeholder="City"             
                    >
                   </input>

                   <input
                      className="inputfield"
                      placeholder="Password"             
                    >
                   </input>

                   <input
                      className="inputfield"
                      placeholder="Retype Password"             
                    >
                   </input>

                   <button  className="btn-login mt-3 mx-2">
                      register
                   </button>


                {/* </div> */}
           
      
            </div>

          </Col>
        </Row>
    </div>
  );
};

export default SignUp;
