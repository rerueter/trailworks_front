import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import Routes from "../config/routes";
import { Link } from "react-router-dom";
import axios from "axios";
import { Segment, Button, Icon, Header } from "semantic-ui-react";

class App extends React.Component {
  state = { currentUser: localStorage.getItem("uid") };

  logout = () => {
    localStorage.removeItem("uid");
    axios
      .delete(`${process.env.REACT_APP_API}/auth/logout`, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        this.setState({ currentUser: null });
      })
      .catch(err => console.log(err.response));
  };

  setCurrentUser = userId => {
    this.setState({ currentUser: userId });
    localStorage.setItem("uid", userId);
  };

  render() {
    return (
      <>
        <Segment className="nav-temp">
          <Header as="h1">
            <Icon name="spoon" />
            <Header.Content>
              trailworks
              <Header.Subheader>Go Dig!</Header.Subheader>
            </Header.Content>
          </Header>
          <h1>
            <Link to={"/"}>home</Link>
          </h1>
          <h1>
            <Link to={"/login"}>login</Link>
          </h1>
          <h1>
            <Link to={"/register"}>register</Link>
          </h1>
          <h1>
            <Link to={"/newwork"}>new work</Link>
          </h1>
          <h1>
            <Link to={"/profile"}>profile</Link>
          </h1>
          <Button onClick={this.logout}>log out</Button>
        </Segment>

        <Routes setCurrentUser={this.setCurrentUser} />
      </>
    );
  }
}

export default withRouter(App);
