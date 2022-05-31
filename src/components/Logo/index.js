import React from 'react';
import logoImage from '../../assets/img/logo.png';
import logoImage2 from '../../assets/img/logo2.jpeg';

import css from './style.module.css';
export default function Logo() {
  return (
    <div className={css.Logo}>
      <img src={logoImage} alt="logo" />
    </div>
  );
}
