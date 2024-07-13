import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function RoleDropDown({ role, onChange }) {
  const [isActive, setIsActive] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const changeRole = (selectedRole) => {
    let roleValue;

    if (selectedRole === t('role.owner')) {
      roleValue = t('role.owner');
    } else if (selectedRole === t('role.teacher')) {
      roleValue = t('role.teacher');
    }
    onChange(roleValue);
    setIsActive(false);
  };

  const roles = [
    { id: 1, name: 'OWNER', label: t('role.owner') },
    { id: 2, name: 'TEACHER', label: t('role.teacher') },
  ];

  return (
    <div onClick={toggleDropdown} className="auth-dropdown">
      <p className="dropdown-btn px-2">
        <Row
          className="d-flex justify-content-between"
          style={{
            fontWeight: '400',
            color: '#8E8EA0',
            fontSize: '20px',
            fontFamily: 'cairo',
            direction: i18n.language === 'en' ? 'ltr' : 'rtl',
          }}
        >
          <Col className={i18n.language === 'en' ? 'text-start' : 'text-end'}>
            {role}
          </Col>
          <Col
            className={
              i18n.language === 'en' ? 'text-end mx-2' : 'text-start mx-2'
            }
          >
            <FontAwesomeIcon
              style={{ color: '#FCD980' }}
              icon={faCaretUp}
              flip="vertical"
            />
          </Col>
        </Row>
      </p>

      <div
        className="auth-dropdown-content"
        style={{
          display: isActive ? 'block' : 'none',
          direction: i18n.language === 'en' ? 'ltr' : 'rtl',
        }}
      >
        {roles.map((role) => (
          <div
            className="item"
            key={role.id}
            onClick={() => changeRole(role.label)}
          >
            {role.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoleDropDown;
