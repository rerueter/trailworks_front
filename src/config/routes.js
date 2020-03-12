import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import Profile from "../components/Profile/Profile";
import NewWork from "../components/NewWork/NewWork";
import WorkDetail from "../components/WorkDetail/WorkDetail";

export default props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/profile" component={Profile} />
    <Route
      path="/login"
      render={() => {
        return <Login setCurrentUser={props.setCurrentUser} />;
      }}
    />
    <Route path="/newwork" component={NewWork} />
    <Route path="/works/:id" component={WorkDetail} />
  </Switch>
);
