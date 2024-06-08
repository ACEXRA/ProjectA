import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../models/Error";
import { DataContext } from "../context/DataContextProvider";
import { UserContext } from "../context/UserContextProvider";

const SignInPage = () => {
  const navigate = useNavigate();
  const { data } = useContext(DataContext);
  const { setLogged, setCurrentUser, logged, currentUser } =
    useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const validationManager = (user) => {
    const userCheck = data.filter((obj) => obj.email === user.email)[0];
    if (userCheck.password === user.password) {
      setCurrentUser(userCheck);
      setLogged(true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      setError(true);
      setErrMessage("PLease enter email and password");
      return;
    }
    const obj = {
      email: email,
      password: password,
    };
    validationManager(obj);
    setEmail("");
    setPassword("");
    setError(false);
    navigate("/home");
  };

  return (
    <div className="page">
      <form onSubmit={submitHandler} className="form">
        <h4>SIGN IN PAGE</h4>
        <div className="form_grp">
          <label>Email : </label>
          <input
            type="email"
            placeholder="email"
            className="form_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form_grp">
          <label>Password : </label>
          <input
            type="password"
            placeholder="password"
            className="form_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          Don't have an account click <Link to="/signUp">here</Link>
        </div>
        {error && <Error message={errMessage} />}
        <button
          type="submit"
          className="cust_btn"
          style={{ width: "5rem", float: "right" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
