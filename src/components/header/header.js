import "./header.css";
import React from "react";
// import Headerjs from "./components/header/header";
// import Formjs from "./components/formcontrol/form";
import { Link } from "react-router-dom";
import Mainjs from "../main/main";
import { useTranslation } from "react-i18next";
// import "../formcontrol/form";

import "../formcontrol/form.css";
import { useState, useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import { List } from "./components/list/list";
import { Lang } from "../lang/lang";

function Headerjs({ theme, setTheme }) {
  const { t, i18n } = useTranslation();

  const [data, usFunk] = useState([]);
  const [Til, setTil] = useState("uz");
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => usFunk([data]));
  }, []);
  //
  //
  //

  function handelInput(evt) {
    if (evt.key === "Enter") {
      fetch(`https://restcountries.com/v3.1/name/${evt.target.value}`)
        .then((res) => res.json())
        .then((data) => {
          usFunk([data]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <>
      <div className={theme}>
        <div className='header-boss'>
          <div className='container'>
            <div className=' d-flex justify-content-between '>
              <Link className='logo' to='/'>
                {Lang[Til].header.logo}
                {/* {t("header.logo")} */}
              </Link>
              <div className='d-flex'>
                <button
                  // onClick={() => {
                  //   setTheme(theme === "light" ? "dark" : "light");
                  // }}

                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                  }}
                  className='butoon'
                  type='button'
                >
                  {theme} Mode
                </button>

                <select
                  onChange={(evt) => setTil(evt.target.value)}
                  className='bos-Select'
                >
                  <option value='uz'>uz</option>
                  <option value='en'>eng</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`intro ${theme} `}>
        <div className='container'>
          <h1 className='visually-hidden'>Where in the world?</h1>
          <form
            className='form-boss'
            onSubmit={(evt) => {
              evt.preventDefault();
            }}
            method='post'
            autocomplete='off'
          >
            <label className='search-label' name='search'>
              <input
                onKeyDown={handelInput}
                className='search-input searchJs '
                type='text'
                name='search'
                placeholder='Search for a country…'
              />
            </label>

            <select
              onChange={(evt) => {
                fetch(
                  `https://restcountries.com/v3.1/region/${evt.target.value}`,
                )
                  .then((res) => res.json())
                  .then((data) => {
                    usFunk([data]);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
              className='search-input countri-boss '
              name='country'
              id='count'
            >
              <option className='countri' value='all' selected disabled>
                Filter by Region
              </option>

              <option className='countri' defaultValue={"Africa"}>
                Africa
              </option>
              <option className='countri' defaultValue={"Americas"}>
                America
              </option>
              <option className='countri' defaultValue={"Asia"}>
                Asia
              </option>
              <option className='countri' defaultValue={"europe"}>
                Europe
              </option>
              <option className='countri' defaultValue={"Oceania"}>
                Oceania
              </option>
            </select>
          </form>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      <section className={`main-boss-section ${theme}`}>
        <div className='container'>
          <ul className='main-boss-ul row'>
            {data.map((item) => (
              <Mainjs data={item} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Headerjs;
