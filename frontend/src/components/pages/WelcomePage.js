import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";

const WelcomePage = () => {
  const { logged } = useContext(UserContext);
  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate(e);
  };
  return (
    <div className="page">
      <h4>Welcome Page</h4>
      {logged ? (
        <div>You are currently logged in</div>
      ) : (
        <div>
          <button className="cust_btn" onClick={() => clickHandler("signIn")}>
            Sign In
          </button>
          <button className="cust_btn" onClick={() => clickHandler("signUp")}>
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
