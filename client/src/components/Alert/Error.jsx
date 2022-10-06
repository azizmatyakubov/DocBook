import { Alert } from "react-bootstrap";

const Error = ({ text }) => {
  return <Alert variant="danger">{text}</Alert>;
};

export default Error;
