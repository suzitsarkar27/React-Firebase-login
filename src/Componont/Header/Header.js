import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="bg-success d-flex justify-content-between align-items-center p-3">
      <div>
        <h2 className="text-white">LOGO Titel</h2>
      </div>
      <div className="">
        <Link className="menu-bar" to={"/home"}>
          Home
        </Link>
        <Link className="menu-bar" to={"/order"}>
          Order
        </Link>
        <Link className="menu-bar" to={"/Product"}>
          Product
        </Link>
        <Link className="menu-bar" to={"/reagster"}>
          Reagster
        </Link>
        <Link className="menu-bar" to={"/login"}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Header;
