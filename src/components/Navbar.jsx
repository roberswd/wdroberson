import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinks from "./NavLinks";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const { isMobile } = props;

  const navBar = isMobile ? (
    <MenuIcon onClick={handleOnClick}>
      <NavLinks />
    </MenuIcon>
  ) : (
    <NavLinks />
  );
  return (
    <div className="nav_bar">
      <div className="nav_items">
        <h1>WDR</h1>
        {navBar}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isMobile: PropTypes.bool,
};

export default Navbar;
