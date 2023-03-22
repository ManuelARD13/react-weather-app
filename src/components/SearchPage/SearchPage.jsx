import "./SearchPage.css"
import weatherLogo from "../../img/nube.png"

import { MdShareLocation } from "react-icons/md";

export default function SearchPage() {
  return(
    <>
      <section className="search-page-section">
        <div className="logo-container">
          <div className="logo">
            <img src={weatherLogo} alt="https://www.flaticon.es/iconos-gratis/nubes-y-sol Nubes y sol iconos creados por Mihimihi - Flaticon" />
            <div className="logo-title">
              <p className="top-logo-title">Weather</p>
              <p className="bottom-logo-title">BUGLE</p>
            </div> 
          </div>
          <p className="logo-subtitle">Your weather forecast wherever you are, wherever you go.</p>
        </div>
        <div className="search-bar-container">
          <input type="search" name="searchPage" className="search-bar" placeholder="Search for your city!" />
          <button className="search-button">
            <MdShareLocation className="search-icon"/>
          </button>
        </div>
      </section>
    </>
  )
}