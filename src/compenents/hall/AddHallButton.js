import React from 'react';

function AddHallButton({ txt, onClick }) {
  return (
    <button className="btn-addhall mt-5 mb-5" onClick={onClick}>
      {txt}
    </button>
  );
}
export default AddHallButton;
