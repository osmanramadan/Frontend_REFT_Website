import React, { useEffect, useState } from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Message from '../../compenents/global/widgets/message';
import Banner from '../../compenents/global/widgets/banner';
import PaginationComponent from '../../compenents/global/pagination';
import GetMessagesHook from '../../hooks/admin/message/getMessagesHook';
import Admintabs from '../../compenents/admin/AdminTaps';

function AdminMessages() {
  const [messages, loading] = GetMessagesHook();

  const [pageNumberLimit, setPageNumberLimit] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, _setitemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const updatedItems = messages.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(updatedItems);
  }, [messages, indexOfFirstItem, indexOfLastItem]);

  useEffect(() => {
    if (messages.length > 0) {
      const pages = [];

      for (let i = 1; i <= Math.ceil(messages.length / itemsPerPage); i++) {
        pages.push(i);
      }
      setPageNumberLimit(pages.length);
    }
  }, [messages]);

  const handlePageClick = (num) => {
    setcurrentPage(num);
  };

  return (
    <div>
      <NavBar />
      <Banner txt={'Home > Admin > Messages'} />

      <Row>
        <Col xs="0" sm="0" md="5" lg="4" className="user-one-tabs">
          <Admintabs />
        </Col>

        <Col xs="12" sm="12" md="7" lg="8" style={{ direction: 'ltr' }}>
          <Container className="mt-5">
            <Row className="d-flex justify-content-center px-5">
              {loading === true && currentItems.length == 0 && (
                <div
                  style={{ fontSize: '30px' }}
                  className="d-flex justify-content-center mb-2 fw-bold"
                >
                  No Messages Yet
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
                  <Col xs={12} sm={12} md="6" lg="4" className="mb-3" key={i}>
                    <Message key={i} data={data} />
                  </Col>
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
export default AdminMessages;
