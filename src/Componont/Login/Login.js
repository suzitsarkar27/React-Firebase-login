import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <div className="container-from mt-5">
        <h2 className="text-white pt-3 mb-3">Login From</h2>
        <form action="">
          <input type="text" placeholder=" Your Frist name" />
          <input type="text" placeholder=" Your Last Name" />
          <br />
          <button className="Login-btn">Loog In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
