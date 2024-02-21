import React from 'react';
import { Link } from 'react-router-dom';

function BannerButton({ txt }) {
  return (
    <Link to={'/places'}>
      <button className="btn-banner mt-5 ">{txt}</button>
    </Link>
  );
}
export default BannerButton;
