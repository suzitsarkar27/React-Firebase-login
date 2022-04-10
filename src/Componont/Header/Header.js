import React from "react";
import { Link } from "react-router-dom";
import useFirebass from "../../useFirbase/useFirebass";
import "./Header.css";

const Header = () => {
  const { SingInWithGoogle, user, handelSingOut } = useFirebass({});
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
        <span className="ms-2 text-white p-2">
          {user?.displayName && user.displayName}
          <img className="header-img ms-2 me-2" src={user?.photoURL} alt="" />
        </span>
        {user?.uid ? (
          <button className=" text-white heder-loogOut" onClick={handelSingOut}>
            Out
          </button>
        ) : (
          <Link className="menu-bar" to={"/login"}>
            Login
          </Link>
        )}
        {/* <span>
          <img className="header-img ms-2 me-2" src={user.photoURL} alt="" />
          {user.email ? (
            <button
              className="bg-danger rounded text-white"
              onClick={handelSingOut}
            >
              Loog Out
            </button>
          ) : (
            <button onClick={SingInWithGoogle}>LogIn</button>
          )}
        </span> */}
      </div>
    </nav>
  );
};

export default Header;
