import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import Loader from "../components/Loader";
import { Container, Form, Button, Col, Row } from "react-bootstrap";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, user } = userRegister;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
    dispatch(register(firstName, lastName, email, password));
  };

  const validateForm = () => {
    if (!firstName || !lastName || !email || !password) {
      setError("All fields are required");
      return false;
    }
    return true;
  };

  return (
    <Container className="signup-container">
      <Container>
        <h3>Create your Account</h3>
        <h6>to continue to the application</h6>
        {loading && <Loader />}
        <Container className="form-container">
          <Form className="form-card" onSubmit={handleSubmit}>
            <Row md={2}>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
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
              Already have an account? <Link to="/sign-in">Sign In</Link>
            </Form.Text>
            <br />
            <Form.Text className="error-message">{error}</Form.Text>
          </Form>
        </Container>
      </Container>
    </Container>
  );
};

export default Register;
