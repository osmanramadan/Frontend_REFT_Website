import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../compenents/global/navbar';
import Footer from '../compenents/global/footer';
import MidTitle from '../compenents/global/widgets/midtitle';
import HomepageBanner from '../compenents/homepage/HomepageBanner';
import HomepageGoals from '../compenents/homepage/HomepageGoals';
import HomepageBannerTwo from '../compenents/homepage/HomepageBannerTwo';
import HomepageHighlyRatedPlaces from '../compenents/homepage/HomepageHighlyRatedPlaces';
import HomepageTestimonial from '../compenents/homepage/HomepageTestimonial';
import HomepageFAQ from '../compenents/homepage/HomepageFAQ';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();
  return (
    <div>
      <NavBar />
      <HomepageBanner />

      <Container>
        <MidTitle txt={t('homepageGoals.title')} arrow={false} />
        <HomepageGoals />
        <HomepageBannerTwo />

        <MidTitle txt={t('highlyRatedPlaces')} arrow={true} />

        <HomepageHighlyRatedPlaces />
        <MidTitle txt={t('homepageTestimonial.title')} arrow={false} />
        <HomepageTestimonial />
        <HomepageFAQ />
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
