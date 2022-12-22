import Headerjs from "./components/header/header";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "./App.css";
// import "./components/formcontrol/form.css";
import Mainjs from "./components/main/main";

import "./components/main.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { List } from "./components/list/list";
import { Lang } from "./components/lang/lang";
function App() {
  i18n.init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: Lang.en,
      },
      uz: {
        translation: Lang.uz,
      },
    },
  });

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Headerjs setTheme={setTheme} theme={theme} />}
        />
      </Routes>
      <Routes>
        <Route path='/list/:names' element={<List theme={theme} />} />
      </Routes>
    </>
  );
}

export default App;
