import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { Container, Button } from "react-bootstrap";
import Loader from "../components/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, user } = userLogin;

  if (loading) return <Loader />;

  const handleSignOut = async () => {
    dispatch(logout());
  };

  return (
    <Container className="mt-5">
      <h1>
        Hello! {user.user.firstName} {user.user.lastName}
      </h1>
      <hr />
      <p>Email Address: {user.user.email}</p>
      <Button variant="secondary" onClick={handleSignOut}>
        Sign Out
      </Button>
    </Container>
  );
};

export default Home;
