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
      <button onClick={() => changeLanguage('en')}><RiEnglishInput className='dark:bg-white' /></button>
      <button className='dark:text-white' onClick={() => changeLanguage('fa')}>فا</button>
    </div>
  );
}

export default LanguageSwitcher;
