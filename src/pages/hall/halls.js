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
import SearchHallDropdownCities from '../../compenents/hall/SearchHallDropdownCities';
import SearchHallDropdownTowns from '../../compenents/hall/searchHallDropdownTowns';




function Halls() {
  
  const [halls,_loading,setTown,town,setSearch,search,onChangeCity]= GetHallsHook();
  const [cities, _load] = GetHallsCitiesHook()
  const { t, i18n } = useTranslation();

  const [selectedCity, setSelectedCity] = useState([]);
  const [cityid, setCityID] = useState('');

  const [pageNumberLimit, setPageNumberLimit] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItems, setCurrentItems] = useState([]);
  const [hallCities, setHallCities] = useState([]);


  const uniqueCities = [...new Set(cities.map((v) => {
    
    return v
  }))];

  // const uniqueCities = [...new Set(cities.map((i) => {
  //   const parts = i.city.split('-');
  //   return i18n.language === 'en' ? parts[0] : parts[1];
  // }))];



  const HandleChangeCity = (v) => {
    const city = v.target.id;
    const isChecked = v.target.checked;
   
    
  
    if (city === 'all') {
      setSelectedCity(isChecked ? [city] : []);
      onChangeCity({ city: isChecked ? [city] : [] });
    }else if(!isChecked){
      window.location.reload();
    }else {
      const updatedSelectedCity = isChecked
        ? [...selectedCity, city]
        : selectedCity.filter((selected) => selected !== city);
      setSelectedCity(updatedSelectedCity);
      onChangeCity({ city: updatedSelectedCity });
   
    }
   
    // Disable all other checkboxes if one is checked
    const checkboxes = document.querySelectorAll('.form-check-input');

    checkboxes.forEach((checkbox) => {
      if (checkbox.id !== city) {
        checkbox.disabled = isChecked;
      }
    });
  
    // If no checkboxes are checked, render all halls
    if (!isChecked && selectedCity.length === 0) {
      window.location.reload();
    }
  };
  



  useEffect(() => {
    const updatedItems = halls.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(updatedItems);
  }, [halls, indexOfFirstItem, indexOfLastItem]);

  useEffect(()=>{
     setHallCities([...new Set(cities.map((i) => {
      const parts = i.city.split('-');
      return i18n.language === 'en' ? parts[0] : parts[1];
    }))])  

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

  const search_in_halls = (value) => {

    if (value === '') {
      window.location.reload();
    }
    setCityID(value.id)
    setSearch(value.name);
    setTown('')
  };

  const searchlocation_in_halls = (value) => {

    if (value === '') {
      window.location.reload();
    }

    setTown(value);
  
  };

  return (
    <div  style={{backgroundColor:'#eef4fa' }}>
      <NavBar />
      <Banner txt={t('halls.home')} />
      <Row
        xs="12"
        className={`px-1 d-flex justify-content-center ${i18n.language === 'ar' ? 'rtl' : ''}`}
        style={{ marginTop: '105px',backgroundColor:'#eef4fa', marginBottom: '110px' }}
      >
       <Col xs="12" sm="4" md="4" lg="3">
       {i18n.language === 'en' ? (
          // <input
          //   value={search}
          //   className="hall-search-input"
          //   placeholder={t('halls.searchPlaceholder')}
          //   onChange={search_in_halls}
          // />
          <SearchHallDropdownCities search={search} onChange={search_in_halls} addhall={true}/>
        ) : (
          // <input
          //   value={search}
          //   className="hall-search-input-ar"
          //   placeholder={t('halls.searchPlaceholder')}
          //   onChange={search_in_halls}
          // />
          <SearchHallDropdownCities search={search} onChange={search_in_halls} addhall={true}/>
        )}
       </Col>
       <Col xs="12" sm="6" md="5" lg="3">
         <SearchHallDropdownTowns searchid={cityid} town={town} onChange={searchlocation_in_halls} addhall={true}/>
       </Col>
      </Row>
      {cities.length > 0 && currentItems.length >0 ?<Container className="mt-5">
        <Row className={`d-flex justify-content-center px-5 ${i18n.language === 'ar' ? 'rtl' : ''}`}>
      <Col xs="2" sm="2" md="2" lg="3" className="d-flex flex-column justify-content-start mb-2 align-items-end">
    <p style={{ fontWeight: '600',fontFamily:"cairo",opacity: '0.7', fontSize: '24px' }} className="mb-1 mx-2 fs-4">
     Our Cities
    </p>
    <div style={{ fontSize: '14px', opacity: '0.8', fontWeight: '500' }}>
  

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

      {currentItems.length === 0 ? (
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
              <div className='mx-3'>
                  <span>{t('halls.noHalls')}</span>
              </div>
              <div className="spinner-border text-custom" role="status"> 
            {/* <span className="visually-hidden">Loading...</span> */}
          </div>
              
              
            </div>
          
          
          )}
      <PaginationComponent pageCount={pageNumberLimit} handlePageClick={handlePageClick} />
      <Footer />
    </div>
  );
}

export default Halls;



