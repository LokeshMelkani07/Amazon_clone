import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./Login.css";
import { useState } from "react";
import { db, auth } from "./firebase";
import loginimage from "./images/loginimage.jpg";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    // Firebase Login Here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
      })
      .catch((err) => alert(err.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Created User Successfully using email and password
        console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
    // Some Firebase Registration
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={loginimage} alt="Amazon_logo" />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="Password"
            autoComplete="false"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Clone{" "}
          <span style={{ color: "#0066c0", cursor: "pointer" }}>
            Conditions of Use
          </span>{" "}
          and{" "}
          <span style={{ color: "#0066c0", cursor: "pointer" }}>
            Privacy Notice
          </span>
          .
        </p>
        <h6>
          <span> New to Amazon ?</span>
        </h6>
        <button onClick={register} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
