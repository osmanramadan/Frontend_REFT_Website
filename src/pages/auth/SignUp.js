import React, { useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import signup from '../../assets/images/signup.png';
import AcessHeader from '../../compenents/auth/AccessHeader';
import AcessButton from '../../compenents/auth/AccessButton';
import AcessSwitch from '../../compenents/auth/AccessSwitch';
import RoleDropDown from '../../compenents/auth/RoleDropdown';
import CityDropdown from '../../compenents/global/widgets/CityDropdown';
import RegisterHook from '../../hooks/auth/registerHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



function SignUp() {
  
const [
    username,
    email,
    phone,
    password,
    confirmPassword,
    city,
    role,
    loading,
    onChangeUsername,
    onChangeEmail,
    onChangePhone,
    onChangeCity,
    onChangeRole,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ] = RegisterHook();

  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Row className="access">
        <Col md="6" className="access-img">
          <img src={signup} alt="image" />
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

            <AcessHeader txt="Sign up" />

            <div>
              <input
                className="inputfield"
                placeholder="Name"
                value={username}
                onChange={onChangeUsername}
              ></input>
              <RoleDropDown role={role} onChange={onChangeRole} />

              <input
                className="inputfield"
                placeholder="Phone"
                value={phone}
                onChange={onChangePhone}
              ></input>

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

              <div className="input-wrapper">
                <input
                  className="inputfield"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Retype Password"
                  value={confirmPassword}
                  onChange={onChangeConfirmPassword}
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

              <CityDropdown city={city} onChangeCity={onChangeCity} />
              
              <AcessButton txt="register" onClick={OnSubmit} />
              <AcessSwitch
                txt="Already have an account?"
                to={'signin'}
                target={'Login'}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SignUp;
