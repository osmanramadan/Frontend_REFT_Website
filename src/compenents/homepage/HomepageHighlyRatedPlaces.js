import React from 'react';
import { Col, Row } from 'react-bootstrap';
import GetHighlyRatedHalls from '../../hooks/hall/getHighlyRatedHalls';
import Place from '../global/widgets/place';

function HomepageHighlyRatedPlaces() {
  const [data, _loading] = GetHighlyRatedHalls();

  return (
    <Row
      className="d-flex justify-content-center align-items-spacebetween mb-3"
      style={{ marginLeft: '70px' }}
    >
      {data.map((data, i) =>
        i < 4 ? (
          <Col
            xs="12"
            sm="6"
            md="4"
            lg="3"
            className="d-flex justify-content-center align-items-spacebetween"
            key={i}
          >
            <Place key={i} data={data} />
          </Col>
        ) : (
          ''
        ),
      )}
    </Row>
  );
}

export default HomepageHighlyRatedPlaces;
