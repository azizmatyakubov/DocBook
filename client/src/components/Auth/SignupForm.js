
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

import { loginUser } from "../../features/user/userAction";
import Error from "../Alert/Error";
import { Form, Button} from "react-bootstrap";

const SignupForm = () => {
    const { loading, success, role, error } = useSelector(state => state.user)
 
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { register, handleSubmit} = useForm();
    
    const submitForm = (data) => {
        dispatch(loginUser(data))

        if (success && role === 'doctor') {
            navigate('/dashboard')
        } else if (success && role === 'patient') {
            navigate('/patient/dashboard')
        }
    }

  return (
    <Form className="loginForm" onSubmit={handleSubmit(submitForm)}>
    <h2>Login</h2>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
    </Form.Group>

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
      Sign up
    </Button>
    <p className="mt-2">
        Already have an account? <Link to="/login">Login</Link>
    </p>
  </Form>  
  )
}

export default SignupForm