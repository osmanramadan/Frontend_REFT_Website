import React, { useState } from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import MidTitle from '../../compenents/global/widgets/midtitle';
import Banner from '../../compenents/global/widgets/banner';
import MultiImageInput from 'react-multiple-image-input';
import { Col, Row } from 'react-bootstrap';
import PdfChooser from '../../compenents/hall/PdfChooser';
import add from '../../assets/images/add.png';
import VideoChooser from '../../compenents/hall/VideoChooser';
import AcessButton from '../../compenents/auth/AccessButton';
import AddHallButton from '../../compenents/hall/AddHallButton';

function HallAdd() {
  const [images, setImages] = useState([]);
  return (
    <div>
      <NavBar />
      <Banner txt={'Home > Add Place'} />
      <MidTitle txt={'Add Hall'} />

      <div className="px-1 mt-5">
        <Row className="d-flex justify-content-center">
          <Col xs="12" sm="6" md="4" lg="4" className="text-center">
            <input
              className="inputfield-hall"
              placeholder="Place Name"
              style={{ width: '100%' }}
            />
          </Col>
          <Col xs="12" sm="6" md="4" lg="4" className="text-center">
            <input
              className="inputfield-hall"
              placeholder="Place Capacity"
              type="number"
              style={{ width: '100%' }}
            />
          </Col>
        </Row>
        {/***********************/}
        <Row className="d-flex justify-content-center">
          <Col xs="12" sm="6" md="4" lg="4" className="text-center">
            <input
              className="inputfield-hall"
              placeholder="Place City"
              style={{ width: '100%' }}
            />
          </Col>
          <Col xs="12" sm="6" md="4" lg="4" className="text-center">
            <input
              className="inputfield-hall"
              placeholder="Place Location"
              style={{ width: '100%' }}
            />
          </Col>
        </Row>
        {/***********************/}
        <Row className="d-flex justify-content-center">
          <Col xs="12" sm="6" md="4" lg="4">
            <input
              className="inputfield-hall"
              placeholder="Hour Price"
              style={{ width: '100%' }}
              type="number"
            />
          </Col>
        </Row>
        {/***********************/}
        <Row className="d-flex justify-content-center">
          <Col xs="8">
            <textarea
              rows={4}
              className="inputfield-hall"
              placeholder="Place Details"
              style={{ width: '100%', height: '120px' }}
              cols={60}
            />
          </Col>
        </Row>
        {/***********************/}
        <Row className="d-flex justify-content-center">
          <Col xs="8">
            <MultiImageInput
              images={images}
              setImages={(value) => {
                setImages(value);
              }}
              theme={'light'}
              allowCrop={false}
            />
          </Col>
        </Row>
        {/***********************/}

        <Row className="d-flex justify-content-center mt-2">
          <Col xs="7" sm="7" md="7" lg="7" className="text-center">
            <input
              className="inputfield-hall"
              readOnly
              placeholder="Select  property of place   eg :  place ownership contract "
              style={{ width: '100%' }}
            />
          </Col>
          <Col xs="1" sm="1" md="1" lg="1" className="text-end">
            <PdfChooser img={add} handleSelect={() => {}} />
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mt-2">
          <Col xs="7" sm="7" md="7" lg="7" className="text-center">
            <input
              className="inputfield-hall"
              placeholder="Select Video"
              style={{ width: '100%' }}
              readOnly
            />
          </Col>
          <Col xs="1" sm="1" md="1" lg="1" className="text-end">
            <VideoChooser video={add} handleSelect={() => {}} />
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mt-4">
          <Col xs="8" sm="5" md="4" lg="3" className="text-start">
            <AddHallButton txt={'Submit +'} onClick={() => {}} />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
export default HallAdd;
