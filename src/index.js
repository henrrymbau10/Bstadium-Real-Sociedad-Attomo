import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {I18nextProvider} from "react-i18next"
import i18next from 'i18next'
import global_es from "./Translations/es/global.json"
import global_en from "./Translations/en/global.json"
import global_eus from "./Translations/eus/global.json"

i18next.init({
  interpolation: {escapeValue: false}, 
  lng: "es",
  resources:{
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    eus: {
      global: global_eus,
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

