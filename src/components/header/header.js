import "./header.css";
import React from "react";
// import Headerjs from "./components/header/header";
// import Formjs from "./components/formcontrol/form";

import Mainjs from "../main/main";

// import "../formcontrol/form";

import "../formcontrol/form.css";
import { useState, useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import { List } from "./components/list/list";

function Headerjs() {
  const [data, usFunk] = useState([]);

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
      <div className='header'>
        <div className='container'>
          <div className='header-boss'>
            <a className='logo' href='#'>
              Where in the world?
            </a>
            <button className='butoon' type='button'>
              Dark Mode
            </button>
          </div>
        </div>
      </div>

      <div className='intro'>
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
            <button className='btn ms-3 btn-info' type='submit'>
              search
            </button>
          </form>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      <section className='main-boss-section'>
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
