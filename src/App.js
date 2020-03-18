import React from 'react';
import logo from './logo.svg';
import './App.css';
import {IntlProvider} from 'react-intl';
import deDeTranslations from './translations/de_DE.json';
import enUsTranslations from './translations/en_US.json';
import {FormattedMessage} from 'react-intl';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);

    // set defaults, in real app this could be taken from browser locale
    this.state = {
      locale: "en-US",
      messages: enUsTranslations
    };
  }

  handleEnClick = () => {
    this.setState({ locale: "en-US", messages: enUsTranslations });
  }

  handleDeClick = () => {
    this.setState({ locale: "de-DE", messages: deDeTranslations });
  }

  render() {
    return (
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
              <FormattedMessage id="pages_home_header" />
            </h1>
            <p>
              <FormattedMessage id="pages_home_description" values={{ framework: 'React' }} />
            </p>
            <div>
              <a href="#!" onClick={this.handleEnClick}>EN</a>
              |
              <a href="#!" onClick={this.handleDeClick}>DE</a>
            </div>
          </header>
        </div>
      </IntlProvider>
    )
  }
}
