import React from 'react';
import { useTranslation } from 'react-i18next';

function NavBarButton() {
  const { t } = useTranslation();

  return (
    <button className="btn-navbar" onClick={() => (location.href = '/signup')}>
      {t('navbar.signup')}
    </button>
  );
}

export default NavBarButton;
