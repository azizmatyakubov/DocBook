import React, { useEffect } from "react";
import LoginForm from "../components/Auth/LoginForm";

import "../styles/Login.css";



const Login = () => {

  return (
    
    <div className="w-100 d-flex align-items-center justify-content-center">
      <div className="login-cover"></div>
      <LoginForm />
    </div>
  );
};

export default Login;
