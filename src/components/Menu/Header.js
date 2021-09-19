import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
const menus = [
  {
    label: "Home",
    to: "/",
    exact: true,
  },
  {
    label: "About",
    to: "/about",
    exact: true,
  },
  {
    label: "Contact",
    to: "/contact",
    exact: true,
  },
  {
    label: "Products",
    to: "/products",
    exact: true,
  },
  {
    label: "Login",
    to: "/login",
    exact: true,
  },
];
const MenuLink = ({ label, to, activeOnlyExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyExact}
      children={(match) => {
        var active = match ? "active classDemo" : "";
        return (
          <li className={active}>
            <NavLink className="nav-link" to={to}>
              {label}
            </NavLink>
          </li>
        );
      }}
    />
  );
};

class Header extends Component {
  render() {
      
    return (
      // MENU CHÍNH
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavLink className="navbar-brand mt-2 mt-lg-0" to="#">
              <img
                src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                height={15}
                alt=""
                loading="lazy"
              />
            </NavLink>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {this.showMenu(menus)}
            </ul>
          </div>

          {/* MENU PHỤ */}

          <div className="d-flex align-items-center">
            <NavLink className="text-reset me-3" to="#">
              <i className="fas fa-shopping-cart" />
            </NavLink>

            <NavLink
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bell" />
              <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </NavLink>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <NavLink className="dropdown-item" to="#">
                  Some news
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Another news
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Something else here
                </NavLink>
              </li>
            </ul>

            <NavLink
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                className="rounded-circle"
                height={25}
                alt=""
                loading="lazy"
              />
            </NavLink>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <NavLink className="dropdown-item" to="#">
                  My profile
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  showMenu = (menus) => {
    var results = null;
    if (menus.length > 0) {
      results = menus.map((menu, index) => {        
        return (
          <MenuLink
            key={index}
            label={menu.label}
            to={menu.to}
            activeOnlyExact={menu.exact}
          />
        );
      });
    }
    
    return results;
  };
}

export default Header;
