import React from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import Banner from '../../compenents/global/widgets/banner';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Container} from 'react-bootstrap';
import MidTitle from '../../compenents/global/widgets/midtitle';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';
import HallAcceptionDropdown from '../../compenents/admin/hall/HallAcceptionDropdown';
import ChangeHallStatusHook from '../../hooks/admin/hall/changeHallStatusHook';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';

function HallDetails() {
  const [isuser, isadmin, data] = ProtectedRouteHook();
  const [onSubmit, status, onChangeStatus, loading] = ChangeHallStatusHook();

  const location = useLocation();
  const nav = useNavigate();

  let hallData;

  try {
    hallData = location.state.hallData;
  } catch (v) {
    nav('/places');
    return;
  }
  const handleSubmit = () => {
    onSubmit(hallData.id);
  };

  return (
    <div>
      <NavBar />
      <Banner
        txt={isuser ? 'Home > Place  Details' : 'Home  > Admin > Place Details'}
      />
      <Row className="d-flex justify-content-center">
        <Col xs="12" sm="12" md="8" lg="8">
          <Carousel className="mt-2">
            {hallData.imagesData &&
              hallData.imagesData.map((v, i) => {
                return (
                  <Carousel.Item key={i} style={{ height: '100%', width: '100%' }}>
                    <div className="d-flex flex-row justify-content-center">
                      <img
                        style={{
                          height: '20%',
                          width: '70%',
                          borderRadius: '60px',
                        }}
                        src={`data:image/*;base64,${v}`}
                      />
                    </div>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </Col>
      </Row>

      <MidTitle txt={'Hall Owner'} arrow={false} />

      <Container>
        <Row className="d-flex justify-content-center mx-5">
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            className='detail-title'
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            Name :
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="text-center mx-1"
            >
              {hallData.userData.name}
            </span>
          </Col>

          <Col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            className='detail-title'
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            City :
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="text-center mx-1"
            >
              {hallData.userData.city}
            </span>
          </Col>
        </Row>

        {/* *********************** */}

        <Row className="d-flex justify-content-center mx-5">
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            className='detail-title'
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            Phone :
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="text-center mx-1"
            >
              {hallData.userData.phone}
            </span>
          </Col>

          <Col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            className='detail-title'
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            <span className="text-start">Email :</span>
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="text-center"
            >
              {hallData.userData.email}
            </span>
          </Col>
        </Row>
      </Container>

      <MidTitle txt={'Hall Info'} />
      {/* ***************************** */}

      {hallData.checked === 'false' ? (
        <Row className="d-flex justify-content-center mx-5">
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            className='detail-title mx-5'
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            Admin Confirm :
            <span
              style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
              className="mx-1"
            >
              <FontAwesomeIcon
                style={{
                  height: '40px',
                  fontWeight: '800',
                  width: '50px',
                  color: '#fcd980',
                }}
                icon={faHourglass}
              />
            </span>
          </Col>
        </Row>
      ) : (
        ''
      )}
            <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className='detail-title mx-5'
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall Name :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            {hallData.name}
          </span>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className='detail-title mx-5'
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall Details :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            {hallData.details}
          </span>
        </Col>
      </Row>



      {/*  */}

      {/* <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className='detail-title mx-5'
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
        Hall Details:
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            {hallData.details}
          </span>
        </Col>
      </Row> */}

      {/*  */}

      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className='detail-title mx-5'
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall City :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            {hallData.city}
          </span>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className='detail-title mx-5'
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall location :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            {hallData.location}
          </span>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className='detail-title mx-5'
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hour Price:
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            {hallData.price_hour}$
          </span>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center mx-5">
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          className='detail-title mx-5'
          style={{
            fontSize: '32px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            color: '#282938',
          }}
        >
          Hall Capacity :
          <span
            style={{ fontSize: '12px', fontWeight: '400', color: '#282938' }}
            className="mx-1"
          >
            {hallData.capacity} students
          </span>
        </Col>
      </Row>

      <MidTitle txt={'Hall Video'} />
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="12" lg="8" className="text-center">
          <div style={{ borderRadius: '60px' }}>
            <iframe
              style={{ borderRadius: '30px' }}
              width="80%"
              height="350px"
              src={`http://localhost:3003/api/v1/halls/video/${hallData.video}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            
            ></iframe>
          </div>
        </Col>
      </Row>
      {isadmin ? <MidTitle txt={'Hall Property'} /> : null}
      {isadmin ? (
        <Row className="d-flex justify-content-center">
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            className="d-flex justify-content-center"
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
          >
            <div>
              <Link
                className="link"
                style={{
                  fontSize: '30px',
                  fontWeight: '400',
                  color: '#282938',
                }}
                to={`http://localhost:3003/api/v1/halls/pdf/${hallData.pdf}`}
              >
                Clik Here
              </Link>
            </div>
          </Col>
        </Row>
      ) : null}

      {isadmin ? (
        <Row className="d-flex justify-content-center mt-5">
          <Col xs="4" sm="3" md="3" lg="1">
            <div>
              <button
                style={{
                  backgroundColor: '#fcd980',
                  color: '#4f4a46',
                  fontSize: '20px',
                  borderColor: 'black',
                  fontWeight: 'bold',
                  borderWidth: '2px',
                  height: '52px',
                  width: '100%',
                }}
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </Col>
          <Col xs="7" sm="5" md="5" lg="5">
            <HallAcceptionDropdown status={status} onChange={onChangeStatus} />
          </Col>
        </Row>
      ) : null}

      <Footer />
    </div>
  );
}
export default HallDetails;
