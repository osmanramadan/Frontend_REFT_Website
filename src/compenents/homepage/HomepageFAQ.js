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
          <span className="mx-3" style={{ color: '#5b44f6' }}>
            01
          </span>{' '}
          What is the owner place , how to become him?
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
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia,exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat
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
            02
          </span>{' '}
          How to add place ?
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
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia,exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat
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
          How to contact with admin ?
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
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia,exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat
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
