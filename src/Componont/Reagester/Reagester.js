import React from "react";
import "./Reagester.css";
const Reagester = () => {
  return (
    <div>
      <div className="container-from mt-5">
        <h2 className="text-white pt-3 mb-3">Reagster Now</h2>
        <div>
          <input type="text" placeholder=" Your Frist name" />
          <input type="text" placeholder=" Your Last Name" />
          <input type="password" placeholder="Type password" />
          <input type="text" placeholder=" Type confrom password" />
          <br />
          <button className="Login-btn">Loog In</button>
        </div>
      </div>
    </div>
  );
};

export default Reagester;
