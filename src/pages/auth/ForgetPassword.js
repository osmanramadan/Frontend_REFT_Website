import React from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import signin from '../../assets/images/signin.png';
import AcessHeader from '../../compenents/auth/AccessHeader';
import AcessButton from '../../compenents/auth/AccessButton';
import ForgetPasswordHook from '../../hooks/auth/forgetPasswordHook';

function ForgetPassword() {
  const [OnChangeEmail, email, onSubmit, loading] = ForgetPasswordHook();

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

            <AcessHeader txt="Forget Password" />

            <div>
              <input
                className="inputfield"
                placeholder="Email"
                value={email}
                onChange={OnChangeEmail}
              ></input>

              <AcessButton txt="SEND CODE" onClick={onSubmit} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ForgetPassword;
