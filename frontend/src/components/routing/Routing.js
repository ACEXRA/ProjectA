import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import SignInPage from "../pages/SignInPage";
import ProfilePage from "../pages/ProfilePage";
import { UserContext } from "../context/UserContextProvider";
import UserProfilePage from "../pages/UserProfilePage";

const Routing = () => {
  const { logged } = useContext(UserContext);
  return (
    <div>
      <Routes>
        <Route path="" element={<WelcomePage />} />
        <Route path="signUp" element={<SignupPage />} />
        <Route path="signIn" element={<SignInPage />} />\
        {logged && <Route path="home" element={<HomePage />} />}
        {logged && (
          <Route path="profile" element={<ProfilePage />}>
            <Route path=":id" element={<UserProfilePage />} />
          </Route>
        )}
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </div>
  );
};

export default Routing;
