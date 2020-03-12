import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import Routes from "../config/routes";
import axios from "axios";
import NavBar from "./NavBar/NavBar";

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
        this.props.history.push("/");
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
        <NavBar logout={this.logout} currentUser={this.state.currentUser} />
        <Routes setCurrentUser={this.setCurrentUser} />
      </>
    );
  }
}

export default withRouter(App);
