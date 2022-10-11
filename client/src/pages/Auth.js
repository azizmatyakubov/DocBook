import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";
import LoginForm from "../components/Auth/LoginForm";

import "../styles/Login.css";
import SignupForm from "../components/Auth/SignupForm";



const Auth = () => {
  const dispatch = useDispatch();
  const params = useParams()


  useEffect(() => {
    dispatch(logoutUser());
  }, []);

  return (    
    <div className="w-100 d-flex align-items-center justify-content-center">
      <div className="login-cover"></div>
      <div className="login-sm-cover"></div>
      {
        // if param is /auth/login then show login form
        // if param is /auth/signup then show signup form
        // if param is /auth/forgot then show forgot password form

        // if param is /auth/verify then show verify email form
        // params.auth === "login" ? <LoginForm /> : null
        
        // how to get url params in react router
       
        window.location.pathname === "/login" ? <LoginForm /> : <SignupForm />        
        



      }
    </div>
  );
};

export default Auth;
