import React from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import MidTitle from '../../compenents/global/widgets/midtitle';
import Banner from '../../compenents/global/widgets/banner';
import MultiImageInput from 'react-multiple-image-input';
import { Col, Row, Spinner } from 'react-bootstrap';
import PdfChooser from '../../compenents/hall/PdfChooser';
import VideoChooser from '../../compenents/hall/VideoChooser';
import AddHallButton from '../../compenents/hall/AddHallButton';
import CityDropdown from '../../compenents/global/widgets/CityDropdown';
import AddHallHook from '../../hooks/hall/addHallHook';
import LocationDropdown from '../../compenents/global/widgets/LocationDropDown';

function HallAdd() {
  const [
    onSubmit,
    images,
    onChangeImages,
    _placeName,
    onChangePlaceName,
    placeCapacity,
    onChangePlaceCapacity,
    placeCity,
    onChangePlaceCity,
    onChangePlaceCityId,
    placeCityId,
    placeLocation,
    onChangePlaceLocation,
    hourPrice,
    onChangePriceHour,
    placeDetails,
    onChangePlaceDetails,
    _pdf,
    onChangePdf,
    pdfName,
    _video,
    onChangeVideo,
    videoName,
    loading,
  ] = AddHallHook();

  return (
    <div>
      <NavBar />
      <Banner txt={'Home > Add Place'} />
      <MidTitle txt={'Add Hall'} />

      {loading === false ? (
        <div className="d-flex justify-content-center mb-2">

          <Spinner
            style={{ color: '#fcd980', marginLeft: '5px' }}
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />

          <Spinner
            style={{ color: '#fcd980', marginLeft: '5px' }}
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />

          <Spinner
            style={{ color: '#fcd980', marginLeft: '5px' }}
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        </div>
      ) : (
        ''
      )}
      <div className="px-1 mt-5">
        <Row className="d-flex justify-content-center">
          <Col xs="12" sm="6" md="4" lg="4" className="text-center">
            <input
              className="inputfield-hall"
              onChange={onChangePlaceName}
              placeholder="Place Name"
              style={{ width: '100%' }}
            />
          </Col>
          <Col xs="12" sm="6" md="4" lg="4" className="text-center">
            <input
              className="inputfield-hall"
              placeholder="Place Capacity"
              onChange={onChangePlaceCapacity}
              value={placeCapacity}
              type="number"
              style={{ width: '100%' }}
            />
          </Col>
        </Row>
        {/***********************/}
        <Row className="d-flex justify-content-center">
          <Col
            xs="12"
            sm="6"
            md="4"
            lg="4"
            className="text-center"
            style={{ zIndex: '1000000' }}
          >
            <CityDropdown
              addhall={true}
              city={placeCity}
              onChangeCity={onChangePlaceCity}
              onChangePlaceCityId={onChangePlaceCityId}
            />
          </Col>

          <Col xs="12" sm="6" md="4" lg="4" className="text-center">
            <LocationDropdown
              addhall={true}
              cityid={placeCityId}
              location={placeLocation}
              onChange={onChangePlaceLocation}
            />
          </Col>
        </Row>
        {/***********************/}
        <Row className="d-flex justify-content-center">
          <Col xs="12" sm="6" md="4" lg="4">
            <input
              className="inputfield-hall"
              placeholder="Hour Price"
              value={hourPrice}
              onChange={onChangePriceHour}
              style={{ width: '100%' }}
              type="number"
            />
          </Col>
        </Row>
        {/***********************/}
        <Row className="d-flex justify-content-center">
          <Col xs="8">
            <textarea
              value={placeDetails}
              onChange={onChangePlaceDetails}
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
              setImages={onChangeImages}
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
              value={pdfName}
              readOnly
              placeholder="Select  property of place   eg :  place ownership contract "
              style={{ width: '100%' }}
            />
          </Col>
          <Col xs="1" sm="1" md="1" lg="1" className="text-end">
            <PdfChooser handleSelect={onChangePdf} />
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mt-2">
          <Col xs="7" sm="7" md="7" lg="7" className="text-center">
            <input
              className="inputfield-hall"
              placeholder="Select Video"
              style={{ width: '100%' }}
              value={videoName}
              readOnly
            />
          </Col>
          <Col xs="1" sm="1" md="1" lg="1" className="text-end">
            <VideoChooser handleSelect={onChangeVideo} />
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mt-4">
          <Col xs="8" sm="5" md="4" lg="3" className="text-start">
            <AddHallButton txt={'Submit +'} onClick={onSubmit} />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
export default HallAdd;
