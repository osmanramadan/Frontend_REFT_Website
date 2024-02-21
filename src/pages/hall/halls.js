import React from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col, Container, Row } from 'react-bootstrap';
import Place from '../../compenents/global/widgets/place';
import Banner from '../../compenents/global/widgets/banner';
import PaginationComponent from '../../compenents/global/pagination';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';

function Halls() {
  const [isuser, isadmin, data] = ProtectedRouteHook();
  const Data = [
    {
      city: 'Cairo',
      txt: 'The owner of the place can share the geographical location of the place, upload pictures of the rooms he wants to rent, and also determine the appropriate financial cost for one hour of rent.',
      num: '1',
    },
    {
      city: 'Damietta',
      txt: 'The owner of the place determines the number of rooms he wants to share on the site and also determines the number of hours during which he wants the rent to be made',
      num: '2',
    },
    {
      city: 'Mansora',
      txt: 'The site helps the teacher by showing him the nearest geographical places The teacher can also search for available places and hours in any city he wants to search for',
      num: '3',
    },
    {
      city: 'Mansora',
      txt: 'The site helps the teacher by showing him the nearest geographical places The teacher can also search for available places and hours in any city he wants to search for',
      num: '3',
    },
    {
      city: 'Mansora',
      txt: 'The site helps the teacher by showing him the nearest geographical places The teacher can also search for available places and hours in any city he wants to search for',
      num: '3',
    },
    {
      city: 'Mansora',
      txt: 'The site helps the teacher by showing him the nearest geographical places The teacher can also search for available places and hours in any city he wants to search for',
      num: '3',
    },
    {
      city: 'Mansora',
      txt: 'The site helps the teacher by showing him the nearest geographical places The teacher can also search for available places and hours in any city he wants to search for',
      num: '3',
    },
  ];
  return (
    <div>
      <NavBar />
      <Banner txt={isuser ? 'Home > Places' : 'Home  > Admin >  Places'} />

      <Row
        xs="12"
        className="d-flex justify-content-center"
        style={{ marginTop: '105px', marginBottom: '110px' }}
      >
        <input
          className="hall-search-input"
          placeholder="Write your location"
        />
      </Row>

      <Container className="mt-5">
        <Row className="d-flex justify-content-between px-5">
          {Data.map((info, index) => (
            <Col xs="12" sm="12" md="6" lg="4" className="mb-3" key={index}>
              <Place data={info} />
            </Col>
          ))}
        </Row>
        <PaginationComponent pageCount={8} handlePageClick={() => {}} />
      </Container>

      <Footer />
    </div>
  );
}
export default Halls;
