import React from "react";
import NavLinks from "./NavLinks";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const { isMobile } = props;

  return (
    <div className="nav_bar">
      <div className="nav_items">
        <h1>WDR</h1>
        {isMobile ? <p className="navitem">A Menu thing</p> : <NavLinks />}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isMobile: PropTypes.bool,
};

export default Navbar;
