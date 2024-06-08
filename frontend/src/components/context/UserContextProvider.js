import React, { useState } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  return (
    <UserContext.Provider
      value={{ logged, setLogged, currentUser, setCurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
