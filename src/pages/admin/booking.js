
import React, { useEffect ,useState} from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col, Container, Row,Spinner} from 'react-bootstrap';
import Banner from '../../compenents/global/widgets/banner';
import GetAdminHallsHook from '../../hooks/admin/hall/getAdminHallsHook';
import AdminBookingInfoHook from '../../hooks/book/adminbookinginfoHook';
import { useTranslation } from 'react-i18next';
import Admintabs from '../../compenents/user/UserTap';
import PaginationComponent from '../../compenents/global/pagination';
import BookingInfo from '../../compenents/admin/hall/BookingInfo';


function AdminBooking() {

  const [bookinginfo,loading,searchforbookingplaceowner,searchforbookingteacher] = AdminBookingInfoHook();
  const { t } = useTranslation();

  const [pageNumberLimit, setPageNumberLimit] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, _setitemsPerPage] = useState(3);
  const [searchTermTeacher, setSearchTermTeacher] = useState('');
  const [searchTermPlaceOwner, setSearchTermPlacwOwner] = useState('');

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const updatedItems = bookinginfo.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(updatedItems);
  }, [bookinginfo, indexOfFirstItem, indexOfLastItem]);

  useEffect(() => {
    if (bookinginfo.length > 0) {
      const pages = [];

      for (let i = 1; i <= Math.ceil(bookinginfo.length / itemsPerPage); i++) {
        pages.push(i);
      }
      setPageNumberLimit(pages.length);
    }
  }, [bookinginfo]);

  const handlePageClick = (num) => {
    setcurrentPage(num);
  };

  const handleSearchPlaceOwnerChange= (e) => {
    setSearchTermPlacwOwner(e.target.value);
    searchforbookingplaceowner(e.target.value);
    setcurrentPage(1); // Reset to first page after search
  };

  const handleSearchTeacherChange= (e) => {
    setSearchTermTeacher(e.target.value);
    searchforbookingteacher(e.target.value);
    setcurrentPage(1); // Reset to first page after search
  };


  return (
    <div>
      <NavBar />
      <Banner txt={t('halls.home')} />
      <Row>
        <Col xs="0" sm="0" md="5" lg="4" className="user-one-tabs">
          <Admintabs admin={true}/>
        </Col>

        <Col xs="12" sm="12" md="6" lg="8" style={{ direction: 'ltr',backgroundColor:'white' }}>
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

      <Row
        xs="12" 
        className="d-flex justify-content-center"
      >
        <input
          value={searchTermPlaceOwner}
          className="hall-search-input"
          placeholder="Search for Place Owner By Email"
          onChange={handleSearchPlaceOwnerChange}
        />
      
      </Row>
        
    
        <Container className="mt-5">
              
              <Row className="d-flex justify-content-center px-5">
                
                {loading === true && bookinginfo.length == 0 && (
                  <div
                    style={{ fontSize: '30px' }}
                    className="d-flex justify-content-center mb-2 fw-bold"
                  >
                    No Halls Yet
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
                {currentItems.length > 0 &&
                  currentItems.map((data, i) => (
                         <BookingInfo data={data}/>
                  ))}
              </Row>
              <PaginationComponent
                pageCount={pageNumberLimit}
                handlePageClick={handlePageClick}
              />
            </Container>
   
        </Col>
      </Row>

      <Footer />
    </div>
  );
  
}
export default AdminBooking;

