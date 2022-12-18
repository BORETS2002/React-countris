import React, { useEffect, useState } from "react";
import "./list.css";
import "../header/header.css";
import { useParams, useNavigate } from "react-router-dom";
export function List() {
  const [data, setList] = useState([]);
  const { names } = useParams();
  console.log(names);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${names}`)
      .then((res) => res.json())
      .then((json) => setList(json));
  }, [names]);

  return (
    <>
      <div className='header '>
        <div className='container'>
          <div className='header-boss'>
            <a className='logo' href='#'>
              Where in the world?
            </a>
            <button className='butoon' type='button'>
              Dark Mode
            </button>
          </div>
          <button className='header_twoo' onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
      <section className='list__section'>
        <div className='container'>
          {data.map((item) => {
            return (
              <div className='  boss'>
                <img
                  className='list-img'
                  src={item.flags.svg}
                  alt={item.name.common}
                />

                <div className='box__lists'>
                  <div class='list__one '>
                    <h3 class='main-boss-big-text countryName'>
                      {item.name.common}
                    </h3>
                    <p class='main-boss-text '>
                      <strong class='strong'>nativeName: </strong>{" "}
                      {item.name.official}
                      <span class='countryPopulation'> </span>
                    </p>
                    <p class='main-boss-text '>
                      <strong class='strong'>Population: </strong>{" "}
                      {item?.population}
                      <span class='countryPopulation'> </span>
                    </p>
                    <p class='main-boss-text  '>
                      <strong class='strong'>Region:</strong>
                      {item?.region}
                      <span class='countryRegion'></span>
                    </p>
                    <p class='main-boss-text main-boss-text-none  '>
                      <strong class='strong'>Capital: </strong>
                      {item.capital?.[0]}
                      <span class='countryCapital'></span>
                    </p>
                  </div>
                  <ul className='Lists__twoo'>
                    <p class='main-boss-text '>
                      <strong class='strong'>Top Level Domain: </strong>{" "}
                      {item?.tld}
                      <span class='countryPopulation'> </span>
                    </p>

                    <p class='main-boss-text  '>
                      <strong class='strong'>Currencies:</strong>
                      {Object.keys(item.currencies)[0]}
                      <span class='countryRegion'></span>
                    </p>
                    <p class='main-boss-text main-boss-text-none  '>
                      <strong class='strong'>Languages: </strong>
                      {Object.keys(item.languages)?.[0]},
                      {Object.keys(item.languages)?.[1]},
                      {Object.keys(item.languages)?.[2]}
                      <span class='countryCapital'></span>
                    </p>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
