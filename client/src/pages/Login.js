import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import LoginForm from "../components/Auth/LoginForm";

import "../styles/Login.css";



const Login = () => {

/* Clear redux state */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutUser());
  }, []);

  return (    
    <div className="w-100 d-flex align-items-center justify-content-center">
      <div className="login-cover"></div>
      <div className="login-sm-cover"></div>
      <LoginForm />
    </div>
  );
};

export default Login;
