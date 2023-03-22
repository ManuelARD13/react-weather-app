 import "./NavigationBar.css"
 import weatherIcon from "../../img/nube (1).png"
 
 export default function NavigationBar() {
  return (
    <>
       <nav>
        <div className="icon-container">
          <img src={weatherIcon} alt="https://www.flaticon.es/iconos-gratis/nubes-y-sol Nubes y sol iconos creados por Mihimihi - Flaticon" />
          <div className="icon-title">
            <p className="top-icon-title">Weather</p>
            <p className="bottom-icon-title">BUGLE</p>
          </div>
        </div>
        <ul>
          <li><a href="#top">HOME</a></li>
          <li><a href="#">DAILY FORECAST</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav> 
    </>
  )
}