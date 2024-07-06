// import React from 'react';
// import NavBar from '../../compenents/global/navbar';
// import Footer from '../../compenents/global/footer';
// import { Col, Row } from 'react-bootstrap';
// import MidTitle from '../../compenents/global/widgets/midtitle';
// import ImageChooser from '../../compenents/user/ImageChooser';
// import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';
// import Teachertabs from '../../compenents/user/TeacherTaps';

// function TeacherProfile() {
//   const [isuser, _isadmin, userData] = ProtectedRouteHook();

  
 
//  return !userData?'loading':userData.role=='OWNER'||userData.role=='TEACHER'?<div>
//  <NavBar />
//  <div className='px-3'>
//    <Row>
//      <Col xs="0" sm="0" md="5" lg="3" className="user-one-tabs">
//      <Teachertabs/>
//      </Col>

//      <Col xs="12" sm="12" md="7" lg="8" style={{ direction: 'rtl' }}>
//        <Row className="d-flex justify-content-center text-center mt-5">
//          <Col xs="6">
//            <MidTitle txt={'My Profile'} />
//          </Col>
//        </Row>

//        <Row className="d-flex justify-content-center text-center">
//          <Col xs="6">
//            {userData && userData.profile_img ? (
//              <Figure>
//                <Figure.Image
//                  width={125}
//                  height={125}
//                  alt="Profile Image"
//                  src={`data:image/*;base64,${userData.profile_img}`}
//                  roundedCircle
//                />
//              </Figure>
//            ) : (
//              <ImageChooser handleSelect={() => {}} />
//            )}
//          </Col>
//        </Row>
//        <Row className="d-flex justify-content-center text-center">
//          <Col
//            xs="6"
//            style={{
//              display: 'flex',
//              justifyContent: 'center',
//              alignItems: 'center',
//              borderRadius: '7px',
//              fontSize: '16px',
//              fontWeight: 'medium',
//              color: 'white',
//              height: '47px',
//              width: '154px',
//              backgroundColor: '#2405f2',
//            }}
//          >
//            <div>{userData && userData.role ? userData.role : ''}</div>
//          </Col>
//        </Row>

//        <Row className="d-flex justify-content-center text-center  mt-5">
//          <Col
//            xs="6"
//            sm="5"
//            className="d-flex justify-content-center align-items-center"
//          >
//            <input
//              style={{width:'100%'}}
//              className="inputfield-userprofile"
//              placeholder={userData && userData.name ? userData.name : ''}
//              readOnly
//            />
//          </Col>
//          <Col
//            xs="1"
//            sm="2"
//            className="d-flex justify-content-start align-items-start py-2"
//            style={{
//              fontWeight: '600',
//              fontSize: '29px',
//              color: '#282938',
//            }}
//          >
//            name
//          </Col>
//        </Row>

//        <Row className="d-flex justify-content-center text-center  mt-0">
//          <Col
//            xs="6"
//            sm="5"
//            className="d-flex justify-content-center align-items-center"
//          >
//            <input
//            style={{width:'100%'}}
//              className="inputfield-userprofile"
//              placeholder={userData && userData.email ? userData.email : ''}
//              readOnly
//            />
//          </Col>
//          <Col
//            xs="1"
//            sm="2"
//            className="d-flex justify-content-start align-items-start py-2"
//            style={{
//              fontWeight: '600',
//              fontSize: '29px',
//              color: '#282938',
//            }}
//          >
//            email
//          </Col>
//        </Row>

//        <Row className="d-flex justify-content-center text-center  mt-0">
//          <Col
//            xs="6"
//            sm="5"
//            className="d-flex justify-content-center align-items-center"
//          >
//            <input
//              className="inputfield-userprofile"
//              placeholder={userData && userData.phone ? userData.phone : ''}
//              readOnly
//            />
//          </Col>
//          <Col
//            xs="1"
//            sm="2"
//            className="d-flex justify-content-start align-items-start py-2"
//            style={{
//              fontWeight: '600',
//              fontSize: '29px',
//              color: '#282938',
//            }}
//          >
//            phone
//          </Col>
//        </Row>
//        <Row className="d-flex justify-content-center text-center  mt-0">
//          <Col
//            xs="6"
//            sm="5"
//            className="d-flex justify-content-center align-items-center"
//          >
//            <input
//              className="inputfield-userprofile"
//              placeholder={userData && userData.city ? userData.city : ''}
//              readOnly
//            />
//          </Col>
//          <Col
//            xs="1"
//            sm="2"
//            className="d-flex justify-content-start align-items-start"
//            style={{
//              fontWeight: '600',
//              fontSize: '29px',
//              color: '#282938',
//            }}
//          >
//            city
//          </Col>
//        </Row>
//      </Col>
//    </Row>
//  </div>
//  <Footer />
// </div>:window.location.href = '/signin';
//  }


