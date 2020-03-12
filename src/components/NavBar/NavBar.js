import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Segment, Button, Icon, Header } from "semantic-ui-react";

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
  return (
    <section className="nav-temp">
      <Header as="h1">
        <Icon name="spoon" />
        <Header.Content id="brand">
          trailworks
          <Header.Subheader>Go Dig!</Header.Subheader>
        </Header.Content>
      </Header>
      <h1>
        <Link to={"/"}>trailwork</Link>
      </h1>

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
