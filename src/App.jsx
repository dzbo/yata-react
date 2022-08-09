import { useState } from "react";
import "./App.css";
import deDeTranslations from "./translations/de_DE.json";
import enUsTranslations from "./translations/en_US.json";
import { FormattedMessage, IntlProvider } from "react-intl";

function App() {
  const [count, setCount] = useState(0);
  const [locale, setLocale] = useState("en-US");
  const [messages, setMessages] = useState(enUsTranslations);

  const handleLocaleChange = (loc, msg) => {
    setLocale(loc);
    setMessages(msg);
  };

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className="App">
        <div>
          <a href="https://reactjs.org" target="_blank">
            <img src="react.svg" className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>
          <FormattedMessage id="pages_home_header" />
        </h1>
        <div className="card">
          <p>
            <FormattedMessage
              id="pages_home_description"
              values={{ framework: "React" }}
            />
          </p>
          <button onClick={() => handleLocaleChange("en-US", enUsTranslations)}>
            EN
          </button>
          <button onClick={() => handleLocaleChange("de-DE", deDeTranslations)}>
            DE
          </button>
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
