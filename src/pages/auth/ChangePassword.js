import React, { useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import signin from '../../assets/images/signin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import AcessHeader from '../../compenents/auth/AccessHeader';
import AcessButton from '../../compenents/auth/AccessButton';
import ResetPasswordHook from '../../hooks/auth/resetPasswordHook';

function ChangePassword() {

  const [
    password,
    OnChangePassword,
    passwordConfirm,
    OnChangePasswordConfirm,
    onSubmit,
    loading,
  ] = ResetPasswordHook();

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

            {  
              loading == false ? (
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
            )
            }

            <AcessHeader txt="Enter New Password" />

            <div className="input-wrapper">
              <input
                className="inputfield"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={OnChangePassword}
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

            <div className="input-wrapper">

              <input
                className="inputfield"
                type={showPassword ? 'text' : 'password'}
                placeholder="Retype Password"
                value={passwordConfirm}
                onChange={OnChangePasswordConfirm}
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

            <AcessButton txt="SAVE CHANGES" onClick={onSubmit} />

          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ChangePassword;
