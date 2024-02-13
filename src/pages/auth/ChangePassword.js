import React, { useState } from 'react';
import { Row, Container, Col, Button, Spinner } from 'react-bootstrap';
import signin from '../../assets/images/signin.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import AcessHeader from '../../compenents/auth/AccessHeader';
import AcessButton from '../../compenents/auth/AccessButton';

function ChangePassword() {
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
            <AcessHeader txt="Enter New Password" />

            <div>
              <input className="inputfield" placeholder="Password"></input>

              <input className="inputfield" placeholder="New Password"></input>

              <AcessButton txt="SAVE CHANGES" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ChangePassword;
