import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Trouve ton artisan !" height="65" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menuPrincipal">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Accueil
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/artisans?categorie=1">
                  Alimentation
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/artisans?categorie=2">
                  Bâtiment
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/artisans?categorie=3">
                  Fabrication
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/artisans?categorie=4">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
