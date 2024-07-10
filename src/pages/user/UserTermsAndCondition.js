import React from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Container, Row } from 'react-bootstrap';


function UserTermsAndCondition() {
  return (
    <div style={{ backgroundColor: '#ACADBC' }}>
      <NavBar />
      <Container className="mt-5 mb-3">
        <Row
          style={{
            backgroundColor: '#1c1e53',
            color: 'white',
            padding: '25px',
            borderRadius: '2%',
          }}
        >
          Welcome to REFT! By accessing or using our services, you agree to be
          bound by the following terms and conditions. Please read them
          carefully before proceeding.
          <div className="mt-3">1. Rental Services</div>
          <div
            style={{
              opacity: '0.8',
              color: '#F2EFFF',
              fontSize: '18px',
              marginLeft: '15px',
              marginTop: '15px',
              fontWeight: '400',
            }}
          >
            - REFT provides a platform for teachers to rent places according to
            their needs, including hourly, daily, weekly, or monthly durations.
          </div>
          <div
            style={{
              opacity: '0.8',
              color: '#F2EFFF',
              fontSize: '18px',
              marginLeft: '15px',
              marginTop: '10px',
              fontWeight: '400',
            }}
          >
            - The rented places may include but are not limited to classrooms,
            studios, or other suitable locations for teaching activities.
          </div>
          <div className="mt-3">2. Installation of Cameras</div>
          <div
            style={{
              opacity: '0.8',
              color: '#F2EFFF',
              fontSize: '18px',
              marginLeft: '15px',
              marginTop: '10px',
              fontWeight: '400',
            }}
          >
            - Owners of the rented places are required to install cameras on
            their premises for security and dispute resolution purposes.
          </div>
          <div
            style={{
              opacity: '0.8',
              color: '#F2EFFF',
              fontSize: '18px',
              marginLeft: '15px',
              marginTop: '10px',
              fontWeight: '400',
            }}
          >
            - The recordings from these cameras may be used to resolve any
            disputes between the teacher and the place owner.
          </div>
          <div className="mt-3">3. Communication and Verification</div>
          <div
            style={{
              opacity: '0.8',
              color: '#F2EFFF',
              fontSize: '18px',
              marginLeft: '15px',
              marginTop: '10px',
              fontWeight: '400',
            }}
          >
            - It is recommended for teachers to thoroughly review the details of
            the rented place and communicate with the owner before making a
            rental commitment.
          </div>
          <div
            style={{
              opacity: '0.8',
              color: '#F2EFFF',
              fontSize: '18px',
              marginLeft: '15px',
              marginTop: '10px',
              fontWeight: '400',
            }}
          >
            - Failure to verify the details of the place and communicate with
            the owner it will be the teacher responsibility .
          </div>
          <div className="mt-3">4. Penalties</div>
          <div
            style={{
              opacity: '0.8',
              color: '#F2EFFF',
              fontSize: '18px',
              marginLeft: '15px',
              marginTop: '10px',
              fontWeight: '400',
            }}
          >
            - Both teachers and place owners are subject to penalties if they do
            not adhere to the terms and conditions of the website. - Penalties
            will be imposed on the place owner if: - The details of the rented
            place do not match the information provided on the website. - The
            owner engages in teasing or harassment of the teacher without a
            valid reason. - Penalties will be imposed on the teacher if: - They
            exceed the duration of time they have rented the place for.
          </div>
          <div className="mt-3">5. Dispute Resolution</div>
          <div
            style={{
              opacity: '0.8',
              color: '#F2EFFF',
              fontSize: '18px',
              marginLeft: '15px',
              marginTop: '10px',
              fontWeight: '400',
            }}
          >
            - In the event of any disputes between the teacher and the place
            owner, the recordings from the installed cameras may be used as
            evidence to resolve the issue. - REFT will act as a mediator in
            resolving disputes, and its decision will be final and binding.
          </div>
          <div className="mt-3">6. Amendments to Terms</div>
          <div
            style={{
              opacity: '0.8',
              color: '#F2EFFF',
              fontSize: '18px',
              marginLeft: '15px',
              marginTop: '10px',
              fontWeight: '400',
            }}
          >
            - REFT reserves the right to amend these terms and conditions at any
            time without prior notice. - It is the responsibility of users to
            regularly review the terms and conditions for any updates or
            changes.
          </div>
          <div className="mt-3">7. Acceptance of Terms</div>
          <div
            style={{
              opacity: '0.8',
              color: '#F2EFFF',
              fontSize: '18px',
              marginLeft: '15px',
              marginTop: '10px',
              fontWeight: '400',
            }}
          >
            - By using the services provided by REFT, you acknowledge and agree
            to abide by these terms and conditions. - If you do not agree with
            any part of these terms, you should not use our services.
          </div>
          <div className="mt-3">8. Contact Us</div>
          <div
            style={{
              opacity: '0.8',
              color: '#F2EFFF',
              fontSize: '18px',
              marginLeft: '15px',
              marginTop: '10px',
              fontWeight: '400',
            }}
          >
            - If you have any questions or concerns about these terms and
            conditions, please contact us at [Your Contact Information].
          </div>
          Feel free to customize and adjust these terms to better fit your
          specific requirements and legal obligations. It's also advisable to
          seek legal counsel to ensure compliance with relevant laws and
          regulations in your jurisdiction.
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default UserTermsAndCondition;
