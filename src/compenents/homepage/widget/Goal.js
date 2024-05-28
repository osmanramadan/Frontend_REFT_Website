import React from 'react';
import { useTranslation } from 'react-i18next';

function Goal({ txt, title, num }) {
  const { t ,i18n} = useTranslation();
  return (
    <div className="homepage-goal" style={{fontFamily:i18n.language=='en'?'Poppins':'Cairo',position:'relative'}}>
      <span
        style={{
          position: 'absolute',
          top: '42px',
          height: '12px', // Set the height as per your requirement
          width:'7px', // Set the width as per your requirement
          backgroundColor:'#fcd980',
          borderRadius:'2px',
          zIndex:1, // Ensure the span is above other content
        }}
      ></span>
      <div
        className="text-center"
        style={{
          height: '26px',
          width: '26px',
          fontWeight: 'bold',
          fontSize: '20px',
          backgroundColor: '#2405f2',
          borderRadius: '5px',
          color: 'white',
          fontWeight: 'light',
        }}
      >
        {num}
      </div>
      <div
        className="mt-2 mb-3"
        style={{ fontSize: '24px', fontWeight: 'bold' }}
      >
        {title}
      </div>
      {txt}
    </div>
  );
}

export default Goal;
