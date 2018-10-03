import React, { Component } from 'react';
import { IntlProvider/* , addLocaleData */ } from "react-intl";
// import esLocaleData from "react-intl/locale-data/es";
import App from "./App";

// bundle default messages from the app and from react-arcgis-hub
// NOTE: that in CRA we have to use require to avoid ejecting
const defaultMessages = require('./messages/en.json');
const arcgisHubMessages = require('react-arcgis-hub/dist/messages/en.json');

const defaultLocale = 'en';
// TODO: get current locale from browser or use default
const locale = defaultLocale;

// TODO: add locale data (if not default locale)
// addLocaleData(arLocaleData);
// addLocaleData(esLocaleData);

// TODO: load local messages (if not default locale)
// merge arcgis hub messages
const messages = { ...defaultMessages, ...arcgisHubMessages }

class AppWrapper extends Component {
  render() {
    return (
      <IntlProvider locale={locale} messages={messages}>
        <App />
      </IntlProvider>
    );
  }
}

export default AppWrapper;
