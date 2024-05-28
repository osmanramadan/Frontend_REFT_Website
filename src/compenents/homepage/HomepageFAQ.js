import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Faq from 'react-faq-component';
import { useTranslation } from 'react-i18next';

function HomepageFAQ() {
  const { t ,i18n} = useTranslation();

  const data = {
    rows: [
      {
        title: (
          <div
          style={{'fontFamily':i18n.language==='en'?'Poppins':'Cairo',
              fontSize: '24px',
              fontWeight: 'medium',
              color: '#282938',
              fontWeight:'900'
            }}
          >
            <span className="mx-3" style={{fontWeight:'900' ,color: '#2405f2' }}>
              01
            </span>{' '}
            {t('homepageFAQ.faq1.question')}
          </div>
        ),
        content: (
          <div
          style={{'fontFamily':i18n.language==='en'?'Poppins':'Cairo',
              marginLeft: '70px',
              fontSize: '18px',
              lineHeight: '32px',
              fontWeight: 'medium',
              color: '#818181',
            }}
          >
            {t('homepageFAQ.faq1.answer')}
          </div>
        ),
      },
      {
        title: (
          <div
            style={{
              fontFamily:i18n.language==='en'?'Poppins':'Cairo',
              fontSize: '24px',
              fontWeight: 'medium',
              color: '#282938',
              fontWeight:'900'
            }}
          >
            <span className="mx-3" style={{ fontWeight:'900',color: '#5b44f6' }}>
              02
            </span>{' '}
            {t('homepageFAQ.faq2.question')}
          </div>
        ),
        content: (
          <div
            style={{
              marginLeft: '70px',
              fontFamily: 'Poppins',
              fontSize: '18px',
              lineHeight: '32px',
              fontWeight: 'medium',
              color: '#818181',
            }}
          >
            {t('homepageFAQ.faq2.answer')}
          </div>
        ),
      },
      {
        title: (
          <div
          style={{'fontFamily':i18n.language==='en'?'Poppins':'Cairo',
              fontSize: '24px',
              fontWeight: 'medium',
              color: '#282938',
              fontWeight:'900'
            }}
          >
            <span className="mx-3" style={{ fontWeight:'900',color: '#2405f2' }}>
              03
            </span>{' '}
            {t('homepageFAQ.faq3.question')}
          </div>
        ),
        content: (
          <div
            style={{
              marginLeft: '70px',
              fontFamily:i18n.language==='en'?'Poppins':'Cairo',
              fontSize: '18px',
              lineHeight: '32px',
              fontWeight: 'medium',
              color: '#818181',
            }}
          >
            {t('homepageFAQ.faq3.answer')}
          </div>
        ),
      },
    ],
  };

  const config = {
    animate: true,
    arrowIcon: 'V',
    openOnload: 0,
    expandIcon: '+',
    collapseIcon: 'x',
  };

  return (
    <div className="mt-5 mb-5" style={{direction:i18n.language=='en'?'ltr':'rtl'}}>
      <Row className="d-flex justify-content-center" xs="12">
        <Col xs="12" md="6" lg="4">
          <div
             style={{'fontFamily':i18n.language==='en'?'Poppins':'Cairo', fontSize: '28px', fontWeight: 'bold', color: '#282938' }}
            className="mt-2"
          >
            {t('homepageFAQ.title')}
          </div>
        </Col>
        <Col xs="12" md="6" lg="8">
          <Faq data={data} config={config} />
        </Col>
      </Row>
    </div>
  );
}

export default HomepageFAQ;
