import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Place from '../global/widgets/place';

function HomepageHighlyRatedPlaces() {
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
  ];

  return (
    <Row className="px-2" style={{ marginLeft: '70px' }}>
      {Data.map((info, index) => (
        <Col xs="12" sm="12" md="6" lg="4" className="mb-3" key={index}>
          <Place data={info} />
        </Col>
      ))}
    </Row>
  );
}

export default HomepageHighlyRatedPlaces;
