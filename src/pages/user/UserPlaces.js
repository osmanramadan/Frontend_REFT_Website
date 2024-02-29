import React, { useEffect, useState } from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col, Row } from 'react-bootstrap';
import UserTabs from '../../compenents/user/UserTap';
import MidTitle from '../../compenents/global/widgets/midtitle';
import Place from '../../compenents/global/widgets/place';
import GetUserHallsHook from '../../hooks/hall/getUserHallsHook';
import PaginationComponent from '../../compenents/global/pagination';

function UserPlaces() {
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
        <Col xs="0" sm="0" md="5" lg="4" className="user-one-tabs">
          <UserTabs />
        </Col>

        <Col xs="12" sm="12" md="7" lg="8" style={{ direction: 'ltr' }}>
          <Row className="mt-5">
            <MidTitle txt={'My Places'} />
          </Row>
          <Row className="mt-5 mx-3 px-lg-5 px-md-5">
            {currentItems.map((info, index) => (
              <Col xs="12" sm="6" md="12" lg="6" key={index}>
                <Place data={info} />
              </Col>
            ))}

            <PaginationComponent
              pageCount={pageNumberLimit}
              handlePageClick={handlePageClick}
            />
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
export default UserPlaces;
