import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Place({ data }) {
  const limitText = (text, limit) => {
    const words = text.split(' ');

    return words.slice(0, limit).join(' ') + '...';
  };

  const history = useNavigate();

  const handleClick = () => {
    history(`/hall-details`, { state: { hallData: data } });
  };

  const { t, i18n } = useTranslation();
  return (
    <Card
      style={{ width: '12rem', height: '18rem', fontFamily: 'cairo' }}
      onClick={handleClick}
      className="mb-3"
    >
      <Card.Img
        variant="top"
        style={{ Width: '100%', height: '11rem', position: 'fit-content' }}
        src={`data:image/*;base64,${data.imageCoverData}`}
      />

      <span
        style={{
          position: 'absolute',
          top: '155px',
          right: '10px',
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
            {data.rate.sumstar && data.rate.numstar
              ? (data.rate.sumstar / data.rate.numstar).toFixed(1)
              : '0.0'}
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
        {data.city ? (
          i18n.language === 'en' ? (
            data.city.split('-')[0]
          ) : (
            <div>{data.city.split('-')[1]}</div>
          )
        ) : (
          ''
        )}

        <Card.Text
          style={{
            fontSize: '20px',
            fontWeight: '400',
            color: '#28293899',
            lineHeight: '150%',
            overflow: 'hidden',
          }}
        >
          {limitText(data.details, 7)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Place;
