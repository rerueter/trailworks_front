import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Button, Header } from "semantic-ui-react";

const NavBar = props => {
  const toProfile = () => {
    props.history.push("/profile");
  };
  const toNewWork = () => {
    props.history.push("/newwork");
  };
  const toRegister = () => {
    props.history.push("/register");
  };
  const toLogin = () => {
    props.history.push("/login");
  };
  const toHome = () => {
    props.history.push("/");
  };
  return (
    <section id="nav">
      <Header id="brand" onClick={toHome} as="h1">
        <Header.Content id="sub-brand">
          trailworks
          <Header.Subheader>Go Dig!</Header.Subheader>
        </Header.Content>
      </Header>
      {props.currentUser ? (
        <Button.Group>
          <Button onClick={toNewWork}>create trailwork</Button>
          <Button onClick={toProfile}>profile</Button>
          <Button onClick={props.logout}>log out</Button>
        </Button.Group>
      ) : (
        <Button.Group>
          <Button onClick={toRegister}>sign up</Button>
          <Button onClick={toLogin}>log in</Button>
        </Button.Group>
      )}
    </section>
  );
};

export default withRouter(NavBar);
