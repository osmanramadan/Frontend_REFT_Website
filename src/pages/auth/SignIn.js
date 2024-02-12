import React, { useState } from 'react';
import { Row, Container, Col, Button, Spinner } from 'react-bootstrap';
import signin from "../../assets/images/signin.png"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function SignIn() {


  return (
    <div>
        <Row  className='access'>

          <Col xs="2" md='6' className='access-img'>
             <img src={signin} alt="image" />
          </Col>


          <Col xs="10" md='6' className='access-inputs'>
         
            <div>

    
            <p> ramadanramadanramadan</p>
            <p> ramadanramadanramadan</p>
            <p> ramadanramadanramadan</p>
            <p> ramadanramadanramadan</p>
            <p> ramadanramadanramadan</p>
            <p> ramadanramadanramadan</p>
            <p> ramadanramadanramadan</p>
            <p> ramadanramadanramadan</p>
      
 
            </div>

          </Col>
        </Row>
    </div>
  );
};

export default SignIn;
