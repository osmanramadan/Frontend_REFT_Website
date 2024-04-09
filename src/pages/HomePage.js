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

function HomePage() {
  return (
    <div>
      <NavBar />
      <HomepageBanner />

      <Container>
        <MidTitle txt={'OUR GOALS'} arrow={false} />
        <HomepageGoals />
        <HomepageBannerTwo />

        <MidTitle txt={'HIGHLY RATED PLACES'} arrow={true} />

        {/* <HomepageHighlyRatedPlaces /> */}
        <MidTitle txt={'REVIEWS FROM OUR CUTOMERS'} arrow={false} />
        <HomepageTestimonial />
        <HomepageFAQ />
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
