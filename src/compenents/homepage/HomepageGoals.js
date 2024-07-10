import React from 'react';
import Goal from './widget/Goal';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function HomepageGoals() {
  const { t, i18n } = useTranslation();

  const goalsData = [
    {
      title: t('homepageGoals.availability.title'),
      txt: t('homepageGoals.availability.txt'),
      num: '1',
    },
    {
      title: t('homepageGoals.usability.title'),
      txt: t('homepageGoals.usability.txt'),
      num: '2',
    },
    {
      title: t('homepageGoals.helpness.title'),
      txt: t('homepageGoals.helpness.txt'),
      num: '3',
    },
  ];

  return (
    <div>
      <Row
        style={{
          fontFamily: i18n.language === 'en' ? 'Poppins' : 'Cairo',
          direction: i18n.language == 'en' ? 'ltr' : 'rtl',
        }}
        className="d-flex justify-content-center"
      >
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
