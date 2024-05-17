
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function LocationDropdown({ addhall,onChange,location,cityid}) {
  const [isActive, setIsActive] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const changeLocation = (location) => {
    onChange(location);
    setIsActive(!isActive);
  };



  const data = [
    { 
        id: 1, name: "Cairo-القاهرة", towns: [
        { ar: "المطرية", en: "Elmataria" },
        { ar: "عين شمس", en: "Ean shams" },
        { ar: "السلام أول", en: "El salam awl" },
        { ar: "السلام ثاني", en: "El salam thani" },
        { ar: "النزهة", en: "El nozha" },
        { ar: "مصر الجديدة", en: "Masr elgededa" },
        { ar: "مدينة نصر", en: "Nasr city" },
        { ar: "الوايلي", en: "El waylay" },
        { ar: "باب الشعرية", en: "Bab elshearya" },
        { ar: "وسط القاهرة", en: "Downtown cairo" },
        { ar: "الموسكي", en: "El mosky" },
        { ar: "الأزبكية", en: "El azbakia" },
        { ar: "عابدين", en: "Abdeen" },
        { ar: "بولاق", en: "Bolaq" },
        { ar: "منشأة ناصر", en: "Monshaa naser" },
        { ar: "الزيتون", en: "El zaytoon" },
        { ar: "حدائق القبة", en: "Hadaeq el koba" },
        { ar: "الزاوية الحمرا", en: "El zawya elhamra" },
        { ar: "الشرابية", en: "El sharabia" },
        { ar: "الساحل", en: "El sahel" },
        { ar: "شبرا", en: "SHobra" },
        { ar: "روض الفرج", en: "Rood elfrag" },
        { ar: "الأميرية", en: "El ameria" },
        { ar: "السيدة زينب", en: "Elsayda zynab" },
        { ar: "مصر القديمة", en: "Masr elkadema" },
        { ar: "الخليفة", en: "El khalefa" },
        { ar: "المقطم", en: "El mokatam" },
        { ar: "البساتين", en: "El basateen" },
        { ar: "دار السلام", en: "Dar elsalam" },
        { ar: "المعادي", en: "El maadi" },
        { ar: "طرة", en: "Tora" },
        { ar: "حلوان", en: "Helwan" },
        { ar: "التبين", en: "Tl tebeen" },
        { ar: "15 مايو", en: "15th of may" },
        { ar: "المعصرة", en: "El maasara" },
        { ar: "التجمع الأول", en: "El tagamo3 el awl" },
        { ar: "التجمع الثالث", en: "El tagamo3 el talet" },
        { ar: "التجمع الخامس", en: "El tagamo3 el khames" },
        { ar: "القطامية", en: "El katamia" },
        { ar: "الشروق", en: "El shorouq" },
        { ar: "المستقبل", en: "El mostakbal" },
        { ar: "الرحاب", en: "El reyhab" },
        { ar: "مدينة بدر", en: "Badr city" },
        { ar: "العاصمة", en: "The capital" }
    ] },
    { id: 2, name: "Giza-الجيزة", towns: [
        { ar: "المهندسين", en: "El mohndseen" },
        { ar: "العجوزة", en: "El agoza" },
        { ar: "الكيت كات", en: "Elket kat" },
        { ar: "إمبابة", en: "Empapa" },
        { ar: "الوراق", en: "El waraq" },
        { ar: "بشتيل", en: "Bashteel" },
        { ar: "البراجيل", en: "El bragel" },
        { ar: "أبو رواش", en: "Abu rawash" },
        { ar: "كرداسة", en: "Kerdasa" },
        { ar: "أوسيم", en: "Oseeam" },
        { ar: "المنصورية", en: "El mansoria" },
        { ar: "الشيخ زايد", en: "El shekh Zayed" },
        { ar: "المعتمدية", en: "Elmetamdia" },
        { ar: "ناهيا", en: "Nahia" },
        { ar: "صفط", en: "Saft" },
        { ar: "منشأة البكاري", en: "Monshaa el bakari" },
        { ar: "بولاق الدكرور", en: "Bolaq eldakror" },
        { ar: "ميدان لبنان", en: "Medan lebenan" },
        { ar: "معتقة عقبة", en: "Meat okba" },
        { ar: "الدقي", en: "El doki" },
        { ar: "الحرم", en: "El hrm" },
        { ar: "فيصل", en: "Fesal" },
        { ar: "العمرانية", en: "El omrania" },
        { ar: "كفر طهرمس", en: "Kafr tohormos" },
        { ar: "أم المصريين", en: "Om elmasreen" },
        { ar: "المأمون", en: "El maamon" },
        { ar: "6 أكتوبر", en: "6th October" },
        { ar: "المنيب", en: "El moneeb" },
        { ar: "أبو النمرس", en: "Abu elnomros" },
        { ar: "طرسا", en: "Tersa" },
        { ar: "بني سويف", en: "Bane suef" },
        { ar: "الحوامدية", en: "Elhwamdia" },
        { ar: "سقارة", en: "Sakara" },
        { ar: "البدرشين", en: "El badrasheen" },
        { ar: "دهشور", en: "Dahshor" },
        { ar: "الصف", en: "El saf" },
        { ar: "العتفيه", en: "Atfeeh" }
    ] },
    { id: 3, name: "Qalyubia-القليوبية", towns: [
        { ar: "بنها", en: "Benha" },
        { ar: "القليوب", en: "Qalyoub" },
        { ar: "القناطر الخيرية", en: "AlQanatir Al Khayriyah" },
        { ar: "شبرا الخيمة", en: "SHobra AlKheima" },
        { ar: "الخانكة", en: "El Khankah" },
        { ar: "كفر شكر", en: "Kafr Shukr" },
        { ar: "شبين القناطر", en: "Shibin AlQanatir" },
        { ar: "طوخ", en: "Tookh" },
        { ar: "العبور", en: "Elobour" },
        { ar: "قها", en: "Qaha" },
        { ar: "الخصوص", en: "AlKhusus" }
    ] },
    { id: 4, name: "Monufia-المنوفية", towns: [
        { ar: "منوف", en: "Monuf" },
        { ar: "السادات", en: "El Sadat" },
        { ar: "أشمون", en: "Ashmun" },
        { ar: "قويسنا", en: "Quesna" },
        { ar: "شبين الكوم", en: "Shibin AlKoom" },
        { ar: "الشهداء", en: "ElShohada" },
        { ar: "تلا", en: "Tala" },
        { ar: "بركة السبع", en: "Berket AlSaba" },
        { ar: "الباجور", en: "AlBajur" }
    ]}
];

  return (
    <div
      onClick={toggleDropdown}
      className={addhall ? 'inputfield-hall' : 'auth-dropdown'}

    >
      <p className="dropdown-btn">
        <Row className="d-flex justify-content-between"  style={{fontWeight:"400",color:"#8E8EA0",fontSize:"20px",fontFamily:"cairo","direction":i18n.language === 'en'?'ltr':'rtl'}}>

          <Col className={i18n.language==='en'?'text-start':'text-end'} style={{fontFamily:'cairo'}} >{location?i18n.language==='en'?location.split('/')[0]:location.split('/')[1]:i18n.language === 'en'?'Select Location':'اختر موقعك'}</Col>

          <Col  className={i18n.language==='en'?'text-end mx-2':'text-start mx-2'}>
            <FontAwesomeIcon
              style={{ color: addhall ? '#D0D0D0' : '#FCD980' }}
              icon={faCaretUp}
              flip="vertical"
            />{' '}
          </Col>
        </Row>
      </p>

      <div
        className="auth-dropdown-content"
        style={{
          display: isActive ? 'block' : 'none'
  
        }}
      >
    
          {data && data[cityid?cityid-1:1].towns.length &&  data[cityid?cityid-1:1].towns.map((town, index) => (
          <div className="item" style={{fontFamily:'cairo'}} key={index} onClick={()=>changeLocation(town)}>
            
            {i18n.language === 'en'?town.en:town.ar}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocationDropdown;
