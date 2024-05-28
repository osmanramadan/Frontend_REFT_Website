import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t ,i18n} = useTranslation();
  return (
    <div className="footer" style={{ fontWeight:i18n.language=='en'?'':'bold',fontFamily:i18n.language=='en'?'Poppins':'Cairo'}}>
      <Container>
        <Row
          style={{
            direction:i18n.language=='en'?'ltr':'rtl',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
          
        >
          REFT
        </Row>
        <Row
          style={{fontFamily:i18n.language=='en'?'Poppins':'Cairo',
            fontSize: '16px',
            fontWeight: 'medium',
            direction:i18n.language=='en'?'ltr':'rtl',
          }}
        >
          {t('footer.rateYourPlace')}
        </Row>

        <Row className="d-flex  justify-content-center  mt-3">
          <Col xs="12" sm="6" md="2">
            <Link to={'/contact-us'} className="link mx-1 mb-xs-1">
            {t('footer.contactUs')}
            </Link>
          </Col>
          <Col xs="12" sm="6" md="2">
            <Link to={'/about-us'} className="link mx-1 mb-xs-1">
            {t('footer.aboutUs')}
            </Link>
          </Col>
          <Col xs="12" sm="6" md="2">
            <Link to={'/places'} className="link mx-1 mb-xs-1">
            {t('footer.ourPlaces')}
            </Link>
          </Col>

          <Col xs="12" sm="6" md="2">
            <Link to={'/terms'} className="link mx-1 mb-xs-1">{t('footer.termsAndConditions')}</Link>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs="12" sm="12" md="6" lg="6">
            <div
              className="footer-contact"
              style={{
                backgroundColor: '#fcd980',
                width: '360px',
                height: 'auto',
                padding: '6px',
                borderRadius: '5px',
              }}
            >
              <Row>
                
                <Col
                  xs="6"
                  className="mt-1 mx-1 text-start"
                  style={{
                    color: '#282938',
                    
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                {t('footer.email')}
                </Col>
                <Col
                  className="mt-1  text-start"
                  style={{
                    color: '#282938',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  {t('footer.telephone')}
                </Col>
              </Row>

              <Row>
                <Col
                  xs="6"
                  className="mb-2 mx-1"
                  style={{
                    color: '#4F4A45',
                    fontSize: '16',
                    fontWeight: 'none',
                  }}
                >
                  osman@osman.com
                </Col>
                <Col
                  className="mb-2"
                  style={{
                    color:'#4F4A45',
     
                    fontSize: '16',
                    fontWeight: 'none',
                  }}
                >
                  010898898887
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6">
            <Row className="text-end mx-4 mt-4">
              <Col xs="6" md="3" className='mt-2'>
                {' '}
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="mb-xs-2 mx-3"
                  style={{ color: 'white', height: '30px', width: '30px' }}
                />
              </Col>
              <Col xs="6" md="3" className='mt-2'>
                {' '}
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="mb-xs-2 mx-3"
                  style={{
                    color: '#1C1E53',
                    borderRadius: '50%',
                    height: '30px',
                    width: '30px',
                    backgroundColor: 'white',
                  }}
                />
              </Col>
              <Col xs="6" md="3" className='mt-2'>
                {' '}
                <FontAwesomeIcon
                  className="mb-xs-2 mx-3"
                  icon={faTwitter}
                  style={{ color: 'white', height: '30px', width: '30px' }}
                />
              </Col>
              <Col xs="6" md="3" className='mt-2'>
                {' '}
                <FontAwesomeIcon
                  className="mb-xs-2 mx-3"
                  icon={faLinkedinIn}
                  style={{
                    color: '#1C1E53',
                    height: '30px',
                    width: '30px',
                    backgroundColor: 'white',
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
