import "./header.css";
import React from "react";
function Headerjs() {
  return (
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
  );
}

export default Headerjs;
