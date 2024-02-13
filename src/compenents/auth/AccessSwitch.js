import React from 'react';
import { Link } from 'react-router-dom';

function AcessSwitch({ txt, target, to }) {
  return (
    <div
      style={{ fontSize: '20px', fontFamily: 'Poppins', textAlign: 'center' }}
    >
      {txt}
      <Link to={'/' + to} className="link mx-1">
        {target}{' '}
      </Link>
    </div>
  );
}
export default AcessSwitch;
