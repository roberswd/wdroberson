import React from "react";
import NavLinks from "./NavLinks";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

  return (
    <div className="nav_bar">
      <h1>WDR</h1>
      {isMobile ? "A Menu Thing" : <NavLinks />}
    </div>
  );
};

export default Navbar;
