import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../models/Error";
import { DataContext } from "../context/DataContextProvider";
import { UserContext } from "../context/UserContextProvider";

const SignupPage = () => {
  const { setData, data } = useContext(DataContext);
  const { setLogged } = useContext(UserContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const ValidationHandler = (user) => {
    setData([...data, user]);
    setLogged(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      setError(true);
      setErrMessage("PLease enter value in the fields");
      return;
    }
    const obj = {
      name: name,
      email: email,
      password: password,
    };
    ValidationHandler(obj);
    setName("");
    setEmail("");
    setPassword("");
    setError(false);
    navigate("/home");
  };
  return (
    <div className="page">
      <form onSubmit={submitHandler} className="form">
        <h4>SIGN UP PAGE</h4>
        <div className="form_grp">
          <label>Name : </label>
          <input
            type="text"
            placeholder="Name"
            className="form_input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          Already have an account click <Link to="/signIn">here</Link>
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

export default SignupPage;
