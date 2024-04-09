import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Place from '../global/widgets/place';
import GetUserHallsHook from '../../hooks/hall/getUserHallsHook';

function HomepageHighlyRatedPlaces() {

  const  [data, loading]=GetUserHallsHook();


  return (
    <Row className="px-2" style={{ marginLeft: '70px' }}>
      {data.map((info, index) => (
        <Col xs="12" sm="12" md="6" lg="4" className="mb-3" key={index}>
          {index<3?<Place data={info} />:''}
        </Col>
      ))}
    </Row>
  );
}

export default HomepageHighlyRatedPlaces;
