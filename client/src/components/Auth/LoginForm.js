
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

import { loginUser } from "../../features/user/userAction";
import Error from "../Alert/Error";
import { Form, Button ,Spinner } from "react-bootstrap";

const LoginForm = () => {
    const { loading, success, role, error }= useSelector(state => state.user)
 
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { register, handleSubmit} = useForm();
    
    const submitForm = (data) => {
      dispatch(loginUser(data))
      if(success) navigate(`/dashboard`)
    }
   

  return (
    <Form className="m-auto" onSubmit={handleSubmit(submitForm)}>
    <h2>Login</h2>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    {error && <Error text={error.message} />}
      <Form.Label>Email address </Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        {...register("email", { required: true })}
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
        {...register("password", { required: true })}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Remember me" />
    </Form.Group>
    <Button variant="primary" type="submit" >
      Submit
    </Button>
  </Form>  
  )
}

export default LoginForm