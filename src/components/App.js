import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import Routes from "../config/routes";
import axios from "axios";

class App extends React.Component {
  state = { currentUser: localStorage.getItem("uid") };

  logout = () => {
    localStorage.removeItem("uid");
    axios
      .delete(`${process.env.REACT_APP_API_URL}/auth/logout`, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        this.setState({ currentUser: null });
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <>
        <button onClick={this.logout}>Log Out</button>
        <h1>trailworks</h1>

        <Routes />
      </>
    );
  }
}

export default withRouter(App);
