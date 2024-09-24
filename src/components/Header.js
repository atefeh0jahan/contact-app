import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header__nav container-header">
          <div className="nav__logo-name">
            <h2>Contacts App with Atyyy</h2>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
