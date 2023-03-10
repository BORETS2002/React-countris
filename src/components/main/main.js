import "../header/header.css";
import "./basic.css";
// import FlagGermany from "../../assets/imgs/german-flag.svg";
import { Link } from "react-router-dom";

function Main({ data }) {
  return data.map((item) => {
    return (
      <>
        <li class='gy-5 col-sm-6 col-md-6 col-lg-3 itemjs'>
          <div class='main-boss-li'>
            <div class='img-box'>
              <img
                class='main-boss-img'
                src={item.flags.svg}
                alt={item.name.common}
              />
            </div>

            <div class='option'>
              <h3 class='main-boss-big-text countryName'>{item.name.common}</h3>
              <p class='main-boss-text '>
                <strong class='strong'>Population: </strong> {item.population}
                <span class='countryPopulation'> </span>
              </p>
              <p class='main-boss-text  '>
                <strong class='strong'>Region:</strong>
                {item.region}
                <span class='countryRegion'></span>
              </p>
              <p class='main-boss-text main-boss-text-none  '>
                <strong class='strong'>Capital: </strong>
                {item.capital?.[0]}
                <span class='countryCapital'></span>
              </p>

              <Link
                to={`/list/${item.name.common}`}
                class='btn modalJS mt-2 bg-info  '
                type='submit'
              >
                more info
              </Link>
            </div>
          </div>
        </li>
      </>
    );
  });
}

export default Main;
