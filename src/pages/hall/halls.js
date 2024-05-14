
import React, { useEffect, useState } from 'react';
import NavBar from '../../compenents/global/navbar';
import Footer from '../../compenents/global/footer';
import { Col, Container, Row } from 'react-bootstrap';
import Place from '../../compenents/global/widgets/place';
import Banner from '../../compenents/global/widgets/banner';
import PaginationComponent from '../../compenents/global/pagination';
import GetHallsHook from '../../hooks/hall/getHallsHook';
import GetHallsCitiesHook from '../../hooks/hall/getHallCitiesHook';
import { useTranslation } from 'react-i18next';
// import { GET_HALLS_CITIES } from '../../redux/type';

function Halls() {
  const [halls, loading, setSearch, search, searchHalls,onChangeCity] = GetHallsHook();
  const [cities, _load] = GetHallsCitiesHook()
  const { t, i18n } = useTranslation();

  const [selectedCity, setSelectedCity] = useState([]);

  const [pageNumberLimit, setPageNumberLimit] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItems, setCurrentItems] = useState([]);
  const [hallCities, setHallCities] = useState([]);

  const uniqueCities = [...new Set(cities.map((i) => {
    const parts = i.city.split('-');
    return i18n.language === 'en' ? parts[0] : parts[1];
  }))];
  
  // const HandleChangeCity = (v) => {

  //   if (v.target.id === 'all' && v.target.checked) {
  //     onChangeCity('all')
  //   } else if (v.target.id && !v.target.checked) {
      
  //     const filtered = selectedCity.filter((dt) => dt !== v.target.id);
  //     setSelectedCity([...filtered]);
  //     onChangeCity({ city:[...filtered] });

  //   }else if (v.target.id === 'all' && !v.target.checked) {

  //     setSelectedCity([...selectedCity]);
  //     onChangeCity({
  //       city: [...selectedCity]
  //     });

  //   }  else {

  //     setSelectedCity([...selectedCity, v.target.id]);
  //     onChangeCity({
  //       city: [...selectedCity]
  //     });
  //   }

  // };


  const HandleChangeCity = (v) => {

    if (v.target.id === 'all' && !v.target.checked) {
      onChangeCity('all')

    }else if (v.target.id && !v.target.checked) {

      const filtered = selectedCity.filter((dt) => dt !== v.target.id);
      console.log(filtered,'3333333333#############################');
      setSelectedCity([...filtered]);
      onChangeCity({ city: [...filtered ] });

    }
    else {

      setSelectedCity([...selectedCity,v.target.id]);
      onChangeCity({
        city: [...selectedCity,v.target.id]
      });
      
    }

  };
  
  //   const HandleChangeCity = (v) => {

  //   if (v.target.id === 'all' && v.target.checked) {
  //     onChangeCity('all')

  //   }else if (v.target.id && !v.target.checked) {

  //     const filtered = selectedCity.filter((dt) => dt !== v.target.id);
  //     setSelectedCity(filtered);
  //     onChangeCity({ city: [...filtered ] });

  //   } else if (v.target.id === 'all' && !v.target.checked) {

  //     setSelectedCity([...selectedCity]);
  //     onChangeCity({
  //       city: [...selectedCity]
  //     });

  //   } else {

  //     setSelectedCity([...selectedCity,v.target.value]);
  //     onChangeCity({
  //       city: [...selectedCity,v.target.value]
  //     });
      
  //   }

  // };

  useEffect(() => {
    const updatedItems = halls.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(updatedItems);
  }, [halls, indexOfFirstItem, indexOfLastItem]);

  useEffect(()=>{
     setHallCities(uniqueCities)  
  },[cities])

  useEffect(() => {
    if (halls.length > 0) {
      const pages = [];

      for (let i = 1; i <= Math.ceil(halls.length / itemsPerPage); i++) {
        pages.push(i);
      }
      setPageNumberLimit(pages.length);
    }
  }, [halls, itemsPerPage]);

  const handlePageClick = (num) => {
    setCurrentPage(num);
  };

  const search_in_halls = (e) => {
    const { value } = e.target;
    if (value === '') {
      window.location.reload();
    }

    setSearch(value);
    searchHalls();
  };

  return (
    <div  style={{backgroundColor:'#eef4fa' }}>
      <NavBar />
      <Banner txt={t('halls.home')} />
      <Row
        xs="12"
        className={`d-flex justify-content-center ${i18n.language === 'ar' ? 'rtl' : ''}`}
        style={{ marginTop: '105px',backgroundColor:'#eef4fa', marginBottom: '110px' }}
      >
        {i18n.language === 'en' ? (
          <input
            value={search}
            className="hall-search-input"
            placeholder={t('halls.searchPlaceholder')}
            onChange={search_in_halls}
          />
        ) : (
          <input
            value={search}
            className="hall-search-input-ar"
            placeholder={t('halls.searchPlaceholder')}
            onChange={search_in_halls}
          />
        )}
      </Row>
      {cities.length > 0 && currentItems.length >0 ?<Container className="mt-5">
        <Row className={`d-flex justify-content-center px-5 ${i18n.language === 'ar' ? 'rtl' : ''}`}>
      <Col xs="2" sm="2" md="2" lg="3" className="d-flex flex-column justify-content-start align-items-end">
    <p style={{ fontWeight: '600',opacity: '0.7', fontSize: '24px' }} className="mb-1 mx-2 fs-4">
     Our Cities
    </p>
    <div style={{ fontSize: '14px', opacity: '0.8', fontWeight: '500' }}>
    
      {/* <div className="d-flex flex-row">
        <input
          type="checkbox"
          onChange={HandleChangeCity}
          id="all"
          className="form-check-input p-1 mx-2"
        />
        <label htmlFor="all" className="form-check-label">
        All
        </label>
      </div> */}
    
      {
        hallCities.map((city, i) => (
        <div key={i} className="d-flex flex-row">
          <input
            type="checkbox"
            onChange={HandleChangeCity}
            id={city}
            className="form-check-input p-1 mx-2"
          />
          <label htmlFor={city} className="form-check-label">
            {city}
          </label>
        </div>
           ))
      }

    </div>

  </Col>

          {loading && currentItems.length === 0 ? (
            <div className={`d-flex justify-content-center mb-2 fw-bold ${i18n.language === 'ar' ? 'rtl' : ''}`} style={{ fontSize: '30px' }}>
              {t('halls.noHalls')}
            </div>
          ) : (
            currentItems.map((data, i) => (
              <Col className="d-flex justify-content-center mb-3" key={i}>
                <Place key={i} data={data} />
              </Col>
            ))
          )}
          
        </Row>
      </Container>:( <div className={`d-flex justify-content-center mb-2 fw-bold ${i18n.language === 'ar' ? 'rtl' : ''}`} style={{ fontSize: '30px' }}>
              {t('halls.noHalls')}
            </div>)}
      <PaginationComponent pageCount={pageNumberLimit} handlePageClick={handlePageClick} />
      <Footer />
    </div>
  );
}

export default Halls;



