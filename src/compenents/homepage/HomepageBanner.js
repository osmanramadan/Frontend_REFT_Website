import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; // Importing useTranslation hook
import banner from '../../assets/images/banner.png';
import BannerButton from './widget/BannerButton';

function HomepageBanner() {
  const { t, i18n } = useTranslation();// Using useTranslation hook to access translation functions

  return (
    <div className="homePage-Banner">
      <Container>
        <Row style={{ height: '100%', width: '100%' }}>
          <Col xs="12" md="12" lg="5" className={i18n.language=="en"?"":"mt-5 text-center"}>
            <div className="p-2 txt-1">
              {t('homepageBanner.title')} {/* Translated title */}
            </div>

            
              <div className={i18n.language=="en"?"p-2 txt-2 ":" p-2 txt-2 text-center"}>
                  {t('homepageBanner.description')} {/* Translated description */}
                </div>
            

            {
              i18n.language==="ar"?<div className="d-flex justify-content-center">
              <BannerButton txt={t('homepageBanner.buttonText')} /> {/* Translated button text */}
            </div>:<div className="d-flex justify-content-xs-center">
              <BannerButton txt={t('homepageBanner.buttonText')} /> {/* Translated button text */}
            </div>
            }
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
                className="d-none d-md-block" // Hide on small screens
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
