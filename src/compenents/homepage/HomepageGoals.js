import React from 'react';
import Goal from './widget/Goal';
import { Col, Row } from 'react-bootstrap';

function HomepageGoals() {
  const goalsData = [
    {
      title: 'Availability',
      txt: 'The owner of the place can share the geographical location of the place, upload pictures of the rooms he wants to rent, and also determine the appropriate financial cost for one hour of rent.',
      num: '1',
    },
    {
      title: 'Usability',
      txt: 'The owner of the place determines the number of rooms he wants to share on the site and also determines the number of hours during which he wants the rent to be made',
      num: '2',
    },
    {
      title: 'Helpness',
      txt: 'The site helps the teacher by showing him the nearest geographical places The teacher can also search for available places and hours in any city he wants to search for',
      num: '3',
    },
  ];

  return (
    <div>
      <Row className="d-flex justify-content-center">
        {goalsData.map((goal, index) => (
          <Col xs="12" sm="6" md="4" lg="4" key={index} className="mb-3">
            <Goal title={goal.title} txt={goal.txt} num={goal.num} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomepageGoals;
