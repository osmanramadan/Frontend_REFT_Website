import React from 'react';

function AcessButton({ txt , onClick}) {
  return <button className="btn-access mt-5" onClick={onClick}>{txt}</button>;
}
export default AcessButton;
