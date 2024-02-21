import React from 'react';
import place from '../../../assets/images/place.png';
import { Card, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Place({ data }) {
  const limitText = (text, limit) => {
    const words = text.split(' ');
    return words.slice(0, limit).join(' ') + '...';
  };

  return (
    <Link to="/hall-details" className="link">
      <Card style={{ width: '18rem' }} className="mb-3">
        <Card.Img variant="top" style={{ height: '180px' }} src={place} />

        <span
          style={{
            position: 'absolute',
            top: '155px',
            right: '0px',
            backgroundColor: '#1c1e53',
            borderRadius: '41%',
            padding: '5px',
            height: '24px',
            width: '43px',
          }}
        >
          <Row className="d-flex justify-content-between">
            <span
              style={{ color: 'white', fontSize: '10px', fontWeight: 'medium' }}
              className="mx-3"
            >
              3.9
            </span>
            <FontAwesomeIcon
              icon={faStar}
              style={{
                position: 'absolute',
                top: '7px',
                height: '11px',
                width: '11px',
                color: '#fcd980',
              }}
            />
          </Row>
        </span>

        <Card.Body>
          <Card.Title
            style={{
              fontSize: '24px',
              fontWeight: 'medium',
            }}
          >
            {data.city}
          </Card.Title>
          <Card.Text
            style={{
              fontSize: '20px',
              fontWeight: '400',
              color: '#28293899',
              lineHeight: '150%',
            }}
          >
            {limitText(data.txt, 10)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Place;
