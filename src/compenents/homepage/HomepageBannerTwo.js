import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; // Importing useTranslation hook
import banner from '../../../src/assets/images/bannertwo.png';

function HomepageBannerTwo() {

  const { t , i18n} = useTranslation();

  return (
    <Row className="mb-3" style={{fontFamily:i18n.language=='en'?'Poppins':'Cairo', 'direction':i18n.language=='en'?'ltr':'rtl'}}>
      <Col xs="12" md="12" lg="6" className={i18n.language=='ar'?"text-end d-flex align-items-start":'text-start d-flex justify-content-center align-items-end'}>
        <div className={i18n.language=='en'?"mb-1 mb-md-5 text-start":"mb-1 mb-md-5 text-center"} >
          <div
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              letterSpacing: '0.8%',
              lineHeight: '150%',
              marginBottom: '20px',
            }}
          >
            {t('homepageBannerTwo.title')}
          </div>

          <div
            style={{
              fontSize: '20px',
              fontWeight:'600',
              width: '90%',
              color: '#28293899',
              marginBottom: '30px',
            }}
          
          >
            {t('homepageBannerTwo.description')}
          </div>
        </div>
      </Col>

      <Col
        xs="12"
        md="12"
        lg="6"
        className="text-lg-end text-sm-start text-start"
      >
        <div style={{ width: '100%', height: '90%' }}>
          <img
            alt="image"
            src={banner}
            style={{ height: '90%', width: '95%', borderRadius: '13px' }}
          />
        </div>
      </Col>
    </Row>
  );
}

export default HomepageBannerTwo;
