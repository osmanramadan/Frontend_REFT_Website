import React, { useState } from 'react';
import { Row, Container, Col, Button, Spinner } from 'react-bootstrap';
import signin from '../../assets/images/signin.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import AcessHeader from '../../compenents/auth/AccessHeader';
import AcessButton from '../../compenents/auth/AccessButton';
import AcessSwitch from '../../compenents/auth/AccessSwitch';
import LoginHook from '../../hooks/auth/loginHook';

function SignIn() {
  const [email, password, loading, onChangeEmail, onChangePassword, onSubmit] =
    LoginHook();

  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
            <AcessHeader txt="Login in" />

            <div>
              <input
                className="inputfield"
                placeholder="Email"
                value={email}
                onChange={onChangeEmail}
              ></input>

              <div className="input-wrapper">
                <input
                  className="inputfield"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={onChangePassword}
                />
                <span
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </span>
              </div>

              <AcessButton txt="login" onClick={onSubmit} />
              <AcessSwitch
                txt="Have an account?"
                to={'signup'}
                target={'Signup'}
              />
              <AcessSwitch
                txt="Do you forget password"
                to={'forget-password'}
                target={''}
                forgetpassword={'yes'}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SignIn;
