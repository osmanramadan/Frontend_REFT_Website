import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import banner from '../../assets/images/banner.png';
import BannerButton from './widget/BannerButton';

function HomepageBanner() {
  const { t, i18n } = useTranslation();

  return (
    <div className="homePage-Banner">
      <Container>
        <Row style={{ height: '100%', width: '100%' }}>
          <Col
            xs="12"
            md="12"
            lg="5"
            className={i18n.language == 'en' ? '' : 'mt-5 text-center'}
          >
            <div
              style={{
                fontFamily: i18n.language == 'en' ? 'Poppins' : 'Cairo',
              }}
              className={i18n.language == 'en' ? 'p-2 txt-1' : 'p-1 txt-1'}
            >
              {t('homepageBanner.title')}
            </div>

            <div
              style={{
                fontFamily: i18n.language == 'en' ? 'Poppins' : 'Cairo',
              }}
              className={i18n.language == 'en' ? 'p-2 txt-2' : 'p-2 txt-2 fs-4'}
            >
              {t('homepageBanner.description')}
            </div>

            {i18n.language === 'ar' ? (
              <div className="d-flex justify-content-center">
                <BannerButton txt={t('homepageBanner.buttonText')} />{' '}
              </div>
            ) : (
              <div className="d-flex justify-content-xs-center">
                <BannerButton txt={t('homepageBanner.buttonText')} />{' '}
              </div>
            )}
          </Col>

          <Col xs="12" md="12" lg="7" className="text-center">
            <div style={{ height: '100%', width: '100%' }} className="mx-3">
              <img
                src={banner}
                style={{
                  height: '100%',
                  width: '94%',
                  marginBottom: '40px',
                  boxShadow: '0 4px 8px rgba(0, 1, 3, 0.1)',
                }}
                className="d-none d-md-block"
                alt="Banner"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomepageBanner;
