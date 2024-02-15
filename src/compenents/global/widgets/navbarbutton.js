import React from 'react';

function NavBarButton() {
  return (
    <button className="btn-navbar" onClick={() => (location.href = '/signup')}>
      Sign Up
    </button>
  );
}
export default NavBarButton;
