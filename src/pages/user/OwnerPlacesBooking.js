import React, { useEffect, useState } from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col, Row, Spinner } from 'react-bootstrap';
import UserTabs from '../../compenents/user/TeacherTaps';
import MidTitle from '../../compenents/global/widgets/midtitle';
import PaginationComponent from '../../compenents/global/pagination';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';
import OwnerBookingInfoHook from '../../hooks/book/ownerbookinginfoHook';
import BookingInfo from '../../compenents/user/bookinginfo';
import Ownertabs from '../../compenents/user/OwnerTaps';

function OwnerPlacesBooking() {


  const [isuser, _isadmin, _userData] = ProtectedRouteHook();
  const [data,loading,searchforbookingteacher]=OwnerBookingInfoHook()

  const [searchTermTeacher, setSearchTermTeacher] = useState('');

  

  const [pageNumberLimit, setPageNumberLimit] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, _setitemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const updatedItems = data.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(updatedItems);
  }, [data, indexOfFirstItem, indexOfLastItem]);

  useEffect(() => {
    if (data.length > 0) {
      const pages = [];

      for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
      }
      setPageNumberLimit(pages.length);
    }
  }, [data]);

  const handlePageClick = (num) => {
    setcurrentPage(num);
  };

  const handleSearchTeacherChange= (e) => {
    setSearchTermTeacher(e.target.value);
    searchforbookingteacher(e.target.value);
    setcurrentPage(1); // Reset to first page after search
  };


  return (
    <div>
      <NavBar />

      <Row>
        <Col xs="0" sm="0" md="5" lg="3" className="user-one-tabs">
        <Ownertabs/>
        </Col>

        <Col xs="12" sm="12" md="7" lg="8" style={{ direction: 'ltr' }}>
        <Row
        xs="12" 
        className="d-flex justify-content-center"
      >
        <input
          value={searchTermTeacher}
          className="hall-search-input mt-5"
          placeholder="Search for Teacher By Email"
          onChange={handleSearchTeacherChange}
        />
      </Row>

       {isuser?(   <Row className="mt-5 mx-3 px-lg-5 px-md-5">
          {loading === true && data.length == 0 && (
                  <div
                    style={{ fontSize: '30px' }}
                    className="d-flex justify-content-center mb-2 fw-bold"
                  >
                    No Booking Yet
                  </div>
                )}
                {loading === false ? (
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
            {currentItems.map((info, index) => (
              
                 <BookingInfo data={info}/>
              
            ))}

            <PaginationComponent
              pageCount={pageNumberLimit}
              handlePageClick={handlePageClick}
            />
          </Row>):(<div   style={{ fontSize: '20px' }}
              className="d-flex justify-content-center mb-2 fw-bold">Login Again To See The Booking</div>)}
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
export default OwnerPlacesBooking;
