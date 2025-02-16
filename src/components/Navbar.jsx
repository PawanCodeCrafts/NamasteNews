import React from "react";
import "../css/Style.css";
export class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav
          id="navbar_color"
          className="navbar navbar-expand-lg navbar-dark bg"
        >
          <div className="container-fluid">
            <a id="navbar_logo" className="navbar-brand" href="/">
              NamasteNews
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    id="navbar_links"
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
