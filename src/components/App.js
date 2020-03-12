import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import Routes from "../config/routes";
import { Link } from "react-router-dom";
import axios from "axios";
import { Segment, Button } from "semantic-ui-react";

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
          <h1>trailworks</h1>
          <h1>
            <Link to={"/"}>Home</Link>
          </h1>
          <h1>
            <Link to={"/login"}>Login</Link>
          </h1>
          <h1>
            <Link to={"/register"}>Register</Link>
          </h1>
          <h1>
            <Link to={"/newwork"}>New Work</Link>
          </h1>
          <h1>
            <Link to={"/profile"}>Profile</Link>
          </h1>
          <Button onClick={this.logout}>Log Out</Button>
        </Segment>

        <Routes setCurrentUser={this.setCurrentUser} />
      </>
    );
  }
}

export default withRouter(App);
