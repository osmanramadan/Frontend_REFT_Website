import React, { useState } from 'react';
import { Row, Container, Col, Button, Spinner } from 'react-bootstrap';
import signin from '../../assets/images/signin.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import AcessHeader from '../../compenents/auth/AccessHeader';
import AcessButton from '../../compenents/auth/AccessButton';
import AcessSwitch from '../../compenents/auth/AccessSwitch';

function ForgetPassword() {
  return (
    <div>
      <Row className="access">
        <Col md="6" className="access-img">
          <img src={signin} alt="image" />
        </Col>

        <Col
          xs="12"
          md="6"
          className="access-inputs d-flex justify-content-center"
        >
          <div>
            <AcessHeader txt="Forget Password" />

            <div>
              <input className="inputfield" placeholder="Email"></input>

              <AcessButton txt="SEND CODE" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ForgetPassword;
