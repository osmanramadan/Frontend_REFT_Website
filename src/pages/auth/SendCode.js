import React, { useState } from 'react';
import { Row, Container, Col, Button, Spinner } from 'react-bootstrap';
import signin from '../../assets/images/signin.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import AcessHeader from '../../compenents/auth/AccessHeader';
import AcessButton from '../../compenents/auth/AccessButton';
import VerifyPasswordHook from '../../hooks/auth/verifyPasswordHook';

function SendCode() {
  const [code, OnChangeCode, onSubmit, loading] = VerifyPasswordHook();

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
            {loading == false ? (
              <div className="d-flex justify-content-center mb-2">
                <Spinner
                  style={{ color: '#fcd980', marginLeft: '5px' }}
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />

                <Spinner
                  style={{ color: '#fcd980', marginLeft: '5px' }}
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />

                <Spinner
                  style={{ color: '#fcd980', marginLeft: '5px' }}
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              </div>
            ) : (
              ''
            )}

            <AcessHeader txt="Enter Sended Code" />

            <div>
              <input
                className="inputfield"
                placeholder="Code"
                value={code}
                onChange={OnChangeCode}
              ></input>

              <AcessButton txt="VERIFIY CODE" onClick={onSubmit} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SendCode;
