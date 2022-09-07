import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/doctor/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        dispatch(saveUser(data.id));
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    
    <div className="login-wrapper">
      <div className="login-image"></div>
      <Form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
