import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Faq from 'react-faq-component';

const data = {
  rows: [

    {
      title: (
        <div
          style={{
            fontFamily: 'Poppins',
            fontSize: '24px',
            fontWeight: 'medium',
            color: '#282938',
          }}
        >
          <span className="mx-3" style={{ color: '#2405f2' }}>
            02
          </span>{' '}
          What is the idea of the website?
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
          The website is a link between a private teacher who wants a place to teach at with a suitable price for him and proportional to the number of hours he wants to rent
And the place owner wants to make the place rented for a greater number of hours in order to obtain a greater financial reward.
The teacher searches for the area in which he wants to find a place to teach, then chooses the best one for him and then makes a reservation according to the number of hours he needs daily.
Then the rental period for these hours is determined, such as an hour or more, a day or more, a week or more, a month or more.
Then he confirms the reservation by sending the amount to the place owner’s account.
For the owner of the place, after registering on the site, he clicks on the add a place icon and then puts all the details required of him on this page.
Such as the area, capacity, price per hour, and ownership papers for this place, then he clicks on Add, then waits until our admin confirms all of these details, then after verifying
If the information is correct, we inform the place owner that the place has been uploaded to the REFT website.
        </div>
      ),
    },
    {
      title: (
        <div
          style={{
            fontFamily: 'Poppins',
            fontSize: '24px',
            fontWeight: 'medium',
            color: '#282938',
          }}
        >
          <span className="mx-3" style={{ color: '#5b44f6' }}>
            01
          </span>{' '}
          What is the owner place ?
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
         He/She is the person who owns the hall
        </div>
      ),
    },
    {
      title: (
        <div
          style={{
            fontFamily: 'Poppins',
            fontSize: '24px',
            fontWeight: 'medium',
            color: '#282938',
          }}
        >
          <span className="mx-3" style={{ color: '#2405f2' }}>
            03
          </span>{' '}
          How to contact with admin?
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
          By contact us page in the bottom of website or throw whatsapp icon
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

function HomepageFAQ() {
  return (
    <div className="mt-5 mb-5">
      <Row className="d-flex justify-content-center " xs="12">
        <Col xs="12" md="6" lg="4">
          <div
            style={{ fontSize: '28px', fontWeight: 'bold', color: '#282938' }}
            className="mt-2"
          >
            Frequently Asked Questions ?
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
