import React from 'react';

function AcessHeader({ txt }) {
  return (
    <p
      style={{
        fontSize: '28px',
        fontWeight: 'semibold',
      }}
      className='d-flex justify-content-center'
    >
      {txt}
    </p>
  );
}
export default AcessHeader;