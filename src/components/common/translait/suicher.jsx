/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { RiEnglishInput } from 'react-icons/ri';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className='dark:text-white' onClick={() => changeLanguage('en')}>en</button>
      <button className='dark:text-white' onClick={() => changeLanguage('fa')}>فا</button>
    </div>
  );
}

export default LanguageSwitcher;
