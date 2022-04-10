import React from "react";
import useFirebass from "../../useFirbase/useFirebass";
import "./Login.css";
const Login = () => {
  const { SingInWithGoogle, handelSingOut } = useFirebass({});
  return (
    <div>
      <div className="container-from mt-5">
        <h2 className="text-white pt-3 mb-3">Login From</h2>
        <div>
          <input type="text" placeholder=" Your Frist name" />
          <input type="text" placeholder=" Your Last Name" />
          <br />
          <button onClick={SingInWithGoogle} className="Login-btn">
            Loog In
          </button>
          <br />
          <a href="#" className="text-white">
            Creact New Accound
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
