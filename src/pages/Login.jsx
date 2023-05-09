import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { Container, Form, Button } from "react-bootstrap";
import Loader from "../components/Loader";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, user } = userLogin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(login(email, password));
  };

  const validateForm = () => {
    if (!email || !password) {
      return false;
    }
    return true;
  };

  return (
    <Container className="signin-container">
      <Container>
        <h3>Sign In</h3>
        <h6>to continue to the application</h6>
        {loading && <Loader />}
        <Container className="form-container">
          <Form className="form-card" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username/Email address</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
            <Form.Text>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </Form.Text>
            <br />
            <Form.Text className="error-message">{error}</Form.Text>
          </Form>
        </Container>
      </Container>
    </Container>
  );
};

export default Login;
