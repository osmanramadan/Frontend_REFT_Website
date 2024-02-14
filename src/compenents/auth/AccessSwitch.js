import React from 'react';
import { Link } from 'react-router-dom';

function AccessSwitch({ txt, target, to, forgetpassword }) {
  return (
    <div
      style={{
        fontSize: '20px',
        marginTop: '15px',
        fontFamily: 'Poppins',
        textAlign: 'center',
      }}
    >
      {forgetpassword ? (
        <Link to={'/forget-password'} className="link">
          {txt}
        </Link>
      ) : (
        <span>{txt}</span>
      )}

      <Link to={'/' + to} className="link mx-1" style={{ color: '#FCD980' }}>
        {target}{' '}
      </Link>
    </div>
  );
}

export default AccessSwitch;