// export default TeacherProfile;


import React from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col, Row } from 'react-bootstrap';
import MidTitle from '../../compenents/global/widgets/midtitle';
import ImageChooser from '../../compenents/user/ImageChooser';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';
import Teachertabs from '../../compenents/user/TeacherTaps';

function TeacherProfile() {
  const [isuser, _isadmin, userData,loading] = ProtectedRouteHook();

  // if (!userData) {
  //   window.location.href = '/signin';
  //     return null;
  //   // return <div className='d-flex justify-content-center align-items-center'>loading</div>;
  // }

  // // if (loading===false) {
  // //   window.location.href = '/signin';
  // //   return null;
  // // }

  return (
    <div>
      <NavBar />
      <div className="px-3">
        <Row>
          <Col xs="0" sm="0" md="5" lg="3" className="user-one-tabs">
            <Teachertabs />
          </Col>

          <Col xs="12" sm="12" md="7" lg="8" style={{ direction: 'rtl' }}>
            <Row className="d-flex justify-content-center text-center mt-5">
              <Col xs="6">
                <MidTitle txt="My Profile" />
              </Col>
            </Row>

             {
              isuser && loading? (<>
             <Row className="d-flex justify-content-center text-center">
              <Col xs="6">
                {userData.profile_img ? (
                  <Figure>
                    <Figure.Image
                      width={125}
                      height={125}
                      alt="Profile Image"
                      src={`data:image/*;base64,${userData.profile_img}`}
                      roundedCircle
                    />
                  </Figure>
                ) : (
                  <ImageChooser handleSelect={() => {}} />
                )}
              </Col>
            </Row>
            <Row className="d-flex justify-content-center text-center">
              <Col
                xs="6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '7px',
                  fontSize: '16px',
                  fontWeight: 'medium',
                  color: 'white',
                  height: '47px',
                  width: '154px',
                  backgroundColor: '#2405f2',
                }}
              >
                <div>{userData.role}</div>
              </Col>
            </Row>

            <Row className="d-flex justify-content-center text-center mt-5">
              <Col
                xs="6"
                sm="5"
                className="d-flex justify-content-center align-items-center"
              >
                <input
                  style={{ width: '100%' }}
                  className="inputfield-userprofile"
                  placeholder={userData.name}
                  readOnly
                />
              </Col>
              <Col
                xs="1"
                sm="2"
                className="d-flex justify-content-start align-items-start py-2"
                style={{
                  fontWeight: '600',
                  fontSize: '29px',
                  color: '#282938',
                }}
              >
                name
              </Col>
            </Row>

            <Row className="d-flex justify-content-center text-center mt-0">
              <Col
                xs="6"
                sm="5"
                className="d-flex justify-content-center align-items-center"
              >
                <input
                  style={{ width: '100%' }}
                  className="inputfield-userprofile"
                  placeholder={userData.email}
                  readOnly
                />
              </Col>
              <Col
                xs="1"
                sm="2"
                className="d-flex justify-content-start align-items-start py-2"
                style={{
                  fontWeight: '600',
                  fontSize: '29px',
                  color: '#282938',
                }}
              >
                email
              </Col>
            </Row>

            <Row className="d-flex justify-content-center text-center mt-0">
              <Col
                xs="6"
                sm="5"
                className="d-flex justify-content-center align-items-center"
              >
                <input
                  className="inputfield-userprofile"
                  placeholder={userData.phone}
                  readOnly
                />
              </Col>
              <Col
                xs="1"
                sm="2"
                className="d-flex justify-content-start align-items-start py-2"
                style={{
                  fontWeight: '600',
                  fontSize: '29px',
                  color: '#282938',
                }}
              >
                phone
              </Col>
            </Row>
            <Row className="d-flex justify-content-center text-center mt-0">
              <Col
                xs="6"
                sm="5"
                className="d-flex justify-content-center align-items-center"
              >
                <input
                  className="inputfield-userprofile"
                  placeholder={userData.city}
                  readOnly
                />
              </Col>
              <Col
                xs="1"
                sm="2"
                className="d-flex justify-content-start align-items-start"
                style={{
                  fontWeight: '600',
                  fontSize: '29px',
                  color: '#282938',
                }}
              >
                city
              </Col>
            </Row> 
              </>):<div   style={{ fontSize: '20px' }}
              className="d-flex justify-content-center mb-2 fw-bold">Login Again</div>
             }
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default TeacherProfile;
