import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";

const navlink = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/users",
    display: "Users",
  },
  {
    path: "/add-users",
    display: "Add Users",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-[8vh] md:h-[9vh] lg:h-[10vh] 2xl:h-[11vh] px-5 md:px-12.5 lg:px-25 2xl:px-35 bg-gray-100 sticky top-0 left-0 z-50">
      <Link to={"/"}>
        <img className="h-10 md:h-11 lg:h-13 2xl:h-15" src={logo} alt="logo" />
      </Link>
      <ul className="flex items-center gap-5">
        {navlink?.map((nav, index) => (
          <li key={index}>
            <NavLink to={nav?.path}>{nav?.display}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
