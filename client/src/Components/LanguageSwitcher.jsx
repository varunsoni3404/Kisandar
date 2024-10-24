import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex justify-end p-4">
      <button onClick={() => changeLanguage('en')} className="px-4 py-2 bg-blue-500 text-white rounded">
        English
      </button>
      <button onClick={() => changeLanguage('hi')} className="ml-2 px-4 py-2 bg-green-500 text-white rounded">
        हिंदी
      </button>
    </div>
  );
}
