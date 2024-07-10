import React, { useEffect, useState } from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col, Row, Spinner } from 'react-bootstrap';
import MidTitle from '../../compenents/global/widgets/midtitle';
import Place from '../../compenents/global/widgets/place';
import GetUserHallsHook from '../../hooks/hall/getUserHallsHook';
import PaginationComponent from '../../compenents/global/pagination';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';
import Ownertabs from '../../compenents/user/OwnerTaps';

function UserPlaces() {
  const [isuser, _isadmin, _userData] = ProtectedRouteHook();
  const [halls, loading] = GetUserHallsHook();

  const [pageNumberLimit, setPageNumberLimit] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, _setitemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const updatedItems = halls.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(updatedItems);
  }, [halls, indexOfFirstItem, indexOfLastItem]);

  useEffect(() => {
    if (halls.length > 0) {
      const pages = [];

      for (let i = 1; i <= Math.ceil(halls.length / itemsPerPage); i++) {
        pages.push(i);
      }
      setPageNumberLimit(pages.length);
    }
  }, [halls]);

  const handlePageClick = (num) => {
    setcurrentPage(num);
  };

  return (
    <div>
      <NavBar />

      <Row>
        <Col xs="0" sm="0" md="5" lg="3" className="user-one-tabs">
          <Ownertabs />
        </Col>

        <Col xs="12" sm="12" md="7" lg="8" style={{ direction: 'ltr' }}>
          <Row className="mt-5">
            <MidTitle txt={'My Places'} />
          </Row>

          {loading === true && halls.length == 0 && (
                  <div
                    style={{ fontSize: '30px' }}
                    className="d-flex justify-content-center mb-2 fw-bold"
                  >
                    No Places Yet
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
          {isuser ? (
            <Row className="mt-5 mx-3 px-lg-5 px-md-5">
              {currentItems.map((info, index) => (
                <Col xs="12" sm="6" md="12" lg="4" key={index}>
                  <Place data={info} />
                </Col>
              ))}

              <PaginationComponent
                pageCount={pageNumberLimit}
                handlePageClick={handlePageClick}
              />
            </Row>
          ) : (
            ''
            // <div
            //   style={{ fontSize: '20px' }}
            //   className="d-flex justify-content-center mb-2 fw-bold"
            // >
            //   Login Again To See The Places
            // </div>
          )}
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
export default UserPlaces;
