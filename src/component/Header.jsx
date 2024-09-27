import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  const { basket } = useContext(BasketContext);
  const total = basket.reduce((total, item) => total + item.amount, 0);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fs-2" to="/">
          Context Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Context Store
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-2 fs-6">
              <li
                className="nav-item bg-light rounded text-center p-2"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <NavLink className="text-black" to="/">
                  Anasayfa
                </NavLink>
              </li>
              <li
                className="nav-item bg-light rounded text-center p-2"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <NavLink className="text-black" to="/basket">
                  Sepet
                  <CiShoppingCart style={{ width: "25px", height: "25px" }} />
                  <span className="badge bg-danger">{total}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
