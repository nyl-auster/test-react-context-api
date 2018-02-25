import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/" activeClassName="selected">
        Accueil
      </NavLink>
      <NavLink to="/breaking-news" activeClassName="selected">
        {" "}
        Breaking news
      </NavLink>
    </div>
  );
};

export default Navigation;
