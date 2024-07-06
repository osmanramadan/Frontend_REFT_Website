import React from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col, Container, Row } from 'react-bootstrap';
import aboutus from '../../assets/images/aboutus.png';
import { useTranslation } from 'react-i18next';

function AboutUs() {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <NavBar />
      <Container>
        <Row style={{ marginTop: '100px',direction:i18n.language=='en'?'ltr':'rtl' }}>
          <Col
            xs="12"
            sm="12"
            md="7"
            lg="6"
            style={{
              fontSize: '57px',
              lineHeight: '145%',
              fontWeight:i18n.language=='en'?'400':'800',
              letterSpacing: '0.5%',
              color: '#282938',
              fontFamily:i18n.language=='en'?'Racing Sans One':'cairo',
            }}
          >
            <div className="mb-5">
            {t('aboutus.sectionone')}
            </div>
          </Col>
          <Col
            xs="12"
            sm="12"
            md="5"
            lg="6"
            className="d-flex text-start justify-content-center align-items-center"
            style={{
              opacity: '0.9',
              fontWeight:i18n.language=='en'?'500':'700',
              fontSize:i18n.language=='en'?'20px':'25px',
              lineHeight: '180%',
              fontWeight:i18n.language=='en'?'400':'500',
              letterSpacing: '0%',
              color: '#282938',
            }}
          >
            <div>
            {t('aboutus.sectiontwo')}
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <img
              src={aboutus}
              style={{ height: '93%', width: '100%', borderRadius: '50px' }}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default AboutUs;
