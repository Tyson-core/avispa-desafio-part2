import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

export const Navbar = () => {

  const {products} = useSelector(state => state.cart)
  console.log();

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img src="/shop_icon.png" width="40" height="40" alt="" loading="lazy"/>
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <NavLink className="nav-link" to="/" activeClassName="active" exact>
              Tiendas
            </NavLink>
          </li>
        </ul>
      </div>
      <Link className="m-2" to="/cart">
      <span className="fa-layers fa-fw " >
        <i className="fas fa-shopping-cart fa-3x cart-shop" />
        {
          products.length !== 0&&(
            <span className="fa-layers-counter number-cart m-1">
            {products.length}
          </span>
          )
        }

      </span>
    </Link>
    </nav>
  );
};
