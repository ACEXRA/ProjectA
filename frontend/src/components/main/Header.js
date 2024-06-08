import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";

const Header = () => {
  const { setLogged, logged } = useContext(UserContext);
  return (
    <div className="header">
      <h4>
        <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
          Title
        </Link>
      </h4>
      <nav className="headerLinks">
        {logged && <Link to="/home">Home</Link>}
        {logged && <Link to="/profile">Profile</Link>}
        {logged && <span onClick={() => setLogged(false)}>Logout</span>}
      </nav>
    </div>
  );
};
export default Header;
