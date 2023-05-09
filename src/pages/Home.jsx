import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/authActions";
import { getAppMessage } from "../actions/appActions";
import { Container, Button } from "react-bootstrap";
import Loader from "../components/Loader";

const Home = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const { loading, user } = auth;

  const app = useSelector((state) => state.app);
  const { loading: msgLoading, message } = app;

  if (loading || msgLoading) return <Loader />;

  const handleSignOut = async () => {
    dispatch(logout());
  };

  const handleMessage = async () => {
    dispatch(getAppMessage());
  };

  return (
    <Container className="mt-5">
      <h1>
        Hello! {user.user.firstName} {user.user.lastName}
      </h1>
      <hr />
      <p>Email Address: {user.user.email}</p>
      {message && <p>{message}</p>}
      <Button variant="secondary" onClick={handleMessage}>
        Get Daily Message
      </Button>
      <Button variant="danger" onClick={handleSignOut}>
        Sign Out
      </Button>
    </Container>
  );
};

export default Home;
