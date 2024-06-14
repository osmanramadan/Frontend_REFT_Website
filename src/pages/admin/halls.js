// import React, { useEffect, useState } from 'react';
// import NavBar from '../../compenents/global/navbar';
// import Footer from '../../compenents/global/footer';
// import { Col, Container, Row, Spinner } from 'react-bootstrap';
// import Place from '../../compenents/global/widgets/place';
// import Banner from '../../compenents/global/widgets/banner';
// import PaginationComponent from '../../compenents/global/pagination';
// import GetAdminHallsHook from '../../hooks/admin/hall/getAdminHallsHook';
// import { useTranslation } from 'react-i18next';
// import Admintabs from '../../compenents/user/UserTap';


// function AdminHalls() {
//   const [halls, loading, setSearch, search, searchHalls] = GetAdminHallsHook();
//   const { t } = useTranslation();

//   const [pageNumberLimit, setPageNumberLimit] = useState(0);
//   const [currentPage, setcurrentPage] = useState(1);
//   const [itemsPerPage, _setitemsPerPage] = useState(3);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const [currentItems, setCurrentItems] = useState([]);

//   useEffect(() => {
//     const updatedItems = halls.slice(indexOfFirstItem, indexOfLastItem);
//     setCurrentItems(updatedItems);
//   }, [halls, indexOfFirstItem, indexOfLastItem]);

//   useEffect(() => {
//     if (halls.length > 0) {
//       const pages = [];

//       for (let i = 1; i <= Math.ceil(halls.length / itemsPerPage); i++) {
//         pages.push(i);
//       }
//       setPageNumberLimit(pages.length);
//     }
//   }, [halls]);

//   const handlePageClick = (num) => {
//     setcurrentPage(num);
//   };

//   const search_in_halls = (e) => {
//     if (e.target.value === '') {
//       location.reload();
//     }

//     setSearch(e.target.value);
//     searchHalls();
//   };

//   return (
//     <div>
//       <NavBar />
//       <Banner txt={t('halls.home')} />
//       {/* <Col xs="0" sm="0" md="5" lg="4" className="user-one-tabs">
//           <Admintabs/>
//         </Col> */}
      

//       <Row
//         xs="12" 
//         className="d-flex justify-content-center"
//         style={{ marginTop: '105px', marginBottom: '110px' }}
//       >
//         <input
//           value={search}
//           className="hall-search-input"
//           placeholder="Write your location"
//           onChange={search_in_halls}
//         />
      
//       </Row>
    
//       <Container className="mt-5">
              
//         <Row className="d-flex justify-content-center px-5">
          
//           {loading === true && currentItems.length == 0 && (
//             <div
//               style={{ fontSize: '30px' }}
//               className="d-flex justify-content-center mb-2 fw-bold"
//             >
//               No Halls Yet
//             </div>
//           )}
//           {loading === false ? (
//             <div className="d-flex justify-content-center mb-2">
//               <Spinner
//                 style={{ color: '#fcd980', marginLeft: '5px' }}
//                 as="span"
//                 animation="grow"
//                 size="sm"
//                 role="status"
//                 aria-hidden="true"
//               />

//               <Spinner
//                 style={{ color: '#fcd980', marginLeft: '5px' }}
//                 as="span"
//                 animation="grow"
//                 size="sm"
//                 role="status"
//                 aria-hidden="true"
//               />

//               <Spinner
//                 style={{ color: '#fcd980', marginLeft: '5px' }}
//                 as="span"
//                 animation="grow"
//                 size="sm"
//                 role="status"
//                 aria-hidden="true"
//               />
//             </div>
//           ) : (
//             ''
//           )}
//           {currentItems.length > 0 &&
//             currentItems.map((data, i) => (
//               <Col xs={12} sm={12} md="6" lg="4" className="mb-3" key={i}>
//                 <Place key={i} data={data} />
//               </Col>
//             ))}
//         </Row>
//         <PaginationComponent
//           pageCount={pageNumberLimit}
//           handlePageClick={handlePageClick}
//         />
//       </Container>

//       <Footer />
//     </div>
//   );
// }
// export default AdminHalls;
import React, { useEffect, useState } from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Place from '../../compenents/global/widgets/place';
import Banner from '../../compenents/global/widgets/banner';
import PaginationComponent from '../../compenents/global/pagination';
import GetAdminHallsHook from '../../hooks/admin/hall/getAdminHallsHook';
import { useTranslation } from 'react-i18next';
import Admintabs from '../../compenents/user/UserTap';


function AdminHalls() {
  const [halls, loading, setSearch, search, searchHalls] = GetAdminHallsHook();
  const { t } = useTranslation();

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

  const search_in_halls = (e) => {
    if (e.target.value === '') {
      location.reload();
    }

    setSearch(e.target.value);
    searchHalls();
  };

  return (
    <div>
      <NavBar />
      <Banner txt={t('halls.home')} />
      <Row>
        <Col xs="0" sm="0" md="5" lg="4" className="user-one-tabs">
          <Admintabs admin={true}/>
        </Col>

        <Col xs="12" sm="12" md="7" lg="8" style={{ direction: 'ltr' }}>
          <Row
        xs="12" 
        className="d-flex justify-content-center"
        style={{ marginTop: '105px', marginBottom: '110px' }}
      >
        <input
          value={search}
          className="hall-search-input"
          placeholder="Write your location"
          onChange={search_in_halls}
        />
      
      </Row>
    
      <Container className="mt-5">
              
        <Row className="d-flex justify-content-center px-5">
          
          {loading === true && currentItems.length == 0 && (
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
              <Col xs={12} sm={12} md="6" lg="4" className="mb-3" key={i}>
                <Place key={i} data={data} />
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
export default AdminHalls;
