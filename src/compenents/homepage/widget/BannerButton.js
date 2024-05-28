import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function BannerButton({ txt }) {
  const {i18n } = useTranslation();
  return (
    <Link to={'/places'}>
      <button style={{fontFamily:i18n.language=='en'?'Poppins':'Cairo'}} className="btn-banner mt-5 ">{txt}</button>
    </Link>
  );
}
export default BannerButton;
