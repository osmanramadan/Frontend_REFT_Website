import React from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import UserTabs from '../../compenents/user/UserTap';
import MidTitle from '../../compenents/global/widgets/midtitle';
import ImageChooser from '../../compenents/user/ImageChooser';
import osman from '../../assets/images/24.png';
import Place from '../../compenents/global/widgets/place';

function UserPlaces() {
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

      <Row>
        <Col xs="0" sm="0" md="5" lg="4" className="user-one-tabs">
          <UserTabs />
        </Col>

        <Col xs="12" sm="12" md="7" lg="8" style={{ direction: 'rtl' }}>
          <Row className="mt-5">
            <MidTitle txt={'My Places'} />
          </Row>
          <Row className="mt-5 px-lg-5 px-md-5">
            {Data.map((info, index) => (
              <Col xs="12" sm="6" md="12" lg="6" key={index}>
                <Place data={info} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
export default UserPlaces;
